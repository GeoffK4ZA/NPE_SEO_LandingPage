'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const faqs = [
    {
      question: "Will this actually help with MY week one, or is it generic advice?",
      answer: "This pack is laser-focused on week one survival - not generic parenting advice. The 7-day meal plan uses ingredients you can prep while pregnant. The baby trackers work when you're too tired for apps. The emergency numbers sheet goes on your fridge for 3am panic moments. It's made by parents who remember exactly how hard week one was."
    },
    {
      question: "I'm due next week - will I get this in time?",
      answer: "Perfect timing! You'll get instant access the moment you purchase. Download everything to your phone tonight, print the meal plan and grocery list tomorrow. Having this ready before baby arrives is ideal - no scrambling when you're exhausted."
    },
    {
      question: "What if I'm already in week one and drowning?",
      answer: "Even better - you can use this immediately! Download the daily survival checklist right now. Print the emergency numbers for tonight. The quick recipe cards will help with your next meal. Many parents tell us this pack 'saved' their week one even when they found it mid-chaos."
    },
    {
      question: "My partner thinks we don't need guides - we'll figure it out.",
      answer: "Week one isn't the time to 'wing it.' This pack costs less than one takeout meal but could prevent days of stress and overwhelm. Show them the meal plan - would they rather cook from scratch when you're both zombies, or have simple 5-minute recipes ready? The peace of mind alone is worth £9.99."
    },
    {
      question: "Can I really use this on my phone when I'm feeding baby at 3am?",
      answer: "Absolutely! The PDFs work perfectly on phones - large text, simple layouts. But honestly? Print the key sheets. Put the emergency numbers on the fridge, the daily checklist on the counter. When you're sleep-deprived, paper beats technology every time."
    }
  ];

  return (
    <section className="py-20 bg-light-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg italic">
              "I had so many questions before buying. Now I wish I'd just downloaded it immediately."
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Real Questions from <span className="text-teal">Week One Parents</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            The honest questions we get from parents who are exactly where you are right now
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-pale-green overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-pale-green/10 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-charcoal pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-teal transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="bg-pale-green/20 rounded-lg p-4">
                    <p className="text-charcoal/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-mint mb-8">
            <h3 className="text-xl font-semibold text-charcoal mb-4">
              Still Hesitating? Here's the Truth:
            </h3>
            <p className="text-charcoal/80 mb-6">
              Week one won't wait for you to figure it out. Every hour you spend overwhelmed is an hour you could have spent confident and prepared. You're protected by our 30-day guarantee - literally nothing to lose.
            </p>
            <div className="bg-mint/10 rounded-lg p-4 mb-6">
              <p className="text-deep-green font-medium">
                "The worst that happens? You get organised. The best? Week one becomes manageable."
              </p>
            </div>
            <button
              onClick={handleCTAClick}
              className="inline-flex items-center px-10 py-4 bg-teal text-white font-bold text-xl rounded-full hover:bg-deep-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get My Week One Survival Pack Now
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}