import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
