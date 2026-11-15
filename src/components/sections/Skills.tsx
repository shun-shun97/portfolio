"use client";
import Section from "@/components/ui/Section";
import { usePortfolio } from "@/components/ui/LanguageProvider";
import { Braces, Database, Wrench } from "lucide-react";
const icons = [Braces, Database, Wrench];
export default function Skills() {
 const { profile } = usePortfolio(); return <Section id="skills" label={profile.ui.sections.skills} title={profile.skills.title} description={profile.skills.description}><div className="skills-grid">{profile.skills.groups.map((g,i) => { const Icon = icons[i]; return <article className="skill-card" key={g.title}><div className="skill-icon"><Icon size={23}/></div><h3>{g.title}</h3><ul className="tags">{g.items.map(item => <li key={item}>{item}</li>)}</ul></article>; })}</div></Section>; }
