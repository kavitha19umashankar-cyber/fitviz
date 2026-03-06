import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Apple, CalendarDays, Users, TrendingUp, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Workout Tracking',
      desc: 'Build custom workout plans. Track PRs and progress over time. Help your members achieve their fitness goals faster.',
      icon: Dumbbell,
      images: [
        'https://customer-assets.emergentagent.com/job_workout-track-9/artifacts/u42git4g_image.png',
        'https://customer-assets.emergentagent.com/job_workout-track-9/artifacts/zopmkmxr_image.png'
      ],
      colSpan: 'col-span-12 lg:col-span-8',
      size: 'large',
      showAppScreenshots: true,
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
    <section id="features" className="py-24 md:py-32 relative section-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#b8ec00] uppercase tracking-wider mb-4 block">
            Everything You Need
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Powerful <span className="text-[#C8FF00]">Features</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
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
              <div className="feature-card h-full p-6 md:p-8">
                {/* Feature Content */}
                <div className={feature.size === 'large' ? 'flex flex-col md:flex-row gap-6' : ''}>
                  {/* Text Content */}
                  <div className={feature.size === 'large' ? 'flex-1' : ''}>
                    <div className="w-12 h-12 bg-[#C8FF00]/10 border border-[#C8FF00]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C8FF00]/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-[#C8FF00]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Visual Content - App Screenshots */}
                  {feature.showAppScreenshots && feature.images && (
                    <div className="flex-1 mt-6 md:mt-0">
                      <div className="grid grid-cols-2 gap-3">
                        {feature.images.map((img, idx) => (
                          <div key={idx} className="relative overflow-hidden rounded-lg border border-[#303038] group-hover:border-[#C8FF00]/30 transition-colors">
                            <img
                              src={img}
                              alt={`${feature.title} screenshot ${idx + 1}`}
                              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Visual Content - Single Image */}
                  {feature.image && !feature.showAppScreenshots && (
                    <div className={`${feature.size === 'large' ? 'flex-1' : 'mt-6'} relative overflow-hidden rounded-lg`}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-40 md:h-48 object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16161A]/80 to-transparent" />
                    </div>
                  )}

                  {/* Calendar Visual */}
                  {feature.showCalendar && (
                    <div className="mt-6 bg-[#1C1C21] rounded-lg p-4 border border-[#303038]">
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                          <span key={i} className="text-xs text-gray-500 font-medium">{day}</span>
                        ))}
                        {Array.from({ length: 28 }, (_, i) => (
                          <div
                            key={i}
                            className={`text-xs py-1 rounded ${
                              [3, 7, 10, 14, 17, 21, 24].includes(i)
                                ? 'bg-[#C8FF00]/20 text-[#C8FF00]'
                                : 'text-gray-500 hover:bg-[#24242A]'
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
                      <div className="bg-[#1C1C21] rounded-lg border border-[#303038] overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-[#303038] flex items-center justify-between">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Members</span>
                          <span className="badge badge-green">+12 this week</span>
                        </div>
                        {/* Members List */}
                        <div className="divide-y divide-[#303038]">
                          {[
                            { name: 'Sarah Johnson', plan: 'Pro', status: 'active' },
                            { name: 'Mike Williams', plan: 'Basic', status: 'active' },
                            { name: 'Emily Chen', plan: 'Pro', status: 'pending' },
                          ].map((member, i) => (
                            <div key={i} className="px-4 py-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#24242A] flex items-center justify-center text-xs font-medium text-white">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="text-sm text-white">{member.name}</p>
                                  <p className="text-xs text-gray-500">{member.plan} Plan</p>
                                </div>
                              </div>
                              <span className={`badge ${
                                member.status === 'active' 
                                  ? 'badge-green' 
                                  : 'badge-yellow'
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
          <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 flex items-center gap-4 hover:border-[#4ade80]/30 transition-colors">
            <div className="w-12 h-12 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#4ade80]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Analytics & Reports</h4>
              <p className="text-sm text-gray-400">Track revenue, growth, and member engagement in real-time.</p>
            </div>
          </div>
          <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 flex items-center gap-4 hover:border-[#C8FF00]/30 transition-colors">
            <div className="w-12 h-12 bg-[#C8FF00]/10 border border-[#C8FF00]/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#C8FF00]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Secure & Reliable</h4>
              <p className="text-sm text-gray-400">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
