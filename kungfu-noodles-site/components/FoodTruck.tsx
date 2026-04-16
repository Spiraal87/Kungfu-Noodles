"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FoodTruck() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="food-truck"
      className="bg-[#1a1a1a] py-20 sm:py-28 px-4 sm:px-6 border-y border-[#2a2a2a]"
      aria-label="Food truck"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Red accent bar */}
            <div className="w-12 h-1 bg-[#cc2200] mb-6 rounded" aria-hidden="true" />

            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              Food Truck
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#f5efe6] leading-tight mb-4">
              Find Us at<br />
              <span className="text-[#cc2200]">Local Markets</span>
            </h2>
            <p className="text-[#a89888] leading-relaxed mb-8">
              Kungfu Noodles hits the road. Follow us on Instagram{" "}
              <a
                href="https://www.instagram.com/kungfuarizona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9843a] hover:text-[#e8a55a] transition-colors duration-200"
                aria-label="Follow @kungfuarizona on Instagram for food truck schedule"
              >
                @kungfuarizona
              </a>{" "}
              for upcoming market dates and locations.
            </p>

            {/* Developer note: Owner to provide food truck schedule and upcoming events */}
            <div className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-5 mb-8">
              <p className="text-[#a89888] text-sm">
                <span className="text-[#c9843a] font-medium">Upcoming Markets</span>
                <br />
                <span className="text-xs mt-1 block">
                  Check Instagram for the latest schedule and locations.
                </span>
              </p>
            </div>

            <a
              href="https://www.instagram.com/kungfuarizona/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] font-semibold rounded text-sm transition-colors duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow for Updates
            </a>
          </motion.div>

          {/* Right: food truck image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-video rounded-lg overflow-hidden bg-[#0d0d0d] border border-[#cc2200]/30"
          >
            <Image
              src="/images/food-truck-placeholder.png"
              alt="Kungfu Noodles food truck at local markets"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#cc2200] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
