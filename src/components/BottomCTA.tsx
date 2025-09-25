import { Button } from "./ui/button";

export function BottomCTA() {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-primary-foreground">
          Ready to Check Your DSCR Options?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Connect with experienced lending professionals who understand investor needs and can match your scenario with the right lenders for competitive terms and smooth approval.
        </p>
        <Button size="lg" variant="secondary" asChild>
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