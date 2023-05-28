import { fetchTaxRates } from "./taxCalculatorApi";

/**
 * I'll have to find better way to orgaize api testing
 */
describe('API', () => {
  describe('fetchTaxRates', () => {
    it('should fetch tax rates', async () => {
      const taxRates = await fetchTaxRates(2022);
      expect(taxRates.length).toBeGreaterThan(0);
      expect(taxRates[0]).toHaveProperty('rate');
      expect(taxRates[0]).toHaveProperty('min');
      expect(taxRates[0]).toHaveProperty('max');
    });
  });
});
