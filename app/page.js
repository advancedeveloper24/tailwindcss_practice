import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import Features from "./components/Features";
import Schedule from "./components/Schedule";
import Monitor from "./components/Monitor";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500 opacity-20 rounded-full blur-[80px] -z-10"></div>
      <div className="overlfow"></div>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <Features />
      <Schedule />
      <Monitor />
      <Pricing />
      <Support />
    </main>
  );
}
