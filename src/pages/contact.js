'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, reason, message } = form;

  const text = `Halo, saya *${name}*\nEmail: ${email}\nAlasan: ${reason}\nPesan: ${message}`;
  const encodedText = encodeURIComponent(text);
  const phoneNumber = '601123457622';
  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  // console.log("Encoded Message:", encodedText);
  // console.log("WhatsApp Link:", url);
  // console.log(url)
  window.open(url);
};

  return (
    <section className="bg-[#C69E46] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden md:flex shadow-lg">
        {/* Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Reason</label>
              <input
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border-b-2 border-black focus:outline-none py-1"
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

        <div className="md:w-1/2 bg-[#933B57] p-6 text-white flex flex-col justify-between">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.027534406155!2d101.62420657496594!3d3.108964353388929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bf41a9fa571%3A0x2f91658f3a9d52e7!2sGBI%20ROCK%20Malaysia!5e0!3m2!1sen!2smy!4v1712641067160!5m2!1sen!2smy"
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
  );
};

export default ContactSection;
