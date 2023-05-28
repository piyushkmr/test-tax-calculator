import { render, screen } from "@/utils/testing-library";
import { TaxCalculatorTable } from "./TaxCalculatorTable";

describe('TaxCalculatorTable', () => {
  it('should render total tax, header, range, rate and band tax successfully', () => {
    render(<TaxCalculatorTable
      annualIncome={1000000}
      taxBands={[{ min: 1000, max: 50000, rate: 0.10, tax: 5000 }]}
      totalTax={100000}
    />);
    // Testing all elements in sigle `it` to prevent multiuple re-render for testing just one element.
    expect(screen.getByText('Total Tax (for $1,000,000)')).toBeInTheDocument();
    // Total Tax in header and table footer
    expect(screen.getAllByText('$100,000')).toHaveLength(2);
    // Tax band range
    expect(screen.getByText('$1,000 - $50,000')).toBeInTheDocument();
    // Tax band rate
    expect(screen.getByText('10.0%')).toBeInTheDocument();
    // Tax band tax
    expect(screen.getByText('$5,000')).toBeInTheDocument();
  });

  it('should render all tax bands', () => {
    const TAX_BANDS = [{ min: 1000, max: 50000, rate: 0.10, tax: 5000 }, { min: 50000, max: 100000, rate: 0.10, tax: 5000 }];
    const { container } = render(<TaxCalculatorTable
      annualIncome={1000000}
      taxBands={TAX_BANDS}
      totalTax={100000}
    />);

    const expedtedTableRows = TAX_BANDS.length + 1;
    expect(container.querySelectorAll('table tr')).toHaveLength(expedtedTableRows);
  });
})
