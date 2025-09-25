import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function EstimatorWalkthrough() {
  return (
    <section id="estimator" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">3-Step Example: From Rent & Price to DSCR Approval</h2>
        
        <div className="grid gap-6 md:gap-8">
          <div className="space-y-4">
            <h3>Step 1: Gather Your Numbers</h3>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Purchase Price:</strong> The property's acquisition cost or current market value</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Monthly Rent:</strong> Actual lease rate or market rent analysis from comparable properties</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Rate & Terms:</strong> Estimated interest rate plus property taxes, insurance, and HOA fees</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3>Step 2: Calculate DSCR Scenarios</h3>
            <p className="mb-4">
              Compute DSCR by dividing monthly rent by total PITIA (Principal, Interest, Taxes, Insurance, Association fees). Here are three common scenarios:
            </p>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-red-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-red-600">DSCR 0.95</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <strong>Challenging:</strong> Most lenders decline. May need higher down payment or co-signer to qualify.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-yellow-600">DSCR 1.10</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <strong>Marginal:</strong> Limited lender options. May qualify with stronger credit and reserves.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-600">DSCR 1.25</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    <strong>Strong:</strong> Most lenders approve. Better rates and terms typically available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h3>Step 3: Adjust Variables for Better Outcomes</h3>
            <p>
              Fine-tune your scenario by adjusting loan-to-value ratio or increasing reserves to improve approval probability. Lower LTV reduces monthly payments and boosts DSCR, while substantial reserves can offset marginal ratios.
            </p>
            <div className="mt-6 text-center">
              <Button asChild>
                <a 
                  href="https://www.shopdscrloans.com" 
                  target="_self"
                  aria-label="Get scenario-based DSCR loan options"
                >
                  Get Scenario-Based Options →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}