import Navbar from "./components/Navbar/navbar";
import HeroSection from "./components/HeroSection/heroSection";
import Section2 from "./components/section2/section2"; 
import Section3 from "./components/section3/section3"; 
import Section4 from "./components/section4/section4"; 
import Testimonial from "./components/Testimonial/testimonial";
import Faq from "./components/Faq/faq";
import PromoAd from "./components/promoAd/promoAd";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <HeroSection />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Testimonial />
      <Faq />
      <PromoAd />
      <Footer /> */}
    </main>
  );
}
