import { useRef } from "react";

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
];

export default function CommunitySection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: dir === "up" ? -270 : 270,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#c3963e] md:px-16 lg:px-24 xl:px-43 py-10 flex flex-col md:flex-row items-start gap-10">
      {/* Teks kiri */}
      <div className="md:w-1/3 text-white font-extrabold text-4xl md:text-5xl leading-tight drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] uppercase">
        LET’S ME<br />
        TAKE<br />
        YOU TO<br />
        COMMUNITY
      </div>

      {/* Kanan: Card viewer */}
      <div className="md:w-2/3 flex flex-col items-center relative">
        {/* Tombol atas */}
        <button
          onClick={() => scroll("up")}
          className="absolute top-[20px] z-10 bg-[#7b1b30] text-white p-3 rounded-full shadow-md hover:scale-105 transition"
        >
          ↑
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="relative h-[360px] w-[90vw] md:w-[550px] overflow-y-scroll my-10 scroll-smooth snap-y snap-mandatory"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#7b1b30] text-white w-full h-[250px] rounded-md overflow-hidden shadow-lg mb-5 relative snap-start"
            >
              <img
                src={card.img}
                alt="KGC"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative p-6 z-10">
                <h3 className="text-2xl font-bold uppercase">{card.title}</h3>
                <p className="text-sm mt-2 whitespace-pre-line">
                  {card.desc}
                </p>
                <a href="#" className="mt-4 inline-block text-[#c3963e] font-bold">
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol bawah */}
        <button
          onClick={() => scroll("down")}
          className="absolute bottom-[20px] z-10 bg-[#7b1b30] text-white p-3 rounded-full shadow-md hover:scale-105 transition"
        >
          ↓
        </button>
      </div>
    </section>
  );
}
