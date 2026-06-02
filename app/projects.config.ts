import {
  BriefcaseBusiness,
  Gamepad2,
  type LucideIcon,
  Music,
  Shield,
  Star,
} from "lucide-react";
import { type Technology, technologies } from "../lib/languages.data";

const l = technologies;

export interface ProjectProps {
  title: string;
  description: string;
  tags?: Technology[];
  links?: {
    homepage?: string;
    githubUrl?: string;
    downloadUrl?: string;
  };
  Icon?: LucideIcon;
  Image?: string;
}

export const projectsList: ProjectProps[] = [
  {
    Icon: Shield,
    title: "Aegis",
    description:
      "Uma dashboard de produtividade pessoal e utilitário desktop para Windows e Linux. Gerencie tarefas, hábitos e pomodoro com integração nativa ao sistema.",
    tags: [
      l.nodejs,
      l.nextjs,
      l.typescript,
      l.tailwindcss,
      l.shadcn,
      l.rust,
      l.sqlite,
      l.windows,
      l.linux,
      l.git
    ],
    links: {
      downloadUrl: "https://aegissystem.vercel.app/download",
      homepage: "https://aegissystem.vercel.app/",
      githubUrl: "https://github.com/henrilima/aegis",
    },
  },
  {
    Icon: Music,
    title: "TopSongs",
    description:
      "Uma aplicação web integrada à API do Deezer que permite ao usuário selecionar um artista e escolher 5 músicas da discografia para criar um canvas.",
    tags: [l.vue, l.css, l.javascript, l.nodejs, l.express],
    links: {
      githubUrl: "https://github.com/henrilima/topsongs",
      homepage: "https://topsongs.vercel.app/",
    },
  },
  {
    Icon: Gamepad2,
    title: "Pokédex",
    description:
      "Uma enciclopédia interativa de Pokémon que consome dados da PokéAPI e design fluido.",
    tags: [l.dart, l.flutter, l.windows],
    links: {
      githubUrl: "https://github.com/henrilima/pokedex",
      downloadUrl: "https://github.com/henrilima/pokedex/releases/latest",
    },
  },
  {
    Icon: Star,
    title: "Song Rater",
    description:
      "Uma plataforma de avaliação musical onde os usuários podem atribuir notas, escrever resenhas de álbuns/faixas e descobrir novas recomendações.",
    tags: [l.nodejs, l.react, l.typescript, l.css, l.spotify],
    links: {
      githubUrl: "https://github.com/henrilima/song-rater",
    },
  },
  {
    Icon: BriefcaseBusiness,
    title: "Portfólio Pessoal",
    description:
      "Este lugar onde você está agora é um projeto em constante evolução, onde busco sempre me aprimorar.",
    tags: [l.nextjs, l.typescript, l.tailwindcss, l.shadcn, l.framermotion],
    links: {
      githubUrl: "https://github.com/henrilima/portfolio",
      homepage: "https://henrilima.vercel.app",
    },
  },
];
