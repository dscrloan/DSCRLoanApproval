export function Resources() {
  const resources = [
    {
      title: "DSCR Down Payment",
      url: "https://dscrloandownpayment.com",
      description: "Understanding down payment requirements and strategies for DSCR loan qualification."
    },
    {
      title: "DSCR Loan Requirements",
      url: "https://dscrloanrequirements.com", 
      description: "Comprehensive guide to lender requirements, documentation, and qualification criteria."
    },
    {
      title: "DSCR Qualifier",
      url: "https://dscrqualifier.com",
      description: "Tools and resources to help determine your DSCR loan qualification potential."
    },
    {
      title: "DSCR Rater",
      url: "https://dscrrater.com",
      description: "Rate comparison and market analysis for DSCR loan pricing across lenders."
    },
    {
      title: "DSCR Underwriting",
      url: "https://dscrunderwriting.com",
      description: "Behind-the-scenes look at how lenders evaluate and approve DSCR loan applications."
    }
  ];

  return (
    <section id="resources" className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <div key={index} className="space-y-2">
              <h3>
                <a 
                  href={resource.url} 
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${resource.title} resource`}
                >
                  {resource.title}
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a 
            href="https://www.shopdscrloans.com" 
            className="inline-block text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
            target="_self"
            aria-label="View all DSCR loan topics and resources"
          >
            All DSCR Topics → shopdscrloans.com
          </a>
        </div>
      </div>
    </section>
  );
}