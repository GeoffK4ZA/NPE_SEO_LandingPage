import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  category: string;
  readTime: string;
  image: string;
  keywords: string[];
  author: string;
}

// This would typically come from a CMS or markdown files
const blogPosts: BlogPost[] = [
  {
    slug: 'week-one-survival-checklist',
    title: 'Week One with Baby: The Ultimate Survival Checklist',
    excerpt: 'Your complete guide to surviving the first week home with baby. From feeding schedules to visitor boundaries.',
    content: `
# Week One with Baby: The Ultimate Survival Checklist

Coming home with your newborn can feel overwhelming. You're exhausted, emotional, and suddenly responsible for this tiny human. Here's your practical survival guide for the first week.

## Before You Leave the Hospital

- [ ] Get multiple copies of feeding/changing logs
- [ ] Ask about newborn care classes
- [ ] Confirm pediatrician appointment within 48-72 hours
- [ ] Stock up on hospital supplies (they expect you to take them!)

## Essential Supplies for Week One

### Feeding Essentials
- Burp cloths (you can never have too many)
- Nursing pads if breastfeeding
- Formula and bottles if formula feeding
- Comfortable nursing chair or pillow

### Comfort Items
- Swaddle blankets (2-3 different types to see what baby prefers)
- White noise machine or app
- Pacifiers (various shapes to test preferences)

## Daily Survival Tips

### Sleep When Baby Sleeps
Yes, everyone says this, but it's actually crucial. Your body is healing, and sleep deprivation makes everything harder.

### Accept Help
When people offer to help, say yes! Have a list ready:
- Grocery shopping
- Meal prep
- Holding baby while you shower
- Light housework

### Track Everything
Use our feeding and diaper logs to track:
- Feeding times and amounts
- Wet and dirty diapers
- Sleep periods
- Baby's mood and behavior

## Setting Boundaries

### Visitor Guidelines
- Limit visits to 30 minutes
- Ask visitors to wash hands immediately
- No sick visitors, period
- It's okay to say "not today"

### Partner Communication
- Take shifts for night feedings
- Communicate your needs clearly
- Remember you're both learning

## When to Call Your Pediatrician

Call immediately if baby has:
- Fever over 100.4°F (38°C)
- Difficulty breathing
- Extreme lethargy
- No wet diapers in 12+ hours
- Persistent vomiting

## Your Recovery Matters Too

### Physical Recovery
- Take prescribed medications as directed
- Use ice packs for comfort
- Wear supportive undergarments
- Stay hydrated

### Emotional Health
- Baby blues are normal in the first two weeks
- Call your doctor if sadness persists or worsens
- Connect with other new parents
- Be patient with yourself

## Week One Milestones to Expect

Your baby will likely:
- Sleep 16-20 hours per day
- Eat every 2-3 hours
- Have 6+ wet diapers daily
- Lose some birth weight (normal up to 10%)

## Emergency Contacts List

Keep this on your fridge:
- Pediatrician: ___________
- Hospital: ___________
- Lactation consultant: ___________
- Your doctor: ___________
- Partner's work: ___________

## Remember

The first week is about survival, not perfection. You're doing better than you think, and it does get easier. Trust your instincts, ask for help when you need it, and know that thousands of parents before you have navigated this same overwhelming time.

Download our complete New Parent Essentials bundle for more detailed guides, tracking sheets, and meal plans to make your first weeks smoother.
    `,
    publishDate: '2025-01-15',
    category: 'Newborn Care',
    readTime: '8 min read',
    image: '/assets/images/Cover Page.png',
    keywords: ['week one with baby', 'newborn survival guide', 'first week home with baby', 'new parent checklist'],
    author: 'New Parent Essentials Team'
  },
  {
    slug: 'feeding-tracker-complete-guide',
    title: 'How to Track Baby Feeding Like a Pro (Free Template)',
    excerpt: 'Master baby feeding schedules with our proven tracking system. Includes free printable templates.',
    content: `
# How to Track Baby Feeding Like a Pro

Tracking your baby's feeding can feel overwhelming at first, but it's one of the most valuable things you can do in those early weeks. Here's how to do it effectively.

## Why Track Feeding?

### For Your Peace of Mind
- Helps you understand your baby's patterns
- Ensures adequate nutrition
- Provides data for pediatrician visits
- Helps identify growth spurts

### For Medical Reasons
- Monitors weight gain progress
- Identifies potential feeding issues early
- Helps with medication timing if needed
- Useful for troubleshooting sleep problems

## What to Track

### Essential Information
- Start time of feeding
- Duration (for breastfeeding) or amount (for bottle)
- Which breast you started with (if breastfeeding)
- Baby's mood before and after
- Any spit-up or vomiting

### Optional but Helpful
- Your comfort level (pain, latching issues)
- Environmental factors (quiet vs. noisy)
- Baby's alertness level
- Time since last diaper change

## Tracking Methods

### Digital Apps
**Pros:**
- Always have your phone with you
- Automatic calculations
- Easy to share with partner
- Cloud backup

**Cons:**
- Screen time during bonding moments
- Battery dependency
- Learning curve

### Paper Logs
**Pros:**
- No technology required
- Quick and easy
- Can customize format
- Physical backup

**Cons:**
- Easy to lose or damage
- No automatic calculations
- Harder to share data

## Our Proven Tracking System

We recommend a hybrid approach:

### The 3-Column Method
1. **Time & Duration:** When feeding started and how long
2. **Type & Amount:** Breast (L/R) or bottle (oz/ml)
3. **Notes:** Baby's mood, your observations

### Sample Entry
```
7:30 AM | Left breast, 15 min | Fussy before, calm after. Good latch.
10:15 AM | Right breast, 12 min | Sleepy feeding, had to wake baby
1:00 PM | Left breast, 20 min | Growth spurt? Very hungry
```

## Common Patterns to Watch For

### Newborn (0-2 months)
- Every 2-3 hours
- 8-12 feedings per day
- 10-30 minutes per session (breastfeeding)
- 1-3 oz per feeding (bottle)

### 2-4 months
- Every 3-4 hours
- 6-8 feedings per day
- Longer, more efficient sessions
- 3-4 oz per feeding (bottle)

## Troubleshooting with Your Log

### If Baby Seems Always Hungry
Look for:
- Short feeding durations
- Frequent crying after meals
- Weight gain issues

### If Baby Refuses to Feed
Check for:
- Timing patterns (too frequent offerings?)
- Environmental factors
- Baby's alertness level

### If You're Worried About Supply
Track:
- Wet diapers (should have 6+ per day)
- Weight gain at pediatrician visits
- Baby's satisfaction after feeds

## Tips for Success

### Make It Simple
- Don't track everything perfectly
- Focus on patterns, not perfection
- Use whatever method works for YOU

### Involve Your Partner
- Take turns tracking
- Share the responsibility
- Compare observations

### Review Weekly
- Look for patterns
- Celebrate progress
- Adjust expectations as baby grows

## When to Stop Tracking

Most parents find they can stop detailed tracking around:
- 3-4 months when patterns are established
- After any feeding concerns are resolved
- When you feel confident about baby's patterns

## Free Printable Template

Download our feeding tracker template that includes:
- Daily tracking sheets
- Weekly summary pages
- Growth tracking charts
- Notes section for pediatrician visits

This system has helped thousands of new parents feel more confident about feeding. Remember, every baby is different, and what matters most is that YOUR baby is growing and thriving.
    `,
    publishDate: '2025-01-10',
    category: 'Feeding',
    readTime: '6 min read',
    image: '/assets/images/Feeding Log.png',
    keywords: ['baby feeding tracker', 'newborn feeding schedule', 'feeding log template', 'breastfeeding tracker'],
    author: 'New Parent Essentials Team'
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author }],
    publishedTime: post.publishDate,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://newparentessentials.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-charcoal/60">
          <li>
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link href="/blog" className="hover:text-charcoal transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="text-charcoal font-medium" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center text-sm text-charcoal/60 mb-4">
          <span className="bg-peach/20 px-3 py-1 rounded-full text-charcoal font-medium mr-4">
            {post.category}
          </span>
          <time dateTime={post.publishDate}>
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-charcoal/70 mb-8">
          {post.excerpt}
        </p>

        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg prose-charcoal max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-mint/20 to-pale-green/20 rounded-2xl p-8 text-center border-2 border-mint/20">
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
          Get the Complete New Parent Toolkit
        </h2>
        <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
          This article is just one piece of the puzzle. Get our complete bundle with
          feeding trackers, meal plans, checklists, and more to make parenting easier.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-mint text-charcoal font-semibold text-lg rounded-full hover:bg-teal transition-colors shadow-lg"
        >
          Download the Complete Bundle
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Related Articles */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-charcoal mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts
            .filter(p => p.slug !== post.slug)
            .slice(0, 2)
            .map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-32">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-charcoal mb-2 hover:text-deep-green transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-charcoal/70 text-sm">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://newparentessentials.com${post.image}`,
            "datePublished": post.publishDate,
            "dateModified": post.publishDate,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://newparentessentials.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "New Parent Essentials",
              "logo": {
                "@type": "ImageObject",
                "url": "https://newparentessentials.com/assets/logos/New_Parent_Essentials_logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://newparentessentials.com/blog/${post.slug}`
            },
            "keywords": post.keywords.join(", ")
          })
        }}
      />
    </article>
  );
}