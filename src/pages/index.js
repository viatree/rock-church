
import { NextSeo } from "next-seo";
import Hero from "@/components/Hero";
import VideoSection from "@/components/Videosection";
import CommunitySection from "@/components/Community";

export default function Home() {
  return (
    <>
      <NextSeo
        title="ROCK Ministry Malaysia"
        description="Welcome to ROCK Ministry Malaysia, a place to worship and grow in faith."
        openGraph={{
          type: "website",
          url: "https://www.rockministry.org",
          title: "ROCK Ministry",
          description: "Join us in worship and community.",
          images: [{ url: "https://www.rockministry.org/images/hero.jpg" }],
        }}
      />
      <Hero />
<section className="bg-[#fff4ef] py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    {/* Image Side */}
    <div className="w-full md:w-1/2 relative">
      <img
        src="/images/about-hero.jpg" // ganti dengan path gambar kamu
        alt="Worship in church"
        className="w-full h-[420px] md:h-[500px] object-cover rounded-[32px] shadow-lg"
      />

      {/* Card di bawah gambar */}
      <div className="absolute left-6 -bottom-10 right-6 md:right-auto bg-[#3a1212] text-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">
        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-lg">👤</span>
        </span>
        <p className="text-sm md:text-base font-medium">
          Where Hope Lives and Hearts Grow.
        </p>
      </div>
    </div>

    {/* Text Side */}
    <div className="w-full md:w-1/2 space-y-6 mt-12 md:mt-0">
      {/* ABOUT US label */}
      <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a]">
        <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
          ⬤
        </span>
        <span>About Us</span>
      </div>

      <h2 className="text-4xl lg:text-5xl font-semibold text-[#3a1212] leading-tight">
        Building Lives in Christ Together
      </h2>

      <p className="text-gray-700 text-base md:text-lg max-w-xl">
        Whether you are new to faith or have been walking with God for years,
        you are welcome here.
      </p>

      {/* Paragraph dengan garis di kiri */}
      <div className="border-l-2 border-gray-300 pl-6 text-gray-600 text-sm md:text-base max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere nunc at libero faucibus, ut pulvinar arcu efficitur. Suspendisse
        blandit, odio non tristique commodo.
      </div>

      <div>
        <a
          href="/church.png"
          className="inline-flex items-center justify-center bg-[#3a1212] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#5c1b1b] transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

</section>

      <VideoSection />
      <CommunitySection />

      <section
        className="relative w-full py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hands.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-0" />
        <div className="relative z-10 px-8md:px-16 lg:px-24 xl:px-43">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="text-center md:text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Prayer Service</h2>
              <a
                href="https://wa.me/601123457622"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
              >
                Chat Via WhatsApp
              </a>
            </div>

            {/* Kanan */}
            <div className="text-lg font-light leading-relaxed md:text-xl text-center">
              <p>
                Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
