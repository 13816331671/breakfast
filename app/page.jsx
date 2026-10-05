import Classics from "@/components/sections/Classics";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import Story from "@/components/sections/Story";
import Visit from "@/components/sections/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Classics />
      <MenuSection />
      <Story />
      <Visit />
    </>
  );
}
