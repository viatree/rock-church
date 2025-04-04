
import { NextSeo } from "next-seo";
import Hero from "@/components/Hero";

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
    </>
  );
}
