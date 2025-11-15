import HeroSection from "../components/heroSection/HeroSection";
import Collections from "../components/collections/collections";
import OurStory from "../components/ourStory/OurStory";
import OurServices from "../components/ourServices/OurServices";
import Bestsellers from "../components/bestsellers/Bestsellers";
import Testimonials from "../components/testimonials/Testimonials";
import Newsletter from "../components/newsletter/Newsletter";

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <Collections />
      <OurStory />
      <OurServices />
      <Bestsellers />
      <Testimonials />
      <Newsletter />
    </>
  );
}
