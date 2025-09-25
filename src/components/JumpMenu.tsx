import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function JumpMenu() {
  const menuItems = [
    { label: "Quick Answer", href: "#quick-answer" },
    { label: "Approval Factors", href: "#approval-factors" },
    { label: "Estimator", href: "#estimator" },
    { label: "States", href: "#states" },
    { label: "Property Types", href: "#property-types" },
    { label: "Improve Approval Odds", href: "#improve-approval-odds" },
    { label: "Docs & Timeline", href: "#docs-timeline" },
    { label: "FAQs", href: "#faqs" },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Add offset to account for sticky header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-16 z-50 bg-background/95 backdrop-blur border-b py-2">
      <div className="container mx-auto px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-full md:w-auto">
              <Menu className="w-4 h-4 mr-2" />
              Jump to Section
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 z-50">
            {menuItems.map((item) => (
              <DropdownMenuItem 
                key={item.href}
                onSelect={() => handleScroll(item.href)}
                className="cursor-pointer"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}