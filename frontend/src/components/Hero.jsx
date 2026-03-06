import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Active Studios', value: '500+', icon: Users },
    { label: 'Members Managed', value: '50K+', icon: TrendingUp },
    { label: 'Classes Scheduled', value: '1M+', icon: Calendar },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/29392546/pexels-photo-29392546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 bg-blue-500/10 px-4 py-2 border border-blue-500/20">
                Studio Management Software
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-none text-white mb-6 font-['Barlow_Condensed']">
              Manage Your
              <br />
              <span className="text-blue-500">Studio</span> Like
              <br />
              A Pro
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mb-8">
              The all-in-one platform for workouts, diet plans, and membership management. 
              Built for high-performance fitness businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 text-white hover:bg-blue-500 font-bold uppercase tracking-wider rounded-none px-8 py-6 text-base transition-all hover:translate-x-1 hover:-translate-y-1 shadow-[4px_4px_0px_0px_#ffffff]"
                data-testid="hero-start-trial-btn"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-transparent border border-zinc-700 text-white hover:border-white hover:bg-white/5 font-bold uppercase tracking-wider rounded-none px-8 py-6 text-base"
                data-testid="hero-learn-more-btn"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-zinc-900/80 border border-white/10 backdrop-blur-md rounded-sm p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500">Revenue Overview</h3>
                  <span className="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1">+23% this month</span>
                </div>
                
                {/* Chart placeholder */}
                <div className="h-48 flex items-end gap-2 mb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">$47.2K</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Revenue</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">342</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-500">94%</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Retention</p>
                  </div>
                </div>
              </div>

              {/* Floating Member Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-zinc-800/90 border border-white/10 backdrop-blur-md rounded-sm p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">New Member</p>
                    <p className="text-xs text-green-500">Just signed up</p>
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
          className="mt-20 pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-sm flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white font-['Barlow_Condensed'] tracking-tight">{stat.value}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
