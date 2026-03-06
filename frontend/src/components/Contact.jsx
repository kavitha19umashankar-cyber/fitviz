import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

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
    <section id="contact" className="py-24 md:py-32 relative bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-white font-['Barlow_Condensed'] mb-6">
              Ready To <span className="text-blue-500">Transform</span> Your Studio?
            </h2>
            <p className="text-base md:text-lg text-zinc-400 mb-10 max-w-md">
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
                  <div className="w-12 h-12 bg-zinc-800 border border-white/10 rounded-sm flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">{item.label}</p>
                    <p className="text-white group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Demo CTA */}
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-500/10 to-transparent border-l-2 border-blue-500">
              <p className="text-sm text-zinc-400 mb-2">Want to see FitViz in action?</p>
              <a href="https://fitviz.in" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
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
            <div className="bg-zinc-900/80 border border-white/10 rounded-sm p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Barlow_Condensed'] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-400">
                    We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', studio: '', message: '' });
                    }}
                    variant="outline"
                    className="mt-6 border-zinc-700 text-white hover:border-white"
                    data-testid="send-another-btn"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-600 rounded-sm focus:border-blue-500"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@studio.com"
                        required
                        className="bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-600 rounded-sm focus:border-blue-500"
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
                      Studio Name
                    </label>
                    <Input
                      type="text"
                      name="studio"
                      value={formData.studio}
                      onChange={handleChange}
                      placeholder="Your Fitness Studio"
                      className="bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-600 rounded-sm focus:border-blue-500"
                      data-testid="contact-studio-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your studio and what you're looking for..."
                      rows={4}
                      required
                      className="bg-zinc-800/50 border-white/10 text-white placeholder:text-zinc-600 rounded-sm focus:border-blue-500 resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white hover:bg-blue-500 font-bold uppercase tracking-wider rounded-none py-6 text-base transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-1 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <span className="flex items-center justify-center gap-2">
                        Request Demo <Send size={18} />
                      </span>
                    )}
                  </Button>
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
