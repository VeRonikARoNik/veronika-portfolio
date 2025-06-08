import React, { useState } from 'react';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meokaeko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f5f0] dark:bg-[#1e0f0b] text-[#2b1a17] dark:text-cream transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold dark:text-gold">Contact Me</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Interested in working together or just want to say hi? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 bg-white dark:bg-[#2a1914] border border-gold/20 dark:border-gold/30 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#2b1a17] dark:text-cream mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-gold" />
                <div>
                  <p className="text-sm">Tricity, Poland</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AtSign size={20} className="text-gold" />
                <div>
                  <a href="mailto:vhordieieva@gmail.com" className="text-sm underline hover:text-gold">vhordieieva@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-gold" />
                <div>
                  <p className="text-sm">+48 *** *** ***</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-[#2a1914] border border-gold/20 dark:border-gold/30 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#2b1a17] dark:text-cream mb-6">Send Me a Message</h3>
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Thank you for your message! I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-white dark:bg-[#2a1914] text-[#2b1a17] dark:text-cream outline-none focus:ring-2 focus:ring-gold"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-white dark:bg-[#2a1914] text-[#2b1a17] dark:text-cream outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-white dark:bg-[#2a1914] text-[#2b1a17] dark:text-cream outline-none focus:ring-2 focus:ring-gold"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-white dark:bg-[#2a1914] text-[#2b1a17] dark:text-cream outline-none focus:ring-2 focus:ring-gold resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 flex items-center justify-center gap-2 rounded-lg font-semibold text-white transition-all ${
                    isSubmitting ? 'bg-gold/60 cursor-not-allowed' : 'bg-gold hover:bg-yellow-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
