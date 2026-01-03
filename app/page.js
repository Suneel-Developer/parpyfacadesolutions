import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import ProjectManagement from "@/components/ProjectManagement";
import Experts from "@/components/Experts";
import SystemsTech from "@/components/SystemsTech";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="bg-[#e5eeff] dark:bg-[#060b13] text-black dark:text-[#e4e5e7]">
        <Hero />
        <AboutUs />
        <Services />
        <ProjectManagement />
        <Experts />
        <SystemsTech />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
