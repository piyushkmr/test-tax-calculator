import { FunctionComponent } from "react";
import styles from './taxCalculatorTable.module.scss';
import { formatCurrency } from "@/utils/numbers";
import { TaxInBand } from "../taxCalculatorTypes";

interface TaxCalculatorTableProps {
  totalTax: number;
  taxBands: TaxInBand[];
  annualIncome: number;
}
export const TaxCalculatorTable: FunctionComponent<TaxCalculatorTableProps> = (props) => {
  return props.taxBands ? <div className={styles.taxCalculationContainer}>
    <div className={styles.taxCalculationSummary}>
      <div className={styles.taxCalculationSummaryTitle}>
        Total Tax (for {formatCurrency(props.annualIncome)})
      </div>
      <div className={styles.taxCalculationSummaryValue}>
        {formatCurrency(props.totalTax)}
      </div>
    </div>
    <table className={styles.taxCalculationTable}>
      <tbody>
        {props.taxBands.map((taxRate) => (
          <tr key={taxRate.min}>
            <td>
              <div>
                {formatCurrency(taxRate.min || 0)} - {taxRate.max ? formatCurrency(taxRate.max) : 'any'}
              </div>
              <div className="text-hint text-small">{`${(taxRate.rate * 100).toFixed(1)}%`}</div>
            </td>
            <td className={styles.taxNumber}>
              {formatCurrency(taxRate.tax)}
            </td>
          </tr>
        ))}
        <tr className={styles.tableFooter}>
          <td>Total</td>
          <td className={styles.taxNumber}>
            {formatCurrency(props.totalTax)}
          </td>
        </tr>
      </tbody>
    </table>
  </div> : null;
}
