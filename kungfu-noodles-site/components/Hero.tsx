"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden bg-[#1a0a0a]"
      aria-label="Kungfu Noodles — Every Bowl a Master's Touch"
    >
      {/* Red gradient from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 50% 110%, rgba(204,34,0,0.22) 0%, transparent 70%), radial-gradient(ellipse 80% 40% at 50% 100%, rgba(204,34,0,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Chinese watermark characters */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-black text-[22vw] leading-none text-[#cc2200] opacity-[0.06] tracking-tight"
          lang="zh"
        >
          功夫小面
        </span>
      </div>

      {/* Dragon decoration — top right */}
      <div
        className="absolute top-20 right-4 sm:right-8 lg:right-16 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[#cc2200] opacity-10 text-6xl sm:text-8xl font-serif">龍</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-24 pb-16 max-w-4xl mx-auto">
        {/* Bowl logo mark */}
        <motion.div
          {...fadeUp(0)}
          className="mb-8"
        >
          <Image
            src="/images/kungfu-noodles-logo.png"
            alt="Kungfu Noodles logo — bowl with chopsticks and star"
            width={140}
            height={140}
            priority
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Tagline headline */}
        <motion.p
          {...fadeUp(0.1)}
          className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#f5efe6] leading-tight tracking-tight mb-4"
        >
          Every Bowl a<br />
          <span className="text-[#cc2200]">Master&apos;s Touch</span>
        </motion.p>

        <motion.p
          {...fadeUp(0.2)}
          className="text-[#a89888] text-base sm:text-lg lg:text-xl mb-8 tracking-wide"
        >
          Hand-Pulled Lamian &nbsp;·&nbsp; Two Valley Locations &nbsp;·&nbsp; Tempe &amp; Chandler
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] font-semibold rounded text-base transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#cc2200] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0a0a]"
          >
            View Menu
          </a>
          <a
            href="https://pos.chowbus.com/online-ordering/store/21094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[#f5efe6] hover:border-[#cc2200] hover:text-[#cc2200] text-[#f5efe6] font-semibold rounded text-base transition-colors duration-200"
          >
            Order Online
          </a>
        </motion.div>

        {/* Social proof badges */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#a89888]"
        >
          <span className="flex items-center gap-1">
            <span className="text-[#c9843a]" aria-hidden="true">★</span>
            <span>Featured by Phoenix New Times</span>
          </span>
          <span className="text-[#2a2a2a]" aria-hidden="true">|</span>
          <span className="flex items-center gap-1">
            <span className="text-[#c9843a]" aria-hidden="true">★</span>
            <span>Eater Phoenix</span>
          </span>
          <span className="text-[#2a2a2a]" aria-hidden="true">|</span>
          <span>4.5 Stars</span>
          <span className="text-[#2a2a2a]" aria-hidden="true">|</span>
          <span>10K+ Instagram Followers</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-[#a89888] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#cc2200] to-transparent"
        />
      </motion.div>
    </section>
  );
}
