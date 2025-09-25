import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="mb-6">
          DSCR Loan Approval: What It Takes (and How to Get There)
        </h1>
        <div className="mb-8 space-y-4">
          <p>
            DSCR loan approval hinges on your investment property's ability to generate sufficient rental income to cover its debt service payments. Lenders evaluate your debt service coverage ratio alongside loan-to-value ratios, cash reserves, credit profile, and property characteristics to determine DSCR loan approval and terms.
          </p>
          <p>
            Understanding these key DSCR approval factors empowers real estate investors to position their rental property loan applications strategically. Working with qualified lending professionals can help align your specific investment scenario with DSCR lender requirements to maximize your approval odds.
          </p>
          <p>
            Whether you're acquiring your first rental property or expanding an existing real estate investment portfolio, knowing what DSCR lenders prioritize allows you to prepare effectively and secure competitive investment property financing terms.
          </p>
        </div>
        <Button size="lg" asChild>
          <a 
            href="https://www.shopdscrloans.com" 
            target="_self"
            aria-label="See your DSCR loan options"
          >
            See My DSCR Options →
          </a>
        </Button>
      </div>
    </section>
  );
}