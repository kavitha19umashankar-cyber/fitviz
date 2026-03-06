import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-[#24242A]">{title}</h2>
    <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mt-5">
    <h3 className="text-sm font-semibold text-gray-300 mb-2">{title}</h3>
    <div>{children}</div>
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

const CookiePolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Cookie Policy</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 6, 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 mb-10 text-gray-400 text-sm leading-relaxed">
          This Cookie Policy explains how FitViz ("we", "our", or "us") uses cookies and similar technologies when you visit our website or use our services.
          <br /><br />
          By continuing to use our website, you agree to the use of cookies as described in this policy.
        </div>

        <Section title="What Are Cookies">
          <p>Cookies are small text files that are stored on your device when you visit a website. They help websites function properly, remember user preferences, and improve the overall browsing experience.</p>
          <p>Cookies may be temporary (session cookies) or stored on your device for a longer period (persistent cookies).</p>
        </Section>

        <Section title="How We Use Cookies">
          <p>FitViz uses cookies to improve the functionality and performance of our website and services. Cookies help us:</p>
          <BulletList items={[
            'Ensure the website works properly',
            'Remember user preferences',
            'Improve website performance and usability',
            'Understand how visitors interact with our website',
            'Enhance security and prevent fraudulent activity',
          ]} />
        </Section>

        <Section title="Types of Cookies We Use">
          <SubSection title="Essential Cookies">
            <p>These cookies are necessary for the website to function correctly. They enable basic features such as page navigation, login sessions, and access to secure areas.</p>
          </SubSection>
          <SubSection title="Performance and Analytics Cookies">
            <p>These cookies help us understand how visitors interact with our website by collecting information such as pages visited, time spent on pages, and error messages. This helps us improve website performance.</p>
          </SubSection>
          <SubSection title="Functional Cookies">
            <p>Functional cookies allow the website to remember choices you make, such as language preferences or login information, to provide a more personalized experience.</p>
          </SubSection>
          <SubSection title="Third-Party Cookies">
            <p>Some cookies may be placed by third-party services integrated into our website, such as analytics tools or communication platforms. These third parties may collect information according to their own privacy policies.</p>
          </SubSection>
        </Section>

        <Section title="Managing Cookies">
          <p>Most web browsers allow you to control cookies through browser settings. You may choose to:</p>
          <BulletList items={[
            'Block cookies',
            'Delete existing cookies',
            'Receive alerts before cookies are stored',
          ]} />
          <p className="mt-3">Please note that disabling certain cookies may affect the functionality of the website.</p>
        </Section>

        <Section title="Changes to This Cookie Policy">
          <p>We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Updates will be posted on this page with the revised date.</p>
        </Section>

        <Section title="Contact Us">
          <p>If you have questions about this Cookie Policy, you can contact us at:</p>
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

export default CookiePolicy;
