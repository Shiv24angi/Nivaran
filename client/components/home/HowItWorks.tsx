import React from "react";
import { Eye, Megaphone, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Eye,
    title: "See",
    desc: "Spot an issue around you — roads, lighting, sanitation and more.",
    color: "text-brand-lime",
  },
  {
    icon: Megaphone,
    title: "Say",
    desc: "Report it instantly in the app. No clunky forms or hold times.",
    color: "text-brand-blue",
  },
  {
    icon: CheckCircle2,
    title: "Sort",
    desc: "We route it to the right department so it gets resolved.",
    color: "text-brand-orange",
  },
];

export function HowItWorks() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            How See Say Sort Works
          </h2>
          <p className="mt-4 text-gray-600">
            A simple three-step process to get things sorted fast.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition shadow-sm"
            >
              <s.icon className={`size-10 ${s.color}`} />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-cta text-gray-900 px-6 py-3 text-sm font-semibold hover:brightness-95"
          >
            Start Sorting
          </a>
        </div>
      </div>
    </section>
  );
}
