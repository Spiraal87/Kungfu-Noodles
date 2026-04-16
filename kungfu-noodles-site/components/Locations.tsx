"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hours = [
  { days: "Mon – Thu", time: "11am – 9pm" },
  { days: "Fri – Sat", time: "11am – 10pm" },
  { days: "Sunday", time: "11am – 9pm" },
];

function LocationCard({
  title,
  address,
  phone,
  mapsEmbed,
  orderHref,
  hours: locationHours,
  note,
  index,
}: {
  title: string;
  address: string;
  phone?: string;
  mapsEmbed: string;
  orderHref: string;
  hours: { days: string; time: string }[];
  note?: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden"
    >
      {/* Map embed */}
      <div className="aspect-video bg-[#0d0d0d] relative">
        {mapsEmbed ? (
          <iframe
            src={mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Google Maps — ${title}`}
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-20" aria-hidden="true">📍</span>
            {/* Developer note: Chandler map embed to be added when address confirmed */}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl text-[#f5efe6] mb-1">{title}</h3>

        {note && (
          <p className="text-[#a89888] text-xs mb-3 italic">{note}</p>
        )}

        <div className="space-y-3 mb-6">
          {/* Address */}
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 text-[#cc2200] mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <address className="not-italic text-[#a89888] text-sm leading-snug">
              {address}
            </address>
          </div>

          {/* Phone */}
          {phone && (
            <div className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-[#cc2200] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="text-[#a89888] text-sm hover:text-[#f5efe6] transition-colors duration-200"
              >
                {phone}
              </a>
            </div>
          )}

          {/* Hours */}
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 text-[#cc2200] mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-sm">
              {locationHours.map((h) => (
                <div key={h.days} className="flex gap-3">
                  <span className="text-[#a89888] w-28">{h.days}</span>
                  <span className="text-[#f5efe6]/80">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 bg-[#cc2200] hover:bg-[#e02500] text-[#f5efe6] font-semibold text-sm rounded transition-colors duration-200"
        >
          Order {title.split(" ")[0]}
        </a>
      </div>
    </motion.article>
  );
}

export default function Locations() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="locations"
      className="bg-[#0d0d0d] py-20 sm:py-28 px-4 sm:px-6"
      aria-label="Restaurant locations"
    >
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-[#cc2200] text-sm tracking-widest uppercase mb-3 block">
              Visit Us
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#f5efe6]">
              Two Valley Locations
            </h2>
            <p className="text-[#a89888] mt-3 text-sm">
              Tempe &amp; Chandler &nbsp;·&nbsp; Same handmade standards at both
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LocationCard
            index={0}
            title="Tempe Location"
            address={"1845 E Broadway Rd Unit 127\nTempe, AZ 85282\n(Near Arizona State University)"}
            phone="(480) 268-7331"
            mapsEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.9!2d-111.9213!3d33.4128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI0JzQ2LjEiTiAxMTHCsDU1JzE2LjciVw!5e0!3m2!1sen!2sus!4v1234567890"
            orderHref="https://pos.chowbus.com/online-ordering/store/21094"
            hours={hours}
          />
          <LocationCard
            index={1}
            title="Chandler Location"
            address={"2886 N Alma School Rd Suite A\nChandler, AZ 85224\n(Chandler Central Center)"}
            phone="(480) 292-8142"
            mapsEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0!2d-111.8413!3d33.3077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzI3LjciTiAxMTHCsDUwJzI4LjciVw!5e0!3m2!1sen!2sus!4v1234567890"
            orderHref="https://pos.chowbus.com/online-ordering/store/21094"
            hours={hours}
          />
        </div>
      </div>
    </section>
  );
}
