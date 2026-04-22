"use client";

import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-[#fff7f2] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.7fr,1.3fr] gap-12 items-center">
        {/* BAGIAN KIRI – KOLOM FOTO */}
        <div className="grid grid-cols-[1.1fr,1fr] gap-6">
          {/* Foto besar kiri */}
          <div className="relative h-[380px] md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/images/pastor.jpg"          // ganti dengan path gambar kamu
              alt="Pastor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Dua foto bertumpuk */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[180px] md:h-[220px] lg:h-[240px] rounded-3xl overflow-hidden">
              <Image
                src="/images/prayer.jpg"       // ganti dengan path gambar kamu
                alt="Prayer"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative h-[180px] md:h-[220px] lg:h-[240px] rounded-3xl overflow-hidden">
              <Image
                src="/images/bible.jpg"        // ganti dengan path gambar kamu
                alt="Bible Study"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BAGIAN KANAN – TEKS & HIGHLIGHT */}
        <div>
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#b0846a] mb-3">
            Journey of Faith
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#3a1212] leading-tight mb-5">
            Community of Believers
          </h2>

          <p className="text-sm md:text-base text-gray-700 mb-8">
            Welcome to [Your Church Name], where the doors are open, and hearts
            are warmer. Our community is a haven for seekers and a home for the
            faithful, fostering spiritual growth, fellowship, and a shared
            commitment to love and compassion.
          </p>

          {/* Dua baris “service” seperti di gambar */}
          <div className="space-y-8">
            {/* Worship Services */}
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/images/church-building.jpg"   // gambar kecil kiri
                  alt="Worship Services"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#3a1212] mb-1">
                  Worship Services
                </h3>
                <p className="text-sm text-gray-700">
                  Experience uplifting worship and join us in heartfelt praise
                  every week.
                </p>
              </div>
            </div>

            {/* Community Outreach */}
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="/images/outreach.jpg"          // gambar kecil kiri
                  alt="Community Outreach"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#3a1212] mb-1">
                  Community Outreach
                </h3>
                <p className="text-sm text-gray-700">
                  Explore opportunities to make a difference and extend love
                  beyond the sanctuary.
                </p>
              </div>
            </div>
          </div>

          {/* Tombol Mass Times */}
          <button className="mt-10 inline-flex items-center px-10 py-3 rounded-full bg-[#3a1212] text-white text-xs md:text-sm tracking-[0.25em] uppercase">
            Mass Times
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
