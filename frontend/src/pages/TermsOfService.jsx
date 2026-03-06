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

const TermsOfService = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 6, 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 mb-10 text-gray-400 text-sm leading-relaxed">
          Welcome to FitViz, a fitness studio management platform designed to help gyms and fitness studios manage memberships, attendance, communication, and operations.
          <br /><br />
          By accessing or using the FitViz website, software, or services, you agree to be bound by these Terms of Service.
          <br /><br />
          If you do not agree with these terms, you should not use our services.
        </div>

        <Section title="1. Use of the Service">
          <p>FitViz provides software tools for fitness studios to manage their business operations, including:</p>
          <BulletList items={[
            'Member management',
            'Subscription and billing management',
            'Workout tracking',
            'WhatsApp notifications',
            'AI call automation',
            'Studio reporting and analytics',
          ]} />
          <p className="mt-3">Users agree to use the service only for lawful business purposes.</p>
        </Section>

        <Section title="2. Account Responsibility">
          <p>When creating an account on FitViz, you agree to:</p>
          <BulletList items={[
            'Provide accurate information',
            'Maintain the security of your login credentials',
            'Be responsible for all activities under your account',
          ]} />
          <p className="mt-3">FitViz is not responsible for unauthorized access caused by failure to protect account credentials.</p>
        </Section>

        <Section title="3. Member Data Responsibility">
          <p>Fitness studios using FitViz may collect and manage information related to their members.</p>
          <p className="mt-3">The fitness studio is responsible for:</p>
          <BulletList items={[
            'Obtaining consent from members before storing their information',
            'Obtaining permission before sending communications via WhatsApp, phone calls, SMS, or email',
            'Ensuring compliance with applicable data protection laws',
          ]} />
          <p className="mt-3">FitViz acts only as a technology platform that processes this data on behalf of the fitness studio.</p>
        </Section>

        <Section title="4. Communication Services">
          <p>FitViz provides automation tools that allow fitness studios to communicate with their members, including:</p>
          <BulletList items={[
            'WhatsApp notifications',
            'Automated reminders',
            'AI call follow-ups',
            'Announcements and promotional messages',
          ]} />
          <div className="mt-3 space-y-2">
            <p>Fitness studios must ensure that recipients have opted in to receive such communications.</p>
            <p>FitViz does not send unsolicited messages directly to individuals.</p>
          </div>
        </Section>

        <Section title="5. Payment and Subscription">
          <p>Certain features of FitViz may require a paid subscription.</p>
          <p className="mt-3">By subscribing to a paid plan, you agree that:</p>
          <BulletList items={[
            'Fees are billed according to the selected pricing plan',
            'Payments may be processed through third-party payment gateways',
            'Subscription fees may change with prior notice',
          ]} />
          <p className="mt-3">Failure to complete payments may result in service suspension.</p>
        </Section>

        <Section title="6. Acceptable Use">
          <p>Users agree not to use the platform to:</p>
          <BulletList items={[
            'Send spam or unauthorized marketing messages',
            'Violate any laws or regulations',
            'Attempt to disrupt or harm the system',
            'Access data without authorization',
          ]} />
          <p className="mt-3">Violation of these rules may result in suspension or termination of the account.</p>
        </Section>

        <Section title="7. Service Availability">
          <p>We strive to keep FitViz running reliably. However, we do not guarantee uninterrupted service.</p>
          <p className="mt-3">FitViz may occasionally perform:</p>
          <BulletList items={[
            'Maintenance updates',
            'System upgrades',
            'Security improvements',
          ]} />
          <p className="mt-3">Temporary interruptions may occur.</p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>All software, branding, and platform content related to FitViz are the intellectual property of FitViz.</p>
          <p className="mt-3">Users may not:</p>
          <BulletList items={[
            'Copy',
            'Distribute',
            'Modify',
            'Reverse engineer',
          ]} />
          <p className="mt-3">any part of the platform without permission.</p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>FitViz is provided on an "as available" basis.</p>
          <p className="mt-3">We are not liable for:</p>
          <BulletList items={[
            'Business losses',
            'Data loss due to user error',
            'Service interruptions caused by third-party systems',
          ]} />
          <p className="mt-3">Our liability is limited to the amount paid for the service, where applicable.</p>
        </Section>

        <Section title="10. Termination">
          <p>FitViz reserves the right to suspend or terminate accounts that violate these terms.</p>
          <p className="mt-3">Users may also terminate their account at any time by contacting us.</p>
        </Section>

        <Section title="11. Changes to the Terms">
          <p>We may update these Terms of Service from time to time. Updates will be posted on this page with the updated date.</p>
          <p className="mt-3">Continued use of the service indicates acceptance of the revised terms.</p>
        </Section>

        <Section title="12. Contact Information">
          <p>For questions about these Terms of Service, please contact:</p>
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

export default TermsOfService;
