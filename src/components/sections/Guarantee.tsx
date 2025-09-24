'use client';

import Image from 'next/image';

export default function Guarantee() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  return (
    <section className="py-20 bg-deep-green text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
            <div className="text-3xl">🛡️</div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-mint">Week One Promise:</span> It Works or It's Free
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            If this pack doesn't make your first week feel more manageable,
            we'll refund every penny. No questions, no hassles. Period.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6">Try It Risk-Free for Your Week One</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-mint/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Download Instantly</h4>
              <p className="text-white/80 text-sm">
                Get your Week One Survival Pack immediately. Print the meal plan, post emergency numbers on the fridge.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-mint/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Use It Week One</h4>
              <p className="text-white/80 text-sm">
                Follow the meal plans, track with the simple logs, rely on the checklists. See if week one feels different.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-mint/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Manageable or Free</h4>
              <p className="text-white/80 text-sm">
                If your week one doesn't feel more organized and manageable, get every penny back. Keep the guides anyway.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="font-semibold text-xl mb-4 flex items-center">
              <span className="text-2xl mr-3">✅</span>
              What&apos;s Covered
            </h4>
            <ul className="space-y-2 text-white/90">
              <li>• Full refund if not completely satisfied</li>
              <li>• Keep the guides even if you return them</li>
              <li>• No questions asked policy</li>
              <li>• Email support for any issues</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="font-semibold text-xl mb-4 flex items-center">
              <span className="text-2xl mr-3">⚡</span>
              Why We're So Confident
            </h4>
            <ul className="space-y-2 text-white/90">
              <li>• 800+ families have survived week one with this pack</li>
              <li>• 92% say it made week one manageable</li>
              <li>• Less than 2% request refunds</li>
              <li>• Created by parents who survived the chaos</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-mint/20 rounded-xl p-6 max-w-3xl mx-auto mb-8">
          <h3 className="text-xl font-semibold mb-3">
            Your Week One Shouldn't Be About Survival Mode
          </h3>
          <p className="text-white/90 mb-4">
            You literally have nothing to lose. If this pack doesn't transform your week one from chaotic to manageable, you get every penny back. Even keep the guides.
          </p>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-white/90 text-lg font-medium">
              "The worst that happens? You get organized. The best? Week one becomes the foundation for confident parenting."
            </p>
          </div>
        </div>

        <button
          onClick={handleCTAClick}
          className="inline-flex items-center px-10 py-4 bg-mint text-charcoal font-bold text-xl rounded-full hover:bg-white hover:text-deep-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6"
        >
          Start My Week One Plan Risk-Free
          <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <div className="text-center">
          <p className="text-white/80 text-lg mb-6">
            <strong>Still hesitating?</strong> This pack costs less than one takeout meal,
            but could save you from weeks of feeling overwhelmed and unprepared.
          </p>

          {/* Brand Trust Badge */}
          <div className="flex items-center justify-center">
            <div className="bg-white/10 rounded-lg p-4 flex items-center">
              <div className="relative w-16 h-16 mr-3">
                <Image
                  src="/assets/logos/New_Parent_Essentials_logo-removebg-preview.png"
                  alt="New Parent Essentials Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">New Parent Essentials</div>
                <div className="text-white/70 text-sm">Trusted by 800+ families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}