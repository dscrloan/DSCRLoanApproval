import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";

export function ApprovalFactors() {
  return (
    <section id="approval-factors" className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">The 5 Factors DSCR Lenders Weigh Most for Approval</h2>
        <div className="grid gap-6 md:gap-8">
          
          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Debt Service Coverage Ratio (DSCR)</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                DSCR measures your investment property's monthly rental income against its total monthly debt service (principal, interest, taxes, insurance, and association fees). Calculate your debt service coverage ratio by dividing gross rental income by PITIA payments.
              </p>
              <p>
                For example, a rental property generating $2,500 monthly rent with $2,000 PITIA has a 1.25 DSCR. Most DSCR lenders prefer ratios above 1.0, with many requiring 1.20 or higher for optimal loan terms and DSCR approval.
              </p>
              <Alert>
                <AlertDescription>
                  <strong>Pro tip:</strong> Short-term rental properties often require higher DSCR minimums (1.30+) due to income volatility, while long-term rentals may qualify with lower ratios.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>LTV & Down Payment</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Loan-to-value ratio represents the loan amount divided by the property's appraised value. Lower LTV ratios reduce lender risk and often unlock better interest rates and terms.
              </p>
              <p>
                Most DSCR lenders cap LTV at 75-80% for investment properties, though some may go higher for strong borrower profiles. The trade-off between preserving capital and securing approval becomes crucial in your strategy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Credit Profile</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                FICO scores signal your creditworthiness to lenders, with different score bands affecting both approval odds and pricing. Higher scores typically correlate with lower interest rates and more flexible terms.
              </p>
              <p>
                While DSCR loans focus primarily on property cash flow, your credit history still influences lender confidence. Recent derogatory marks or high utilization can impact your application even with strong property fundamentals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Reserves</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Cash reserves demonstrate your ability to handle unexpected expenses, vacancies, or market fluctuations. Lenders typically require 2-6 months of PITIA payments in liquid assets per property.
              </p>
              <p>
                Stronger reserve positions can sometimes compensate for slightly weaker DSCR ratios or higher LTV requests. These funds must be seasoned and readily accessible, not tied up in retirement accounts or pending transactions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Investor Experience</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your track record managing rental properties influences lender confidence in your ability to maintain cash flow and property value. Experienced investors often receive more favorable terms and higher leverage options.
              </p>
              <p>
                Document your rental property ownership history, property management approach, and any relevant real estate experience. First-time investors can still qualify but may face slightly more conservative terms.
              </p>
              <Alert>
                <AlertDescription>
                  <strong>Note:</strong> Condos may require additional warrantability reviews, while 2-4 unit properties often receive similar treatment to single-family rentals but with slightly adjusted criteria.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}