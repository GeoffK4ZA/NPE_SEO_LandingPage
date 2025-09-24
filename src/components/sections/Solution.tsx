'use client';

import Image from 'next/image';

export default function Solution() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const resources = [
    {
      icon: "🍽️",
      title: "7-Day Meal Plan",
      description: "Simple, nourishing meals ready in 5-10 minutes for exhausted parents who need to stay fed",
      preview: "One-pot meals, grab-and-go snacks",
      time: "Week 1 Essential",
      image: "/assets/images/Eating Plan.png"
    },
    {
      icon: "🛒",
      title: "Smart Shopper List",
      description: "One strategic grocery run covers your entire first week - no more wandering aisles in a fog",
      preview: "Organized by store section",
      time: "Week 1 Essential",
      image: "/assets/images/Shopping list.png"
    },
    {
      icon: "📞",
      title: "Emergency Numbers Sheet",
      description: "Stick this on the fridge for those 2am moments when you can't think straight",
      preview: "Pediatrician, lactation consultant, poison control",
      time: "Week 1 Essential",
      image: "/assets/images/How To Page.png"
    },
    {
      icon: "📊",
      title: "Baby Tracking Logs",
      description: "Simple sheets to track feeding, sleep, and nappy changes without the app overwhelm",
      preview: "Feed times, sleep patterns, nappy count",
      time: "Week 1 Essential",
      image: "/assets/images/Feeding Log.png"
    },
    {
      icon: "🍳",
      title: "Quick Recipe Cards",
      description: "No-fuss meals that work when you're operating on zero sleep and maximum hunger",
      preview: "5-minute breakfasts, one-handed lunches",
      time: "Week 1 Essential",
      image: "/assets/images/Recipes.png"
    },
    {
      icon: "✅",
      title: "Daily Survival Checklist",
      description: "Because remembering to shower is an achievement worth celebrating some days",
      preview: "Self-care reminders, baby basics",
      time: "Week 1 Essential",
      image: "/assets/images/Nappy Log.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg italic">
              "Your brain is running on fumes, but you don't have to do it alone."
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            <span className="text-teal">Week One Baby Survival Pack</span>
            <br />Step-by-Step Peace of Mind
          </h2>

          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto mb-8">
            Stay nourished without thinking. Track baby's needs without stressing.
            Feel in control during the hardest week.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-pale-green rounded-lg px-4 py-3">
              <span className="text-deep-green font-semibold">📱 Any Device</span>
            </div>
            <div className="bg-mint/20 rounded-lg px-4 py-3">
              <span className="text-deep-green font-semibold">🖨️ Print Ready</span>
            </div>
            <div className="bg-peach/20 rounded-lg px-4 py-3">
              <span className="text-deep-green font-semibold">⚡ Instant Access</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="absolute -top-3 -right-3 bg-peach text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-lg">
                {resource.time}
              </div>

              <div className="bg-light-neutral border-2 border-pale-green rounded-xl overflow-hidden hover:shadow-xl hover:border-teal transition-all duration-300 group">
                <div className="relative h-32 bg-white p-2 overflow-hidden">
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={`${resource.title} preview`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent"></div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">{resource.icon}</div>
                    <h3 className="text-xl font-semibold text-charcoal">
                      {resource.title}
                    </h3>
                  </div>

                  <p className="text-charcoal/80 mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="bg-white rounded-lg p-3 border border-pale-green">
                    <div className="text-sm text-teal font-medium">What's Inside:</div>
                    <div className="text-sm text-charcoal/70">{resource.preview}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Transformation Section */}
        <div className="mt-16 bg-light-neutral rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
            Your <span className="text-teal">Week One Transformation</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">😰</div>
                <div className="font-semibold text-peach">Without This Pack</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li>• Surviving on crackers and whatever you can grab</li>
                <li>• Juggling 5 different baby tracking apps at 3am</li>
                <li>• Every day feels chaotic and overwhelming</li>
                <li>• Googling panic moments at 2am</li>
              </ul>
            </div>

            <div className="bg-mint/20 rounded-xl p-6 border-2 border-mint">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-deep-green">With This Pack</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li>• 7 days of nourishing meals planned out</li>
                <li>• Simple paper trackers that actually work</li>
                <li>• Daily checklists keep you organized</li>
                <li>• Emergency numbers ready on your fridge</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">😌</div>
                <div className="font-semibold text-deep-green">The Result</div>
              </div>
              <ul className="space-y-2 text-sm text-charcoal/80">
                <li>• Feel nourished without thinking</li>
                <li>• Track baby's needs without stressing</li>
                <li>• Know you're doing it right</li>
                <li>• Confidence instead of overwhelm</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg text-charcoal/80 font-medium italic">
                "This isn't about perfection - it's about having a plan that works when nothing else does."
              </p>
            </div>
          </div>
        </div>

        {/* Product Preview Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-deep-green mb-6 text-center">
            Sneak Peek: What's Inside Your Pack
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-light-neutral rounded-lg p-6">
              <h4 className="font-semibold text-charcoal mb-3">📋 Sample from Daily Survival Checklist:</h4>
              <div className="bg-white rounded p-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-mint mr-2">☐</span>
                    <span>Eat breakfast (even if it's toast)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-mint mr-2">☐</span>
                    <span>Check baby's diaper before feeding</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-mint mr-2">☐</span>
                    <span>Shower (yes, this counts as self-care)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-mint mr-2">☐</span>
                    <span>Call someone who makes you laugh</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-neutral rounded-lg p-6">
              <h4 className="font-semibold text-charcoal mb-3">🍽️ Sample from 5-Minute Meal Plan:</h4>
              <div className="bg-white rounded p-4 text-sm">
                <div className="font-medium mb-2">Day 2 Breakfast: "One-Hand Wonder"</div>
                <div className="text-charcoal/80 space-y-1">
                  <div>• Toast with peanut butter & banana</div>
                  <div>• Pre-made smoothie (recipe included)</div>
                  <div>• Protein bar backup plan</div>
                  <div className="text-xs text-teal mt-2">⏱ Prep time: 3 minutes • Eat with one hand ✓</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-mint/10 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-deep-green font-medium text-sm">
                This is just a tiny sample - your complete pack has 40+ pages of practical, week-one specific guidance
              </p>
            </div>
          </div>
        </div>

        {/* Device Flexibility Section */}
        <div className="mt-8 bg-gradient-to-r from-pale-green to-mint/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-deep-green mb-6 text-center">
            Use Anywhere, Anytime - See How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-20 h-28 mx-auto mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/assets/images/Feeding Log.png"
                  alt="Mobile view of feeding log"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-charcoal mb-2">📱 On Your Phone</h4>
              <p className="text-sm text-charcoal/70">Quick reference during 3am feeds</p>
            </div>
            <div className="text-center">
              <div className="relative w-24 h-32 mx-auto mb-4 bg-white rounded-lg shadow-md overflow-hidden transform rotate-1">
                <Image
                  src="/assets/images/Shopping list.png"
                  alt="Printed shopping list"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-charcoal mb-2">🖨️ Print & Post</h4>
              <p className="text-sm text-charcoal/70">Stick meal plans on your fridge</p>
            </div>
            <div className="text-center">
              <div className="relative w-28 h-24 mx-auto mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/assets/images/Eating Plan.png"
                  alt="Desktop view of meal plan"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-charcoal mb-2">💻 Any Device</h4>
              <p className="text-sm text-charcoal/70">Desktop, tablet, phone - it all works</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-10 py-4 bg-peach text-white font-bold text-xl rounded-full hover:bg-peach/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Week One Pack Now
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-charcoal/60 mt-4">
            ✓ Instant download • ✓ Works on all devices • ✓ 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
}