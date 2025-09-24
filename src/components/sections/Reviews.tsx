'use client';

export default function Reviews() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Week one survivor",
      avatar: "👩‍🦰",
      rating: 5,
      quote: "Week one with baby was chaos until I found this pack. Having the meal plan on the fridge was a lifesaver - I actually ate real food instead of crackers. The emergency numbers sheet gave me so much peace of mind at 3am.",
      highlight: "Week one lifesaver",
      timeframe: "Used from day 1"
    },
    {
      name: "Jessica & Tom",
      role: "First-time parents",
      avatar: "👫",
      rating: 5,
      quote: "We were drowning in the first week. This pack was like having a wise friend guide us through each day. The baby tracking sheets were so much better than fumbling with apps when we were exhausted.",
      highlight: "Like having a wise friend",
      timeframe: "Downloaded on day 3"
    },
    {
      name: "Rachel K.",
      role: "Mom who wished she had this sooner",
      avatar: "👩",
      rating: 5,
      quote: "I wish I had this pack for my first baby's week one! The daily survival checklist kept me sane - even reminded me to shower. Simple but genius for sleep-deprived brains.",
      highlight: "Kept me sane",
      timeframe: "Used for baby #2"
    },
    {
      name: "David H.",
      role: "New dad, week one",
      avatar: "👨",
      rating: 5,
      quote: "As a terrified new dad, week one felt impossible. The quick recipe cards saved us - 5-minute meals I could actually make while holding a crying baby. This pack got us through the hardest week.",
      highlight: "Got us through the hardest week",
      timeframe: "Printed everything day 1"
    },
    {
      name: "Emma L.",
      role: "Breastfeeding mom",
      avatar: "👩‍🦱",
      rating: 5,
      quote: "The grocery list was perfect for my partner's first solo shopping trip in week one. Everything we needed, organized by store section. I stayed fed and nourished when I needed it most.",
      highlight: "Stayed fed when I needed it most",
      timeframe: "Used the grocery list day 5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-peach/10 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-charcoal/80 font-medium text-lg italic">
              "I used to dread those first days. Now I help other moms feel prepared."
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            <span className="text-teal">Week One</span> Success Stories
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Real parents sharing how this pack transformed their hardest week into their most organized
          </p>

          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-charcoal/70 ml-2">4.9/5 from 800+ week-one families</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-peach/20"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-charcoal/60">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="text-charcoal/80 mb-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="bg-pale-green/50 rounded-lg p-3">
                <div className="text-sm font-medium text-deep-green mb-1">
                  💡 &ldquo;{testimonial.highlight}&rdquo;
                </div>
                <div className="text-xs text-charcoal/60">
                  📅 {testimonial.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-pale-green">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal mb-2">800+</div>
                <div className="text-charcoal/70">Week One Survivors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal mb-2">4.9★</div>
                <div className="text-charcoal/70">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal mb-2">30-Day</div>
                <div className="text-charcoal/70">Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-mint/10 rounded-xl p-6 max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-semibold text-deep-green mb-3">
              The Week One Transformation
            </h3>
            <p className="text-charcoal/80 mb-4">
              &ldquo;92% of parents say this pack made their first week feel manageable instead of overwhelming.&rdquo;
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <span className="text-peach font-medium">😰 Before:</span> Chaos, stress, forgetting to eat
              </div>
              <div className="bg-white rounded-lg p-3">
                <span className="text-deep-green font-medium">😌 After:</span> Organized, fed, confident
              </div>
            </div>
          </div>

          <button
            onClick={handleCTAClick}
            className="inline-flex items-center px-10 py-4 bg-peach text-white font-bold text-xl rounded-full hover:bg-peach/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join 800+ Week One Success Stories
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-charcoal/60 mt-4">
            ✓ Instant download • ✓ Week one ready • ✓ 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
}