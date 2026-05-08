import { useMemo, useState } from "react";

const profile = {
  name: "Harshit Singh",
  title: "Full Stack Developer",
  phoneDisplay: "+91 85950 24295",
  phoneHref: "tel:+918595024295",
  email: "harshit971897@gmail.com",
  linkedIn: "https://www.linkedin.com/in/harshit-singh-dev/",
  github: "https://github.com/harshitsingh2007",
  summary:
    "Building full-stack web products with React, Node.js, Express, and MongoDB. I focus on clean APIs, reusable UI, and secure authentication.",
};

const skills = {
  Strong: [
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Express.js",
    "Node.js",
    "Tailwind CSS",
    "OOPs",
    "C",
  ],
  Intermediate: ["Git", "DBMS", "SQL", "MongoDB", "REST API", "Next.js", "FastAPI", "DSA"],
  Basics: ["Python", "Mongoose", "OS", "Software Engineering Principles"],
  "Software & Tools": ["VS Code", "Postman", "GitHub"],
  Analytics: ["MS Excel", "Power BI"],
};

const projects = [
  {
    title: "Code-Crafts",
    description:
      "A full-stack e-commerce marketplace supporting 50+ products with AI-based recommendations and admin dashboard.",
    bullets: [
      "20+ reusable UI components with faster development flow",
      "JWT auth, cart, and admin dashboard with CRUD features",
      "15+ REST APIs with MongoDB-backed data management",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    period: "Jul 2025 - Sep 2025",
  },
  {
    title: "Secure-Travel-Dashboard",
    description:
      "A backend-driven learning platform with authentication, courses, quizzes, assignments, and notes management.",
    bullets: [
      "10+ REST APIs with Node.js, Express.js, and MongoDB Atlas",
      "Modular routing and middleware architecture",
      "Third-party YouTube Transcript API integration",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Axios"],
    period: "Aug 2025 - Oct 2025",
  },
];

const experiences = [
  {
    org: "Geeta Technical Hub",
    role: "Full Stack Web Development Intern",
    date: "Jun 2025 - Aug 2025",
    location: "Panipat, Haryana",
    bullets: [
      "8-week intensive full-stack training across frontend and backend",
      "Built 3+ full-stack apps using React, Node.js, and MongoDB",
      "Engineered 10+ RESTful APIs for app functionality",
      "Implemented authentication and secure session handling",
    ],
  },
];

const education = [
  {
    school: "Geeta University",
    degree: "Bachelor of Computer Applications (BCA)",
    score: "CGPA 7.90",
    year: "2024 - Present",
  },
  {
    school: "M.L Govt Boys Sr Sec School",
    degree: "Intermediate (Class XII)",
    score: "78.8%",
    year: "2023 - 2024",
  },
];

const achievements = [
  "Top 15 - Internal Hackathon, Geeta University",
  "Top 15 - National Level Hackathon, GNDEC Ludhiana",
  "30th Rank - National Science Day Quiz, Unstop",
  "Top 4 - Quiz Competition, Unstop",
];

const codingProfiles = [
  "HackerRank - 4 Star (C++)",
  "LeetCode - 137 problems solved",
  "HackerBlocks - Active profile",
];

const extracurriculars = [
  "Led a team of 5 members in an internal hackathon",
  "Coordinated a team during Web Set Hunt competition",
  "Team member in a national level hackathon",
  "Actively participated in group discussions and technical presentations",
];

const certifications = [
  "National Level Hackathon - Participant (Nov 2025)",
  "Internal Hackathon - Participant (Apr 2024)",
  "Introduction to Network Analysis (Security Blue Team)",
  "Cybersecurity Fundamentals (Mar 2025)",
];

function SectionTitle({ tag, title }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-violet-500">{tag}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const themeClass = useMemo(() => (darkMode ? "dark" : ""), [darkMode]);

  return (
    <div className={themeClass}>
      <div className="min-h-screen bg-slate-50 text-slate-700 transition-colors dark:bg-slate-950 dark:text-slate-300">
        <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a className="text-lg font-black tracking-tight text-slate-900 dark:text-white" href="#home">
              H.Singh
            </a>
            <div className="hidden gap-6 text-sm font-medium md:flex">
              <a href="#skills" className="hover:text-violet-500">
                Skills
              </a>
              <a href="#projects" className="hover:text-violet-500">
                Projects
              </a>
              <a href="#experience" className="hover:text-violet-500">
                Experience
              </a>
              <a href="#education" className="hover:text-violet-500">
                Education
              </a>
              <a href="#achievements" className="hover:text-violet-500">
                Achievements
              </a>
              <a href="#profiles" className="hover:text-violet-500">
                Profiles
              </a>
              <a href="#certifications" className="hover:text-violet-500">
                Certifications
              </a>
              <a href="#contact" className="hover:text-violet-500">
                Contact
              </a>
            </div>
            <button
              type="button"
              onClick={() => setDarkMode((v) => !v)}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium hover:border-violet-500 dark:border-slate-700"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </nav>
        </header>

        <main>
          <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
            <p className="mb-4 inline-flex rounded-full border border-violet-300 bg-violet-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
              {profile.title}
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg">{profile.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a href={profile.phoneHref} className="rounded-md border border-slate-300 px-3 py-1 dark:border-slate-700">
                {profile.phoneDisplay}
              </a>
              <a href={`mailto:${profile.email}`} className="rounded-md border border-slate-300 px-3 py-1 dark:border-slate-700">
                {profile.email}
              </a>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="hover:text-violet-500">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-violet-500">
                GitHub
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white hover:bg-violet-500"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium hover:border-violet-500 dark:border-slate-700"
              >
                See my work
              </a>
            </div>
          </section>

          <section id="about" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-4">
              {[
                ["3+", "Full-Stack Apps"],
                ["10+", "REST APIs Built"],
                ["137", "LeetCode Problems"],
                ["4 Star", "HackerRank C++"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{num}</p>
                  <p className="text-sm uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="What I know" title="Skills & Technologies" />
            <div className="grid gap-5 md:grid-cols-3">
              {Object.entries(skills).map(([level, items]) => (
                <article key={level} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-violet-500">{level}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-md border border-slate-300 px-2.5 py-1 text-xs dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="What I built" title="Featured Projects" />
            <div className="space-y-5">
              {projects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm">{project.period}</span>
                  </div>
                  <p className="mt-3">{project.description}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    {project.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-900/50 dark:text-violet-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="Where I worked" title="Experience" />
            {experiences.map((exp) => (
              <article key={exp.org} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.org}</h3>
                    <p className="font-medium text-violet-500">{exp.role}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p>{exp.date}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  {exp.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section id="education" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="Academic background" title="Education" />
            <div className="grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <article key={item.school} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.school}</h3>
                  <p className="mt-1">{item.degree}</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="rounded-md bg-emerald-100 px-2.5 py-1 font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                      {item.score}
                    </span>
                    <span>{item.year}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="profiles" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="Coding profiles" title="Competitive Programming" />
            <div className="grid gap-4 md:grid-cols-3">
              {codingProfiles.map((item) => (
                <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="achievements" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="Recognition" title="Achievements" />
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((item) => (
                <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="extracurriculars" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="Beyond academics" title="Extracurriculars" />
            <div className="grid gap-4 md:grid-cols-2">
              {extracurriculars.map((item) => (
                <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" className="mx-auto max-w-6xl px-6 py-16">
            <SectionTitle tag="Learning path" title="Courses & Certifications" />
            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((item) => (
                <article key={item} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-6 py-16 text-center">
            <SectionTitle tag="Say hello" title="Let's build something" />
            <p className="mx-auto max-w-xl">
              I'm actively looking for full-stack developer roles and internships. Feel free to reach out.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white hover:bg-violet-500"
              >
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium hover:border-violet-500 dark:border-slate-700"
              >
                {profile.phoneDisplay}
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 px-6 py-6 text-center text-sm dark:border-slate-800">
          Designed & built by Harshit Singh
        </footer>
      </div>
    </div>
  );
}

export default App;
