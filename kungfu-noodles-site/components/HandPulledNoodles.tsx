"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const noodleStyles = [
  {
    name: "Thin",
    chinese: "细面",
    desc: "Delicate and light. Best in clear broths and subtle sauces.",
  },
  {
    name: "Regular",
    chinese: "正常",
    desc: "The classic. Works beautifully with everything.",
  },
  {
    name: "Thick",
    chinese: "粗面",
    desc: "Chewy and substantial. Perfect with bold braised sauces.",
  },
  {
    name: "Chive",
    chinese: "韭叶",
    desc: "Flat ribbon style. Excellent stir-fried.",
  },
  {
    name: "Wide",
    chinese: "宽面",
    desc: "Pappardelle-style. Best with rich meat broths.",
  },
  {
    name: "Extra Wide",
    chinese: "大宽面",
    desc: "The showstopper. Dramatic ribbons in heavy sauces.",
  },
  {
    name: "Knife-Sliced",
    chinese: "刀削面",
    desc: "Rustic, irregular cuts with exceptional texture. Classic northern Chinese style.",
  },
];

function NoodleCard({
  style,
  index,
}: {
  style: (typeof noodleStyles)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex-shrink-0 w-44 sm:w-52 h-52 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-5 py-3 pt-10 hover:border-[#cc2200]/50 transition-colors duration-300 flex flex-col items-center justify-center text-center"
    >
      <div className="font-serif font-bold text-lg text-[#f5efe6] mb-1">
        {style.name}
      </div>
      <div className="font-serif text-sm text-[#c9843a] mb-3 tracking-wide" lang="zh">
        {style.chinese}
      </div>
      <p className="text-[#a89888] text-xs leading-relaxed flex-1 text-center">{style.desc}</p>
    </motion.div>
  );
}

export default function HandPulledNoodles() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="noodles"
      className="bg-[#1a0a0a] py-20 sm:py-28 overflow-hidden"
      aria-label="The art of hand-pulled noodles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left: kitchen image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a]"
          >
            <Image
              src="/images/chef-pulling-noodles-placeholder.png"
              alt="Chef hand-pulling lamian noodles at Kungfu Noodles Tempe AZ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Red accent border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cc2200] via-[#c9843a] to-transparent" />
          </motion.div>

          {/* Right: copy */}
          <div ref={headRef}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              <span
                className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block"
                lang="zh"
              >
                拉面 · Lamian
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#f5efe6] leading-tight mb-6">
                The Art of Lamian{" "}
                <span className="text-[#cc2200]" lang="zh">拉面</span>
              </h2>

              <div className="space-y-4 text-[#a89888] leading-relaxed">
                <p>
                  Lamian (拉面) is one of China&apos;s oldest noodle-making traditions. A single
                  piece of dough is stretched, twisted, and folded by hand — repeatedly — until
                  it becomes dozens of perfectly uniform noodles. The process takes years to master.
                </p>
                <p>
                  Unlike machine-cut or packaged noodles, hand-pulled lamian have a slightly
                  irregular texture that holds broth and sauce differently. Springier. Chewier.
                  More satisfying. It&apos;s the reason people drive across the valley for a bowl.
                </p>
                <p>
                  We offer seven distinct styles — from delicate thin vermicelli to wide dramatic
                  ribbons to rustic knife-sliced cuts. Each one changes the character of the dish
                  entirely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Noodle style cards — horizontal scroll */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-serif font-bold text-lg text-[#f5efe6] mb-6 text-center"
          >
            Seven Noodle Styles
          </motion.h3>

          <div
            className="flex gap-4 overflow-x-auto pb-4 noodle-scroll"
            role="list"
            aria-label="Seven noodle styles available"
          >
            {noodleStyles.map((style, i) => (
              <div key={style.name} role="listitem">
                <NoodleCard style={style} index={i} />
              </div>
            ))}
          </div>

          <p className="text-center text-[#a89888] text-sm mt-6">
            Regular served by default.{" "}
            <span className="text-[#c9843a]">Note your preferred style when ordering.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
