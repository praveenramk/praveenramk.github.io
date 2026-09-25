import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { projects } from "@/data/projects";
export default function Projects(){const featured = ["computer-vision-model", "poultry-bird-counting", "ai-ad-critique-system"].map(slug=>projects.find(p=>p.slug===slug)!);return <section id="projects" className="section-block project-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Applied AI, in practice.</h2></div><Link className="action-text" to="/projects">All projects <ArrowUpRight size={18}/></Link></div><div className="featured-grid">{featured.map((project)=><FeaturedProjectCard key={project.slug} project={project}/>)}</div></div></section>}
