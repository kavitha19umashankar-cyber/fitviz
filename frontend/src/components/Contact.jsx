import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studio: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@fitviz.in',
      href: 'mailto:hello@fitviz.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#111114]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-[#b8ec00] uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ready To <span className="text-[#C8FF00]">Transform</span> Your Studio?
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-md">
              Schedule a personalized demo and see how FitViz can streamline your fitness business operations.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  data-testid={`contact-${item.label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 bg-[#16161A] border border-[#24242A] rounded-lg flex items-center justify-center group-hover:border-[#C8FF00]/30 transition-colors">
                    <item.icon className="w-5 h-5 text-[#C8FF00]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.label}</p>
                    <p className="text-white group-hover:text-[#C8FF00] transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Demo CTA */}
            <div className="mt-10 p-6 bg-gradient-to-r from-[#C8FF00]/10 to-transparent border-l-2 border-[#C8FF00] rounded-r-lg">
              <p className="text-sm text-gray-400 mb-2">Want to see FitViz in action?</p>
              <a href="https://fitviz.in" target="_blank" rel="noopener noreferrer" className="text-[#C8FF00] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Try the Demo <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-[#4ade80]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', studio: '', message: '' });
                    }}
                    className="mt-6 bg-[#1C1C21] text-gray-300 px-6 py-3 rounded-lg hover:bg-[#24242A] hover:text-white transition-all"
                    data-testid="send-another-btn"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="input-custom"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@studio.com"
                        required
                        className="input-custom"
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                      Studio Name
                    </label>
                    <input
                      type="text"
                      name="studio"
                      value={formData.studio}
                      onChange={handleChange}
                      placeholder="Your Fitness Studio"
                      className="input-custom"
                      data-testid="contact-studio-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your studio and what you're looking for..."
                      rows={4}
                      required
                      className="input-custom resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#C8FF00] to-[#a3d300] text-[#0D0D0F] font-semibold py-4 rounded-lg hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Request Demo <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
