import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config.mjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <DefaultSeo {...SEO} />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}