import {
  HeroSection, 
  ServiceSection, 
  NFTSlider, 
  Subscribe, 
  Category,
  Filter,
  NFTCard
} from "../components"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServiceSection/>
      <NFTSlider />
      <Subscribe />
      <Category />
      <Filter />
      <NFTCard />
    </main>
  );
}

