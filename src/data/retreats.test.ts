import { describe, expect, test } from 'bun:test';
import { getRetreatBySlug } from './retreats';

describe('US retreat previews', () => {
  test('Indianápolis remains a coming-soon preview', () => {
    expect(getRetreatBySlug('casa-indianapolis')?.comingSoon).toBe(true);
  });

  test('Internacional remains a coming-soon preview', () => {
    expect(getRetreatBySlug('casa-internacional')?.comingSoon).toBe(true);
  });
});