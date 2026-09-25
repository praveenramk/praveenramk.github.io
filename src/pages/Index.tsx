import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingContact from "@/components/FloatingContact";
import ScrollToHash from "@/components/ScrollToHash";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollToHash />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <footer className="py-8 text-center border-t border-border bg-secondary">
        <p className="font-sans text-muted-foreground">© 2026 Praveen Ramkumar</p>
      </footer>
      <FloatingContact />
    </main>
  );
};

export default Index;
