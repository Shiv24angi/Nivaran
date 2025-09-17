import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/#about", label: "About Us" },
  { to: "/#testimonials", label: "Nivcrew" },
  { to: "/#partners", label: "Nivsewaks" },
  { to: "/#contact", label: "Help Centre" },
];

// Lazy-load MenuBar from UI components to keep header lightweight
const LazyMenuBar = React.lazy(() =>
  import("@/components/ui/animated-menu-bar").then((m) => ({ default: m.MenuBar || m.default }))
);

function MenuBarWrapper() {
  const [active, setActive] = useState<
    | "dashboard"
    | "notifications"
    | "settings"
    | "help"
    | "security"
  >("dashboard");

  return (
    <React.Suspense fallback={<div className="w-24 h-10" />}>
      <LazyMenuBar active={active} onSelect={setActive} />
    </React.Suspense>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-brand-lime" />
          <span className="sr-only">Home</span>
          <div>
            <div className="text-xl font-extrabold tracking-tight text-gray-900">
              Nivaran
            </div>
            <div className="text-xs text-gray-500 -mt-0.5">
              Aapki shikayat, hamara nivaran
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {/* MenuBar component (icon + label expanded on hover) */}
          <div className="hidden md:block">
            {/* import locally to avoid changing top imports ordering */}
            {/* @ts-ignore */}
            {false}
          </div>

          <div className="hidden md:flex items-center">
            {/* MenuBar will be dynamically imported to avoid SSR issues */}
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <MenuBarWrapper />
          </div>

          <Link
            to="/start-snapping"
            className="ml-4 inline-flex items-center rounded-lg bg-brand-cta text-gray-900 px-4 py-2 text-sm font-semibold shadow-sm hover:brightness-95 transition"
          >
            Report now
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-700"
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/start-snapping"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-lg bg-brand-cta text-gray-900 px-4 py-2 text-sm font-semibold shadow-sm w-max"
            >
              Report now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
