import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for small studios just getting started.',
      price: isAnnual ? 29 : 39,
      features: [
        'Up to 50 members',
        'Basic workout tracking',
        'Class scheduling',
        'Email support',
        'Mobile app access',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      desc: 'For growing studios that need more power.',
      price: isAnnual ? 79 : 99,
      features: [
        'Up to 500 members',
        'Advanced workout & diet plans',
        'Automated billing',
        'Analytics dashboard',
        'Priority support',
        'Custom branding',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      desc: 'For large studios and gym chains.',
      price: 'Custom',
      features: [
        'Unlimited members',
        'Multi-location support',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'SLA guarantee',
        'On-site training',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-[#111114]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#b8ec00] uppercase tracking-wider mb-4 block">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Choose Your <span className="text-[#C8FF00]">Plan</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. Start with a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-[#1C1C21] rounded-full transition-colors border border-[#303038]"
              data-testid="pricing-toggle"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-[#C8FF00] rounded-full transition-all ${
                  isAnnual ? 'left-8' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-[#4ade80] text-xs ml-1">Save 25%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[#C8FF00] to-[#a3d300] text-[#0D0D0F] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                    <Zap size={12} /> Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full flex flex-col rounded-xl overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#C8FF00]/10 to-[#16161A] border-2 border-[#C8FF00] volt-glow'
                    : 'bg-[#16161A] border border-[#24242A]'
                }`}
              >
                <div className="p-6 md:p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white">
                          ${plan.price}
                        </span>
                        <span className="text-gray-500 text-sm">/month</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full font-semibold py-3 rounded-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#C8FF00] to-[#a3d300] text-[#0D0D0F] hover:opacity-90 active:scale-95'
                        : 'bg-[#1C1C21] text-gray-300 hover:bg-[#24242A] hover:text-white'
                    }`}
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Features */}
                <div className="flex-1 p-6 md:p-8 pt-0 border-t border-[#24242A] mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-[#C8FF00]' : 'text-[#4ade80]'}`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            <span className="text-[#4ade80]">✓</span> 14-day free trial &nbsp;•&nbsp; 
            <span className="text-[#4ade80]">✓</span> No credit card required &nbsp;•&nbsp; 
            <span className="text-[#4ade80]">✓</span> Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
