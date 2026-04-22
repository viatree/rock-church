'use client';

import { useState, useEffect } from 'react';
import CommunitySection from "@/components/Community";
import { ChevronRight } from 'lucide-react';

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

    const [activeFaq, setActiveFaq] = useState(0);

const faqItems = [
  {
    title: 'Seasonal Celebrations',
    content:
      'We celebrate important spiritual moments together with worship, fellowship, and reflection.',
  },
  {
    title: 'Prayer and Healing Circle',
    content:
      'A special gathering for prayer, healing, and encouragement in faith.',
  },
];
  return (
    <>
  {/* HERO BANNER */}
      <section className="relative bg-[url('/images/hands2.png')] bg-cover bg-center h-screen flex items-center justify-center overflow-hidden">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55 z-0" />

        {/* content */}
        <div
          className="relative z-10 text-center text-white px-6 max-w-5xl transition-transform duration-200"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight">
            Embracing Faith. <br />
            Celebrating Grace.
          </h1>

          <p className="mt-6 text-sm md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
            HeavenlyHope Church is a Christ-centered community where faith,
            love, and hope come alive. We believe in creating a warm and
            welcoming environment for individuals and families to grow spiritually.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Read More
            </a>

            <a
              href="#"
              className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* bottom left testimonial */}
        <div className="absolute bottom-8 left-8 z-10 hidden md:flex items-center gap-4 text-white">
        </div>

        {/* bottom right social */}
        <div className="absolute bottom-8 center-8 z-10 hidden md:flex items-center gap-4 text-white">
          <span className="font-medium">Social Media :</span>

          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
              f
            </a>
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
              t
            </a>
            <a className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
              ▶
            </a>
          </div>
        </div>
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
    <CommunitySection />
    <section className="bg-[#f8f6f4] py-20">
  <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[320px]">

    {/* CARD 1 */}
    <div className="bg-[#f8f6f4] flex flex-col items-center justify-center text-center px-8">
      <h3 className="text-5xl font-semibold text-[#2b1d1d] mb-4">
        Sarah Davy
      </h3>
      <p className="text-gray-500 mb-8">Faith Consultant</p>
      <button className="bg-[#2b1d1d] text-white px-8 py-3 tracking-[0.15em] uppercase text-sm">
        Contact Me
      </button>
    </div>

    {/* IMAGE 1 */}
    <div>
      <img
        src="/images/grid1.jpg"
        alt="Prayer"
        className="w-full h-full object-cover"
      />
    </div>

    {/* IMAGE 2 */}
    <div>
      <img
        src="/images/grid2.jpg"
        alt="Prayer bench"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CARD 2 */}
    <div className="relative">
      <img
        src="/images/grid3.jpg"
        alt="Bible"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-[#f5f1ef] px-16 py-12 text-center shadow-md">
          <h3 className="text-3xl font-semibold text-[#2b1d1d] mb-3">
            Faith
          </h3>
          <p className="text-gray-500">Unity in diversity</p>
        </div>
      </div>
    </div>

    {/* IMAGE 3 */}
    <div>
      <img
        src="/images/grid4.jpg"
        alt="Support"
        className="w-full h-full object-cover"
      />
    </div>

    {/* IMAGE 4 */}
    <div>
      <img
        src="/images/grid5.jpg"
        alt="Reading Bible"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CARD 3 */}
    <div className="bg-[#f8f6f4] flex flex-col items-center justify-center text-center px-8">
      <h3 className="text-5xl font-semibold text-[#2b1d1d] mb-4">
        David Smit
      </h3>
      <p className="text-gray-500 mb-8">Approach to prayer</p>
      <button className="bg-[#2b1d1d] text-white px-8 py-3 tracking-[0.15em] uppercase text-sm">
        Contact Me
      </button>
    </div>

    {/* IMAGE 5 */}
    <div>
      <img
    
        src="/images/grid6.jpg"
        alt="Prayer portrait"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
    <section className="bg-[#f8f6f4] px-6 md:px-16 lg:px-24 xl:px-32 py-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT IMAGE */}
    <div className="relative">
      <img
        src="/images/faq2.png"
        alt="Church worship"
        className="w-full h-[650px] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute bottom-16 left-0 right-0 text-center text-white px-6">
        <h3 className="text-3xl font-semibold mb-3">
          Liturgy of the Hours
        </h3>
        <p className="text-sm md:text-base text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit dolor
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-white"></span>
        <span className="w-2 h-2 rounded-full bg-white/40"></span>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <p className="text-[#b08b7a] tracking-[0.15em] uppercase text-sm mb-4">
        A Tapestry of Services For Every Soul
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-[#2b1d1d] leading-tight mb-6">
        Diverse Paths of Worship
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        At Chapel Church, our services are crafted to resonate with the diversity
        of your spiritual journey.
      </p>

      <p className="text-gray-600 leading-relaxed mb-10">
        Explore worship experiences where every service is a unique expression
        of devotion and unity.
      </p>

      {/* FAQ */}
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-[#d7ccc8] pb-4">
            <button
              onClick={() =>
                setActiveFaq(activeFaq === index ? null : index)
              }
              className="w-full flex justify-between items-center py-4"
            >
              <div className="flex items-center gap-4">
                <ChevronRight
                  className={`transition-transform duration-300 ${
                    activeFaq === index ? 'rotate-90' : ''
                  }`}
                />
                <span className="text-2xl text-[#2b1d1d] font-medium">
                  {item.title}
                </span>
              </div>
            </button>

            {activeFaq === index && (
              <div className="pl-10 text-gray-600 pb-2">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-10 bg-[#3a2020] text-white px-10 py-4 uppercase tracking-[0.15em] text-sm hover:bg-[#4d2a2a] transition">
        Contact Us
      </button>
    </div>
  </div>
</section>


    </>
  );
};

export default WelcomeSection;