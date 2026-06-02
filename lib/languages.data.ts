export interface Technology {
  id: string;
  label: string;
  color: string;
  category: "frontend" | "backend" | "database" | "tool" | "language" | "other";
}

export const technologies: Record<string, Technology> = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    color: "#F7DF1E",
    category: "language",
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    color: "#3178C6",
    category: "language",
  },
  python: {
    id: "python",
    label: "Python",
    color: "#3776AB",
    category: "language",
  },
  rust: { id: "rust", label: "Rust", color: "#CE412B", category: "language" },
  java: { id: "java", label: "Java", color: "#007396", category: "language" },
  kotlin: {
    id: "kotlin",
    label: "Kotlin",
    color: "#7F52FF",
    category: "language",
  },
  c: { id: "c", label: "C", color: "#A8B9CC", category: "language" },
  cpp: { id: "cpp", label: "C++", color: "#00599C", category: "language" },
  csharp: { id: "csharp", label: "C#", color: "#239120", category: "language" },
  dart: { id: "dart", label: "Dart", color: "#00B4AB", category: "language" },
  shell: {
    id: "shell",
    label: "Shell Script",
    color: "#89E051",
    category: "language",
  },
  react: {
    id: "react",
    label: "React",
    color: "#61DAFB",
    category: "frontend",
  },
  nextjs: {
    id: "nextjs",
    label: "Next.js",
    color: "#505050",
    category: "frontend",
  },
  vue: { id: "vue", label: "Vue.js", color: "#4FC08D", category: "frontend" },
  angular: {
    id: "angular",
    label: "Angular",
    color: "#DD0031",
    category: "frontend",
  },
  nuxtjs: {
    id: "nuxtjs",
    label: "Nuxt.js",
    color: "#00DC82",
    category: "frontend",
  },
  flutter: {
    id: "flutter",
    label: "Flutter",
    color: "#02569B",
    category: "frontend",
  },
  tailwindcss: {
    id: "tailwindcss",
    label: "TailwindCSS",
    color: "#06B6D4",
    category: "frontend",
  },
  css: { id: "css", label: "CSS3", color: "#1572B6", category: "frontend" },
  html: { id: "html", label: "HTML5", color: "#E34F26", category: "frontend" },
  sass: { id: "sass", label: "Sass", color: "#CC6699", category: "frontend" },
  scss: { id: "scss", label: "SCSS", color: "#CC6699", category: "frontend" },
  shadcn: {
    id: "shadcn",
    label: "Shadcn UI",
    color: "#505050",
    category: "frontend",
  },
  framermotion: {
    id: "framermotion",
    label: "Framer Motion",
    color: "#0055FF",
    category: "frontend",
  },
  nodejs: {
    id: "nodejs",
    label: "Node.js",
    color: "#339933",
    category: "backend",
  },
  express: {
    id: "express",
    label: "Express.js",
    color: "#505050",
    category: "backend",
  },
  postgresql: {
    id: "postgresql",
    label: "PostgreSQL",
    color: "#4169E1",
    category: "database",
  },
  mysql: {
    id: "mysql",
    label: "MySQL",
    color: "#4479A1",
    category: "database",
  },
  sqlite: {
    id: "sqlite",
    label: "SQLite",
    color: "#003B57",
    category: "database",
  },
  mongodb: {
    id: "mongodb",
    label: "MongoDB",
    color: "#47A248",
    category: "database",
  },
  prisma: {
    id: "prisma",
    label: "Prisma",
    color: "#2D3748",
    category: "database",
  },
  firebase: {
    id: "firebase",
    label: "Firebase",
    color: "#FFCA28",
    category: "database",
  },
  docker: { id: "docker", label: "Docker", color: "#2496ED", category: "tool" },
  git: { id: "git", label: "Git", color: "#F05032", category: "tool" },
  github: { id: "github", label: "GitHub", color: "#505050", category: "tool" },
  vercel: { id: "vercel", label: "Vercel", color: "#505050", category: "tool" },
  netlify: {
    id: "netlify",
    label: "Netlify",
    color: "#00AD9F",
    category: "tool",
  },
  figma: { id: "figma", label: "Figma", color: "#F24E1E", category: "tool" },
  tauri: { id: "tauri", label: "Tauri", color: "#24C8DB", category: "tool" },
  electron: {
    id: "electron",
    label: "Electron",
    color: "#47848F",
    category: "tool",
  },
  linux: { id: "linux", label: "Linux", color: "#FCC624", category: "tool" },
  windows: {
    id: "windows",
    label: "Windows",
    color: "#0078D4",
    category: "tool",
  },
  macos: {
    id: "macos",
    label: "macOS",
    color: "#000000",
    category: "tool",
  },
  android: {
    id: "android",
    label: "Android",
    color: "#3DDC84",
    category: "tool",
  },
  ios: {
    id: "ios",
    label: "iOS",
    color: "#000000",
    category: "tool",
  },
  spotify: {
    id: "spotify",
    label: "Spotify",
    color: "#1DB954",
    category: "tool",
  },
  deezer: {
    id: "deezer",
    label: "Deezer",
    color: "#EF5466",
    category: "tool",
  },
  sassscss: {
    id: "sassscss",
    label: "SASS/SCSS",
    color: "#CC6699",
    category: "frontend",
  },
  drizzle: {
    id: "drizzle",
    label: "Drizzle",
    color: "#C5F74F",
    category: "database",
  },
  expressjs: {
    id: "expressjs",
    label: "Express.js",
    color: "#505050",
    category: "backend",
  },
  designdeproduto: {
    id: "designdeproduto",
    label: "Design de produto",
    color: "#6366F1",
    category: "other",
  },
  experinciadousurio: {
    id: "experinciadousurio",
    label: "Experiência do usuário",
    color: "#EC4899",
    category: "other",
  },
  ux: { id: "ux", label: "UX", color: "#EC4899", category: "other" },
  design: {
    id: "design",
    label: "Design",
    color: "#8B5CF6",
    category: "other",
  },
  saas: { id: "saas", label: "SaaS", color: "#3B82F6", category: "other" },
  linuxintermediario: {
    id: "linuxintermediario",
    label: "Linux (intermediário)",
    color: "#FCC624",
    category: "tool",
  },
  inteligenciaartificialia: {
    id: "inteligenciaartificialia",
    label: "Inteligência Artificial (IA)",
    color: "#10B981",
    category: "other",
  },
  photoshop: {
    id: "photoshop",
    label: "Photoshop",
    color: "#31A8FF",
    category: "tool",
  },
  coreldraw: {
    id: "coreldraw",
    label: "Corel Draw",
    color: "#00A859",
    category: "tool",
  },
  insomnia: {
    id: "insomnia",
    label: "Insomnia",
    color: "#5849BE",
    category: "tool",
  },
  androidstudio: {
    id: "androidstudio",
    label: "Android Studio",
    color: "#3DDC84",
    category: "tool",
  },
};

function normalizeTechId(tag: string): string {
  const normalized = tag.toLowerCase().trim();

  if (normalized === "c++") return "cpp";
  if (normalized === "c#") return "csharp";
  if (normalized === "go" || normalized === "golang") return "golang";

  return normalized.replace(/[^a-z0-9]/g, "");
}

export function getTechData(tag: string): Technology {
  const normalizedId = normalizeTechId(tag);
  const matched = technologies[normalizedId];

  if (matched) {
    return matched;
  }

  return {
    id: normalizedId || "desconhecido",
    label: tag,
    color: "#6B7280", // zinc/gray-500
    category: "other",
  };
}
