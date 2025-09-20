import React from "react";
import { Link } from "react-router-dom";

const stack = [
  {
    name: "React",
    color: "bg-brand-blue",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <g fill="none" stroke="currentColor">
          <ellipse cx="12" cy="12" rx="11" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4"
            transform="rotate(-60 12 12)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "bg-brand-purple",
    icon: () => <span className="text-[10px] font-bold">TS</span>,
  },
  {
    name: "TailwindCSS",
    color: "bg-brand-lime",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M3 12c2-4 5-6 9-6s7 2 9 6c-2 4-5 6-9 6s-7-2-9-6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Firebase",
    color: "bg-yellow-600",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Express",
    color: "bg-gray-700",
    icon: () => <span className="text-[10px] font-bold">Ex</span>,
  },
  {
    name: "Node.js",
    color: "bg-green-700",
    icon: () => <span className="text-[10px] font-bold">N</span>,
  },
  {
    name: "Vitest",
    color: "bg-yellow-500",
    icon: () => <span className="text-[10px] font-bold">Vt</span>,
  },
];

export function TechStackSection() {
  return (
    <section id="techstack" className="py-16 bg-white">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              Tech stack
            </h3>
            <p className="mt-2 text-gray-600">Powered by Gemini</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {stack.map((s) => (
            <div
              key={s.name}
              className={`relative cursor-pointer z-0 flex flex-col items-start gap-2 overflow-hidden rounded-md border border-zinc-300 bg-zinc-100 px-4 py-3 font-semibold text-zinc-800 transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-800 before:transition-transform before:duration-1000 before:content-["\""] hover:scale-105 hover:text-zinc-100 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`}
            >
              <div className={`h-7 w-7 rounded-md text-white grid place-items-center ${s.color}`}>
                {s.icon && s.icon()}
              </div>
              <span className="text-gray-900">{s.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 md:hidden" />
      </div>
    </section>
  );
}
