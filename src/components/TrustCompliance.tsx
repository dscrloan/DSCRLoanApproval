export function TrustCompliance() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
          
          <div>
            <h3 className="mb-4">Educational Purpose</h3>
            <p className="text-sm text-muted-foreground">
              This website provides educational information about DSCR loan approval processes, requirements, and strategies. Content is for informational purposes only and should not be considered financial, legal, or investment advice.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              No guarantees of loan approval or specific terms. Individual scenarios vary significantly based on borrower profile, property characteristics, market conditions, and lender requirements. Always consult with qualified financial professionals for personalized advice.
            </p>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-4">
            <strong>Educational Disclaimer:</strong> This information is provided for educational purposes only. Loan terms, rates, and approval decisions vary by lender and individual circumstances. Content accuracy is not guaranteed and may change without notice.
          </p>
          <div className="space-x-4">
            <a 
              href="/privacy-policy" 
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              aria-label="Read our privacy policy"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              aria-label="Read our terms of service"
            >
              Terms
            </a>
            <a 
              href="/sitemap" 
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              aria-label="View our sitemap"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}