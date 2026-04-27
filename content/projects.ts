export type ProjectStatus = 'live' | 'coming-soon' | 'archived';

export type Project = {
  slug: 'hush' | 'quantum-vis' | 'panic-mode' | 'freelance';
  status: ProjectStatus;
  year: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: 'hush',
    status: 'coming-soon',
    year: '2026',
    tech: ['Rust', 'Kotlin', 'UniFFI', 'Jetpack Compose', 'SQLite', 'TdLib', 'Gmail API'],
  },
  {
    slug: 'quantum-vis',
    status: 'live',
    year: '2026',
    tech: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/BorisYamp/quantum-vis',
    demo: 'https://quantum-vis.vercel.app/',
  },
  {
    slug: 'panic-mode',
    status: 'live',
    year: '2025',
    tech: ['Rust', 'Linux', 'Systemd'],
    github: 'https://github.com/BorisYamp/panicmode',
  },
  {
    slug: 'freelance',
    status: 'live',
    year: '2025–2026',
    tech: ['Next.js', 'TypeScript', 'next-intl', 'Vercel'],
    demo: 'https://aibahub.com/he',
  },
];
