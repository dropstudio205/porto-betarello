// Baixa as imagens/vídeos do CDN do Lovable para dentro do projeto.
// Uso (na raiz do projeto, Node 18+):
//   node baixar-assets.mjs https://SEU-SITE.lovable.app
import { readdir, readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";

const base = (process.argv[2] || "").replace(/\/+$/, "");
if (!/^https?:\/\//.test(base)) {
  console.error("Informe o endereço do site no Lovable. Ex.: node baixar-assets.mjs https://porto-betarello.lovable.app");
  process.exit(1);
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith(".asset.json")) out.push(p);
  }
  return out;
}
const exists = (p) => access(p).then(() => true, () => false);

const pointers = await walk("src/assets");
console.log(`Encontrei ${pointers.length} arquivos para baixar de ${base}\n`);
const used = new Set();
let ok = 0, falhas = [];

for (const file of pointers) {
  const meta = JSON.parse(await readFile(file, "utf8"));
  if (!meta.url) continue;
  const alreadyLocal = !meta.url.startsWith("/__l5e/");
  const name = meta.original_filename || path.basename(meta.url);
  const isVideo = /\.(mp4|webm|mov)$/i.test(name);
  const folder = isVideo ? "public/videos" : "public/images";
  let target = name;
  if (used.has(target)) target = `${meta.asset_id.slice(0, 8)}-${name}`;
  used.add(target);
  const dest = path.join(folder, target);
  const publicUrl = `/${isVideo ? "videos" : "images"}/${target}`;

  if (alreadyLocal && (await exists(path.join("public", meta.url)))) { ok++; continue; }
  try {
    if (!(await exists(dest))) {
      console.log("baixando", name, "...");
      const res = await fetch(base + meta.url, { signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await mkdir(folder, { recursive: true });
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    }
    meta.url = publicUrl;
    await writeFile(file, JSON.stringify(meta, null, 2) + "\n");
    ok++;
    console.log("ok  ", publicUrl);
  } catch (e) {
    falhas.push(`${file} -> ${e.message}`);
    console.log("FALHA", name, e.message);
  }
}
console.log(`\n${ok} de ${pointers.length} prontos.`);
if (falhas.length) { console.log("Falharam:\n" + falhas.join("\n")); process.exit(2); }