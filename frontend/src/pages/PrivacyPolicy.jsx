import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-[#24242A]">{title}</h2>
    <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="text-[#C8FF00] mt-1 flex-shrink-0">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Header */}
      <div className="border-b border-[#24242A] bg-[#0D0D0F]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-xl tracking-tight text-white">
            Fit<span className="text-[#C8FF00]">Viz</span>
          </a>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-[#b8ec00] uppercase tracking-wider bg-[#C8FF00]/10 px-4 py-2 rounded-full border border-[#C8FF00]/20">
              Legal
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 6, 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 mb-10 text-gray-400 text-sm leading-relaxed">
          FitViz ("we", "our", or "us") respects your privacy and is committed to protecting the personal information of fitness studios and their members who use our platform. This Privacy Policy explains how we collect, use, and protect information when you use the FitViz website, software, and related services.
          <br /><br />
          By using our services, you agree to the collection and use of information as described in this policy.
        </div>

        <Section title="Information We Collect">
          <p className="font-medium text-gray-300 mb-2">Personal Information</p>
          <p>When fitness studios or users interact with our platform, we may collect the following information:</p>
          <BulletList items={[
            'Name',
            'Phone number',
            'Email address',
            'Business or gym details',
            'Account login information',
            'Payment or billing information',
          ]} />

          <p className="font-medium text-gray-300 mt-6 mb-2">Member Information</p>
          <p>Fitness studios using FitViz may store member-related information within the platform, including:</p>
          <BulletList items={[
            'Member name',
            'Phone number or contact details',
            'Membership subscription details',
            'Attendance records',
            'Workout schedules',
            'Communication history',
          ]} />
          <p className="mt-3">This information is provided and managed by the fitness studio using our software.</p>
        </Section>

        <Section title="How We Use Information">
          <p>We use collected data to provide and improve our services, including:</p>
          <BulletList items={[
            'Managing gym memberships and subscriptions',
            'Tracking attendance and workout schedules',
            'Sending notifications and reminders',
            'Enabling automated communication features',
            'Providing analytics and reports to studios',
            'Improving product functionality and user experience',
          ]} />
        </Section>

        <Section title="WhatsApp Communication">
          <p>FitViz integrates with the WhatsApp Business Platform to enable gyms and fitness studios to communicate with their members.</p>
          <p className="mt-3">Messages sent through WhatsApp may include:</p>
          <BulletList items={[
            'Workout reminders',
            'Membership expiry notifications',
            'Class schedules',
            'Studio announcements',
            'Promotional offers from the gym or studio',
          ]} />
          <div className="mt-4 space-y-2">
            <p>These messages are sent only on behalf of the fitness studio using our platform.</p>
            <p>Fitness studios are responsible for obtaining member consent before sending WhatsApp messages.</p>
            <p>Members may opt out of WhatsApp communications at any time by contacting the respective fitness studio.</p>
            <p>FitViz does not send unsolicited messages directly to individuals.</p>
          </div>
        </Section>

        <Section title="AI Call Automation">
          <p>Our platform may use automated calling features to assist fitness studios in communicating with members. These calls may be used for:</p>
          <BulletList items={[
            'Follow-up on missed workouts',
            'Membership reminders',
            'Studio updates',
          ]} />
          <p className="mt-3">Call summaries may be stored in the system dashboard for studio management purposes.</p>
        </Section>

        <Section title="Data Sharing and Disclosure">
          <p>FitViz does not sell or rent personal information.</p>
          <p className="mt-3">We may share data with trusted service providers that support our platform operations, such as:</p>
          <BulletList items={[
            'Cloud hosting providers',
            'Messaging platforms (including WhatsApp Business API providers)',
            'Payment processing providers',
          ]} />
          <p className="mt-3">These partners process data only to provide services on our behalf and must follow strict privacy and security obligations.</p>
          <p className="mt-3">We may also disclose information if required by law or to protect the security of our services.</p>
        </Section>

        <Section title="Data Security">
          <p>We implement appropriate technical and organizational measures to protect personal information, including:</p>
          <BulletList items={[
            'Secure cloud infrastructure',
            'Data encryption where applicable',
            'Access control and authentication systems',
          ]} />
          <p className="mt-3">While we strive to protect information, no system can guarantee absolute security.</p>
        </Section>

        <Section title="Data Retention">
          <p>We retain personal data only as long as necessary to:</p>
          <BulletList items={[
            'Provide our services',
            'Maintain operational records',
            'Comply with legal obligations',
          ]} />
          <p className="mt-3">Fitness studios may request deletion of their account and associated data.</p>
        </Section>

        <Section title="Third-Party Services">
          <p>FitViz may integrate with third-party services such as:</p>
          <BulletList items={[
            'WhatsApp Business Platform',
            'Payment gateways',
            'Cloud hosting services',
          ]} />
          <p className="mt-3">These services operate under their own privacy policies.</p>
        </Section>

        <Section title="User Rights">
          <p>Users may request to:</p>
          <BulletList items={[
            'Access their personal information',
            'Correct inaccurate data',
            'Request deletion of their information',
          ]} />
          <p className="mt-3">Requests can be submitted through the contact details below.</p>
        </Section>

        <Section title="Updates to This Policy">
          <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.</p>
        </Section>

        <Section title="Contact Information">
          <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="mt-4 bg-[#16161A] border border-[#24242A] rounded-xl p-5 space-y-2">
            <p><span className="text-gray-500">Company:</span> <span className="text-white font-medium">FitViz</span></p>
            <p><span className="text-gray-500">Website:</span> <a href="https://www.fitviz.in" className="text-[#C8FF00] hover:underline">www.fitviz.in</a></p>
            <p><span className="text-gray-500">Email:</span> <a href="mailto:support@fitviz.in" className="text-[#C8FF00] hover:underline">support@fitviz.in</a></p>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <div className="border-t border-[#24242A] py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} FitViz. All rights reserved.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
