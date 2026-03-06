import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
  { label: 'Active Studios', value: "50+", icon: Users },
  { label: 'Members Managed', value: "10K+", icon: TrendingUp },
  { label: 'Classes Scheduled', value: "1M+", icon: Calendar }];


  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden section-glow">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/29392546/pexels-photo-29392546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }} />


      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6">

              <span className="text-sm font-semibold text-[#b8ec00] uppercase tracking-wider bg-[#C8FF00]/10 px-4 py-2 rounded-full border border-[#C8FF00]/20">
                Studio Management Software
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
              Manage Your
              <br />
              <span className="text-[#C8FF00]">Studio</span> Like
              <br />
              A Pro
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
              Your personal fitness companion. Track workouts, diet, and progress. 
              Built for high-performance fitness businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C8FF00] to-[#a3d300] text-[#0D0D0F] font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all active:scale-95"
                data-testid="hero-start-trial-btn">

                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-[#1C1C21] text-gray-300 font-medium px-8 py-4 rounded-lg hover:bg-[#24242A] hover:text-white transition-all"
                data-testid="hero-learn-more-btn">

                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block">

            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 shadow-2xl volt-glow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Revenue Overview</h3>
                  <span className="badge badge-green">+23% this month</span>
                </div>
                
                {/* Chart placeholder */}
                <div className="h-48 flex items-end gap-2 mb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) =>
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#C8FF00] to-[#7ea000] rounded-t opacity-80 hover:opacity-100 transition-opacity"
                    style={{ height: `${height}%` }} />

                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">₹39.2L</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Revenue</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">342</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#4ade80]">94%</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Retention</p>
                  </div>
                </div>
              </div>

              {/* Floating Member Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-[#16161A] border border-[#24242A] rounded-xl p-4 shadow-xl">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C8FF00] to-[#a3d300] flex items-center justify-center text-[#0D0D0F] font-bold">
                    VK
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Venkat Kumar</p>
                    <p className="text-xs text-[#4ade80]">Just signed up</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-[#24242A]">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center gap-4">

                <div className="w-12 h-12 bg-[#16161A] border border-[#24242A] rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#C8FF00]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{stat.label}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;