'use client';

export default function Problem() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const problems = [
    {
      icon: "🍽️",
      title: "You're Starving & Exhausted",
      description: "It's 2pm and you haven't eaten. You're surviving on crackers while everyone asks 'how's baby?' No one asks if YOU'RE okay.",
      weekOneReality: "Day 3: Forgot to eat lunch. Again."
    },
    {
      icon: "📱",
      title: "App Overwhelm at 3AM",
      description: "Five different baby tracking apps, none of which make sense when you can barely keep your eyes open. Was that feed at 2:47am or 3:17am?",
      weekOneReality: "Day 5: Phone died during night feed. Lost all data."
    },
    {
      icon: "😰",
      title: "Lost & Overwhelmed Every Day",
      description: "Every day feels like chaos. You're not sure what you should be doing, if you're doing anything right, or how other parents make it look so easy.",
      weekOneReality: "Day 7: Still in pajamas at 4pm. Is this normal?"
    },
    {
      icon: "📞",
      title: "3AM Panic Moments",
      description: "Baby's crying won't stop. Something feels wrong but you can't remember the GP's out-of-hours number. Google becomes your panicked best friend.",
      weekOneReality: "Day 2: Spent 20 minutes finding doctor's number."
    }
  ];

  return (
    <section className="py-20 bg-light-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg italic">
              "Week one nearly broke me. I had no idea it would be THIS hard."
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            If <span className="text-peach">Week One</span> Feels Like Survival Mode...
            <br />
            <span className="text-deep-green">You're Not Alone</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            These are the raw, honest struggles that no one warns you about in week one:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-peach/20 border-l-4 border-peach rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{problem.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  <div className="bg-white/70 rounded-lg p-3 border-l-2 border-peach">
                    <div className="text-sm text-charcoal/70 italic">
                      Real week one moment: "{problem.weekOneReality}"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-deep-green mb-4">
              You Don't Have to White-Knuckle Week One
            </h3>
            <p className="text-lg text-charcoal/80 italic mb-4">
              &ldquo;I wish someone had told me week one was supposed to be this overwhelming. I thought I was failing at everything.&rdquo;
            </p>
            <div className="text-charcoal/60 mb-6">
              — Emma, mom who survived week one
            </div>
            <div className="bg-mint/10 rounded-lg p-4">
              <p className="text-charcoal/80">
                What if week one could feel manageable instead of like drowning? What if you had a plan?
              </p>
            </div>
          </div>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-10 py-4 bg-teal text-white font-bold text-xl rounded-full hover:bg-deep-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Show Me How to Survive Week One
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-charcoal/60 mt-4">
            ✓ Get your week one plan now • ✓ Feel prepared instead of panicked
          </p>
        </div>
      </div>
    </section>
  );
}