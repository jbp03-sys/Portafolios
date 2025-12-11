// pages/LandingPage.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import "../styles/landing.css"

export default function LandingPage() {
  return (
    <div>
      
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}