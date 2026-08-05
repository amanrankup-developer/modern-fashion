import CTASection from "@/components/home/CTASection";
import RelatedSearches from "@/components/home/RelatedSearches";
import CategoryGrid from "@/components/home/CategoryGrid";
import HeroSection from "@/components/hero/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import Bestsellers from "@/components/home/Bestsellers";
import NewlyLaunched from "@/components/home/NewlyLaunched";
import AppBanner from "@/components/home/AppBanner";


export default function Home() {
  return (
    <section className="space-y-10 overflow-x-hidden bg-(--background) pb-12 pt-0 text-center sm:space-y-14 lg:space-y-20">
       <CategoryGrid />
      <HeroSection />
      <VideoSection />
      <NewlyLaunched />
      <Bestsellers />
      <AppBanner />
      <RelatedSearches />
      <CTASection />
    </section>
  );
}
