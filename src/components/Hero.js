import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/hero.jpg"
        layout="fill"
        objectFit="cover"
        quality={90}
        alt="Welcome to ROCK Ministry"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">WELCOME TO ROCK MINISTRY</h1>
      </div>
    </section>
  );
};

export default Hero;
