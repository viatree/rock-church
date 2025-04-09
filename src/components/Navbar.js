import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("ID");

  useEffect(() => {
    // Event listener untuk menangani scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed flex justify-between items-center bg-transparent md:px-16 lg:px-24 xl:px-43 text-[16px] top-0 w-full z-50 ${isScrolled ? "bg-white shadow-lg text-[var(--color-text)]" : "bg-transparent text-white"
        }`}
    >
      {/* MENU KIRI */}
      <div className="flex space-x-8">
        {["Home", "About", "Services"].map((item) => (
          <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} key={item}>
            <span
              className={`uppercase font-bold cursor-pointer transition-all ${active === item
                ? "border-b-4 border-[var(--color-primary)] pb-1"
                : "opacity-80 hover:opacity-100"
                }`}
              onClick={() => setActive(item)}
            >
              {item}
            </span>
          </Link>
        ))}
      </div>

      {/* LOGO */}
      <div className="flex-shrink-0">
        <Image src="/images/logo.png" width={103} height={117} alt="ROCK Malaysia Logo" />
      </div>

      {/* MENU KANAN */}
      <div className="flex space-x-8 items-center">
        {["Feed", "Contact"].map((item) => (
          <Link href={`/${item.toLowerCase()}`} key={item}>
            <span
              className={`uppercase font-bold cursor-pointer transition-all ${active === item
                ? "border-b-4 border-[var(--color-primary)] pb-1"
                : "opacity-80 hover:opacity-100 col"
                }`}
              onClick={() => setActive(item)}
            >
              {item}
            </span>
          </Link>
        ))}

        {/* Language Selector */}
        <div
          className={`flex items-center p-1 rounded-3xl transition-all ${isScrolled ? "bg-white border-2 border-black" : "bg-transparent border border-white"
            }`}
        >
          <button
            className={`px-3 py-1 rounded-3xl text-[14px] font-semibold ${language === "ID"
                ? "bg-[var(--color-primary)] text-white"
                : isScrolled
                  ? "text-black"
                  : "text-white"
              }`}
            onClick={() => setLanguage("ID")}
          >
            ID
          </button>
          <button
            className={`px-3 py-1 rounded-3xl text-[14px] font-semibold ${language === "EN"
                ? "bg-[var(--color-primary)] text-white"
                : isScrolled
                  ? "text-black"
                  : "text-white"
              }`}
            onClick={() => setLanguage("EN")}
          >
            EN
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;