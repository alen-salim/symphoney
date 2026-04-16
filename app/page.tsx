import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureSection from "@/components/SignatureSection";
import CategorySection from "@/components/CategorySection";
import StorySection from "@/components/StorySection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureSection />
        <CategorySection />
        <StorySection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
