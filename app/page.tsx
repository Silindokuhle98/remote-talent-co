import TrustedBy from "./components/TrustedBy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RemoteStaffingSolutions from "./components/RemoteStaffingSolutions";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <RemoteStaffingSolutions />
      <Process />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}