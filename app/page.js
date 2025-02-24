import {
  HeroSection, 
  ServiceSection, 
  NFTSlider, 
  Subscribe, 
  Category,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Video
} from "@/components/MainPage"
import{
  Brand,
  Slider,
  Filter,
} from "@/components"

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
      <Slider />
      {/* <Brand /> */}
      <Video />
    </main>
  );
}

