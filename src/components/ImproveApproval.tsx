import { Button } from "./ui/button";

export function ImproveApproval() {
  return (
    <section id="improve-approval-odds" className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">5 Ways Investors Strengthen DSCR Approval</h2>
        <div className="space-y-6">
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
            <div>
              <h3 className="mb-2">Increase Rent or Lease Strength</h3>
              <p>
                Secure above-market rents through property improvements, better tenant screening, or lease renewals with reliable tenants. Documented rent increases or comparable market analysis can support higher income assumptions in your DSCR calculation.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
            <div>
              <h3 className="mb-2">Accept Lower LTV</h3>
              <p>
                Reducing your loan amount by increasing down payment improves your DSCR by lowering monthly debt service. This strategy often unlocks better interest rates and expands your lender options, though it requires more upfront capital.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
            <div>
              <h3 className="mb-2">Add Reserves</h3>
              <p>
                Strengthen your financial profile with additional liquid assets that exceed minimum reserve requirements. Extra reserves demonstrate financial stability and can compensate for marginal DSCR ratios or higher leverage requests.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex-shrink-0 flex items-center justify-center font-semibold">4</div>
            <div>
              <h3 className="mb-2">Consider Rate Buydown or Points</h3>
              <p>
                Paying discount points upfront reduces your interest rate and monthly payment, directly improving your DSCR. This strategy works best when you plan to hold the property long-term and can recoup the upfront cost through better cash flow.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
            <div>
              <h3 className="mb-2">Document Experience and Property Management</h3>
              <p>
                Provide detailed rental property experience documentation, property management plans, and market knowledge. Experienced investors with clear management strategies often receive more favorable underwriting treatment and flexible terms.
              </p>
            </div>
          </div>

        </div>
        
        <div className="mt-8 text-center">
          <Button size="lg" variant="outline" asChild>
            <a 
              href="https://www.shopdscrloans.com" 
              target="_self"
              aria-label="Compare realistic DSCR loan options"
            >
              Compare Realistic Options →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}