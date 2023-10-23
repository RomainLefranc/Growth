import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <Testimonials />
      <Pricing />
      <Faq />
    </>
  );
}
