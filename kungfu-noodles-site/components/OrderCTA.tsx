"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OrderCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="order"
      className="bg-[#0d0d0d] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Order online"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
          Order Online
        </span>
        <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#f5efe6] mb-4">
          Ready to Order?
        </h2>
        <p className="text-[#a89888] text-base mb-10">
          Available for pickup and delivery at both locations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pos.chowbus.com/online-ordering/store/21094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] font-semibold rounded text-base transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Order Tempe
          </a>
          <a
            href="https://pos.chowbus.com/online-ordering/store/21094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#f5efe6] hover:border-[#cc2200] hover:text-[#cc2200] text-[#f5efe6] font-semibold rounded text-base transition-colors duration-200"
            // Developer note: Replace Chandler link when confirmed
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Order Chandler
          </a>
        </div>

        <p className="mt-6 text-[#a89888] text-xs">
          Powered by Chowbus &nbsp;·&nbsp; Pickup and delivery available
        </p>
      </motion.div>
    </section>
  );
}
