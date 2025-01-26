import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import EditorsPics from "@/components/editor";
import CardSection from "@/components/cards";
import BannerSection from "@/components/Banner";
import CustomSection from "@/components/customer";
import FeaturedSection from "@/components/featured";


export default function Home() {
  return (
    <>
    <Header/>
     <HeroSection />
     <EditorsPics />
     <CardSection />
     <BannerSection />
     <CustomSection />
     <FeaturedSection/>

    </>
  );
}
