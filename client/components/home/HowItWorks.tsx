import React from "react";
const steps = [
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2F5b23fe827caf4b33b9f65e580e2d5954?format=webp&width=800",
    title: "See",
    desc: "Spot an issue around you — roads, lighting, sanitation and more.",
  },
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2Ff29e4b434a8b49adbc6c6c6cadce83bc?format=webp&width=800",
    title: "Say",
    desc: "Report it instantly in the app. No clunky forms or hold times.",
  },
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2Fa8b0c3f1f3df462fa12830c313efaea3?format=webp&width=800",
    title: "Sort",
    desc: "We route it to the right department so it gets resolved.",
  },
];

export function HowItWorks() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            How Nivaran Works
          </h2>
          <p className="mt-4 text-gray-600">
            A simple three-step process to get things sorted fast.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition shadow-sm">
              <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-white grid place-items-center shadow-sm">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/start-snapping"
            className="inline-flex items-center rounded-full bg-brand-cta text-gray-900 px-6 py-3 text-sm font-semibold hover:brightness-95"
          >
            Start Sorting
          </a>
        </div>
      </div>
    </section>
  );
}
