import Header from '@/components/home/Header';
import HeroBanner from '@/components/home/HeroBanner';
import CategoryBar from '@/components/home/CategoryBar';
import MimosSection from '@/components/home/MimosSection';
import LancamentosSection from '@/components/home/LancamentosSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroBanner />
      <CategoryBar />
      <MimosSection />
      <LancamentosSection />
      <Footer />
    </main>
  );
}
