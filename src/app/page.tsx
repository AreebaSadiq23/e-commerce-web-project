import HeroSection from "@/components/Hero";
import CardSection from "@/components/cards";
import BannerSection from "@/components/Banner";
import CustomSection from "@/components/customer";
import FeaturedSection from "@/components/featured";


export default function Home() {
  return (
    <>
     <HeroSection />
     <CardSection />
     <BannerSection />
     <CustomSection />
     <FeaturedSection/>

    </>
  );
}
