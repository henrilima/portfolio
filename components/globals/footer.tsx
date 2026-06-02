"use client";

import { ArrowUp, ScanFace } from "lucide-react";
import { socialLinks } from "@/app/social.config";
import { COLORS } from "@/app/theme.config";
import { cn } from "@/lib/utils";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-accent/5 border-t border-border/20 py-12 px-6 sm:px-12 lg:px-24 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/10">
          <div className="flex items-center gap-2">
            <ScanFace className={cn("size-6", COLORS.text)} />
            <span className="text-lg font-bold text-foreground font-heading">
              José Henrique
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="p-2.5 rounded-lg bg-muted/40 border border-border/10 text-muted-foreground hover:text-blue-400 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <Icon className="size-4.5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} José Henrique da Silva Lima. Todos os
            direitos reservados.
          </p>

          <button
            aria-label="Voltar ao topo"
            type="button"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer group outline-none py-1 px-3 rounded-full hover:bg-muted/40 border border-transparent hover:border-border/10"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="size-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
