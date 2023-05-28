import { round } from '@/utils/numbers';
import { TaxInBand } from './taxCalculatorTypes';
import { fetchTaxRates } from './taxCalculatorApi';

export const getCalculatedTax = async (annualIncome: number, assessmentYear: number) => {
  let totalTax = 0;
  const taxRates = await fetchTaxRates(assessmentYear);
  const taxBands: TaxInBand[] = [];
  let remainingIncome = annualIncome;

  for (const taxRate of taxRates) {
    if (annualIncome < taxRate.min) {
      break;
    }

    const taxBandMax = Math.min(remainingIncome, taxRate.max || Infinity);
    const taxBandMin = taxRate.min;
    const taxableIncomeInBand = taxBandMax - taxBandMin;

    const tax = taxRate.rate * taxableIncomeInBand;

    totalTax += tax;
    taxBands.push({...taxRate, tax: round(tax, 2)});
  }

  return {
    totalTax: round(totalTax, 2),
    taxBands
  }
}

export const validateAnnualIncome = (annualIncome: number) => {
  if (annualIncome <= 0) {
    return 'Annual income must be greater than 0';
  }
}
