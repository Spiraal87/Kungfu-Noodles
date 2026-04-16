"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "What are hand-pulled noodles?",
    a: "Hand-pulled noodles (lamian, 拉面) are made by stretching and folding a single piece of dough by hand until it becomes long uniform noodles. Unlike machine-cut or packaged noodles they have a springier, chewier texture that holds broth and sauce differently. We make ours fresh daily.",
  },
  {
    q: "What noodle styles do you offer?",
    a: "Seven hand-pulled noodle styles: Thin (细面), Regular (正常), Thick (粗面), Chive (韭叶), Wide (宽面), Extra Wide (大宽面), and Knife-Sliced (刀削面). Regular served by default — just add a note to your order.",
  },
  {
    q: "Are you the same as Kungfu Ramen?",
    a: "Yes — we recently rebranded from Kungfu Ramen to Kungfu Noodles to better reflect what we've always been about. Same kitchen, same team, same noodles.",
  },
  {
    q: "Do you use MSG?",
    a: "No. We do not use MSG in our cooking.",
  },
  {
    q: "How many locations do you have?",
    a: "Two Valley locations — Tempe at 1845 E Broadway Rd and Chandler. We also operate a food truck at local markets. Follow @kungfuarizona on Instagram for food truck updates.",
  },
  {
    q: "Are you near ASU?",
    a: "Yes — our Tempe location is conveniently located near Arizona State University at 1845 E Broadway Rd Unit 127, Tempe AZ 85282.",
  },
  {
    q: "Do you take reservations?",
    a: "Walk-ins welcome at both locations. Online ordering available for pickup and delivery.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes — order online via the buttons on our website for pickup or delivery.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-[#2a2a2a] last:border-0">
      <button
        id={id}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc2200] focus-visible:ring-inset rounded"
      >
        <span
          className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
            isOpen ? "text-[#cc2200]" : "text-[#f5efe6]"
          }`}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[#c9843a]"
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[#a89888] text-sm leading-relaxed pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      className="bg-[#1a0a0a] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">
        <div ref={headRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#f5efe6]">
              Common Questions
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-6 py-2"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
