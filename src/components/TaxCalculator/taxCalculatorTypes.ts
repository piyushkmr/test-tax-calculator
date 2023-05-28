/**
 * Only common types will go here.
 * Single use types will be defined in respective files.
 * In short, if types are exported (or reused here) they, should be here,
 * if they aren't exported they should be defined in respective files.
 */
export interface TaxBracket {
  min: number;
  max?: number;
  rate: number;
}

export interface TaxInBand extends TaxBracket {
  tax: number;
}
