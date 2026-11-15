"use client";
import Section from "@/components/ui/Section";
import { usePortfolio } from "@/components/ui/LanguageProvider";
export default function Experience() {
 const { profile } = usePortfolio(); return <Section id="experience" label={profile.ui.sections.experience} title={profile.experience.title}>{profile.experience.note && <p className="section-note">{profile.experience.note}</p>}<div className="timeline">{profile.experience.items.map(item => <article className="experience-item" key={item.company}><div className="experience-date"><span>{item.period}</span><small>{item.type}</small></div><div className="experience-content"><h3>{item.role}</h3><p className="company">{item.company}</p><p className="muted">{item.description}</p><ul className="highlights">{item.highlights.map(text => <li key={text}>{text}</li>)}</ul><ul className="tags">{item.stack.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div></Section>; }
