import {
  HeroSection, 
  ServiceSection, 
  NFTSlider, 
  Subscribe, 
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive
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
      <AudioLive />
      <FollowerTab />
      <Collection />
    </main>
  );
}

