import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </main>
  );
}
