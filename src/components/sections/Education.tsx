"use client";
import Section from "@/components/ui/Section";
import { usePortfolio } from "@/components/ui/LanguageProvider";
import { GraduationCap } from "lucide-react";

export default function Education() {
 const { profile } = usePortfolio();
  const e = profile.education;
  return <Section id="education" label={profile.ui.sections.education} title={e.title}>
    <article className="education-card"><div className="skill-icon"><GraduationCap size={26}/></div><div><p className="education-period">{e.period}</p><h3>{e.degree}</h3><p className="company">{e.school}</p><p className="muted">{e.description}</p></div></article>
    <div className="credentials-grid">
      <div><h3>{profile.certifications.title}</h3><ul className="credential-list">{profile.certifications.items.map(item => <li key={item.name}><h4>{item.name}</h4><p className="education-period">{item.date}</p><p className="muted">{item.detail}</p></li>)}</ul></div>
      <div><h3>{profile.languages.title}</h3><ul className="credential-list">{profile.languages.items.map(item => <li key={item.name}><h4>{item.name}</h4><p className="muted">{item.detail}</p></li>)}</ul></div>
    </div>
  </Section>;
}
