"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

const services = [
  {
    category: "SOUL KIDS",
    title: "SOUL Kids",
    description:
      "For ages 3–11, our SOUL Kids meet on Sundays during the services...",
    image: "/images/sundayschool.jpg",
  },
  {
    category: "SOUL YOUTH",
    title: "SOUL Youth",
    description: "Youth services, games, mentoring and more.",
    image: "/images/sundayschool.jpg",
  },
  {
    category: "SOUL YOUNG ADULTS",
    title: "SOUL Young Adults",
    description: "For ages 18–25, connect, grow and serve together.",
    image: "/images/sundayschool.jpg",
  },
  {
    category: "CHAPEL",
    title: "Chapel",
    description:
      "Every Tuesday in term-time, we gather to worship, pray and study...",
    image: "/images/sundayschool.jpg",
  },
  {
    category: "SOUL NURSERY",
    title: "SOUL Nursery",
    description:
      "A warm, loving environment for toddlers and babies during the main service.",
    image: "/images/sundayschool.jpg",
  },
];

const categories = [
  "ALL",
  "SOUL KIDS",
  "SOUL YOUTH",
  "SOUL YOUNG ADULTS",
  "CHAPEL",
  "SOUL NURSERY",
];

const service = () => {
  const [filter, setFilter] = useState("ALL");

  const filteredServices =
    filter === "ALL"
      ? services
      : services.filter((item) => item.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".stack-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredServices]);

  return (
    <>
    <Hero />
      <section className="stacking-wrapper bg-[var(--color-text25)]  text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Church Life</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12">
          There’s so much more to church than Sunday services...
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold border transition ${
                filter === cat
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="stacking-cards">
          {filteredServices.map((service, index) => (
         <div className="stack-card bg-white rounded-[20px] shadow-xl overflow-hidden" key={index}>
  <div className="flex flex-col md:flex-row">
    {/* Text section */}
    <div className="w-full md:w-1/2 px-8 py-10 flex flex-col justify-center">
      <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">{service.title}</h3>
      <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
        {service.description}
      </p>
    </div>

    {/* Image section */}
    <div className="w-full md:w-1/2 p-6">
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</div>

          ))}
        </div>
      </section>
    </>
  );
};

export default service;
