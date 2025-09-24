'use client';

import Image from 'next/image';

export default function FounderStory() {
  return (
    <section className="py-16 bg-pale-green/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-mint/20">
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🤱
                </div>
              </div>
              <div className="text-sm text-charcoal/60">
                Created by
              </div>
              <div className="font-semibold text-charcoal">
                An Expecting Parent
              </div>
              <div className="text-sm text-charcoal/70">
                Who couldn't find what<br />
                they needed anywhere
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-peach/10 rounded-lg p-6 mb-6">
                <p className="text-charcoal/80 font-medium italic">
                  "I searched everywhere for week one guidance that wasn't overwhelming or generic. Nothing existed for what I actually needed."
                </p>
              </div>

              <p className="text-charcoal/80 mb-4">
                As an expecting parent, I spent hours online looking for practical week one help. Everything was either too medical, too vague, or assumed I already knew what I was doing.
              </p>

              <p className="text-charcoal/80 mb-4">
                So I did what any determined parent would do - I reached out to experienced parents, spoke with midwives, and compiled the real advice that actually works. This pack is everything I wish had existed when I was searching.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-mint/10 rounded-lg p-3">
                  <div className="font-medium text-deep-green">✓ Consulted experienced parents</div>
                  <div className="text-charcoal/70">Real stories, practical advice</div>
                </div>
                <div className="bg-mint/10 rounded-lg p-3">
                  <div className="font-medium text-deep-green">✓ Spoke with midwives</div>
                  <div className="text-charcoal/70">Professional guidance simplified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}