import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/components/ProjectCard";
export default function FeaturedProjectCard({project}:{project:Project}) {return <Link className="work-card" to={`/projects/${project.slug}`}><div className="work-image"><img src={project.image} alt={`${project.title} overview`} loading="lazy"/></div><div className="work-body"><div className="work-label">{project.tech.slice(0,2).join(" / ")}<ArrowUpRight size={20}/></div><h3>{project.title}</h3><p>{project.description}</p><span className="work-link">Explore project <span aria-hidden="true">→</span></span></div></Link>}
