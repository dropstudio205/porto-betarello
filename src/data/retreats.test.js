import { describe, expect, test } from 'bun:test';
import { getRetreatBySlug } from './retreats';

describe('Confirmed Amparo map addresses', () => {
  test('Casa do Interior points to Rua Dr. Osvaldo Cruz, 482 in Centro, Amparo/SP', () => {
    expect(getRetreatBySlug('casa-do-interior')?.mapQuery).toBe('Rua Dr. Osvaldo Cruz, 482, Centro, Amparo, SP, Brasil');
  });
  test('Casa da Lira points to Rua Washington Luis, 193 in Centro, Amparo/SP', () => {
    expect(getRetreatBySlug('casa-da-lira')?.mapQuery).toBe('Rua Washington Luis, 193, Centro, Amparo, SP, Brasil');
  });
  test('Flor da Montanha points to Rua Benjamin Constant, 245 in Centro, Amparo/SP', () => {
    expect(getRetreatBySlug('flor-da-montanha')?.mapQuery).toBe('Rua Benjamin Constant, 245, Centro, Amparo, SP, Brasil');
  });
});

describe('US retreat previews', () => {
  test('Indianápolis has confirmed details and ten uploaded photos', () => {
    const retreat = getRetreatBySlug('casa-indianapolis');
    expect(retreat?.comingSoon).not.toBe(true);
    expect(retreat?.images).toHaveLength(10);
    expect(retreat?.rooms).toBe(2);
  });

  test('Indianápolis uses Furnished Finder, not Airbnb', () => {
    const retreat = getRetreatBySlug('casa-indianapolis');
    expect(retreat?.furnishedFinderUrl).toBe('https://www.furnishedfinder.com/property/874692_1?moveDate=%7B%22in%22%3A%222026-12-20%22%7D');
    expect(retreat?.airbnbUrl).toBeUndefined();
  });

  test('Indianápolis directs contact to the supplied US WhatsApp', () => {
    expect(getRetreatBySlug('casa-indianapolis')?.contactPhone).toBe('12163370184');
  });

  test('Internacional remains a coming-soon preview', () => {
    expect(getRetreatBySlug('casa-internacional')?.comingSoon).toBe(true);
  });
});