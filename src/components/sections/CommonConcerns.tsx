'use client';

export default function CommonConcerns() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const concerns = [
    {
      concern: "Will this work for MY situation?",
      answer: "This pack is laser-focused on week one survival - regardless of feeding method, delivery type, or family size. The meal plan works whether you're breastfeeding, formula feeding, or both. Everything is designed for exhausted parents who need simple solutions that just work."
    },
    {
      concern: "I'm due next week - is it too late?",
      answer: "Perfect timing! You get instant access and can print everything tonight. Many parents tell us getting this ready BEFORE baby arrives was the best decision they made."
    },
    {
      concern: "My partner thinks we don't need help...",
      answer: "Week one isn't the time to 'wing it.' This costs less than one takeout meal but could prevent days of overwhelm. Show them the 5-minute meal recipes - would they rather cook from scratch when you're both zombies?"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
            Common Concerns <span className="text-teal">About Week One Prep</span>
          </h2>
          <p className="text-lg text-charcoal/70">
            The questions we get from parents exactly where you are right now
          </p>
        </div>

        <div className="space-y-6">
          {concerns.map((item, index) => (
            <div key={index} className="bg-peach/10 border-l-4 border-peach rounded-lg p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                "{item.concern}"
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-mint/10 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-charcoal/80 font-medium">
              "Still hesitating? Week one won't wait for you to figure it out. Every hour you spend overwhelmed is an hour you could have spent confident and prepared."
            </p>
          </div>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-8 py-3 bg-teal text-white font-semibold text-lg rounded-full hover:bg-deep-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get My Week One Plan Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-charcoal/60 mt-3">
            ✓ Instant download • ✓ 30-day guarantee • ✓ Created by expecting parent
          </p>
        </div>
      </div>
    </section>
  );
}