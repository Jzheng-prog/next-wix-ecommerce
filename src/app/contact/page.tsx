'use client'
import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', phone:''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] items-center mt-10">
      <div className="w-full max-w-md p-6 md:border">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="c898bf18-2c6a-4c62-ba46-6f13c97c1b71"/>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black border transition "
            >
              Send Message
            </button>
          </form>
      </div>
    </div>
  );
}
