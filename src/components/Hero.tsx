import { Button } from "@/components/ui/Button";
import heroBanner from "@/assets/hero-banner.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
     <Image
    src={heroBanner}
    alt="Hero Banner"
    fill
    priority
    className="object-cover absolute"
  />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div >
         <h2 className="p-4 text-6xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-tight" >
            New Arrivals
          </h2>
          </div>
         
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto">
            Elevate Your Everyday Style
          </p>
          <div className="pt-4">
            <Link 
  href="/products"
  className="inline-block bg-white text-black px-12 py-3 text-base font-medium hover:bg-gray-100 transition"
>
  Shop Now
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
