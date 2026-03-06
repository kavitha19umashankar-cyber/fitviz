import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Apple, CalendarDays, Users, TrendingUp, Shield, Bot, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Smart Workout Tracking",
      desc: "Automatically generate personalized workout schedules based on each member's goals and preferences. Missed sessions are intelligently rescheduled based on attendance, ensuring weekly workouts are completed while providing a clear view of daily schedules, attended sessions, and missed classes.",
      icon: Dumbbell,
      colSpan: 'col-span-12 lg:col-span-8',
      size: 'large',
      showWorkoutTable: true
    },
    {
      title: 'Diet & Nutrition',
      desc: 'Macro counting made simple. Create personalized meal plans for every member.',
      icon: Apple,
      colSpan: 'col-span-12 lg:col-span-4',
      size: 'medium',
      showDietTable: true
    },
    {
      title: 'Class Scheduling',
      desc: 'Fill your classes. Zero conflicts. Automated reminders.',
      icon: CalendarDays,
      colSpan: 'col-span-12 lg:col-span-4',
      size: 'medium',
      showCalendar: true
    },
    {
      title: 'Member Management',
      desc: 'Automated billing, attendance tracking, and retention analytics. Know your members better than ever.',
      icon: Users,
      colSpan: 'col-span-12 lg:col-span-8',
      size: 'large',
      showMembers: true
    },
    {
      title: 'AI Call Automation',
      desc: "Automatically call members who miss workouts and understand why they're not attending. AI handles follow-ups, captures responses, and provides clear call summaries in your dashboard so you can improve retention and re-engage members effortlessly.",
      icon: Bot,
      colSpan: 'col-span-12 lg:col-span-6',
      size: 'medium'
    },
    {
      title: 'WhatsApp Integration',
      desc: 'Send automated WhatsApp messages to members for workout schedules, reminders, announcements, and special offers. Keep your members engaged with timely updates on the platform they use every day.',
      icon: MessageCircle,
      colSpan: 'col-span-12 lg:col-span-6',
      size: 'medium',
      isWhatsApp: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Workout table data based on FitViz Today's Plan
  const workoutData = {
    title: "Full Body + CARDIO",
    exercises: [
      { name: "Clean and Press", reps: "10×4" },
      { name: "Dumbbell Deadlift + Upright Row", reps: "12×4" },
      { name: "Squat Jumps", reps: "15×4" },
      { name: "Pushups", reps: "20×4" },
      { name: "Kettlebell Swing", reps: "20×4" }
    ],
    cardio: "Jumping Jacks 20 + Sprint 1 min + High Knees 25 + Shoulder Tap 12"
  };

  // Diet plan data based on FitViz Diet Plan
  const dietPlanData = [
    { meal: 'Breakfast', title: 'Chicken Sausage + Eggs + Fruit', items: 'Sausages, egg, orange' },
    { meal: 'Lunch', title: 'Chicken Salad Bowl', items: 'Chicken, quinoa, greens' },
    { meal: 'Dinner', title: 'Fish Tikka + Roti + Veg', items: 'Grilled fish, roti, veg' },
    { meal: 'Snack', title: 'Mixed Nuts + Raisins', items: 'Nuts, raisins' }
  ];

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
                    <div className={`w-12 h-12 ${feature.isWhatsApp ? 'bg-[#25D366]/10 border-[#25D366]/20' : 'bg-[#C8FF00]/10 border-[#C8FF00]/20'} border rounded-lg flex items-center justify-center mb-4 group-hover:${feature.isWhatsApp ? 'bg-[#25D366]/20' : 'bg-[#C8FF00]/20'} transition-colors`}>
                      <feature.icon className={`w-6 h-6 ${feature.isWhatsApp ? 'text-[#25D366]' : 'text-[#C8FF00]'}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Workout Table Visual */}
                  {feature.showWorkoutTable && (
                    <div className="flex-1 mt-6 md:mt-0">
                      <div className="bg-[#1C1C21] rounded-lg border border-[#303038] overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-[#303038] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">💪</span>
                            <span className="text-xs font-semibold text-[#C8FF00] uppercase tracking-wider">Workout</span>
                          </div>
                          <span className="badge badge-gray">Pending</span>
                        </div>
                        {/* Workout Title */}
                        <div className="px-4 py-3 border-b border-[#303038]">
                          <h4 className="text-base font-bold text-white">{workoutData.title}</h4>
                        </div>
                        {/* Exercise Table */}
                        <div className="divide-y divide-[#303038]">
                          {workoutData.exercises.map((exercise, i) => (
                            <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-[#24242A]/50 transition-colors">
                              <span className="text-sm text-gray-300">{i + 1}. {exercise.name}</span>
                              <span className="text-sm font-mono text-[#C8FF00]">{exercise.reps}</span>
                            </div>
                          ))}
                        </div>
                        {/* Cardio Section */}
                        <div className="px-4 py-3 bg-[#24242A]/30 border-t border-[#303038]">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Cardio</p>
                          <p className="text-xs text-gray-400">{workoutData.cardio}</p>
                          <p className="text-xs text-gray-500 mt-1">→ 1 round, rest 1 min, do 4 rounds</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual Content - Single Image */}
                  {feature.image && (
                    <div className={`${feature.size === 'large' ? 'flex-1' : 'mt-6'} relative overflow-hidden rounded-lg`}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-40 md:h-48 object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16161A]/80 to-transparent" />
                    </div>
                  )}

                  {/* Diet Table Visual */}
                  {feature.showDietTable && (
                    <div className="mt-4">
                      <div className="bg-[#1C1C21] rounded-lg border border-[#303038] overflow-hidden">
                        {/* Header */}
                        <div className="px-3 py-2 border-b border-[#303038] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🥗</span>
                            <span className="text-xs font-semibold text-[#C8FF00] uppercase tracking-wider">Diet Plan</span>
                          </div>
                          <span className="text-xs text-gray-500">Non-Vegetarian</span>
                        </div>
                        {/* Meals Grid */}
                        <div className="grid grid-cols-2 divide-x divide-[#303038]">
                          {dietPlanData.map((item, i) => (
                            <div key={i} className={`p-3 ${i >= 2 ? 'border-t border-[#303038]' : ''}`}>
                              <p className="text-xs font-semibold text-[#C8FF00] uppercase tracking-wider mb-1">{item.meal}</p>
                              <p className="text-sm font-medium text-white leading-tight">{item.title}</p>
                              <p className="text-xs text-gray-500 mt-1">{item.items}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Calendar Visual */}
                  {feature.showCalendar && (
                    <div className="mt-4">
                      <div className="bg-[#1C1C21] rounded-lg border border-[#303038] overflow-hidden">
                        {/* Header */}
                        <div className="px-3 py-2 border-b border-[#303038]">
                          <span className="text-xs font-medium text-gray-400">Mar 2026 — Calendar View</span>
                        </div>
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 border-b border-[#303038]">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                            <div key={i} className="py-1.5 text-center text-xs text-gray-500 font-medium border-r border-[#303038] last:border-r-0">
                              {day}
                            </div>
                          ))}
                        </div>
                        {/* Calendar Grid - First Week */}
                        <div className="grid grid-cols-7">
                          {/* Row 1: Days 1-7 */}
                          <div className="aspect-square p-1 border-r border-b border-[#303038] text-xs text-gray-500">1</div>
                          <div className="aspect-square p-1 border-r border-b border-[#303038] text-xs text-gray-500">2</div>
                          <div className="aspect-square p-1 border-r border-b border-[#303038] bg-red-900/40 text-xs">
                            <span className="text-white">3</span>
                            <p className="text-[6px] text-gray-300 mt-0.5 leading-tight">Chest + Triceps</p>
                          </div>
                          <div className="aspect-square p-1 border-r border-b border-[#303038] bg-[#C8FF00]/80 text-xs">
                            <span className="text-[#0D0D0F] font-medium">4</span>
                            <p className="text-[6px] text-[#0D0D0F] mt-0.5 leading-tight">Legs + Glutes</p>
                          </div>
                          <div className="aspect-square p-1 border-r border-b border-[#303038] bg-red-900/40 text-xs">
                            <span className="text-white">5</span>
                            <p className="text-[6px] text-gray-300 mt-0.5 leading-tight">Core + ABS</p>
                          </div>
                          <div className="aspect-square p-1 border-r border-b border-[#303038] bg-blue-900/50 ring-1 ring-[#C8FF00] text-xs">
                            <span className="text-white font-medium">6</span>
                            <p className="text-[6px] text-gray-300 mt-0.5 leading-tight">Full Body</p>
                          </div>
                          <div className="aspect-square p-1 border-b border-[#303038] text-xs text-gray-500">7</div>
                          {/* Row 2: Days 8-14 */}
                          {[8,9,10,11,12,13,14].map((d, i) => (
                            <div key={d} className={`aspect-square p-1 border-b border-[#303038] text-xs text-gray-500 ${i < 6 ? 'border-r' : ''}`}>{d}</div>
                          ))}
                        </div>
                        {/* Legend */}
                        <div className="px-2 py-1.5 flex flex-wrap gap-2 text-[7px] border-t border-[#303038]">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#C8FF00]"></span>Completed</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-800"></span>Missed</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-blue-900 ring-1 ring-[#C8FF00]"></span>Today</span>
                        </div>
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
                            { name: 'Emily Chen', plan: 'Pro', status: 'pending' }
                          ].map((member, i) => (
                            <div key={i} className="px-4 py-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#24242A] flex items-center justify-center text-xs font-medium text-white">
                                  {member.name.split(' ').map((n) => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="text-sm text-white">{member.name}</p>
                                  <p className="text-xs text-gray-500">{member.plan} Plan</p>
                                </div>
                              </div>
                              <span className={`badge ${member.status === 'active' ? 'badge-green' : 'badge-yellow'}`}>
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
