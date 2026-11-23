import { describe, it, expect } from 'vitest';
import { sum, multiply } from './math.js';

describe('Math functions', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
