"use client";
import { ArrowUp } from "lucide-react";
import { usePortfolio } from "@/components/ui/LanguageProvider";
export default function Footer() {
 const { profile } = usePortfolio(); return <footer className="container-custom footer"><a className="brand" href="#home">{profile.initials}<span>.</span></a><p>© {profile.copyrightYear} {profile.name}. {profile.footer}</p><a className="back-top" href="#home">{profile.ui.backTop} <ArrowUp size={15}/></a></footer>; }
