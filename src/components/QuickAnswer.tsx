export function QuickAnswer() {
  return (
    <section id="quick-answer" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-6">Typical DSCR Loan Approval Snapshot</h2>
        <div className="grid gap-4 md:gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p>
              <strong>DSCR ≥ 1.0–1.25 is common</strong> across most DSCR lenders, with higher debt service coverage ratios like 1.3+ improving your loan terms and expanding your DSCR lender options for better pricing.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p>
              <strong>LTV 70–80% typical</strong> for most DSCR loan scenarios, though stronger real estate investor profiles with excellent credit and substantial reserves may qualify for higher leverage depending on the specific DSCR lender.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p>
              <strong>Reserves, FICO bands, investor experience, and property type</strong> can significantly raise or lower your DSCR loan approval odds, with some factors carrying more weight than others based on DSCR lender preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}