import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Feed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-[#2A0A0A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Instagram Feed
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Stay connected with the latest updates, worship moments,
              community activities, and ministry highlights from
              Rock International Ministry.
            </p>
          </div>
        </section>

        {/* Feed Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 md:p-8">
            <div className="elfsight-app-759fa34b-bf4a-43e4-9a13-3f7ec82dbd77" />
          </div>
        </section>
      </main>
    </>
  );
}