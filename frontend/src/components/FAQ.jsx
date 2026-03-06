import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Is there free gym management software available in India?',
    a: 'Yes. FitViz offers a 30-day free trial with full access to all features—no credit card required. During the trial, you can manage members, track payments, schedule workouts, automate notifications, and explore the entire platform without limitations. After the trial, FitViz offers affordable plans designed to suit gyms, fitness studios, and trainers of all sizes.',
  },
  {
    q: 'What is the best gym management software for small gyms in India?',
    a: 'FitViz is designed to help small and growing fitness businesses manage their operations efficiently. The platform focuses on simplicity and ease of use, allowing gym owners to start managing memberships, attendance, payments, and schedules quickly. With features tailored for the Indian market—such as Razorpay integration, GST invoicing, and WhatsApp notifications—FitViz helps independent gyms, personal trainers, yoga studios, and boutique fitness centers operate smoothly.',
  },
  {
    q: 'How is FitViz different from other gym management software?',
    a: 'FitViz focuses on providing a simple, modern, and efficient platform for managing fitness businesses. The system includes features such as payment integration through Razorpay, GST-ready invoicing, WhatsApp notifications, workout tracking, and automation tools to reduce manual work. FitViz is built to help gym owners manage daily operations, improve member engagement, and gain better insights into their business performance.',
  },
  {
    q: 'Does FitViz support online payments and Razorpay integration?',
    a: 'Yes. FitViz integrates with Razorpay, allowing members to make payments using UPI, credit or debit cards, net banking, and digital wallets. Payments for memberships, renewals, and packages are automatically recorded in the dashboard, and receipts can be generated instantly. This helps gym owners manage collections more efficiently while providing convenient payment options for members.',
  },
  {
    q: 'Can I track gym member attendance?',
    a: 'Yes. FitViz includes an easy-to-use attendance tracking system. When members arrive at the gym, their attendance can be recorded quickly through the system. All attendance data is stored in real time and can be viewed through reports that show member activity, peak hours, and attendance patterns. This helps gym owners monitor engagement and identify inactive members who may need follow-up.',
  },
  {
    q: 'Does FitViz support multiple gym locations or branches?',
    a: 'Yes. FitViz supports multi-location management, allowing gym owners to manage several branches from a single dashboard. Each location can have its own staff access, members, schedules, and operational settings. At the same time, the platform provides consolidated reports so owners can view performance across all locations.',
  },
  {
    q: 'How does FitViz help manage memberships and renewals?',
    a: 'FitViz simplifies membership management by allowing you to create flexible subscription plans with different durations. The system can send automated reminders for upcoming renewals and expiries, helping you maintain consistent revenue and reduce manual follow-ups. You can also track payment history, apply offers or discounts, and manage member subscriptions easily from the dashboard.',
  },
  {
    q: 'What is AI Call Automation in FitViz?',
    a: 'AI Call Automation in FitViz automatically calls members who have missed workouts or have become inactive. The AI assistant politely checks in with the member, understands the reason for absence, and records a summary of the conversation in the FitViz dashboard for gym owners and trainers to review.',
  },
  {
    q: 'Can I schedule group classes and personal training sessions?',
    a: 'Yes. FitViz includes a class scheduling and training management system. You can create different class types, assign trainers, set recurring schedules, and manage participant capacity. For personal training sessions, the system can track session usage, package details, and trainer performance. This helps keep both group classes and personal training programs organized.',
  },
  {
    q: 'Is FitViz GST-compliant for generating invoices?',
    a: 'Yes. FitViz supports GST-compliant invoicing suitable for Indian businesses. You can configure your GST details, apply appropriate tax rates, and generate professional invoices. These invoices can be downloaded or shared with members digitally, making it easier to maintain proper financial records and compliance.',
  },
  {
    q: 'What reports and analytics does FitViz provide?',
    a: 'FitViz provides useful business insights and reports to help gym owners monitor performance. You can track metrics such as revenue, active memberships, renewals, attendance patterns, and payment collections. The system also offers visual dashboards and exportable reports that help you understand trends and make informed business decisions.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border border-[#24242A] rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#16161A] hover:bg-[#1C1C21] transition-colors"
    >
      <span className="text-sm md:text-base font-medium text-white">{faq.q}</span>
      <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#303038] flex items-center justify-center text-[#C8FF00]">
        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-6 py-5 bg-[#111114] border-t border-[#24242A]">
            <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 md:py-32 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-[#b8ec00] uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked <span className="text-[#C8FF00]">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about FitViz gym management software.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
