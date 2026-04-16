"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const instagramImages = [
  { src: "/images/instagram1.jpg", alt: "Kungfu Noodles Instagram post" },
  { src: "/images/instagram2.jpg", alt: "Kungfu Noodles Instagram post" },
  { src: "/images/instagram3.jpg", alt: "Kungfu Noodles Instagram post" },
  { src: "/images/instagram4.jpg", alt: "Kungfu Noodles Instagram post" },
  { src: "/images/instagram5.jpg", alt: "Kungfu Noodles Instagram post" },
  { src: "/images/instagram6.jpg", alt: "Kungfu Noodles Instagram post" },
];

function GridCell({
  item,
  index,
}: {
  item: (typeof instagramImages)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative aspect-[4/5] bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden cursor-pointer"
    >
      {/* Instagram image */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#cc2200]/0 group-hover:bg-[#cc2200]/20 transition-colors duration-300" />
    </motion.div>
  );
}

export default function Instagram() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="instagram"
      className="bg-[#0d0d0d] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Instagram feed"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              Instagram
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#f5efe6] mb-2">
              Follow the Kitchen
            </h2>
            <a
              href="https://www.instagram.com/kungfuarizona/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9843a] hover:text-[#e8a55a] text-lg font-medium transition-colors duration-200"
            >
              @kungfuarizona
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8"
          role="list"
          aria-label="Instagram photo gallery"
        >
          {instagramImages.map((item, i) => (
            <div key={i} role="listitem">
              <GridCell item={item} index={i} />
            </div>
          ))}
        </div>

        {/* Stats + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-[#a89888] text-sm mb-5">
            10K+ followers &nbsp;·&nbsp; 109 posts &nbsp;·&nbsp; Daily specials, new dishes, and behind-the-scenes kitchen content
          </p>
          <a
            href="https://www.instagram.com/kungfuarizona/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#f5efe6]/30 hover:border-[#cc2200] hover:text-[#cc2200] text-[#f5efe6] font-medium rounded text-sm transition-colors duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
