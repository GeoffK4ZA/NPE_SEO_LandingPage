import Hero from '@/components/sections/Hero';
import FounderStory from '@/components/sections/FounderStory';
import Problem from '@/components/sections/Problem';
import CommonConcerns from '@/components/sections/CommonConcerns';
import Solution from '@/components/sections/Solution';
import Reviews from '@/components/sections/Reviews';
import Guarantee from '@/components/sections/Guarantee';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <FounderStory />
      <Problem />
      <CommonConcerns />
      <Solution />
      <Reviews />
      <Guarantee />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
