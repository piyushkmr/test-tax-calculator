import { render, screen } from "@/utils/testing-library";
import { TaxCalculator } from "./TaxCalculator";

describe('TaxCalculator', () => {
  it('should render successfully', () => {
    render(<TaxCalculator />);
    expect(screen.getByText('Tax Calculator')).toBeInTheDocument();
    expect(screen.getByLabelText('Assessment Year')).toBeInTheDocument();
    expect(screen.getByLabelText('Annual Income')).toBeInTheDocument();
  });
})
