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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.5, 100);

  return (
    <>
      {/* HERO ATAS – tetap pakai gambar tangan */}
      <section className="relative bg-[url('/images/hands2.png')] bg-cover flex items-end py-6 justify-center h-[300px] overflow-hidden">
        <h1
          className="text-white px-6 py-6 text-[64px] font-semibold z-10 transition-transform duration-200"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          CONTACT US
        </h1>
        <div className="absolute inset-0 bg-black/30 z-0" />
      </section>

      {/* SECTION CONTACT – layout seperti gambar */}
      <section className="bg-[#fff4ef] py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* KIRI: judul + form di card peach */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#b0846a] mb-4">
              <span className="w-7 h-7 rounded-full border border-[#b0846a] flex items-center justify-center text-[10px]">
                ⤾
              </span>
              <span>Contact Us</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#3a1212] mb-8">
              We’d Love to Hear <br />
              from You
            </h2>

            <div className="bg-[#ffefe6] rounded-3xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#3a1212] mb-1">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Rose"
                    className="w-full rounded-xl border border-transparent bg-white/70 px-4 py-3 text-sm text-[#3a1212] placeholder:text-gray-400 focus:outline-none focus:border-[#3a1212] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#3a1212] mb-1">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g., rose@email.com"
                      className="w-full rounded-xl border border-transparent bg-white/70 px-4 py-3 text-sm text-[#3a1212] placeholder:text-gray-400 focus:outline-none focus:border-[#3a1212] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#3a1212] mb-1">
                      Reason
                    </label>
                    <select
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-transparent bg-white/70 px-4 py-3 text-sm text-[#3a1212] focus:outline-none focus:border-[#3a1212] focus:bg-white"
                    >
                      <option value="" disabled>
                        Pilih Reason
                      </option>
                      <option value="Saran">Saran</option>
                      <option value="Doa">Doa</option>
                      <option value="Pelayanan">Pelayanan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3a1212] mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className="w-full rounded-xl border border-transparent bg:white/70 px-4 py-3 text-sm text-[#3a1212] placeholder:text-gray-400 focus:outline-none focus:border-[#3a1212] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-[#3a1212] text-white py-3 rounded-full text-sm font-semibold tracking-wide shadow-md hover:bg-[#5a2020] transition"
                >
                  Send Us Message (WhatsApp)
                </button>
              </form>
            </div>
          </div>

          {/* KANAN: map + info */}
          <div className="w-full md:w-1/2">
            <div className="h-[380px] md:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.957595671388!2d101.61479710565766!3d3.1054014000000147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bf41a9fa571%3A0x2f91658f3a9d52e7!2sKompleks%20PJ%2021!5e0!3m2!1sen!2smy!4v1712728358929!5m2!1sen!2smy"
                className="w-full h-full rounded-3xl border-0 shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-6 space-y-2 text-sm text-[#3a1212]">
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>
                  No 10, lantai 1, kompleks PJ 21, jalan SS3 / 39, Petaling Jaya,
                  Selangor, 47300
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>+6011 2345 7622</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>rockmalaysia@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
