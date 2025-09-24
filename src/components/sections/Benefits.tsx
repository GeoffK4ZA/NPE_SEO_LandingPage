'use client';

import Image from 'next/image';

export default function Benefits() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const benefits = [
    {
      step: "Challenge 1",
      before: {
        icon: "🍽️",
        title: "Starving & Exhausted",
        description: "You're so focused on baby that you forget to eat, surviving on crackers and whatever you can grab"
      },
      after: {
        icon: "🥗",
        title: "Stay Nourished Without Thinking",
        description: "7 days of simple, nutritious meals planned out. Just grab the shopping list and you're set for the week"
      }
    },
    {
      step: "Challenge 2",
      before: {
        icon: "📱",
        title: "App Overwhelm",
        description: "Juggling 5 different baby tracking apps, none of which make sense when you're sleep-deprived at 3am"
      },
      after: {
        icon: "📋",
        title: "Track Baby's Needs Without Stressing",
        description: "Simple paper trackers that actually work. No login required, no phone battery needed - just grab a pen"
      }
    },
    {
      step: "Challenge 3",
      before: {
        icon: "😰",
        title: "Lost & Overwhelmed",
        description: "Every day feels chaotic. You're not sure what you should be doing or if you're doing anything right"
      },
      after: {
        icon: "✅",
        title: "Feel in Control During the Hardest Week",
        description: "Daily checklists break everything down into manageable tasks. You'll know exactly what to focus on each day"
      }
    }
  ];

  return (
    <section className="py-20 bg-light-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg italic">
              "You literally have nothing to lose and your sanity to gain."
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Your <span className="text-deep-green">Step-by-Step Peace of Mind</span>
            <br />Plan for Week One
          </h2>

          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Here's exactly how this pack transforms your first week from chaos to calm.
            No guesswork, no overwhelm - just a clear path forward.
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg relative">
              {/* Step Indicator */}
              <div className="absolute -top-4 left-8 bg-teal text-white font-bold px-4 py-2 rounded-full text-sm z-10">
                {benefit.step}
              </div>

              <div className="grid md:grid-cols-2">
                <div className="bg-peach/10 p-8 border-r border-peach/30">
                  <div className="flex items-center mb-4 mt-4">
                    <div className="text-3xl mr-4">{benefit.before.icon}</div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      Without This Pack: {benefit.before.title}
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    {benefit.before.description}
                  </p>
                </div>

                <div className="bg-mint/10 p-8">
                  <div className="flex items-center mb-4 mt-4">
                    <div className="text-3xl mr-4">{benefit.after.icon}</div>
                    <h3 className="text-xl font-semibold text-deep-green">
                      With This Pack: {benefit.after.title}
                    </h3>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed">
                    {benefit.after.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-teal/10 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">🧘‍♀️</div>
              <h3 className="text-2xl font-bold text-deep-green">
                The Result? Actual Peace of Mind in Week One
              </h3>
            </div>
            <p className="text-lg text-charcoal/80 mb-8">
              Instead of feeling like you're drowning, you'll have a clear plan for each day.
              Instead of chaos, you'll have calm systems that actually work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-teal mb-2">🍽️ Nourished</div>
                <div className="text-sm text-charcoal/70">Meals planned, no thinking required</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-teal mb-2">📋 Organized</div>
                <div className="text-sm text-charcoal/70">Simple tracking that works</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-teal mb-2">😌 Confident</div>
                <div className="text-sm text-charcoal/70">Know you're doing it right</div>
              </div>
            </div>
          </div>

          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg">
              "This isn't about perfection - it's about having a plan that works when nothing else does."
            </p>
          </div>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-10 py-4 bg-mint text-charcoal font-bold text-xl rounded-full hover:bg-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Week One Plan
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-charcoal/60 mt-4">
            ✓ Instant access • ✓ Step-by-step guidance • ✓ 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
}