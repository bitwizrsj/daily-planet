import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_xf2t4ne',
        'template_6tq0x6a',
        form.current,
        'esuu6Y3PcgfenR7vK'
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current?.reset();
        },
        (err) => {
          setError('Failed to send message. Please try again later.');
          console.error(err);
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-center mb-6 border-b border-gray-400 pb-2">
        Contact Me
      </h1>

      <p className="text-center text-gray-700 mb-4 italic">
        If you'd like to hire me or have an offer, please fill out the form below to get in touch.
      </p>

      {/* Direct Contact Info */}
      <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-6 text-center">
        <p className="text-sm font-semibold mb-2">📞 Mobile: <span className="font-normal">+91-8696403065</span></p>
        <p className="text-sm font-semibold mb-2">📧 Email: <a href="mailto:your.rohitsj27@gmail.com" className="text-blue-600 underline">rohitsj27@google.com</a></p>
        <p className="text-sm font-semibold">🔗 LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.linkedin.com/in/rohit-singh-jatav-85078224a/</a></p>
      </div>

      {/* EmailJS Form */}
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block font-serif text-gray-800 mb-1">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:border-black"
          />
        </div>
        <div>
          <label className="block font-serif text-gray-800 mb-1">Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:border-black"
          />
        </div>
        <div>
          <label className="block font-serif text-gray-800 mb-1">Your Message</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring focus:border-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {sent && (
          <p className="text-green-600 font-semibold mt-2">
            ✅ Your message has been sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 font-semibold mt-2">
            ❌ {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactMe;
