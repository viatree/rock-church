import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const pathname = router.pathname;

    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState("EN");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuLeft = ["Home", "About", "Services"];
    const menuRight = ["Feed", "Contact"];

    const getPath = (label) => {
        const lower = label.toLowerCase();
        return lower === "home" ? "/" : `/${lower}`;
    };

    const isActive = (path) => pathname === path;

    return (
        <nav
            className={`fixed flex justify-between items-center md:px-16 lg:px-24 xl:px-44 text-[16px] top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white shadow-lg text-[var(--color-text)]"
                    : "bg-transparent text-white"
            }`}
        >
            {/* Menu Kiri */}
            <div className="flex space-x-8">
                {menuLeft.map((item) => {
                    const path = getPath(item);
                    return (
                        <Link href={path} key={item}>
                            <span
                                className={`uppercase font-bold cursor-pointer transition-all ${
                                    isActive(path)
                                        ? "border-b-4 border-[var(--color-primary)] pb-1"
                                        : "opacity-80 hover:opacity-100"
                                }`}
                            >
                                {item}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
                <Image
                    src="/images/logo.png"
                    width={103}
                    height={117}
                    alt="ROCK Malaysia Logo"
                    priority
                />
            </div>

            {/* Menu Kanan + Language */}
            <div className="flex space-x-8 items-center">
                {menuRight.map((item) => {
                    const path = getPath(item);
                    return (
                        <Link href={path} key={item}>
                            <span
                                className={`uppercase font-bold cursor-pointer transition-all ${
                                    isActive(path)
                                        ? "border-b-4 border-[var(--color-primary)] pb-1"
                                        : "opacity-80 hover:opacity-100"
                                }`}
                            >
                                {item}
                            </span>
                        </Link>
                    );
                })}

                {/* Language Selector */}
                <div
                    className={`flex items-center p-1 rounded-3xl transition-all ${
                        isScrolled
                            ? "bg-white border-2 border-black"
                            : "bg-transparent border border-white"
                    }`}
                >
                    <button
                        className={`px-3 py-1 rounded-3xl text-[14px] font-semibold ${
                            language === "ID"
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
                        className={`px-3 py-1 rounded-3xl text-[14px] font-semibold ${
                            language === "EN"
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
