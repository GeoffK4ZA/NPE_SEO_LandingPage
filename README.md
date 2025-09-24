# New Parent Essentials - Landing Page

A high-converting landing page for the "New Parent Essentials" digital product bundle - a collection of printable cheat sheets, logs, and guides for new parents.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **High Performance**: Built with Next.js 15 and Tailwind CSS v4
- **SEO Optimized**: Complete meta tags, OpenGraph, and structured data
- **Analytics Ready**: Placeholders for Google Analytics and Meta Pixel
- **Stan Store Integration**: All CTAs connect to Stan Store checkout

## 🎨 Brand Colors

- **Mint Green**: `#a1caba` - Primary CTA buttons
- **Peach**: `#f2b6a0` - Accent highlights and problem sections
- **Teal**: `#6fb19f` - Hover states and secondary elements
- **Charcoal**: `#2f3a3a` - Primary text
- **Light Peach**: `#ffded3` - Soft backgrounds
- **Pale Green**: `#cfeee2` - Card backgrounds
- **Light Neutrals**: `#fafaf8` / `#fafafb` - Page backgrounds
- **Deep Green**: `#3d6057` - Headers and guarantee section
- **Black**: `#000000` - Pricing emphasis

## 📱 Page Sections

1. **Hero Section** - Gradient background with product mockup
2. **Problem Section** - Pain points with peach highlight boxes
3. **Solution Section** - Product overview with resource grid
4. **Benefits Section** - Before/after transformations with green tones
5. **Reviews & Social Proof** - Customer testimonials with ratings
6. **Guarantee Section** - 30-day money-back guarantee with confidence badge
7. **Pricing & CTA** - Clear pricing with Stan Store integration
8. **FAQ Section** - Accordion-style frequently asked questions
9. **Final CTA** - Strong closing with purchase urgency

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Update the `.env.local` file with your values:
   ```
   NEXT_PUBLIC_STAN_STORE_URL=your_stan_store_checkout_url
   NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics_id
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

   If you want to try Turbopack (experimental):
   ```bash
   npm run dev:turbo
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Configuration

### Stan Store Integration
All CTA buttons link to the Stan Store checkout URL set in environment variables. Update the `NEXT_PUBLIC_STAN_STORE_URL` to your actual Stan Store product URL.

### Analytics
The site includes placeholders for:
- **Google Analytics**: Set `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
- **Meta Pixel**: Set `NEXT_PUBLIC_META_PIXEL_ID`

### SEO Metadata
Complete SEO configuration in `src/app/layout.tsx`:
- Title tags optimized for search
- Meta descriptions for social sharing
- OpenGraph tags for social media
- Twitter Card tags
- Structured data ready

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO and analytics
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and color variables
├── components/
│   └── sections/
│       ├── Hero.tsx        # Hero section with gradient
│       ├── Problem.tsx     # Problem identification
│       ├── Solution.tsx    # Product overview
│       ├── Benefits.tsx    # Before/after benefits
│       ├── Reviews.tsx     # Social proof
│       ├── Guarantee.tsx   # Money-back guarantee
│       ├── Pricing.tsx     # Pricing and main CTA
│       ├── FAQ.tsx         # Frequently asked questions
│       └── FinalCTA.tsx    # Closing call-to-action
```

## 🎯 Key Features

- **Mobile-First Design**: Responsive across all devices
- **Performance Optimized**: Fast loading times with Turbopack
- **Conversion Focused**: Strategic CTA placement throughout
- **Trust Building**: Testimonials, guarantees, social proof
- **Professional Design**: Calming colors for stressed parents
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🚀 Deployment

This site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

## 🛠️ Troubleshooting

### Turbopack Issues
If you encounter errors with Turbopack (especially on Windows with special characters in the path), use the standard webpack build:

- **Development**: `npm run dev` (instead of `npm run dev:turbo`)
- **Production**: `npm run build` (instead of `npm run build:turbo`)

### Path Issues
If you encounter file path issues during build, ensure your project is located in a directory without special characters or spaces.

## 📞 Support

For questions about implementation or customization, update the contact information in the FAQ section.

---

Built with ❤️ for new parents everywhere.
