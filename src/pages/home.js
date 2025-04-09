
import { NextSeo } from "next-seo";
import Hero from "@/components/Hero";
import VideoSection from "@/components/Videosection";

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

      <section className="px-8 md:px-16 lg:px-24 xl:px-43 py-20 bg-white text-balance">
        <h2 className="text-center text-4xl md:text-5xl font-black uppercase mb-16  text-[var(--color-text)]">
          Welcome to our church!
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-justify">
          <img
            src="/images/church.png"
            alt="Church Community"
            className="w-full shadow-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold mb-4 pt-10 text-[var(--color-text)]">
              R.O.C.K COMMUNITY MALAYSIA IS A CHURCH
            </h3>
            <p className="text-[16px] text-[var(--color-text)] text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec
              volutpat in. Enim potenti nulla ac mauris at. Lorem ipsum dolor sit
              amet consectetur. Ut ut quis tristique donec volutpat in. Enim potenti
              nulla ac mauris at. Lorem ipsum dolor sit amet consectetur. Ut ut quis
              tristique donec volutpat in.
            </p>
          </div>
        </div>
      </section>
      <VideoSection />

      {/* Be a Part of Community Section */}
      <section className="px-8 md:px-16 lg:px-24 xl:px-43 py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-12 text-[var(--color-text)]">
          Be a part of community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/images/comm1.png"
            alt="Bible Study"
            className="w-full h-60 object-cover shadow-md"
          />
          <img
            src="/images/comm2.png"
            alt="Fellowship"
            className="w-full h-60 object-cover shadow-md"
          />
          <img
            src="/images/comm3.png"
            alt="Prayer Group"
            className="w-full h-60 object-cover shadow-md"
          />
        </div>
      </section>

      {/* Prayer Service Section */}
      <section
        className="relative w-full py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hands.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-0" />
        <div className="relative z-10 px-8md:px-16 lg:px-24 xl:px-43">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Kiri */}
            <div className="text-center md:text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Prayer Service</h2>
              <a
                href="https://wa.me/yourwhatsappnumber"
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
