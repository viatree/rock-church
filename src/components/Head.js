import Head from "next/head";

const SEO = () => {
  return (
<Head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Church",
      name: "ROCK Ministry",
      url: "https://www.rockministry.org",
      logo: "https://www.rockministry.org/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 10, lantai 1, komplek PJ 21, jalan SS3 / 39,Petaling Jaya Selangor",
        addressLocality: "Malaysia",
        addressCountry: "MY",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6011-2345-7622",
        contactType: "Call Services",
      },
      sameAs: [
        "https://www.facebook.com/rockmalaysia.org",
        "https://www.instagram.com/rock.malaysia",
        "http://www.youtube.com/@rock.malaysia",
        
      ],
    }),
  }}
/>
</Head>

);
};

export default SEO;