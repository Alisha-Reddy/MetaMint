import {
  HeroSection, 
  ServiceSection, 
  NFTSlider, 
  Subscribe, 
  Title,
  Category
} from "../components"

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServiceSection/>
      <NFTSlider />
      <Subscribe />
      <Title
        heading="Browse by category"
        paragraph= "Explore the NFTs in the most featured categories."
      />
      <Category />
    </main>
  );
}

