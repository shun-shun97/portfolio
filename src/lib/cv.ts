import { profiles, type Language } from "@/data/profile";

// Construct the download exclusively from the same public data used by the portfolio.
// Never read or serialize the original CV files here.
export function createCvResponse(language: Language) {
  const profile = profiles[language];
  const lines = [
    profile.name, profile.japaneseName, profile.role, profile.location, profile.email, profile.phone, "",
    profile.ui.cv.summary, ...profile.about.paragraphs, "",
    profile.ui.cv.skills, ...profile.skills.groups.map(group => group.title + ": " + group.items.join(", ")), "",
    profile.ui.cv.experience, ...profile.experience.items.flatMap(item => [item.company, item.role, item.period, item.type, item.description, ...item.highlights.map(text => "- " + text), ""]),
    profile.ui.cv.projects, ...profile.projects.items.flatMap(item => [item.name, item.category, item.period, item.description, item.stack.join(", "), ""]),
    profile.ui.cv.education, profile.education.school, profile.education.degree, profile.education.period, profile.education.description, "",
    profile.ui.cv.qualifications, ...profile.certifications.items.map(item => item.name + " | " + item.date + " | " + item.detail), "",
    profile.ui.cv.languages, ...profile.languages.items.map(item => item.name + ": " + item.detail),
  ];
  return new Response(lines.join("\n"), { headers: {
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Disposition": 'attachment; filename="' + profile.cvFileName + '"',
    "X-Content-Type-Options": "nosniff",
  } });
}
