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

    <section className="flex flex-col md:flex-row items-center justify-center md:px-16 lg:px-24 xl:px-43 gap-10 px-6 py-12">
      <div className="relative w-full md:w-1/2 max-w-md">
        <img
          src="/images/about.png"
          alt="Video Thumbnail"
          className=" shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-50">
        <h2 className="text-4xl font-bold text-[#3a1212] mb-4">
          WELCOME TO OUR CHURCH!
        </h2>
        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="font-semibold">R.O.C.K COMMUNITY MALAYSIA IS A CHURCH</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec volutpat in. Enim potenti nulla ac mauris at.
              Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec volutpat in...
            </p>
          </div>
          <div>
            <h3 className="font-semibold">R.O.C.K COMMUNITY MALAYSIA IS A CHURCH</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec volutpat in. Enim potenti nulla ac mauris at.
              Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec volutpat in...
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WelcomeSection;
