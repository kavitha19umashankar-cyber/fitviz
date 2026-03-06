import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from './ui/button';

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
    <section id="pricing" className="py-24 md:py-32 relative bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-white font-['Barlow_Condensed']">
            Choose Your <span className="text-blue-500">Plan</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mt-4 max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. Start with a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-zinc-800 rounded-full transition-colors"
              data-testid="pricing-toggle"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-blue-500 rounded-full transition-all ${
                  isAnnual ? 'left-8' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Annual <span className="text-green-500 text-xs ml-1">Save 25%</span>
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
                  <span className="bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-sm flex items-center gap-1">
                    <Zap size={12} /> Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full flex flex-col rounded-sm overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-500/10 to-zinc-900/80 border-2 border-blue-500 glow-blue'
                    : 'bg-zinc-900/50 border border-white/10'
                }`}
              >
                <div className="p-6 md:p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold uppercase text-white font-['Barlow_Condensed'] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black text-white font-['Barlow_Condensed']">
                          ${plan.price}
                        </span>
                        <span className="text-zinc-500 text-sm">/month</span>
                      </div>
                    ) : (
                      <span className="text-4xl font-black text-white font-['Barlow_Condensed']">
                        {plan.price}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full font-bold uppercase tracking-wider rounded-none py-5 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[4px_4px_0px_0px_#ffffff]'
                        : 'bg-transparent border border-zinc-700 text-white hover:border-white hover:bg-white/5'
                    }`}
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="flex-1 p-6 md:p-8 pt-0 border-t border-white/5 mt-auto">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-blue-500' : 'text-green-500'}`} />
                        <span className="text-sm text-zinc-300">{feature}</span>
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
          <p className="text-sm text-zinc-500">
            <span className="text-green-500">✓</span> 14-day free trial &nbsp;•&nbsp; 
            <span className="text-green-500">✓</span> No credit card required &nbsp;•&nbsp; 
            <span className="text-green-500">✓</span> Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
