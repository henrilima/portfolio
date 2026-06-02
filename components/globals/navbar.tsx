"use client";

import {
  Award,
  BriefcaseBusiness,
  ChartNoAxesColumnDecreasing,
  Contact,
  Cpu,
  type LucideIcon,
  Mail,
  ScanFace,
  User2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { COLORS } from "@/app/theme.config";
import { personalInfo } from "@/app/social.config";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

interface LinkCardProps {
  link: string;
  label: string;
  Icon?: LucideIcon;
  iconClassName?: string | undefined;
  className?: string | undefined;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const linkCardsList: LinkCardProps[] = [
  {
    link: "#about",
    label: "Quem sou eu",
    Icon: User2,
  },
  {
    link: "#projects",
    label: "Projetos",
    Icon: BriefcaseBusiness,
  },
  {
    link: "#skills",
    label: "Habilidades",
    Icon: Cpu,
  },
  {
    link: "#certificates",
    label: "Certificados",
    Icon: Award,
  },
  {
    link: "#contact",
    label: "Contato",
    Icon: Contact,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250);
  };

  return (
    // Cabeçalho fixo com efeito de desfoque sutil
    <header className="sticky top-0 z-5 w-full border-b border-border/40 bg-background/60">
      <div className="w-full flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Bloco do Logo e Contato (E-mail) */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <motion.i
              animate={{ rotate: [0, -25, 25, 0] }}
              transition={{
                duration: 4,
                ease: "linear",
              }}
            >
              <ScanFace className={cn("size-5", COLORS.text)} />
            </motion.i>
            <p className="text-base font-bold text-foreground whitespace-nowrap">
              José Henrique
            </p>
          </div>

          {/* E-mail oculto em celulares para evitar quebras de layout */}
          <a
            href={`mailto:${personalInfo.email}`}
            className={cn(
              "hidden sm:flex items-center gap-2 text-xs text-muted-foreground transition-colors duration-200",
              COLORS.textHover,
            )}
          >
            <Mail className="size-3.5" />
            <span>{personalInfo.email}</span>
          </a>
        </div>

        {/* Menu Lateral para navegação/ações adicionais */}
        <Drawer key="menu" direction="right" open={open} onOpenChange={setOpen}>
          <DrawerTrigger className="text-foreground hover:bg-muted/50 rounded-lg size-8 flex items-center justify-center transition-colors cursor-pointer border-none bg-transparent">
            <ChartNoAxesColumnDecreasing className="size-5 rotate-90 transform scale-y-[-1]" />
          </DrawerTrigger>

          <DrawerContent className="p-6 flex flex-col justify-between h-full bg-background border-l border-border/40">
            <div>
              <DrawerHeader className="px-0 pb-6 border-b border-border/20">
                <DrawerTitle className="text-left flex items-center gap-2">
                  <ScanFace className={cn("size-5", COLORS.text)} />
                  <span>Menu</span>
                </DrawerTitle>
                <DrawerDescription className="sr-only">
                  Menu de navegação rápida pelas seções do portfólio.
                </DrawerDescription>
              </DrawerHeader>

              <div className="mt-2 space-y-2">
                <p className="text-xs text-muted-foreground">
                  Atalhos para as seções:
                </p>

                {linkCardsList.map((linkCardProps, index) => {
                  const isAnchor = linkCardProps.link.startsWith("#");
                  const targetId = isAnchor
                    ? linkCardProps.link.substring(1)
                    : "";
                  return (
                    <LinkCard
                      key={`${index}-${linkCardProps.link}`}
                      {...linkCardProps}
                      onClick={
                        isAnchor ? (e) => handleScroll(e, targetId) : undefined
                      }
                    />
                  );
                })}
              </div>

              <div className="mt-8 space-y-2">
                <p className="text-xs text-muted-foreground">
                  Entre em contato:
                </p>

                <LinkCard
                  link={`mailto:${personalInfo.email}`}
                  label={personalInfo.email}
                  Icon={Mail}
                />
              </div>
            </div>

            <div className="border-t border-border/20 pt-4 text-center">
              <p className="text-[10px] text-muted-foreground">
                © {new Date().getFullYear()} José Henrique da Silva Lima
              </p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}

function LinkCard({
  link,
  className,
  label,
  Icon,
  iconClassName,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={link}
      onClick={onClick}
      className={cn(
        className,
        COLORS.textHover,
        "flex items-center gap-2 text-sm transition-colors bg-muted/40 p-3 rounded-lg border border-border/20",
      )}
    >
      {Icon && <Icon className={cn("size-4", iconClassName || COLORS.text)} />}
      <span className="overflow-hidden whitespace-nowrap text-ellipsis">
        {label}
      </span>
    </a>
  );
}
