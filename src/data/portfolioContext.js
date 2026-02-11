import { projects, skills, educations, contacts } from "../Data";

function getPortfolioContext() {
  const skillCategories = [...new Set(skills.map((s) => s.value))];
  const projectTitles = projects.map((p) => p.title).join(", ");
  const contactInfo = contacts
    .map((c) => (c.href ? `${c.text} (${c.href})` : c.text))
    .join(", ");

  return {
    name: "Troy Quan",
    title: "Full Stack Developer",
    bio: "I am a full stack engineer with 3 years of experience, passionate about full stack development.",
    experience: [
      {
        company: "Cyberdyne Network",
        role: "Full Stack Developer",
        type: "Permanent Full-time",
        period: "November 2024 - Present",
        description: "Collaborating with teammates to discuss requirements, plan features, and solve technical challenges. Responsible for maintaining a clean and modular codebase. Managing state with Pinia. Using Docker to simplify deployment and development. Gained hands-on experience with the latest web technologies. Developed skills in building scalable, maintainable applications from the ground up."
      }
    ],
    contact: contactInfo,
    phone: "514-660-0320",
    email: "quantroy@gmail.com",
    location: "Montreal, Quebec",
    linkedin: "https://linkedin.com/in/yongze-quan-1b1473278",
    cvEmail: "yongze.quan@outlook.com",
    skills: skillCategories.join(", "),
    projects: projectTitles,
    education: educations.map((e) => `${e.title} (${e.time})`).join("; "),
  };
}

export function getPortfolioContextText() {
  const ctx = getPortfolioContext();
  const experienceText = ctx.experience
    .map((e) => `${e.role} at ${e.company} (${e.period}): ${e.description}`)
    .join("\n\n");

  return `Name: ${ctx.name}
Title: ${ctx.title}
Bio: ${ctx.bio}
Work Experience:
${experienceText}
Phone: ${ctx.phone}
Email: ${ctx.email}
Location: ${ctx.location}
LinkedIn: ${ctx.linkedin}
Skills: ${ctx.skills}
Projects: ${ctx.projects}
Education: ${ctx.education}`;
}

export { getPortfolioContext };
