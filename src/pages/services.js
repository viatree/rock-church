"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

const Services = () => {
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
      {/* <section className="relative bg-[url('/images/hands2.png')] bg-cover flex items-end py-6 justify-center h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-opacity-30 z-0 " />
      </section> */}

      <section className="relative bg-[var(--color-secondary)] ">
        {/* Maroon background box behind text */}
        <div className="absolute top-0 left-40 h-200 w-[700px] bg-[#5e1f2e] md:px-16 lg:px-24 xl:px-43" />
        {/* Background image */}
        <div className="w-350 h-[650px] overflow-hidden">
          <Image
            src="/images/services.png"
            alt="Prayer"
            fill
            className=" mt-40 ml-15 md:px-16 lg:px-24 xl:px-43 "
          />
        </div>
        {/* Text over image */}
        <div className="absolute top-0 left-25 w-full h-full z-20 flex items-start justify-start px-6 md:px-16 lg:px-24 pt-10 md:pt-20">
          <h1
            className="text-4xl md:text-6xl font-extrabold uppercase  max-w-lg stroke-2 stroke-[#C69E46]  "
            style={{
              color: "#852139", // Isi huruf
              WebkitTextStroke: "4px #C69E46",
              WebkitTextStrokeColor: "#C69E46",
              WebkitTextStrokeWidth: "1px",

            }}
          >
            <span className="block ">Rock</span>
            <span className="block">International</span>
            <span className="block">Ministry</span>
            <span className="block">Malaysia</span>
            <span className="block">Services</span>
          </h1>

        </div>
      </section>

      <section className=" py-16 px-6 md:px-24 stacking-wrapper bg-[var(--color-text25)] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Church Life</h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-12">
          There’s so much more to church than Sunday services...
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold border transition ${filter === cat
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
           <div className="stack-card bg-white rounded-[30px] shadow-2xl overflow-hidden w-full max-w-[1200px] min-h-[400px] mx-auto my-8">
           <div className="flex flex-col md:flex-row">
             <div className="w-full md:w-1/2 px-10 py-12 flex flex-col justify-center text-left">
               <h3 className="text-4xl font-bold text-black mb-6">{service.title}</h3>
               <p className="text-lg text-gray-700 leading-relaxed">
                 {service.description}
               </p>
             </div>
             <div className="w-full md:w-1/2 p-6">
               <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden">
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

export default Services;
