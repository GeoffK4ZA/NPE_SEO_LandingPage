'use client';

export default function Pricing() {
  const handlePurchase = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const features = [
    "🍽️ 7-Day Meal Plan (ready in 5-10 minutes)",
    "🛒 Smart Shopper List (one grocery run covers week one)",
    "📞 Emergency Numbers Sheet (fridge-ready for 3am moments)",
    "📋 Baby Tracking Logs (no app overwhelm, just pen & paper)",
    "🍳 Quick Recipe Cards (one-handed meals for exhausted parents)",
    "✅ Daily Survival Checklist (remember to shower achievements)",
    "📱💻🖨️ Works on any device, print at home",
    "🔄 Lifetime access & updates"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg italic">
              "Week one shouldn't cost you your sanity. This costs less than a pizza delivery."
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Your Complete Week One Survival Pack
            <div className="mt-4">
              <span className="text-2xl text-charcoal/60 line-through">was £19</span>
              <span className="block text-black text-5xl md:text-6xl mt-2">Limited Offer £9.99</span>
            </div>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Less than one takeout meal, but could save you from weeks of feeling overwhelmed and unprepared.
          </p>
        </div>

        <div className="bg-light-neutral border-2 border-mint rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-peach text-white px-6 py-2 rounded-bl-lg font-semibold">
            🔥 First 500 Customers
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Week One Baby Survival Pack
            </h3>

            <div className="text-center mb-6">
              <div className="text-2xl text-charcoal/60 line-through mb-1">was £19</div>
              <div className="text-5xl font-bold text-black mb-2">£9.99</div>
              <div className="text-sm text-charcoal/60">One-time payment • Lifetime access</div>
            </div>

            <div className="bg-pale-green rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="text-deep-green font-semibold">🚀 Limited Time Offer</div>
              <div className="text-sm text-charcoal/70">Save 47% off regular price • Get it all for just £9.99</div>
              <div className="text-xs text-charcoal/60 mt-2">
                ⏰ Limited time only • Then price goes back to £19
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-charcoal mb-4">What&apos;s Included:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal mr-3 mt-1">✓</span>
                    <span className="text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-pale-green">
                <h4 className="font-semibold text-charcoal mb-3">Alternative Solutions Cost:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Personal meal planning service</span>
                    <span>$150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Postpartum doula session</span>
                    <span>$100+/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lactation consultant visit</span>
                    <span>$200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Newborn care class</span>
                    <span>$75+</span>
                  </div>
                  <div className="border-t pt-2 font-semibold flex justify-between">
                    <span>Professional support</span>
                    <span>$525+</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-teal mb-2">Get It All For £9.99</div>
                <div className="text-sm text-charcoal/70">
                  Week one essentials at a fraction of the cost
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handlePurchase}
              className="w-full md:w-auto inline-flex items-center justify-center px-12 py-4 bg-peach text-white font-bold text-xl rounded-full hover:bg-peach/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get My Week One Survival Pack - £9.99
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <div className="mt-6 space-y-2 text-sm text-charcoal/60">
              <div className="flex items-center justify-center">
                <span className="mr-2">🔒</span>
                Secure checkout powered by Stan Store
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">⚡</span>
                Instant download after purchase
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">🛡️</span>
                30-day money-back guarantee
              </div>
              <div className="flex items-center justify-center mt-4">
                <div className="bg-pale-green/30 rounded-lg px-3 py-1 text-xs">
                  <span className="text-deep-green font-medium">✓ Trusted by 800+ families</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-light-peach/50 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-semibold text-charcoal mb-3">
              🎁 First 500 Customer Bonus: Complete Week 2-4 Guide Pack
            </h3>
            <p className="text-charcoal/80 mb-4">
              Early customers get exclusive access to our Week 2-4 expansion pack (normally $19). Plus free lifetime updates as we add new week-specific guides.
            </p>
            <div className="bg-white/70 rounded-lg p-3">
              <p className="text-sm text-charcoal/70">
                ✓ Week 2-4 survival guides (bonus) ✓ Sleep progression trackers ✓ Feeding milestone cards ✓ All future updates
              </p>
            </div>
            <div className="bg-peach/20 rounded-lg p-3 mt-3">
              <p className="text-sm text-deep-green font-medium">
                Total bonus value: $47 • Yours free as an early customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}