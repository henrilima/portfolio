"use client";

import {
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  Languages,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { COLORS } from "@/app/theme.config";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

interface StatisticCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  key: number;
}

const statisticCardsList: StatisticCardProps[] = [
  {
    title: "5º Período",
    description: "Do curso de Engenharia de Software.",
    Icon: GraduationCap,
    key: 0,
  },
  {
    title: "+4 anos",
    description: "Estudando desenvolvimento.",
    Icon: Calendar,
    key: 0,
  },
  {
    title: "+10 projetos",
    description: "Desenvolvidos para aprendizado e prática.",
    Icon: BriefcaseBusiness,
    key: 1,
  },
  {
    title: "4 idiomas",
    description:
      "Português (Nativo), Inglês (B1), Espanhol (B1) e Francês (A1).",
    Icon: Languages,
    key: 2,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-12 lg:px-24 pt-12 pb-12 lg:pt-24 lg:pb-24 flex flex-row-reverse gap-24 max-lg:flex-col max-lg:gap-12"
    >
      <div className="flex flex-col gap-4 items-start w-2/3 max-lg:w-full">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
          }}
          className="text-6xl font-bold"
        >
          Quem sou eu.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
          className="text-2xl font-bold text-muted-foreground"
        >
          Sou graduando em Engenharia de Software e técnico em Desenvolvimento
          de Sistemas.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
          className="text-base text-muted-foreground"
        >
          Gosto de transformar ideias em produtos bem estruturados e agradáveis
          de usar. Minha trajetória começou bem pequeno, com o desejo de
          entender como a tecnologia funcionava e hoje em dia evoluiu para um
          interesse cada vez maior por desenvolvimento, design, experiência do
          usuário e arquitetura de software. <br /> <br />
          Ao longo dos últimos anos, venho desenvolvendo projetos que me
          permitiram explorar diferentes áreas da tecnologia, desde aplicações
          web modernas e APIs escaláveis até interfaces focadas na experiência
          do usuário. Gosto de participar de todo o processo de construção de um
          produto, entendendo o problema, planejando a solução e transformando
          conceitos em aplicações funcionais. <br /> <br />
          Estou sempre em busca de novos desafios, oportunidades de aprendizado
          e projetos que me permitam continuar crescendo como desenvolvedor,
          designer e criador de produtos digitais.
        </motion.p>
      </div>

      <div className="w-1/3 max-lg:w-full gap-4 grid-cols-2 grid-rows-2 grid">
        {statisticCardsList.map((statisticCardProps, index) =>
          statisticCard({ ...statisticCardProps, key: index }),
        )}
      </div>
    </section>
  );
}

function statisticCard({ title, description, Icon, key }: StatisticCardProps) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: key * 0.3,
        duration: 0.3,
      }}
    >
      <Card className="w-full h-full bg-accent/30 border-none rounded-xl flex flex-col items-center justify-center">
        <CardContent className="flex flex-col items-start justify-start">
          <Icon className={cn("size-12 mb-6", COLORS.text)} />
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <CardDescription className="text-sm w-full">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
