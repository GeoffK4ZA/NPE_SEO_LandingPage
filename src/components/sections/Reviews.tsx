'use client';

export default function Reviews() {
  const handleCTAClick = () => {
    window.open(process.env.NEXT_PUBLIC_STAN_STORE_URL, '_blank');
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Manchester, UK",
      role: "Mum of 2",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: "After struggling with my first baby, this pack was a game-changer for baby number two. The meal plan actually worked - I managed to eat proper meals even with a toddler and newborn. The shopping list saved my partner multiple trips to the shops.",
      highlight: "Game-changer for baby #2",
      timeframe: "February 2024"
    },
    {
      name: "James & Lucy Thompson",
      location: "Brighton, UK",
      role: "First-time parents",
      avatar: "/api/placeholder/64/64",
      rating: 4,
      quote: "We downloaded this on day 2 when we realized we were completely unprepared. The baby tracking sheets were much easier than the apps we tried - you can't focus on a screen when you're that tired. Wish we'd had it from day 1.",
      highlight: "Much easier than apps",
      timeframe: "January 2024"
    },
    {
      name: "Rachel Williams",
      location: "Cardiff, Wales",
      role: "Midwife & Mum",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: "As a midwife, I see how unprepared most new parents are. I recommend this pack because it's practical and realistic - no overwhelming advice, just simple tools that actually help. I used it myself and now suggest it to all my patients.",
      highlight: "Recommend to all my patients",
      timeframe: "December 2023"
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      role: "New dad",
      avatar: "/api/placeholder/64/64",
      rating: 4,
      quote: "My partner was exhausted from feeding, so I took over meals and shopping. The quick recipe cards were brilliant - even I could manage them with no cooking skills. The emergency numbers sheet on the fridge gave us both confidence.",
      highlight: "Gave us both confidence",
      timeframe: "March 2024"
    },
    {
      name: "Emma Johnson",
      location: "Edinburgh, Scotland",
      role: "Working mum",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: "I'm usually quite organized, but the sleep deprivation hit harder than expected. This pack kept me on track with simple checklists and reminders. The feeding tracker helped me spot patterns my health visitor was asking about.",
      highlight: "Kept me on track",
      timeframe: "January 2024"
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
            <span className="text-charcoal/70 ml-2">4.6/5 from 150+ families</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-peach/20"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-sm font-medium text-gray-600">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-charcoal/60">{testimonial.role}</div>
                  <div className="text-xs text-charcoal/50">{testimonial.location}</div>
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
                <div className="text-3xl font-bold text-teal mb-2">150+</div>
                <div className="text-charcoal/70">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal mb-2">4.6★</div>
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
              &ldquo;Most parents tell us this pack helped them feel more prepared and organized during week one.&rdquo;
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
            Join 150+ Happy Families
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