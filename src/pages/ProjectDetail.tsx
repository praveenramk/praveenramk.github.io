import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import FloatingContact from "@/components/FloatingContact";
import Navigation from "@/components/Navigation";

const ProjectDetail = () => {
  const { slug } = useParams<{
    slug: string;
  }>();
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 font-sans">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button variant="outline" className="border border-border" asChild>
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <header className="pt-32 pb-12 border-b border-border bg-secondary">
        <div className="container px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold font-sans">{project.title}</h1>
        </div>
      </header>

      <section className="py-12">
        <div className="container px-4 max-w-5xl mx-auto">
          {/* Project Image */}
          {project.image && (
            <div className="border border-border bg-muted mb-8 flex items-center justify-center p-4">
              <img src={project.image} alt={project.title} className="max-w-full max-h-[500px] object-contain" />
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="bg-secondary border border-border px-4 py-2 text-sm font-sans font-bold">
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6 text-primary">{project.description}</p>

            {project.longDescription && (
              <div className="border border-border bg-card p-6 md:p-8">
                <h2 className="text-2xl font-bold font-sans mb-4">Project Details</h2>
                <div className="text-foreground leading-relaxed prose prose-lg max-w-none dark:prose-invert">
                  <ReactMarkdown 
                    components={{
                      strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
                      p: ({children}) => <p className="mb-4 text-foreground">{children}</p>,
                    }}
                  >
                    {project.longDescription}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <nav className="border-t border-border bg-card">
        <div className="container px-4">
          <div className="grid grid-cols-2">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 py-6 pr-4 border-r border-border hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="text-left">
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider">Previous</p>
                <p className="font-bold text-sm md:text-base line-clamp-1">{prevProject.title}</p>
              </div>
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 py-6 pl-4 hover:bg-secondary transition-colors"
            >
              <div className="text-right">
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider">Next</p>
                <p className="font-bold text-sm md:text-base line-clamp-1">{nextProject.title}</p>
              </div>
              <ChevronRight className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </nav>

      <footer className="py-8 text-center border-t border-border bg-secondary">
        <p className="font-sans text-muted-foreground">© 2026 Praveen Ramkumar</p>
      </footer>

      <FloatingContact />
    </main>
  );
};
export default ProjectDetail;
