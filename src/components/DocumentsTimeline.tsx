export function DocumentsTimeline() {
  return (
    <section id="docs-timeline" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">What Lenders Review & Typical Timeline</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4">Required Documentation</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Rent Evidence:</strong> Existing leases, rent rolls, or market rent analysis from licensed appraisers</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Reserves Documentation:</strong> Bank statements showing liquid assets and account seasoning</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Credit Authorization:</strong> Permission for credit report and score verification</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Property Appraisal:</strong> Licensed appraisal confirming value and rent potential</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Property Details:</strong> Purchase contract, property tax records, insurance quotes, HOA information</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Typical Process Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
                <div>
                  <p><strong>Pre-Screen (1-2 days):</strong> Initial scenario review and lender matching based on DSCR, LTV, and borrower profile</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
                <div>
                  <p><strong>Documentation (3-7 days):</strong> Gather and verify required documents, order appraisal, submit complete file</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
                <div>
                  <p><strong>Appraisal (7-14 days):</strong> Property inspection, comparable analysis, and rent survey completion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
                <div>
                  <p><strong>Underwriting (5-10 days):</strong> Final approval decision, terms confirmation, and closing coordination</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">5</div>
                <div>
                  <p><strong>Closing (3-5 days):</strong> Final document review, funding, and property transfer completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            <em>Timeline estimates vary by lender, property complexity, and document completeness. Working with experienced lending professionals can help streamline the process and avoid common delays.</em>
          </p>
        </div>
      </div>
    </section>
  );
}