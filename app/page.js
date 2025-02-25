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
  Title,
} from "@/components"

export default function Home() {
  return (
    <div className='w-[90%] mx-auto my-4 sm:my-14'>
      <HeroSection />
      <ServiceSection/>
      <NFTSlider />
      <Subscribe />
      <Category />
      <Title 
      heading="Cool NFTs Here" 
      paragraph="Some are awesome. Some are weird. You decide." />
      <Filter />
      <NFTCard />
      <AudioLive />
      <FollowerTab />
      <Collection />
      <Slider />
      <Brand />
      <Video />
    </div>
  );
}

