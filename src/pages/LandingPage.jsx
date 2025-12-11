// pages/LandingPage.jsx
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import "../styles/landing.css"

export default function LandingPage() {
  return (
    <div>
      
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}