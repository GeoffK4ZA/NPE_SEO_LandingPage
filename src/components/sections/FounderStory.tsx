'use client';

import Image from 'next/image';

export default function FounderStory() {
  return (
    <section className="py-16 bg-pale-green/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-mint/20 flex items-center justify-center text-2xl font-medium text-gray-600">
                ST
              </div>
              <div className="text-sm text-charcoal/60">
                Created by
              </div>
              <div className="font-semibold text-charcoal">
                Sarah Thompson
              </div>
              <div className="text-sm text-charcoal/70">
                Mum of Two<br />
                Hampshire, UK
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-peach/10 rounded-lg p-6 mb-6">
                <p className="text-charcoal/80 font-medium italic">
                  "After struggling through week one with my first baby, I was determined to help other parents feel more prepared."
                </p>
              </div>

              <p className="text-charcoal/80 mb-4">
                Week one with my first baby was overwhelming. I felt unprepared despite reading countless books and articles. The practical day-to-day challenges weren't covered anywhere.
              </p>

              <p className="text-charcoal/80 mb-4">
                When my second baby arrived, I had learned what actually mattered. I created simple systems that worked, and friends started asking for copies. This pack evolved from those real-world solutions that helped me feel confident instead of constantly worried.
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-mint/10 rounded-lg p-3">
                  <div className="font-medium text-deep-green">✓ Tested with real families</div>
                  <div className="text-charcoal/70">Practical solutions that work</div>
                </div>
                <div className="bg-mint/10 rounded-lg p-3">
                  <div className="font-medium text-deep-green">✓ Refined through experience</div>
                  <div className="text-charcoal/70">Two babies, lessons learned</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-charcoal/60">
                  📧 Questions? Email me at hello@newparentessentials.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}