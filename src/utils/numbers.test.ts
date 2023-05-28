import {formatCurrency, round} from './numbers';
describe('utils/numbers', () => {
  describe('round', () => {
    it('should round correctly', () => {
      expect(round(5.12345)).toBe(5.12);
      expect(round(5.12345, 1)).toBe(5.1);
      expect(round(5.12345, 4)).toBe(5.1235);
      expect(round(5.1235, 3)).toBe(5.124);
    });
  });

  describe('formatCurrency', () => {
    it('should format correctly', () => {
      expect(formatCurrency(5.12345, 0)).toBe('$5');
      expect(formatCurrency(5.12345, 1)).toBe('$5.1');
      expect(formatCurrency()).toBe('');
      expect(formatCurrency(0)).toBe('$0');
    });
  })
});
