import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import FloatingContact from "@/components/FloatingContact";
import Navigation from "@/components/Navigation";

const Projects = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <header className="pt-32 pb-12 border-b border-border bg-secondary">
        <div className="container px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold font-sans">All Projects</h1>
          <p className="mt-2 font-sans text-primary">A collection of my work and side projects</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container px-4">
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border bg-secondary">
        <p className="font-sans text-muted-foreground">© 2026 Praveen Ramkumar</p>
      </footer>

      <FloatingContact />
    </main>
  );
};
export default Projects;
