"use client";
import Section from "@/components/ui/Section";
import { usePortfolio } from "@/components/ui/LanguageProvider";
export default function About() {
 const { profile } = usePortfolio(); return <Section id="about" label={profile.ui.sections.about} title={profile.about.title}><div className="about-grid"><div className="about-monogram" aria-hidden="true"><span>{profile.initials}<i>.</i></span><small>{profile.role}</small></div><div><div className="prose">{profile.about.paragraphs.map(p => <p key={p}>{p}</p>)}</div><dl className="facts">{profile.about.facts.map(f => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl></div></div></Section>; }
