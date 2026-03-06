import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Apple, CalendarDays, Users, TrendingUp, Shield, Bot, MessageCircle, Building2 } from 'lucide-react';

const Features = () => {
  const features = [
  {
    title: "Smart Workout Tracking",
    desc: "Automatically generate personalized workout schedules based on each member\u2019s goals and preferences. Missed sessions are intelligently rescheduled based on attendance, ensuring weekly workouts are completed while providing a clear view of daily schedules, attended sessions, and missed classes.",
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
    desc: "Easily manage memberships, subscriptions, and top-ups from one dashboard. Track active plans, switch members between offers, and receive automatic notifications for upcoming expiries. Stay organized, prevent revenue loss, and ensure members renew on time with smart membership management.",
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
    size: 'medium',
    showAICallTable: true
  },
  {
    title: 'WhatsApp Integration',
    desc: 'Send automated WhatsApp messages to members for workout schedules, reminders, announcements, and special offers. Keep your members engaged with timely updates on the platform they use every day.',
    icon: MessageCircle,
    colSpan: 'col-span-12 lg:col-span-6',
    size: 'medium',
    isWhatsApp: true,
    showWhatsAppPhone: true
  },
  {
    title: 'Multi-Gym Management',
    desc: 'Manage multiple gym locations from a single dashboard. Track members, revenue, attendance, and staff across all branches. Perfect for gym chains operating in different areas with centralized control and location-wise insights.',
    icon: Building2,
    colSpan: 'col-span-12',
    size: 'large',
    showMultiGym: true
  }];


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
    { name: "Kettlebell Swing", reps: "20×4" }],

    cardio: "Jumping Jacks 20 + Sprint 1 min + High Knees 25 + Shoulder Tap 12"
  };

  // Diet plan data based on FitViz Diet Plan
  const dietPlanData = [
  { meal: 'Breakfast', title: 'Chicken Sausage + Eggs + Fruit', items: 'Sausages, egg, orange' },
  { meal: 'Lunch', title: 'Chicken Salad Bowl', items: 'Chicken, quinoa, greens' },
  { meal: 'Dinner', title: 'Fish Tikka + Roti + Veg', items: 'Grilled fish, roti, veg' },
  { meal: 'Snack', title: 'Mixed Nuts + Raisins', items: 'Nuts, raisins' }];

  // AI Call data
  const aiCallData = [
  { name: 'Shamitha', daysAbsent: '8d', status: 'Completed', summary: 'Personal issues, feeling unwell. Will return next week.' },
  { name: 'Sowmiya', daysAbsent: '14d', status: 'Completed', summary: 'Work travel. AI scheduled return session for Monday.' }];



  return (
    <section id="features" className="py-24 md:py-32 relative section-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">

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
          className="grid grid-cols-12 gap-4 md:gap-6">

          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className={`${feature.colSpan} group`}
            data-testid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>

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
                  {feature.showWorkoutTable &&
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
                          {workoutData.exercises.map((exercise, i) =>
                      <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-[#24242A]/50 transition-colors">
                              <span className="text-sm text-gray-300">{i + 1}. {exercise.name}</span>
                              <span className="text-sm font-mono text-[#C8FF00]">{exercise.reps}</span>
                            </div>
                      )}
                        </div>
                        {/* Cardio Section */}
                        <div className="px-4 py-3 bg-[#24242A]/30 border-t border-[#303038]">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Cardio</p>
                          <p className="text-xs text-gray-400">{workoutData.cardio}</p>
                          <p className="text-xs text-gray-500 mt-1">→ 1 round, rest 1 min, do 4 rounds</p>
                        </div>
                      </div>
                    </div>
                }

                  {/* Visual Content - Single Image */}
                  {feature.image &&
                <div className={`${feature.size === 'large' ? 'flex-1' : 'mt-6'} relative overflow-hidden rounded-lg`}>
                      <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-40 md:h-48 object-cover opacity-70 group-hover:opacity-90 transition-opacity group-hover:scale-105 transition-transform duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#16161A]/80 to-transparent" />
                    </div>
                }

                  {/* Diet Table Visual */}
                  {feature.showDietTable &&
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
                          {dietPlanData.map((item, i) =>
                      <div key={i} className={`p-3 ${i >= 2 ? 'border-t border-[#303038]' : ''}`}>
                              <p className="text-xs font-semibold text-[#C8FF00] uppercase tracking-wider mb-1">{item.meal}</p>
                              <p className="text-sm font-medium text-white leading-tight">{item.title}</p>
                              <p className="text-xs text-gray-500 mt-1">{item.items}</p>
                            </div>
                      )}
                        </div>
                      </div>
                    </div>
                }

                  {/* Calendar Visual */}
                  {feature.showCalendar &&
                <div className="mt-4">
                      <div className="bg-[#1C1C21] rounded-lg border border-[#303038] overflow-hidden">
                        {/* Header */}
                        <div className="px-3 py-2 border-b border-[#303038]">
                          <span className="text-xs font-medium text-gray-400">Mar 2026 — Calendar View</span>
                        </div>
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 border-b border-[#303038]">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) =>
                      <div key={i} className="py-1.5 text-center text-xs text-gray-500 font-medium border-r border-[#303038] last:border-r-0">
                              {day}
                            </div>
                      )}
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
                          {[8, 9, 10, 11, 12, 13, 14].map((d, i) =>
                      <div key={d} className={`aspect-square p-1 border-b border-[#303038] text-xs text-gray-500 ${i < 6 ? 'border-r' : ''}`}>{d}</div>
                      )}
                        </div>
                        {/* Legend */}
                        <div className="px-2 py-1.5 flex flex-wrap gap-2 text-[7px] border-t border-[#303038]">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#C8FF00]"></span>Completed</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-800"></span>Missed</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-blue-900 ring-1 ring-[#C8FF00]"></span>Today</span>
                        </div>
                      </div>
                    </div>
                }

                  {/* Members Visual */}
                  {feature.showMembers &&
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
                      { name: 'Raj Patel', plan: 'Pro', status: 'active' },
                      { name: 'Priya Sharma', plan: 'Basic', status: 'topup' }].
                      map((member, i) =>
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
                              <span className={`badge ${member.status === 'active' ? 'badge-green' : member.status === 'topup' ? 'badge-blue' : 'badge-yellow'}`}>
                                {member.status}
                              </span>
                            </div>
                      )}
                        </div>
                      </div>
                    </div>
                }

                  {/* AI Call Table Visual */}
                  {feature.showAICallTable &&
                <div className="mt-4">
                      <div className="bg-[#1C1C21] rounded-lg border border-[#303038] overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-3 bg-[#24242A]/50 border-b border-[#303038]">
                          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Member</div>
                          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Status</div>
                          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Summary</div>
                        </div>
                        {/* Rows */}
                        {aiCallData.map((call, i) =>
                    <div key={i} className="grid grid-cols-3 border-b border-[#303038] last:border-b-0 hover:bg-[#24242A]/30 transition-colors">
                            <div className="px-3 py-2.5 flex items-center gap-2">
                              <span className="text-sm text-white font-medium">{call.name}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded ${call.daysAbsent === '14d' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                                {call.daysAbsent}
                              </span>
                            </div>
                            <div className="px-3 py-2.5 flex items-center justify-center">
                              <span className="badge badge-green text-xs">{call.status}</span>
                            </div>
                            <div className="px-3 py-2.5">
                              <p className="text-xs text-gray-400 leading-relaxed">{call.summary}</p>
                            </div>
                          </div>
                    )}
                      </div>
                    </div>
                }

                  {/* WhatsApp Phone Visual */}
                  {feature.showWhatsAppPhone &&
                <div className="mt-4">
                      {/* Phone Frame */}
                      <div className="bg-[#0B141A] rounded-xl border-2 border-[#303038] overflow-hidden shadow-lg">
                        {/* WhatsApp Header */}
                        <div className="bg-[#1F2C34] px-3 py-1.5 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                            <span className="text-white text-[8px] font-bold">FV</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-xs font-medium">FitViz Studio</p>
                          </div>
                        </div>
                        
                        {/* Chat Messages */}
                        <div className="p-2 space-y-1.5 bg-[#0B141A]">
                          {/* Announcement Message */}
                          <div className="bg-[#1F2C34] rounded-lg px-2 py-1.5 shadow">
                            <p className="text-[9px] text-[#25D366] font-semibold">📢 Announcement</p>
                            <p className="text-[10px] text-white leading-tight">Studio closed Sunday for maintenance.</p>
                            <p className="text-[8px] text-gray-500 text-right">10:30 AM</p>
                          </div>
                          
                          {/* Offer Message */}
                          <div className="bg-[#1F2C34] rounded-lg px-2 py-1.5 shadow">
                            <p className="text-[9px] text-[#facc15] font-semibold">🎉 Special Offer</p>
                            <p className="text-[10px] text-white leading-tight">Refer a friend & get 20% off! Code: FITFRIEND</p>
                            <p className="text-[8px] text-gray-500 text-right">11:15 AM</p>
                          </div>
                          
                          {/* Workout Reminder */}
                          <div className="bg-[#1F2C34] rounded-lg px-2 py-1.5 shadow">
                            <p className="text-[9px] text-[#C8FF00] font-semibold">💪 Today's Workout</p>
                            <p className="text-[10px] text-white leading-tight">Full Body + CARDIO at 6:00 PM</p>
                            <p className="text-[8px] text-gray-500 text-right">2:00 PM ✓✓</p>
                          </div>
                        </div>
                      </div>
                    </div>
                }

                  {/* Multi-Gym Visual */}
                  {feature.showMultiGym && (
                    <div className="flex-1 mt-6 md:mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {/* Location Cards */}
                        {[
                          { name: 'T. Nagar Branch', members: 534, revenue: '₹2.8L', attendance: 89, color: '#C8FF00' },
                          { name: 'Anna Nagar Branch', members: 421, revenue: '₹2.1L', attendance: 92, color: '#4ade80' },
                          { name: 'OMR Branch', members: 690, revenue: '₹3.5L', attendance: 87, color: '#60a5fa' }
                        ].map((location, i) => (
                          <div key={i} className="bg-[#1C1C21] rounded-lg border border-[#303038] p-3 hover:border-opacity-50 transition-colors" style={{borderColor: location.color, borderOpacity: 0.3}}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-2 h-2 rounded-full" style={{backgroundColor: location.color}}></div>
                              <p className="text-xs font-semibold text-white">{location.name}</p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">Members</span>
                                <span className="text-sm font-bold text-white">{location.members}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">Revenue</span>
                                <span className="text-sm font-bold" style={{color: location.color}}>{location.revenue}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-gray-500">Attendance</span>
                                <span className="text-sm font-bold text-white">{location.attendance}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Summary Bar */}
                      <div className="mt-3 bg-[#1C1C21] rounded-lg border border-[#303038] p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#C8FF00]" />
                          <span className="text-xs text-gray-400">Total across 3 locations in Chennai</span>
                        </div>
                        <div className="flex gap-4">
                          <div className="text-center">
                            <p className="text-sm font-bold text-white">1,645</p>
                            <p className="text-[9px] text-gray-500">Members</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-bold text-[#C8FF00]">₹8.4L</p>
                            <p className="text-[9px] text-gray-500">Revenue</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-bold text-white">89%</p>
                            <p className="text-[9px] text-gray-500">Avg Attendance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Extra Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-4 hover:border-[#4ade80]/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#4ade80]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Analytics & Reports</h4>
                <p className="text-xs text-gray-400">Track revenue, growth, and engagement</p>
              </div>
            </div>
            {/* Dashboard Stats Grid */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-[#1C1C21] border border-[#C8FF00]/30 rounded-lg p-2">
                <p className="text-[9px] text-gray-500 uppercase">Members</p>
                <p className="text-lg font-bold text-white">1645</p>
                <p className="text-[8px] text-[#4ade80]">+243 this month</p>
              </div>
              <div className="bg-[#1C1C21] border border-cyan-500/30 rounded-lg p-2">
                <p className="text-[9px] text-gray-500 uppercase">Attendance</p>
                <p className="text-lg font-bold text-white">874</p>
                <p className="text-[8px] text-gray-400">1453 this month</p>
              </div>
              <div className="bg-[#1C1C21] border border-orange-500/30 rounded-lg p-2">
                <p className="text-[9px] text-gray-500 uppercase">Revenue</p>
                <p className="text-lg font-bold text-white">₹8.4L</p>
                <p className="text-[8px] text-[#4ade80]">↑3% vs last</p>
              </div>
              <div className="bg-[#1C1C21] border border-blue-500/30 rounded-lg p-2">
                <p className="text-[9px] text-gray-500 uppercase">Plans</p>
                <p className="text-lg font-bold text-white">1453</p>
                <p className="text-[8px] text-yellow-400">83 expiring</p>
              </div>
            </div>
            {/* Mini Bar Chart */}
            <div className="bg-[#1C1C21] rounded-lg p-2 border border-[#303038]">
              <p className="text-[9px] text-gray-500 uppercase mb-2">Daily Attendance</p>
              <div className="flex items-end gap-1 h-8">
                {[30, 30, 60, 60, 100, 100, 100, 30, 30].map((h, i) =>
                <div key={i} className="flex-1 bg-[#C8FF00] rounded-t" style={{ height: `${h}%` }} />
                )}
              </div>
            </div>
          </div>
          <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-4 hover:border-[#C8FF00]/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C8FF00]/10 border border-[#C8FF00]/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#C8FF00]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Secure & Reliable</h4>
                <p className="text-xs text-gray-400">Enterprise-grade security with 99.2% uptime</p>
              </div>
            </div>
            {/* Uptime Chart */}
            <div className="bg-[#1C1C21] rounded-lg p-3 border border-[#303038]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[9px] text-gray-500 uppercase">Uptime - Last 12 Months</p>
                <p className="text-xs font-bold text-[#C8FF00]">Avg: 99.2%</p>
              </div>
              {/* Y-axis labels and chart */}
              <div className="flex gap-2">
                <div className="flex flex-col justify-between text-[8px] text-gray-500 py-1">
                  <span>100%</span>
                  <span>98%</span>
                  <span>96%</span>
                </div>
                <div className="flex-1 relative h-16">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="border-t border-dashed border-[#303038]"></div>
                    <div className="border-t border-dashed border-[#303038]"></div>
                    <div className="border-t border-dashed border-[#303038]"></div>
                  </div>
                  {/* Line chart using SVG */}
                  <svg className="w-full h-full" viewBox="0 0 120 40" preserveAspectRatio="none">
                    {/* Gradient fill under line */}
                    <defs>
                      <linearGradient id="uptimeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C8FF00" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#C8FF00" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,5 L10,3 L20,5 L30,4 L40,8 L50,5 L60,3 L70,5 L80,15 L90,5 L100,3 L110,5 L120,4 L120,40 L0,40 Z"
                      fill="url(#uptimeGradient)" />

                    {/* Line */}
                    <path
                      d="M0,5 L10,3 L20,5 L30,4 L40,8 L50,5 L60,3 L70,5 L80,15 L90,5 L100,3 L110,5 L120,4"
                      fill="none"
                      stroke="#C8FF00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round" />

                    {/* Data points */}
                    <circle cx="0" cy="5" r="2" fill="#C8FF00" />
                    <circle cx="30" cy="4" r="2" fill="#C8FF00" />
                    <circle cx="60" cy="3" r="2" fill="#C8FF00" />
                    <circle cx="80" cy="15" r="2.5" fill="#facc15" />
                    <circle cx="120" cy="4" r="2" fill="#C8FF00" />
                  </svg>
                </div>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between mt-1 pl-6 text-[7px] text-gray-500">
                <span>Apr</span>
                <span>Jun</span>
                <span>Aug</span>
                <span>Oct</span>
                <span>Dec</span>
                <span>Mar</span>
              </div>
              {/* Legend */}
              <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#303038]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#C8FF00]"></div>
                  <span className="text-[8px] text-gray-400">99%+ uptime</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#facc15]"></div>
                  <span className="text-[8px] text-gray-400">97% (maintenance)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Features;