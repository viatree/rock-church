'use client';

import { useState, useEffect } from 'react';

const WelcomeSection = () => {
  
  const [scrollY, setScrollY] = useState(0);

  // Scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const parallaxOffset = Math.min(scrollY * 0.5, 100);

    
  return (
    <>
    <section className="relative bg-[url('/images/hands2.png')] bg-cover flex items-end py-4 justify-center h-[300px] overflow-hidden">
    <h1
      className="text-white px-6 py-6 text-[64px] font-semibold z-10 transition-transform duration-200"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      THIS IS HOME
    </h1>
    <div className="absolute inset-0 bg-opacity-30 z-0 " />
  </section>

   <section className="bg-[#fff4ef] px-6 md:px-16 lg:px-24 xl:px-32 py-16">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Image Side */}
    <div className="relative w-full md:w-1/2">
      <img
        src="/images/about.png"
        alt="Church service"
        className="w-full h-[420px] md:h-[480px] object-cover rounded-[32px] shadow-lg"
      />

      {/* Card di bawah gambar */}
      <div className="absolute left-6 right-6 md:right-auto -bottom-10 bg-[#3a1212] text-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">
        <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-xs">
          👤
        </span>
        <p className="text-sm md:text-base font-medium">
          Where Hope Lives and Hearts Grow.
        </p>
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 mt-14 md:mt-0 space-y-6">
      {/* Label ABOUT US */}
      <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a]">
        <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
          ⤾
        </span>
        <span>About Us</span>
      </div>

      <h2 className="text-4xl lg:text-5xl font-semibold text-[#3a1212] leading-tight">
        Building Lives in Christ <br className="hidden md:block" />
        Together
      </h2>

      <p className="text-gray-700 text-base md:text-lg max-w-xl">
        Whether you are new to faith or have been walking with God for years,
        you are welcome here.
      </p>

      {/* Paragraph dengan garis di kiri */}
      <div className="border-l-2 border-gray-300 pl-6 text-gray-600 text-sm md:text-base max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere nunc at libero faucibus, ut pulvinar arcu efficitur.
        Suspendisse blandit, odio non tristique commodo.
      </div>

      <div>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-[#3a1212] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#5a1f1f] transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

  <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-8xl mx-auto">
    <div className="grid gap-y-12 lg:grid-cols-3 items-center">
      {/* KIRI – 2 gambar (hanya muncul di layar lg ke atas) */}
      <div className="hidden lg:flex flex-col gap-6 items-center">
        <img
          src="/images/join-1.jpg" // ganti sesuai gambarmu
          alt="Foto 1"
          className="w-64 h-40 object-cover rounded-3xl shadow-md"
        />
        <img
          src="/images/join-2.jpg"
          alt="Foto 2"
          className="w-72 h-44 object-cover rounded-3xl shadow-md"
        />
      </div>

      {/* TENGAH – teks & tombol */}
      <div className="col-span-1 text-center max-w-xl mx-auto">
        {/* label kecil */}
        <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a] mb-4">
          <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
            ⤾
          </span>
          <span>Why Join Us</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold text-[#3a1212] leading-tight mb-4">
          Discover Your Place <br className="hidden md:block" />
          With Us
        </h2>

        <p className="text-gray-600 text-sm md:text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          lorem vel blandit sollicitudin,
        </p>

        <button className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#3a1212] text-white text-sm font-semibold shadow-md hover:bg-[#5a2828] transition">
          Join Volunteer
        </button>
      </div>

      {/* KANAN – 2 gambar (hanya muncul di layar lg ke atas) */}
      <div className="hidden lg:flex flex-col gap-6 items-center">
        <img
          src="/images/join-3.jpg"
          alt="Foto 3"
          className="w-72 h-44 object-cover rounded-3xl shadow-md"
        />
        <img
          src="/images/join-4.jpg"
          alt="Foto 4"
          className="w-64 h-40 object-cover rounded-3xl shadow-md"
        />
      </div>
    </div>

    {/* Versi mobile / tablet: gambar di bawah teks supaya tidak sempit */}
    <div className="mt-10 grid grid-cols-2 gap-4 lg:hidden">
      <img
        src="/images/join-1.jpg"
        alt="Foto 1"
        className="w-full h-32 object-cover rounded-2xl"
      />
      <img
        src="/images/join-2.jpg"
        alt="Foto 2"
        className="w-full h-32 object-cover rounded-2xl"
      />
      <img
        src="/images/join-3.jpg"
        alt="Foto 3"
        className="w-full h-32 object-cover rounded-2xl"
      />
      <img
        src="/images/join-4.jpg"
        alt="Foto 4"
        className="w-full h-32 object-cover rounded-2xl"
      />
    </div>
  </div>
</section>



    </>
  );
};

export default WelcomeSection;