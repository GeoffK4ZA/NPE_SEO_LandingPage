'use client';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">New Parent Essentials</h3>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              Simple, practical resources for new parents navigating their first weeks.
              Created by parents who understand the real challenges of those early days.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>📧 hello@newparentessentials.com</p>
              <p>📍 Hampshire, United Kingdom</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="mailto:hello@newparentessentials.com" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <span className="cursor-default">30-Day Guarantee</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <span className="cursor-default">Privacy Policy</span>
              </li>
              <li>
                <span className="cursor-default">Terms of Service</span>
              </li>
              <li>
                <span className="cursor-default">Refund Policy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-white/70">
              <p>© 2024 New Parent Essentials. All rights reserved.</p>
              <p className="mt-1">
                Registered in England & Wales. This is not medical advice.
              </p>
            </div>
            <div className="text-sm text-white/70 md:text-right">
              <p className="mb-2">🛡️ Secure payments via Stan Store</p>
              <p>⚡ Instant digital delivery</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-xs text-white/60 leading-relaxed">
                <strong>Important Notice:</strong> This pack contains general information and personal experiences.
                It is not medical advice and should not replace professional healthcare guidance. Always consult
                with your healthcare provider for medical concerns about you or your baby. Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}