'use client';

export default function FinalCTA() {
  const handlePurchase = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal to-deep-green text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Your Week One Doesn't Have to Be Survival Mode.
            <span className="block text-mint">It Can Be Your Foundation.</span>
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            800+ families have turned their week one chaos into calm confidence with this pack.
            Your baby is coming (or already here) - don't wait another day to feel prepared.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6">Download Now, Transform Week One Tonight:</h3>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-mint/20 rounded-lg p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="font-semibold mb-2">Tonight: Get Ready</h4>
              <p className="text-white/80 text-sm">
                Download everything to your phone. Print the meal plan and grocery list. Post emergency numbers on the fridge.
              </p>
            </div>

            <div className="bg-mint/20 rounded-lg p-6">
              <div className="text-3xl mb-4">🍽️</div>
              <h4 className="font-semibold mb-2">Tomorrow: Feel Fed</h4>
              <p className="text-white/80 text-sm">
                Wake up with a meal plan instead of panic. Know exactly what to eat without thinking about it.
              </p>
            </div>

            <div className="bg-mint/20 rounded-lg p-6">
              <div className="text-3xl mb-4">😌</div>
              <h4 className="font-semibold mb-2">Week One: Feel Human</h4>
              <p className="text-white/80 text-sm">
                Track baby's needs without app overwhelm. Feel confident you're doing it right, one day at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-4xl md:text-5xl font-bold mb-4 text-mint">
            Just $29
          </div>
          <div className="text-lg text-white/80 mb-2">
            Week One Special Price (Usually $79) • Because week one is hard enough
          </div>
          <div className="text-white/70">
            Less than one takeout meal, but could save you from weeks of overwhelm
          </div>
        </div>

        <button
          onClick={handlePurchase}
          className="inline-flex items-center px-12 py-5 bg-mint text-deep-green font-bold text-xl rounded-full hover:bg-white hover:text-deep-green transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-8"
        >
          Get My Week One Survival Pack Now
          <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <div className="grid md:grid-cols-3 gap-4 text-sm text-white/80 mb-8">
          <div className="flex items-center justify-center">
            <span className="mr-2">🔒</span>
            Secure Checkout
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">⚡</span>
            Instant Download
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">🛡️</span>
            30-Day Guarantee
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <h3 className="text-xl font-semibold mb-4">
            Two Paths Forward. Which Will You Choose?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-mint/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-mint">✅ With This Pack</h4>
              <ul className="text-sm text-white/80 space-y-1">
                <li>• Week one feels manageable, not overwhelming</li>
                <li>• You eat real meals, not crackers and panic</li>
                <li>• 3am moments feel prepared, not panicked</li>
                <li>• You track baby's needs without app chaos</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">❌ Without This Pack</h4>
              <ul className="text-sm text-white/80 space-y-1">
                <li>• Days blur together in survival mode</li>
                <li>• Googling every little worry at 2am</li>
                <li>• Forgetting to eat, shower, take care of YOU</li>
                <li>• Weeks of feeling like you're failing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-white/80">
          <p className="text-lg font-medium mb-2">
            &ldquo;I wish I hadn't waited. Week one was so much harder than it needed to be.&rdquo;
          </p>
          <p className="text-white/70">
            Don't let that be your story. Your week one starts now.
          </p>
        </div>
      </div>
    </section>
  );
}