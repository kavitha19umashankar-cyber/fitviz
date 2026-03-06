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

const DataDeletion = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Data Deletion Instructions</h1>
          <p className="text-gray-500 text-sm">Last Updated: March 6, 2026</p>
        </div>

        {/* Intro */}
        <div className="bg-[#16161A] border border-[#24242A] rounded-xl p-6 mb-10 text-gray-400 text-sm leading-relaxed">
          FitViz respects user privacy and provides a process for requesting deletion of personal data stored within our platform.
          <br /><br />
          This page explains how users can request the deletion of their information.
        </div>

        <Section title="Who Can Request Data Deletion">
          <p>The following individuals may request data deletion:</p>
          <BulletList items={[
            'Fitness studio owners using FitViz',
            'Members whose information has been stored by a fitness studio using FitViz',
          ]} />
        </Section>

        <Section title="How to Request Data Deletion">
          <p>To request deletion of your personal data, please send a request to:</p>
          <div className="mt-4 bg-[#16161A] border border-[#24242A] rounded-xl p-5">
            <p><span className="text-gray-500">Email:</span> <a href="mailto:support@fitviz.in" className="text-[#C8FF00] hover:underline">support@fitviz.in</a></p>
          </div>
          <p className="mt-4">Include the following information in your request:</p>
          <BulletList items={[
            'Your name',
            'Registered phone number or email',
            'Name of the fitness studio (if applicable)',
            'Description of the deletion request',
          ]} />
        </Section>
      </div>

      {/* Footer */}
      <div className="border-t border-[#24242A] py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} FitViz. All rights reserved.
      </div>
    </div>
  );
};

export default DataDeletion;
