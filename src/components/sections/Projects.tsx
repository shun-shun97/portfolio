"use client";
import Section from "@/components/ui/Section";
import { usePortfolio } from "@/components/ui/LanguageProvider";
import { ArrowUpRight, Code2, GraduationCap, Hotel, ShoppingBag } from "lucide-react";
import type { Project } from "@/types/portfolio";

function ProjectCard({ project }: { project: Project }) {
 const { profile } = usePortfolio();
  const Icon = project.visual === "commerce" ? ShoppingBag : project.visual === "hospitality" ? Hotel : GraduationCap;
  return <article className="project-card">
    <div className={"project-preview project-symbol " + project.visual} aria-hidden="true"><Icon size={58} strokeWidth={1} /><span>{project.name}</span></div>
    <div className="project-info"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3>
      {project.period && <p className="project-period">{project.period}</p>}
      <p className="muted">{project.description}</p><ul className="tags">{project.stack.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="project-links">{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={project.name + " — " + profile.ui.demo + " (" + profile.ui.newTab + ")"}>{profile.ui.demo} <ArrowUpRight size={15}/></a>}{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label={project.name + " — " + profile.ui.source + " (" + profile.ui.newTab + ")"}><Code2 size={15}/>{profile.ui.source}</a>}</div>
    </div>
  </article>;
}
export default function Projects() {
 const { profile } = usePortfolio();
  return <Section id="projects" label={profile.ui.sections.projects} title={profile.projects.title} description={profile.projects.description}><div className="projects-grid">{profile.projects.items.map(project => <ProjectCard project={project} key={project.name}/>)}</div>{profile.projects.note && <p className="section-note project-note">{profile.projects.note}</p>}</Section>;
}
