import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from "./components/LandingPage";
import Section from './components/Section';



export default function Home()
{
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <LandingPage />

      <main className="flex-grow">
        <Section type="hero" title="Welcome to Betting App" />
        <Section type="how-it-works" title="How It Works" />
        <Section type="featured-games" title="Featured Games" />
        <Section type="testimonials" title="What Our Users Say" />
        <Section type="news" title="Latest News and Articles" />
        <Section type="faqs" title="Frequently Asked Questions" />
        <Section type="contact" title="Contact Us" />
      </main>
      <Footer />
    </div>
  );
}

