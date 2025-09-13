import React from "react";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { TechStackSection } from "@/components/home/TechStackSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactPanel } from "@/components/home/ContactPanel";
import { StoreBadges } from "@/components/common/StoreBadges";
import { Camera, Shuffle, User, Bell, BarChart2 } from "lucide-react";

export default function Index() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PartnersMarquee />

      <section id="workflow" className="py-16 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Workflow</h2>
            <p className="mt-2 text-gray-600">How Nivaran routes reports from citizens to resolution</p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="max-w-4xl w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2Faa394ce3d0c4482485618c2fee113ffb?format=webp&width=800"
                alt="Workflow diagram"
                className="w-full h-auto rounded-2xl shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Camera, title: "Citizen Submits a Report" },
              { icon: Shuffle, title: "Smart Routing Engine" },
              { icon: User, title: "Staff Takes Action" },
              { icon: Bell, title: "Instant Notifications" },
              { icon: BarChart2, title: "Admin Management" },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm bg-white">
                <div className="mx-auto w-12 h-12 grid place-items-center rounded-full bg-brand-cream text-gray-900">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{s.title}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

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
