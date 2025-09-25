import { SEOHead } from "./components/SEOHead";
import { Header } from "./components/Header";
import { JumpMenu } from "./components/JumpMenu";
import { Hero } from "./components/Hero";
import { QuickAnswer } from "./components/QuickAnswer";
import { ApprovalFactors } from "./components/ApprovalFactors";
import { EstimatorWalkthrough } from "./components/EstimatorWalkthrough";
import { StateSnapshots } from "./components/StateSnapshots";
import { PropertyTypes } from "./components/PropertyTypes";
import { ImproveApproval } from "./components/ImproveApproval";
import { DocumentsTimeline } from "./components/DocumentsTimeline";
import { FAQs } from "./components/FAQs";
import { Resources } from "./components/Resources";
import { TrustCompliance } from "./components/TrustCompliance";
import { BottomCTA } from "./components/BottomCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <JumpMenu />
      
      <main>
        <Hero />
        <QuickAnswer />
        <ApprovalFactors />
        <EstimatorWalkthrough />
        <StateSnapshots />
        <PropertyTypes />
        <ImproveApproval />
        <DocumentsTimeline />
        <FAQs />
        <Resources />
        <TrustCompliance />
        <BottomCTA />
      </main>
    </div>
  );
}