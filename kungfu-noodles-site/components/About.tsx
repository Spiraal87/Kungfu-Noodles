"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="bg-[#0d0d0d] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="About Kungfu Noodles"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: kitchen action photo */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] order-2 lg:order-1"
        >
          <Image
            src="/images/kitchen-action-placeholder.png"
            alt="Kitchen action at Kungfu Noodles"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#cc2200] to-[#c9843a]" />
        </motion.div>

        {/* Right: copy */}
        <div ref={ref} className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              Our Story
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#f5efe6] leading-tight mb-6">
              Masters of Flavor<br />
              <span className="text-[#cc2200]">Since 2020</span>
            </h2>

            <div className="space-y-4 text-[#a89888] leading-relaxed">
              <p>
                Kungfu Noodles started as a single kitchen in Tempe with one obsession — making
                hand-pulled lamian the right way. What began as a neighborhood noodle house near
                ASU grew into one of the most acclaimed Chinese restaurants in the East Valley,
                with over 10,000 Instagram followers and a loyal community that spans the entire
                Valley.
              </p>
              <p>
                From Tempe to Chandler to the Uptown Market food truck — same handmade standards
                everywhere we go.
              </p>
              <p className="text-[#f5efe6]/70 border-l-2 border-[#cc2200] pl-4 italic text-sm">
                Recently rebranded from Kungfu Ramen to Kungfu Noodles. Same kitchen. Same team.
                Same noodles. Just a name that finally matches what we&apos;ve always been about.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "2020", label: "Founded" },
                { value: "10K+", label: "Followers" },
                { value: "2", label: "Locations" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif font-black text-2xl text-[#cc2200]">{stat.value}</div>
                  <div className="text-[#a89888] text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Developer note: Owner should review and personalize this copy before launch */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
