import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Parenting Tips & Guides',
  description: 'Expert parenting advice, baby care tips, and survival guides for new parents. From feeding schedules to sleep training - practical help for real parents.',
  keywords: 'parenting tips, baby care, new parent advice, feeding schedule, sleep training, parenting guides',
  openGraph: {
    title: 'New Parent Essentials Blog - Expert Parenting Tips',
    description: 'Expert parenting advice, baby care tips, and survival guides for new parents.',
    url: 'https://newparentessentials.com/blog',
  },
};

// This would typically come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'week-one-survival-checklist',
    title: 'Week One with Baby: The Ultimate Survival Checklist',
    excerpt: 'Your complete guide to surviving the first week home with baby. From feeding schedules to visitor boundaries.',
    publishDate: '2025-01-15',
    category: 'Newborn Care',
    readTime: '8 min read',
    image: '/assets/images/Cover Page.png',
  },
  {
    slug: 'feeding-tracker-complete-guide',
    title: 'How to Track Baby Feeding Like a Pro (Free Template)',
    excerpt: 'Master baby feeding schedules with our proven tracking system. Includes free printable templates.',
    publishDate: '2025-01-10',
    category: 'Feeding',
    readTime: '6 min read',
    image: '/assets/images/Feeding Log.png',
  },
  {
    slug: 'sleep-schedule-newborn',
    title: 'Newborn Sleep Schedule: What to Expect in the First Month',
    excerpt: 'Realistic expectations for newborn sleep patterns and gentle ways to encourage better rest.',
    publishDate: '2025-01-05',
    category: 'Sleep',
    readTime: '10 min read',
    image: '/assets/images/Nappy Log.png',
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Blog Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Parenting Tips & Guides
        </h1>
        <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
          Real advice from parents who've been there. Practical tips, honest insights,
          and survival strategies for your parenting journey.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-mint px-3 py-1 rounded-full text-sm font-medium text-charcoal">
                Featured
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-sm text-charcoal/60 mb-3">
                <span className="bg-peach/20 px-2 py-1 rounded text-charcoal font-medium mr-3">
                  {blogPosts[0].category}
                </span>
                <time dateTime={blogPosts[0].publishDate}>
                  {new Date(blogPosts[0].publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="hover:text-deep-green transition-colors"
                >
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-charcoal/70 mb-6 text-lg">
                {blogPosts[0].excerpt}
              </p>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center text-teal hover:text-deep-green font-semibold transition-colors"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article key={post.slug} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-charcoal/60 mb-3">
                <span className="bg-pale-green/50 px-2 py-1 rounded text-charcoal font-medium mr-3">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-deep-green transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-charcoal/70 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time dateTime={post.publishDate} className="text-sm text-charcoal/60">
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-teal hover:text-deep-green font-semibold text-sm transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-mint to-pale-green rounded-2xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
          Get the Complete New Parent Survival Kit
        </h2>
        <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
          Why piece together advice from multiple sources? Get everything you need
          in one comprehensive guide that's helped thousands of new parents.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-charcoal font-semibold text-lg rounded-full hover:bg-gray-50 transition-colors shadow-lg"
        >
          Download the Complete Bundle
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </main>
  );
}