import {
  HeroSection, 
  ServiceSection, 
  NFTSlider, 
  Subscribe, 
  Category
} from "../components"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServiceSection/>
      <NFTSlider />
      <Subscribe />
      <Category />
    </main>
  );
}

