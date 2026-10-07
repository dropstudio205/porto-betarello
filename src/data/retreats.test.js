import { describe, expect, test } from 'bun:test';
import { getRetreatBySlug } from './retreats';

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