import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import { getDictionary } from "@/lib/dictionary";

export default async function Home() {
  const dict = await getDictionary('en'); // 기본값으로 영어를 사용

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>

      <Footer dict={dict} />
    </div>
  );
}
