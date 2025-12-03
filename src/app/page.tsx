import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Products />
      <Advantages />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
