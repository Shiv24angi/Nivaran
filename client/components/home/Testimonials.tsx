import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  { name: "Aarav", quote: "The whole idea is really good.", designation: "Resident", src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1600&auto=format&fit=crop&crop=faces" },
  { name: "Isha", quote: "It's so easy to use, anybody with a smartphone can do it.", designation: "Volunteer", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop&crop=faces" },
  { name: "Rohit", quote: "I've found it super, super efficient.", designation: "Citizen", src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop&crop=faces" },
  { name: "Ananya", quote: "Magically, things just get sorted - it's amazing!", designation: "Student", src: "https://images.unsplash.com/photo-1545996124-1b2d3e6e8b0f?q=80&w=1600&auto=format&fit=crop&crop=faces" },
  { name: "Vikram", quote: "A really good way to get straight to the department.", designation: "Shop Owner", src: "https://images.unsplash.com/photo-1541516160074-8a0b36c0b8b8?q=80&w=1600&auto=format&fit=crop&crop=faces" },
];

import CircularTestimonials from "./CircularTestimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              What they're saying
            </h2>
            <p className="mt-2 text-gray-600">Real feedback from users.</p>
          </div>
        </div>

        <div className="mt-8">
          <CircularTestimonials testimonials={testimonials} autoplay={true} colors={{ arrowHoverBackground: "#10b981" }} />
        </div>
      </div>
    </section>
  );
}
