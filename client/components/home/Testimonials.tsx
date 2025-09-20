import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  { name: "Isha", quote: "It's so easy to use, anybody with a smartphone can do it.", designation: "Volunteer", src: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2Fdc38c3d07e9847adbfb1ae12643a35dd?format=webp&width=800" },
  { name: "Rohit", quote: "I've found it super, super efficient.", designation: "Citizen", src: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2F83a79e566dc74007856620bbcf893633?format=webp&width=800" },
  { name: "Ananya", quote: "Magically, things just get sorted - it's amazing!", designation: "Student", src: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2F03e7947b87e5466cbd55d250e4101d1d?format=webp&width=800" },
  { name: "Vikram", quote: "A really good way to get straight to the department.", designation: "Shop Owner", src: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2F4d82d2c8fc464642ba0092a489d02cf7?format=webp&width=800" },
  { name: "Aarav", quote: "The whole idea is really good.", designation: "Resident", src: "https://cdn.builder.io/api/v1/image/assets%2Fbe8b85e214da4701834e57936a69c599%2F4231a492246149e8b9d8e2669f760ecc?format=webp&width=800" },
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
