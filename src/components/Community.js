import { useRef, useEffect, useState } from "react";

const cards = [
  {
    img: "/images/church.png",
    title: "Kingdom Generation Community",
    desc: "KINGDOM GENERATION COMMUNITY OR WE CAN CALLED KGC IS\nLOREM IPSUM DOLOR",
  },
  {
    img: "/images/comm1.png",
    title: "Kingdom Generation Community",
    desc: "KGC FOCUSES ON YOUTH EMPOWERMENT\nAND SPIRITUAL GROWTH",
  },
  {
    img: "/images/comm2.png",
    title: "Kingdom Generation Community",
    desc: "CONNECT. GROW. SERVE.\nJOIN OUR GLOBAL MOVEMENT",
  },
  {
    img: "/images/comm3.png", // ganti dengan gambar ke-4 milikmu
    title: "Kingdom Generation Community",
    desc: "BUILDING STRONG COMMUNITIES\nTHROUGH FAITH & FELLOWSHIP",
  },
];

export default function CommunitySection() {
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // pantau scroll window untuk efek parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // offset parallax: card 1 & 3 (index 0 & 2) naik, 2 & 4 (1 & 3) turun
  const getCardOffset = (index) => {
    const base = Math.min(scrollY * 0.08, 40); // batas max 40px
    return index % 2 === 0 ? -base : base;
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header atas seperti contoh */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* kiri: label + title */}
          <div className="md:w-1/2">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#b0846a]">
              Connecting in Spirit
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl font-semibold text-[#3a1212]">
              Divine Communion
            </h2>
          </div>

          {/* kanan: deskripsi + tombol */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end gap-4">
            <p className="text-gray-600 text-sm md:text-base max-w-md text-left md:text-right">
              Our Mass services provide a space for spiritual renewal, communal
              connection, and the celebration of the divine presence.
            </p>
            <button className="px-6 py-3 bg-[#3a1212] text-white text-sm font-semibold tracking-wide rounded-none md:rounded-sm hover:bg-[#5a2828] transition">
              View All
            </button>
          </div>
        </div>

        {/* Grid card 4 kolom */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center"
              style={{
                transform: `translateY(${getCardOffset(i)}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="w-full overflow-hidden rounded-md shadow-md">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-72 object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg md:text-xl font-semibold text-[#3a1212]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 whitespace-pre-line">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
