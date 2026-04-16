"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const dishes = [
  {
    name: "Signature Beef Noodle Soup",
    chinese: "招牌牛肉面",
    price: "$14.99",
    desc: "Hand-pulled noodles in rich beef bone broth, topped with braised beef brisket, meatball, and tendon. Choose your noodle style.",
    tag: "Best Seller",
    image: "/images/signature-beef-noodle.jpeg",
    alt: "Signature beef noodle soup at Kungfu Noodles",
  },
  {
    name: "Spicy Beef Noodle Soup",
    chinese: "辣牛肉面",
    price: "$14.99",
    desc: "The same rich broth with a Szechuan chili kick. Numbing, bold, and deeply satisfying.",
    tag: "Spicy",
    image: "/images/spicy-beef-noodle.jpeg",
    alt: "Spicy beef noodle soup with Szechuan chili at Kungfu Noodles",
  },
  {
    name: "Xiao Long Bao",
    chinese: "小笼包",
    price: "$11.99",
    desc: "Eight hand-pleated soup dumplings. Filled with seasoned pork and hot broth. Bite carefully.",
    tag: "Fan Favorite",
    image: "/images/xiaolong-bao.jpeg",
    alt: "Xiao Long Bao soup dumplings at Kungfu Noodles",
  },
  {
    name: "Hot Chili Dumplings",
    chinese: "红油水饺",
    price: "$6.99",
    desc: "Six dumplings bathed in house-made chili oil. A customer favorite since day one.",
    tag: "Spicy",
    image: "/images/hot-chili-dumplings.jpeg",
    alt: "Hot chili dumplings in spicy oil at Kungfu Noodles",
  },
  {
    name: "Dan Dan Noodles",
    chinese: "担担面",
    price: "$12.99",
    desc: "Hand-pulled noodles with minced beef, Szechuan spicy sauce, peanuts, and scallions.",
    tag: "Chef's Pick",
    image: "/images/dan-dan-mian.jpeg",
    alt: "Dan Dan noodles with Szechuan spicy sauce at Kungfu Noodles",
  },
  {
    name: "Cumin Lamb",
    chinese: "孜然羊肉",
    price: "$14.99",
    desc: "Wok-tossed lamb with cumin, chili, and aromatics. A northern Chinese classic.",
    tag: "Northern Classic",
    image: "/images/cumin-lamb-noodles.jpeg",
    alt: "Cumin lamb wok-tossed dish at Kungfu Noodles",
  },
];

function DishCard({
  dish,
  index,
}: {
  dish: (typeof dishes)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#cc2200]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#cc2200]/10"
    >
      {/* Image */}
      <div className="relative w-full aspect-video bg-[#0d0d0d] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Tag badge overlay */}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-medium text-[#c9843a] border border-[#c9843a]/40 rounded-full px-2 py-0.5 bg-[#0d0d0d]/80 backdrop-blur">
            {dish.tag}
          </span>
        </div>
      </div>

      {/* Dish info */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-lg text-[#f5efe6] leading-snug mb-1">
          {dish.name}
        </h3>
        <span
          className="font-serif text-sm text-[#c9843a] tracking-wide block mb-3"
          lang="zh"
        >
          {dish.chinese}
        </span>
        <p className="text-[#a89888] text-sm leading-relaxed mb-4">{dish.desc}</p>

        {/* Price */}
        <div className="font-serif font-bold text-xl text-[#cc2200]">
          {dish.price}
        </div>
      </div>
    </motion.article>
  );
}

export default function SignatureDishes() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="signature"
      className="bg-[#1a0a0a] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Signature dishes"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              Signature
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#f5efe6] leading-tight">
              What People Keep<br />
              <span className="text-[#cc2200]">Coming Back For</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-[#c9843a] hover:text-[#e8a55a] text-sm font-medium transition-colors duration-200"
          >
            View full menu
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
