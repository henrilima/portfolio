"use client";

import { BookOpen, Brain, Globe, type LucideIcon, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { COLORS } from "@/app/theme.config";
import { type Technology, technologies } from "@/lib/languages.data";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const l = technologies;

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Technology[];
  Icon: LucideIcon;
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: "Desenvolvimento web",
    description: "Linguagens, frameworks e bibliotecas para a web.",
    skills: [
      l.html,
      l.css,
      l.javascript,
      l.tailwindcss,
      l.shadcn,
      l.sassscss,
      l.react,
      l.nextjs,
      l.vue,
      l.typescript,
      l.nodejs,
      l.postgresql,
      l.drizzle,
      l.expressjs,
      l.dart,
      l.flutter,
    ],
    Icon: Globe,
  },
  {
    title: "Conhecimentos de setor",
    description: "Metodologias, conceitos e práticas industriais.",
    skills: [
      l.designdeproduto,
      l.experinciadousurio,
      l.design,
      l.saas,
      l.linux,
      l.inteligenciaartificialia,
      l.github,
      l.git,
    ],
    Icon: Brain,
  },
  {
    title: "Ferramentas",
    description: "Softwares e ferramentas essenciais para o fluxo de trabalho.",
    skills: [l.figma, l.photoshop, l.coreldraw, l.insomnia, l.androidstudio],
    Icon: Wrench,
  },
  {
    title: "Aprendendo atualmente",
    description: "Foco atual de estudos e aperfeiçoamento técnico.",
    skills: [l.typescript, l.ux, l.linux, l.docker],
    Icon: BookOpen,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-6 sm:px-12 lg:px-24 pt-12 pb-12 lg:pt-24 lg:pb-24 flex flex-col gap-12"
    >
      <div className="flex flex-col gap-4 items-start max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-bold"
        >
          Habilidades.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          Tecnologias, linguagens e ferramentas que utilizo no meu dia a dia
          para construir soluções eficientes.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full bg-accent/30 border border-border/20 rounded-xl flex flex-col hover:border-blue-500/30 transition-all duration-300 select-none cursor-default">
              <CardContent className="p-6 flex flex-col gap-4">
                <category.Icon className={cn("size-10", COLORS.text)} />

                <div className="flex flex-col gap-1">
                  <CardTitle className="text-xl font-bold">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((tag) => (
                    <Badge
                      key={tag.id}
                      style={{
                        backgroundColor: `${tag.color}25`,
                        borderColor: `${tag.color}90`,
                      }}
                      className="rounded-sm"
                    >
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
