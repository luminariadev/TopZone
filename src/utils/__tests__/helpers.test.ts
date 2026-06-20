import { describe, it, expect } from 'vitest';
import { slugify, truncate, generateOrderId, hashEmail, getStarArray } from '../helpers';

describe('slugify', () => {
  it('should convert text to URL-friendly slug', () => {
    expect(slugify('Mobile Legends Game')).toBe('mobile-legends-game');
    expect(slugify('Free Fire')).toBe('free-fire');
    expect(slugify('Mechanical Keyboard')).toBe('mechanical-keyboard');
  });

  it('should handle special characters', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
    expect(slugify('Top-Zone Store')).toBe('top-zone-store');
    expect(slugify('  Extra   Spaces  ')).toBe('extra-spaces');
  });
});

describe('truncate', () => {
  it('should truncate long text with suffix', () => {
    expect(truncate('Hello World', 5)).toBe('He...');
    expect(truncate('Short', 100)).toBe('Short');
    expect(truncate('Test', 2, '!')).toBe('T!');
  });
});

describe('generateOrderId', () => {
  it('should generate order ID with prefix', () => {
    const id = generateOrderId('ORD');
    expect(id).toMatch(/^ORD-\d{8}-[A-Z0-9]{6}$/);
  });

  it('should use default prefix', () => {
    const id = generateOrderId();
    expect(id).toMatch(/^ORD-\d{8}-[A-Z0-9]{6}$/);
  });
});

describe('hashEmail', () => {
  it('should hash email to safe identifier', () => {
    expect(hashEmail('user@example.com')).toBe('user_example_com');
    expect(hashEmail('Test@Email.ORG')).toBe('test_email_org');
  });
});

describe('getStarArray', () => {
  it('should return correct star array', () => {
    expect(getStarArray(3)).toEqual(['full', 'full', 'full', 'empty', 'empty']);
    expect(getStarArray(0)).toEqual(['empty', 'empty', 'empty', 'empty', 'empty']);
    expect(getStarArray(5)).toEqual(['full', 'full', 'full', 'full', 'full']);
  });
});
