import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "José Henrique | Portfólio",
    short_name: "JH Portfólio",
    description: "Portfólio pessoal de José Henrique, graduando em Engenharia de Software e Desenvolvedor Web Full Stack.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d16",
    theme_color: "#090d16",
    icons: [
      {
        src: "/icon",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
