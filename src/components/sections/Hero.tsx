"use client";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { usePortfolio } from "@/components/ui/LanguageProvider";

export default function Hero() {
 const { profile } = usePortfolio();
  return (
    <section id="home" className="hero container-custom" aria-labelledby="hero-title">
      <div className="hero-copy">
        {profile.availability && <span className="availability"><span />{profile.availability}</span>}
        <p className="eyebrow hero-eyebrow">{profile.hero.eyebrow}</p>
        <h1 id="hero-title">{profile.hero.title}<br /><span>{profile.hero.emphasis}</span></h1>
        <p className="hero-intro">{profile.hero.description}</p>
        <div className="button-row">
          <a href="#projects" className="button primary">{profile.ui.explore} <ArrowUpRight size={18} /></a>
          <a href="#contact" className="button secondary">{profile.ui.contact} <ArrowUpRight size={18} /></a>
          {profile.cvUrl && <a className="text-link" href={profile.cvUrl} download={profile.cvFileName}><Download size={16} />{profile.ui.download}</a>}
        </div>
        {profile.hero.note && <p className="location"><MapPin size={15} />{profile.hero.note}</p>}
      </div>
      <div className="hero-art portrait-art">
        <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
        <figure className="portrait-card">
          <Image src={profile.photo.src} alt={profile.photo.alt} width={profile.photo.width} height={profile.photo.height} sizes="(max-width: 760px) 220px, (max-width: 1000px) 30vw, 300px" preload className="profile-photo" />
          <figcaption><strong>{profile.name}</strong><span lang="ja">{profile.japaneseName}</span><small>{profile.role}</small></figcaption>
        </figure>
      </div>
      <div className="hero-bottom"><a href="#about">{profile.ui.about} <ArrowDown size={15} /></a><span>{profile.hero.focus}</span></div>
    </section>
  );
}
