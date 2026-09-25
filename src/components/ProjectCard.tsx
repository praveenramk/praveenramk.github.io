import { Link } from "react-router-dom";
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image?: string;
}
interface ProjectCardProps {
  project: Project;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <div className="border border-border bg-card hover:scale-[1.02] transition-all cursor-pointer flex flex-col md:flex-row">
        <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-border overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 md:h-full object-contain p-2"
          />
        </div>
        <div className="p-6 flex flex-col justify-center flex-1">
          <h3 className="text-2xl font-bold mb-3 font-sans group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 text-primary">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIdx) => (
              <span key={techIdx} className="bg-secondary border border-border px-3 py-1 text-sm font-sans">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
