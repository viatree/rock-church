import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Feed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section
        className="
          relative
          bg-[url('/images/bannerfeeds.png')]
          bg-cover
          bg-center
          w-full
          h-[40vh]
          sm:h-[50vh]
          md:h-[60vh]
          lg:h-[90vh]
        "
      />

      {/* Instagram Header */}
      <section className="px-5 sm:px-6 md:px-10 lg:px-24 py-12 md:py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a] mb-5">
            <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
              ⬤
            </span>
            <span>Instagram Feed</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold text-[#3a1212] mb-6">
            Stay Connected With Our Community
          </h1>

          <div className="max-w-3xl mx-auto">
            <div className="border-l-2 border-gray-300 pl-6 text-left text-gray-600 leading-relaxed">
              Follow our latest worship moments, ministry activities,
              church events, and inspiring stories from Rock International
              Ministry. Stay connected and grow together in faith.
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[32px] shadow-xl overflow-hidden p-4 md:p-8">
            <div
              className="elfsight-app-b3d28098-584a-41fa-ad76-dafc135df430"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </section>

    {/* YouTube Header */}
<section className="px-5 sm:px-6 md:px-10 lg:px-24 py-12 md:py-16">
  <div className="max-w-6xl mx-auto text-center">
    <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a] mb-5">
      <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
        ▶
      </span>
      <span>YouTube Channel</span>
    </div>

    <h1 className="text-3xl md:text-5xl font-semibold text-[#3a1212] mb-6">
      Watch Our Latest Sermons & Messages
    </h1>

    <div className="max-w-3xl mx-auto">
      <div className="border-l-2 border-gray-300 pl-6 text-left text-gray-600 leading-relaxed">
        Be encouraged through our latest sermons, worship sessions,
        biblical teachings, testimonies, and special church events from
        Rock International Ministry. Grow in faith through every message.
      </div>
    </div>
  </div>
</section>

{/* YouTube Gallery */}
<section className="px-4 sm:px-6 md:px-10 lg:px-24 pb-20">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white rounded-[32px] shadow-xl overflow-hidden p-4 md:p-8">
      <div
        className="elfsight-app-1c060c1c-eaa8-4be9-9040-b3fe4397f73e"
        data-elfsight-app-lazy
      ></div>
    </div>
  </div>
</section>
    </>
  );
}