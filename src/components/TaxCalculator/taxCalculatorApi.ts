import { http } from '@/utils/http'
import { TaxBracket } from './taxCalculatorTypes';
import { queryClient } from '@/utils/reactQuery';
import { sprintf } from 'sprintf-js';

interface TaxBracketsResponse {
  tax_brackets: TaxBracket[];
}

/**
 * I like to define API routes in respective file instead of central api routes file.
 * This makes code navigation and refactoring easy
 */
const API = {
  TAX_RATES: 'tax-calculator/tax-year/%(assessmentYear)s',
}

export const fetchTaxRates = (assessmentYear: number) => {
  return queryClient.fetchQuery<TaxBracket[]>(['taxBrackets', assessmentYear], async () => {
    const response = await http.get<TaxBracketsResponse>(sprintf(API.TAX_RATES, { assessmentYear }));
    return response.data.tax_brackets;
  });
};
