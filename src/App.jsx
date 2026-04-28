import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { PlatformIntro } from "./components/PlatformIntro";
import { FeatureCards } from "./components/FeatureCards";
import { Marquee } from "./components/Marquee";
import { OurCompany } from "./components/OurCompany";
import { Newsroom } from "./components/Newsroom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <PlatformIntro />
      <FeatureCards />
      <Marquee />
      <OurCompany />
      <Newsroom />
      <Footer />
    </div>
  );
}
export default App;