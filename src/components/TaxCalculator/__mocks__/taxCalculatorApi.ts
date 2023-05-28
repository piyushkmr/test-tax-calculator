import { TaxBracket } from '../taxCalculatorTypes';

export const TAX_BRACKETS: TaxBracket[] = [
  {
    max: 50197,
    min: 0,
    rate: 0.15
  },
  {
    max: 100392,
    min: 50197,
    rate: 0.205
  },
  {
    max: 155625,
    min: 100392,
    rate: 0.26
  },
  {
    max: 221708,
    min: 155625,
    rate: 0.29
  },
  {
    min: 221708,
    rate: 0.33
  }
];

export const fetchTaxRates = () => {
  return new Promise<TaxBracket[]>((resolve) => resolve(TAX_BRACKETS));
}
