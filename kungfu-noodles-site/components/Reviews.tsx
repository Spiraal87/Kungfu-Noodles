"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    text: "The handmade noodles were absolutely delicious — I'll be dreaming about them. Generous portions and great prices.",
    source: "Google Review",
  },
  {
    text: "Best hand-pulled noodles in Arizona. Spicy beef noodle soup, Xiao Long Bao, mapo tofu — every dish was incredible.",
    source: "Google Review",
  },
  {
    text: "This place is a hidden gem. Ordered the spicy beef noodle soup and cumin lamb. Came back the next week. And the week after.",
    source: "Google Review",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#c9843a]"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-7 flex flex-col"
    >
      <Stars />
      <blockquote className="text-[#f5efe6]/90 text-sm leading-relaxed mb-5 flex-1">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-2">
        {/* Google G icon */}
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <cite className="text-[#a89888] text-xs not-italic">{review.source}</cite>
      </div>
    </motion.article>
  );
}

export default function Reviews() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="reviews"
      className="bg-[#1a0a0a] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Customer reviews"
    >
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              Reviews
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#f5efe6]">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0.5" aria-label="4.5 stars average">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "text-[#c9843a]" : "text-[#c9843a]/50"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#a89888] text-sm">4.5 stars · Google Reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
