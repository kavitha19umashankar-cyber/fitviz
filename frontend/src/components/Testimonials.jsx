import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Karthik Rajan',
      role: 'Owner, Iron Athletics, T. Nagar',
      image: 'https://images.unsplash.com/photo-1594749948869-3039d90d7949?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRpdmVyc2UlMjBmaXRuZXNzJTIwY29hY2hlcyUyMHNtaWxpbmd8ZW58MHx8fHwxNzcyODAyNDYzfDA&ixlib=rb-4.1.0&q=85',
      quote: 'FitViz transformed how we run our gym in Chennai. Member retention increased by 40% in just 3 months. The automated billing alone saves us hours every week.',
      rating: 5,
    },
    {
      name: 'Priya Venkatesh',
      role: 'Director, Zen Fitness Studio, Anna Nagar',
      image: 'https://images.unsplash.com/photo-1737608744496-ff6138a8584a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRpdmVyc2UlMjBmaXRuZXNzJTIwY29hY2hlcyUyMHNtaWxpbmd8ZW58MHx8fHwxNzcyODAyNDYzfDA&ixlib=rb-4.1.0&q=85',
      quote: "The scheduling feature is a game-changer. No more double bookings, no more confusion. Our trainers love it, and our members appreciate the seamless experience.",
      rating: 5,
    },
    {
      name: 'Arun Kumar',
      role: 'Founder, Peak Performance, OMR',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      quote: "We've tried several studio management tools. FitViz is by far the most comprehensive and easiest to use. The analytics dashboard gives us insights we never had before.",
      rating: 5,
    },
    {
      name: 'Deepika Sharma',
      role: 'Manager, CrossFit Elite, Velachery',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      quote: 'From onboarding new members to tracking their progress, FitViz handles it all. Our coaches can focus on what they do best - training people.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden section-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#b8ec00] uppercase tracking-wider mb-4 block">
            Trusted by 50+ Studios in Chennai
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            What Our <span className="text-[#C8FF00]">Clients</span> Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="h-full bg-[#16161A] border border-[#24242A] rounded-xl p-6 md:p-8 hover:border-[#C8FF00]/30 transition-colors relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C8FF00]/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#facc15] text-[#facc15]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#24242A]"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#C8FF00]/10 to-[#4ade80]/10 border border-[#24242A] rounded-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">50+</p>
              <p className="text-sm text-gray-400 mt-1">Studios in Chennai</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">10K+</p>
              <p className="text-sm text-gray-400 mt-1">Members Managed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white">99.2%</p>
              <p className="text-sm text-gray-400 mt-1">Uptime</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#C8FF00]">4.9</p>
              <p className="text-sm text-gray-400 mt-1">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
