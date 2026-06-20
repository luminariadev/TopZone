import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate, formatDateTime, formatRelativeTime } from '../format';

describe('formatCurrency', () => {
  it('should format IDR amount', () => {
    const result = formatCurrency(15000);
    expect(result).toContain('Rp');
    expect(result).toContain('15.000');
    expect(formatCurrency(1000000)).toContain('1.000.000');
    expect(formatCurrency(0)).toContain('Rp');
  });

  it('should format foreign currency', () => {
    expect(formatCurrency(100, 'USD')).toContain('100');
    expect(formatCurrency(50, 'EUR')).toContain('50');
  });
});

describe('formatDate', () => {
  it('should format date in Indonesian locale', () => {
    const date = new Date('2024-01-20T10:30:00');
    const result = formatDate(date);
    expect(result).toContain('Januari');
    expect(result).toContain('2024');
  });
});

describe('formatDateTime', () => {
  it('should format date and time', () => {
    const date = new Date('2024-01-20T10:30:00');
    const result = formatDateTime(date);
    expect(result).toContain('10.30');
  });
});

describe('formatRelativeTime', () => {
  it('should return correct relative time', () => {
    const now = new Date();
    expect(formatRelativeTime(new Date(now.getTime() - 30000))).toBe('baru saja');
    expect(formatRelativeTime(new Date(now.getTime() - 60 * 60 * 1000))).toContain('jam');
    expect(formatRelativeTime(new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000))).toContain('hari');
  });
});
