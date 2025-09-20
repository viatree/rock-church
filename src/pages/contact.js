'use client';

import { useState, useEffect } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, reason, message } = form;

    const text = `Shalom, saya *${name}*\nEmail: ${email}\nReason: ${reason}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = '601123457622';
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(url);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.5, 100); // Batasi max offset agar tidak terlalu jauh

  return (
    <>
      <section className="relative bg-[url('/images/hands2.png')] bg-cover flex items-end py-6 justify-center h-[300px] overflow-hidden">
        <h1
          className="text-white px-6 py-6 text-[64px] font-semibold z-10 transition-transform duration-200"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          CONTACT US
        </h1>
        <div className="absolute inset-0 bg-opacity-30 z-0 " />
      </section>

      <section className="bg-[var(--color-secondary)] py-12 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-sm overflow-hidden md:flex shadow-lg">
          {/* Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)] ">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none text-[var(--color-text)]"
                />
              </div>
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none text-[var(--color-text)]"
                />
              </div>
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Reason</label>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none bg-transparent text-[var(--color-text)]"
                >
                  <option value="" disabled>Pilih Reason</option>
                  <option value="Saran">Saran</option>
                  <option value="Doa">Doa</option>
                  <option value="Pelayanan">Pelayanan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-md font-bold text-[var(--color-text)]">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-black focus:outline-none text-[var(--color-text)]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#933B57] text-white px-4 py-2 rounded hover:bg-[#7a2f47] transition"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="md:w-1/2 bg-[#933B57] p-6 text-white flex flex-col justify-between">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.957595671388!2d101.61479710565766!3d3.1054014000000147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bf41a9fa571%3A0x2f91658f3a9d52e7!2sKompleks%20PJ%2021!5e0!3m2!1sen!2smy!4v1712728358929!5m2!1sen!2smy"
              width="100%"
              height="250"
              className="rounded mb-4"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <div>
              <p className="flex items-center gap-2">
                📍 No 10, lantai 1, kompleks PJ 21, jalan SS3 / 39, Petaling Jaya, Selangor, 47300
              </p>
              <p className="flex items-center gap-2 mt-2">📞 +6011 2345 7622</p>
              <p className="flex items-center gap-2 mt-2">📧 rockmalaysia@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;