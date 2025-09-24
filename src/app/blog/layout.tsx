import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | New Parent Essentials Blog',
    default: 'Parenting Tips & Guides | New Parent Essentials Blog',
  },
  description: 'Expert parenting advice, baby care tips, and survival guides for new parents. From feeding schedules to sleep training - we\'ve got you covered.',
  openGraph: {
    title: 'New Parent Essentials Blog - Expert Parenting Tips',
    description: 'Expert parenting advice, baby care tips, and survival guides for new parents.',
    type: 'website',
    locale: 'en_US',
    url: 'https://newparentessentials.com/blog',
    siteName: 'New Parent Essentials',
  },
  alternates: {
    canonical: 'https://newparentessentials.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-light-neutral">
      {children}
    </div>
  );
}