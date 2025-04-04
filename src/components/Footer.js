import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-16 px-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-18">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image src="/images/footer.png" alt="RIM Logo" width={140} height={50} />
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start">
            <h3 className="text-md font-bold">CONTACT US</h3>
            <div className="flex items-center mt-4">
              <img src="/images/telp.png" alt="Telpon" className="w-4 h-4 mr-2" />
              <p className="text-xs">+601123457622</p>
            </div>
            <div className="flex items-center mt-2">
              <img src="/images/email.png" alt="Email" className="w-4 h-4 mr-2" />
              <p className="text-xs">rockmalaysia@gmail.com</p>
            </div>
          </div>

          {/* Alamat */}
          <div className="flex flex-col items-start">
            <h3 className="text-md font-bold">ADDRESS</h3>
            <p className="mt-4 text-xs">No 10, lantai 1, komplek PJ 21, jalan SS3 / 39 Petaling Jaya Selangor, 47300 Selangor.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-md font-bold">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-[var(--color-lighter)]">About</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-lighter)]">Services</Link></li>
              <li><Link href="/feed" className="hover:text-[var(--color-lighter)]">Feed</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-lighter)]">Contact</Link></li>
            </ul>
          </div>
        </div>

       
        {/* Garis Pemisah */}
        <div className="border-t border-white w-full my-4"></div>
           {/* Social Media */}
           <div className="flex justify-start space-x-6  ">
          <FaFacebookF className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
        </div>
          <p className="text-right text-sm -mt-6">Copyright © R.O.C.K Ministry Malaysia</p>
      
      </div>
    </footer>
  );
};

export default Footer;
