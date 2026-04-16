"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "✦",
    title: "Hand-Pulled Fresh Daily",
    chinese: "每日现拉",
    body: "Every noodle stretched and folded by hand in our kitchen. Not from a package. Never from a machine. You can taste the difference in every bowl.",
  },
  {
    icon: "✦",
    title: "Every Bowl a Master's Touch",
    chinese: "每碗匠心",
    body: "Seven distinct noodle styles. Rich broths simmered daily. Handcrafted dumplings folded one by one. This is what obsession with craft looks like.",
  },
  {
    icon: "✦",
    title: "Two Locations. One Standard.",
    chinese: "两店一心",
    body: "Tempe since 2020. Now in Chandler too. Same kitchen philosophy, same handmade standards, both sides of the Valley covered.",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.12 }}
      className="flex flex-col items-center text-center p-8 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] hover:border-[#cc2200]/40 transition-colors duration-300"
    >
      <span
        className="text-[#cc2200] text-2xl mb-4"
        aria-hidden="true"
      >
        {pillar.icon}
      </span>
      <h3 className="font-serif font-bold text-xl text-[#f5efe6] mb-1 leading-snug">
        {pillar.title}
      </h3>
      <span
        className="font-serif text-sm text-[#c9843a] mb-4 tracking-widest"
        lang="zh"
      >
        {pillar.chinese}
      </span>
      <p className="text-[#a89888] text-sm leading-relaxed">{pillar.body}</p>
    </motion.article>
  );
}

export default function ThreePillars() {
  return (
    <section
      id="pillars"
      className="bg-[#0d0d0d] py-20 sm:py-24 px-4 sm:px-6"
      aria-label="Our three pillars"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <PillarCard key={p.title} pillar={p} index={i} />
        ))}
      </div>
    </section>
  );
}
