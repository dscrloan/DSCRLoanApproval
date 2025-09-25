import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQs() {
  const faqs = [
    {
      question: "What DSCR ratio is typically needed for DSCR loan approval?",
      answer: "Most DSCR lenders require debt service coverage ratios between 1.0 and 1.25, with 1.20+ being common for competitive DSCR loan terms. Higher DSCR ratios like 1.30+ often unlock better pricing and more DSCR lender options, while ratios below 1.0 significantly limit DSCR loan approval possibilities."
    },
    {
      question: "Can first-time real estate investors get DSCR loan approval?",
      answer: "Yes, first-time real estate investors can qualify for DSCR loans, though they may face slightly more conservative terms. Strong credit profiles, substantial cash reserves, and lower LTV ratios help offset limited rental property experience in DSCR lender evaluations."
    },
    {
      question: "How much do cash reserves matter for DSCR loan approval?",
      answer: "Cash reserves are crucial for DSCR loan approval, with most DSCR lenders requiring 2-6 months of PITIA payments per investment property. Strong reserve positions can compensate for marginal DSCR ratios and demonstrate financial stability to handle rental vacancies or unexpected expenses."
    },
    {
      question: "Do STR properties change the DSCR requirement?",
      answer: "Short-term rental properties typically require higher DSCR minimums (1.30+) due to income volatility. Lenders may use conservative income calculations or market rent analysis rather than STR projections, and require additional reserves for seasonal fluctuations."
    },
    {
      question: "What if my DSCR is under 1.0?",
      answer: "DSCR ratios below 1.0 severely limit lender options and often result in declined applications. Consider increasing down payment to lower monthly debt service, documenting higher market rents, or exploring alternative property investments with better cash flow potential."
    },
    {
      question: "How does LTV affect approval odds?",
      answer: "Lower LTV ratios improve approval odds by reducing lender risk and monthly payments, which boosts DSCR calculations. While 75-80% LTV is typical, stronger borrower profiles may qualify for higher leverage, and lower LTV often unlocks better interest rates."
    },
    {
      question: "Are condos harder to finance with DSCR loans?",
      answer: "Condos face additional requirements around warrantability, HOA financial health, and project approval by lenders. While this can limit options, many lenders still offer DSCR financing for condos that meet their specific criteria and maintain strong cash flow potential."
    }
  ];

  return (
    <section id="faqs" className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}