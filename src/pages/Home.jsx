import { Navbar } from "../components/Navbar.jsx";
import { Hero } from "../components/Hero.jsx";
import { WhyChooseUs } from "../components/WhyChooseUs.jsx";
import { Services } from "../components/Services.jsx";
import { Countries } from "../components/Countries.jsx";
import { Opportunities } from "../components/Opportunities.jsx";
import { Process } from "../components/Process.jsx";
import { Testimonials } from "../components/Testimonials.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { FAQ } from "../components/FAQ.jsx";
import { Contact } from "../components/Contact.jsx";
import { Footer } from "../components/Footer.jsx";
import { FloatingActions } from "../components/FloatingActions.jsx";
import { ScrollProgress } from "../components/ScrollProgress.jsx";
import { Loader } from "../components/Loader.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Countries />
        <Opportunities />
        <Process />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
