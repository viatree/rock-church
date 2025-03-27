import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <NextSeo
        title="ROCK Ministry - Church Community"
        description="Welcome to ROCK Ministry, a place to worship and grow in faith."
        openGraph={{
          type: "website",
          url: "https://www.rockministry.com",
          title: "ROCK Ministry",
          description: "Join us in worship and community.",
          images: [{ url: "https://www.rockministry.com/images/hero.jpg" }],
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "ROCK Ministry",
              url: "https://www.rockministry.com",
              logo: "https://www.rockministry.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Church Street",
                addressLocality: "Jakarta",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-812-3456-7890",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.facebook.com/rockministry",
                "https://www.instagram.com/rockministry",
              ],
            }),
          }}
        />
      </Head>

      <main>
        <h1>Welcome to ROCK Ministry</h1>
      </main>
    </>
  );
}
