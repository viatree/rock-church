
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

      <section className="bg-[#f6f6f6] py-16 px-6 md:px-24 text-center md:text-left flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:px-16 lg:px-24 xl:px-43">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3a1212]">
            A PLACE TO BELONG
          </h2>
          <p className="text-gray-700 text-lg">
            At R.O.C.K Community Malaysia, we believe church should feel like home. Whether you're new or have been around for a while, you're welcome here.
          </p>
          <div>
            <a
              href="#"
              className="inline-block bg-[#3a1212] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#5c1b1b] transition"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/church.png"
            alt="Community"
            className="w-full shadow-xl"
          />
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
