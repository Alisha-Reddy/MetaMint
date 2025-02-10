import {HeroSection, ServiceSection, NFTSlider, Subscribe, Title} from "../components"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServiceSection/>
      <NFTSlider />
      <Subscribe />
      <Title />
    </main>
  );
}

