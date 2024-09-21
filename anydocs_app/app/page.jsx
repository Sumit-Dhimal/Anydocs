import { HeroSection } from "@/components/HeroSection";
import { CardCollection } from "@/components/CardCollection";

export default function Home() {
  return (
    <div className="px-5">
      <HeroSection />
      <CardCollection />
    </div>
  );
}
