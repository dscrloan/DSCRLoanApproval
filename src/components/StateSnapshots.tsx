import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function StateSnapshots() {
  const states = [
    {
      name: "Florida",
      path: "/states/florida",
      highlights: [
        "High demand rental markets in Miami, Orlando, and Tampa",
        "Strong tourism-driven short-term rental opportunities",
        "Favorable landlord-tenant laws for investors"
      ]
    },
    {
      name: "Texas",
      path: "/states/texas",
      highlights: [
        "No state income tax benefits rental property cash flow",
        "Growing job markets in Austin, Dallas, and Houston",
        "Diverse property types from urban condos to suburban SFR"
      ]
    },
    {
      name: "Arizona",
      path: "/states/arizona",
      highlights: [
        "Phoenix and Tucson show consistent population growth",
        "Year-round rental demand from seasonal residents",
        "Strong appreciation trends in key metropolitan areas"
      ]
    },
    {
      name: "Tennessee",
      path: "/states/tennessee",
      highlights: [
        "Nashville's music industry drives robust rental demand",
        "No state income tax enhances investment returns",
        "Growing tech sector supports long-term tenant stability"
      ]
    },
    {
      name: "Michigan",
      path: "/states/michigan",
      highlights: [
        "Detroit revitalization creates emerging opportunities",
        "University towns provide steady rental income",
        "Affordable entry points for new investors"
      ]
    },
    {
      name: "Indiana",
      path: "/states/indiana",
      highlights: [
        "Indianapolis shows strong rental market fundamentals",
        "Lower property taxes improve cash flow calculations",
        "Stable employment base supports tenant retention"
      ]
    },
    {
      name: "Ohio",
      path: "/states/ohio",
      highlights: [
        "Cleveland, Columbus, and Cincinnati offer diverse markets",
        "Strong rental yields in established neighborhoods",
        "Healthcare and education sectors provide tenant stability"
      ]
    },
    {
      name: "Georgia",
      path: "/states/georgia",
      highlights: [
        "Atlanta's corporate headquarters drive rental demand",
        "Savannah and Augusta show growing investor interest",
        "Favorable business climate supports property values"
      ]
    }
  ];

  return (
    <section id="states" className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8">State-by-State DSCR Notes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <Card key={state.name}>
              <CardHeader className="pb-3">
                <CardTitle>
                  <h3>{state.name}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2">
                  {state.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://www.shopdscrloans.com${state.path}`}
                  className="inline-block text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  aria-label={`Learn more about DSCR loans in ${state.name}`}
                >
                  Learn more about {state.name} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}