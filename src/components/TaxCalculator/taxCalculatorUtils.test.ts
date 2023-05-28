import { getCalculatedTax } from './taxCalculatorUtils';

/**
 * Mock for taxCalculatorApi is already defined in __mocks__
 */
jest.mock('./taxCalculatorApi');

describe('taxCalculatorUtils', () => {
  describe('getCalculatedTax', () => {
    it('should calculate tax correctly', async () => {
      expect((await getCalculatedTax(50000, 2022)).totalTax).toBe(7500);
      expect((await getCalculatedTax(0, 2022)).totalTax).toBe(0);
      expect((await getCalculatedTax(-10000, 2022)).totalTax).toBe(0);
      expect((await getCalculatedTax(100000, 2022)).totalTax).toBe(17739.17);
      expect((await getCalculatedTax(1234567, 2022)).totalTax).toBe(385587.65);
    });
  });
});
