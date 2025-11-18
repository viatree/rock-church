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
    <section className="bg-[#fff7f2] py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14">
    {/* Kiri: heading + subheading */}
    <div className="lg:w-1/3 relative">
      {/* background daun opsional */}
      <div className="pointer-events-none absolute -top-10 -left-10 -z-10 opacity-40">
        {/* kalau punya ilustrasi daun sendiri, taruh di sini */}
        {/* <Image src="/images/leaf-bg.png" alt="" width={260} height={260} /> */}
      </div>

      <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#b0846a] mb-3">
        Connect With Community
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3a1212] leading-tight mb-4">
        Empowering Worship
        <br />
        Experiences
      </h2>
      <p className="text-sm md:text-base text-gray-700">
        Extend Love Beyond the Sanctuary
      </p>
    </div>

    {/* Kanan: grid card seperti contoh (2 baris x 3 kolom) */}
    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service, index) => (
        <div
          key={service.id || index}
          className="bg-[#f3ebe4] rounded-[24px] px-8 py-10 flex flex-col justify-center text-left shadow-sm hover:shadow-md hover:-translate-y-1 transition"
        >
          {/* Kalau punya icon di data, pakai ini */}
          {service.icon && (
            <div className="mb-6">
              <Image
                src={service.icon}
                alt={service.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          )}

          {/* Kalau belum punya icon, bisa pakai placeholder lingkaran */}
          {!service.icon && (
            <div className="mb-6 w-12 h-12 rounded-full border border-[#3a1212]/30 flex items-center justify-center text-[#3a1212] text-xl">
              ✨
            </div>
          )}

          <h3 className="text-lg md:text-xl font-semibold text-[#3a1212] mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-700">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default Services;
