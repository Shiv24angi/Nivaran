import React from "react";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { TechStackSection } from "@/components/home/TechStackSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactPanel } from "@/components/home/ContactPanel";
import { StoreBadges } from "@/components/common/StoreBadges";

export default function Index() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PartnersMarquee />
      <TechStackSection />
      <Testimonials />
      <ContactPanel />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="rounded-3xl border border-gray-200 bg-brand-cta px-6 py-10 md:px-12 text-center shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Do your bit, on the go.
            </h2>
            <p className="mt-2 text-gray-700 max-w-xl mx-auto">
              Anywhere in Jharkhand, anytime.
            </p>
            <div className="mt-5 flex items-center justify-center">
              <StoreBadges />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
