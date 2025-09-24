'use client';

import Image from 'next/image';

export default function Hero() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-mint to-light-neutral"
        style={{
          background: 'linear-gradient(135deg, var(--color-mint) 0%, var(--color-light-neutral) 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="bg-peach/20 rounded-xl p-4 mb-6 border-l-4 border-peach">
              <p className="text-charcoal/80 italic">
                "Overwhelmed? Sleepless? Forgetting what day it is? We've got you."
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Turn Week One Chaos Into
              <span className="block text-deep-green">Calm Confidence</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal/80 mb-6 max-w-lg mx-auto lg:mx-0">
              Meals, checklists, and sanity-savers for brand-new parents.
            </p>

            <div className="bg-light-peach/80 rounded-lg p-4 mb-8 max-w-lg mx-auto lg:mx-0">
              <p className="text-charcoal/90 font-medium">
                Your brain is running on fumes, but you don't have to do it alone.
              </p>
              <p className="text-sm text-charcoal/70 mt-2">
                This pack is practical guidance, not medical advice. Fed is best — for baby and for you.
              </p>
            </div>

            <button
              onClick={handleCTAClick}
              className="inline-flex items-center px-8 py-4 bg-mint text-charcoal font-semibold text-lg rounded-full hover:bg-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4"
            >
              Download Instantly — Start Week One Prepared
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 text-xs text-charcoal/60">
              <div className="flex items-center">
                <span className="mr-1">🔒</span>
                Secure Checkout
              </div>
              <div className="flex items-center">
                <span className="mr-1">⚡</span>
                Instant Access
              </div>
              <div className="flex items-center">
                <span className="mr-1">🛡️</span>
                30-Day Guarantee
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-6">
              <p className="text-sm text-charcoal/60">
                ✓ Perfect for parents-to-be or those already in the trenches
              </p>
              <button
                onClick={handleCTAClick}
                className="text-sm text-teal hover:text-deep-green font-semibold underline transition-colors duration-200"
              >
                Skip to pricing →
              </button>
            </div>
            <p className="text-sm text-charcoal/60">
              ✓ Instant digital download • ✓ 30-day guarantee
            </p>
          </div>

          <div className="relative">
            {/* Main Product Mockup - Actual Cover Image */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 relative overflow-hidden">
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/assets/images/Cover Page.png"
                  alt="Week One Baby Survival Pack Cover"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              <div className="text-center mb-4">
                <h3 className="font-bold text-deep-green text-lg mb-2">Week One Baby Survival Pack</h3>
                <p className="text-charcoal/70 text-sm">Complete done-for-you guide</p>
                <div className="mt-3 bg-mint/10 rounded-lg p-2">
                  <p className="text-xs text-charcoal/80">
                    📱 View on any device • 🖨️ Print at home
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-light-peach rounded-lg p-3">
                  <h4 className="font-semibold text-deep-green text-xs mb-1">🍽️ 7-Day Meals</h4>
                  <p className="text-xs text-charcoal/70">Ready in 5-10 mins</p>
                </div>
                <div className="bg-pale-green rounded-lg p-3">
                  <h4 className="font-semibold text-deep-green text-xs mb-1">📋 Smart Lists</h4>
                  <p className="text-xs text-charcoal/70">One grocery run</p>
                </div>
                <div className="bg-mint/30 rounded-lg p-3">
                  <h4 className="font-semibold text-deep-green text-xs mb-1">📞 Emergency</h4>
                  <p className="text-xs text-charcoal/70">Fridge-ready sheet</p>
                </div>
                <div className="bg-peach/30 rounded-lg p-3">
                  <h4 className="font-semibold text-deep-green text-xs mb-1">📊 Trackers</h4>
                  <p className="text-xs text-charcoal/70">Feed, sleep, nappy</p>
                </div>
              </div>
            </div>

            {/* Device Flexibility Badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 transform -rotate-3">
              <div className="text-center">
                <div className="text-lg font-bold text-deep-green">📱📋🖨️</div>
                <div className="text-xs text-charcoal">Use Anywhere</div>
              </div>
            </div>

            {/* Week One Badge */}
            <div className="absolute -bottom-4 -left-4 bg-peach rounded-xl shadow-lg p-3 transform rotate-6">
              <div className="text-center">
                <div className="text-xl font-bold text-white">Week 1</div>
                <div className="text-xs text-white/90">Survival</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}