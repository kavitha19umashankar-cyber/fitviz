import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Apple, CalendarDays, Users, TrendingUp, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Workout Tracking',
      desc: 'Build custom workout plans. Track PRs and progress over time. Help your members achieve their fitness goals faster.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxmaXRuZXNzJTIwdHJhaW5lciUyMHVzaW5nJTIwZGlnaXRhbCUyMHRhYmxldCUyMGluJTIwZ3ltfGVufDB8fHx8MTc3MjgwMjQ2MXww&ixlib=rb-4.1.0&q=85',
      colSpan: 'col-span-12 lg:col-span-8',
      size: 'large',
    },
    {
      title: 'Diet & Nutrition',
      desc: 'Macro counting made simple. Create personalized meal plans for every member.',
      icon: Apple,
      image: 'https://images.pexels.com/photos/30635719/pexels-photo-30635719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      colSpan: 'col-span-12 lg:col-span-4',
      size: 'medium',
    },
    {
      title: 'Class Scheduling',
      desc: 'Fill your classes. Zero conflicts. Automated reminders.',
      icon: CalendarDays,
      colSpan: 'col-span-12 lg:col-span-4',
      size: 'medium',
      showCalendar: true,
    },
    {
      title: 'Member Management',
      desc: 'Automated billing, attendance tracking, and retention analytics. Know your members better than ever.',
      icon: Users,
      colSpan: 'col-span-12 lg:col-span-8',
      size: 'large',
      showMembers: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Everything You Need
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-white font-['Barlow_Condensed']">
            Powerful <span className="text-blue-500">Features</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mt-4 max-w-2xl mx-auto">
            One platform to manage your entire fitness business. From workouts to billing, we've got you covered.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`${feature.colSpan} group`}
              data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="feature-card h-full bg-zinc-900/50 border border-white/10 backdrop-blur-md rounded-sm hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Feature Content */}
                <div className={`p-6 md:p-8 ${feature.size === 'large' ? 'flex flex-col md:flex-row gap-6' : ''}`}>
                  {/* Text Content */}
                  <div className={feature.size === 'large' ? 'flex-1' : ''}>
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-normal text-white mb-2 font-['Barlow_Condensed']">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Visual Content */}
                  {feature.image && (
                    <div className={`${feature.size === 'large' ? 'flex-1' : 'mt-6'} relative overflow-hidden rounded-sm`}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-40 md:h-48 object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    </div>
                  )}

                  {/* Calendar Visual */}
                  {feature.showCalendar && (
                    <div className="mt-6 bg-zinc-800/50 rounded-sm p-4 border border-white/5">
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                          <span key={i} className="text-xs text-zinc-500 font-mono">{day}</span>
                        ))}
                        {Array.from({ length: 28 }, (_, i) => (
                          <div
                            key={i}
                            className={`text-xs py-1 rounded-sm ${
                              [3, 7, 10, 14, 17, 21, 24].includes(i)
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'text-zinc-500 hover:bg-white/5'
                            }`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Members Visual */}
                  {feature.showMembers && (
                    <div className="flex-1 mt-6 md:mt-0">
                      <div className="bg-zinc-800/50 rounded-sm border border-white/5 overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Recent Members</span>
                          <span className="text-xs text-green-500">+12 this week</span>
                        </div>
                        {/* Members List */}
                        <div className="divide-y divide-white/5">
                          {[
                            { name: 'Sarah Johnson', plan: 'Pro', status: 'active' },
                            { name: 'Mike Williams', plan: 'Basic', status: 'active' },
                            { name: 'Emily Chen', plan: 'Pro', status: 'pending' },
                          ].map((member, i) => (
                            <div key={i} className="px-4 py-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-medium text-white">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="text-sm text-white">{member.name}</p>
                                  <p className="text-xs text-zinc-500">{member.plan} Plan</p>
                                </div>
                              </div>
                              <span className={`text-xs px-2 py-1 rounded-sm ${
                                member.status === 'active' 
                                  ? 'bg-green-500/10 text-green-500' 
                                  : 'bg-yellow-500/10 text-yellow-500'
                              }`}>
                                {member.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <div className="bg-zinc-900/50 border border-white/10 rounded-sm p-6 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-sm flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Barlow_Condensed']">Analytics & Reports</h4>
              <p className="text-sm text-zinc-400">Track revenue, growth, and member engagement in real-time.</p>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-white/10 rounded-sm p-6 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-sm flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Barlow_Condensed']">Secure & Reliable</h4>
              <p className="text-sm text-zinc-400">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
