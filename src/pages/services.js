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
      <section className="relative bg-[url('/images/hands2.png')] bg-cover flex items-end py-6 justify-center h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-opacity-30 z-0 " />
      </section>
   <section className="bg-[#fff7f2] py-20 px-6 md:px-16 lg:px-24">
  <div className="max-w-8xl mx-auto">
    {/* GRID UTAMA: TEXT KIRI + ROW PERTAMA KARTU */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

      {/* TEXT KIRI */}
      <div className="lg:col-span-1 relative">
        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#b0846a] mb-3">
          Connect With Community
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3a1212] leading-tight mb-4">
          Empowering Worship<br />Experiences
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Extend Love Beyond the Sanctuary
        </p>
      </div>

      {/* ROW 1: 2 KARTU */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filteredServices.slice(0, 2).map((service, index) => (
          <div
            key={index}
            className="group bg-[#f3ebe4] rounded-[26px] px-10 py-12 shadow-sm transition min-h-[260px] hover:bg-[#3a1212] hover:shadow-lg hover:-translate-y-1 flex flex-col justify-center"
          >
            {/* DEFAULT */}
            <div className="group-hover:hidden">
              {service.icon ? (
                <Image src={service.icon} alt={service.title} width={56} height={56} className="mb-6"/>
              ) : (
                <div className="mb-6 w-12 h-12 rounded-full border border-[#3a1212]/30 flex items-center justify-center text-[#3a1212]">✨</div>
              )}
              <h3 className="text-xl font-semibold text-[#3a1212] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>

            {/* HOVER */}
            <div className="hidden group-hover:flex flex-col justify-center text-center text-white">
              <p className="mb-4">{service.hoverText || service.description}</p>
              <button className="text-xs tracking-[0.25em] uppercase">More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ROW 2: 3 KARTU – FULL WIDTH */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredServices.slice(2, 5).map((service, index) => (
        <div
          key={index}
          className="group bg-[#f3ebe4] rounded-[26px] px-10 py-12 shadow-sm transition min-h-[260px] hover:bg-[#3a1212] hover:shadow-lg hover:-translate-y-1 flex flex-col justify-center"
        >
          {/* DEFAULT */}
          <div className="group-hover:hidden">
            {service.icon ? (
              <Image src={service.icon} alt={service.title} width={56} height={56} className="mb-6"/>
            ) : (
              <div className="mb-6 w-12 h-12 rounded-full border border-[#3a1212]/30 flex items-center justify-center text-[#3a1212]">✨</div>
            )}
            <h3 className="text-xl font-semibold text-[#3a1212] mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.description}</p>
          </div>

          {/* HOVER */}
          <div className="hidden group-hover:flex flex-col justify-center text-center text-white">
            <p className="mb-4">{service.hoverText || service.description}</p>
            <button className="text-xs tracking-[0.25em] uppercase">More Info</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </>
  );
};

export default Services;
