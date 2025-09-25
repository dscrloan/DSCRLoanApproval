import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function PropertyTypes() {
  return (
    <section id="property-types" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">SFR vs 2–4 Units vs Condos vs STR</h2>
        <div className="grid gap-6 md:grid-cols-2">
          
          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Single-Family Rentals (SFR)</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Most lenders view SFR properties as standard DSCR applications with typical 1.0-1.25 minimum ratios. These properties often qualify for the most competitive terms due to their stable rental income patterns and broad market appeal.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>2-4 Unit Properties</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Multi-unit properties generally receive similar treatment to SFR but may require slightly higher DSCR minimums (1.15-1.30) due to increased management complexity. Multiple income streams can actually strengthen approval odds when properly documented.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Condominiums</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Condo investments face additional scrutiny around warrantability, HOA financial health, and owner-occupancy ratios. Some lenders require pre-approval of condo projects, which can limit your options but doesn't eliminate DSCR financing opportunities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h3>Short-Term Rentals (STR)</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                STR properties typically require higher DSCR minimums (1.30+) and more substantial reserves due to income volatility and seasonal fluctuations. Lenders may use conservative income calculations or require market rent analysis rather than STR projections.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}