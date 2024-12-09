import HeroSection from "@/components/Hero";
import EditorPickSection from "@/components/EditorPickSection";
import CardSection from "@/components/cards";
import BannerSection from "@/components/Banner";
import CustomSection from "@/components/customer";
import FeaturedSection from "@/components/featured";


export default function Home() {
  return (
    <>
     <HeroSection />
     <EditorPickSection />
     <CardSection />
     <BannerSection />
     <CustomSection />
     <FeaturedSection/>

    </>
  );
}
