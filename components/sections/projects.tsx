"use client";

import { FileDown, SquareArrowOutUpRight } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { projectsList } from "@/app/projects.config";
import { COLORS } from "@/app/theme.config";
import { getTechData } from "@/lib/languages.data";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Projects() {
  return (
    <section
      id="projects"
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
          Projetos.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          Alguns dos principais trabalhos e experimentos que desenvolvi ao longo
          da minha jornada na engenharia e no design de software.
        </motion.p>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselPrevious className="md:inline-flex rounded-md max-md:hidden" />
        <CarouselNext className="md:inline-flex rounded-md max-md:hidden" />
        <CarouselContent>
          {projectsList.map((project, index) => {
            const Icon = project.Icon;
            const key = `carousel-item-${index}`;
            return (
              <CarouselItem
                key={key}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="h-full w-full"
                >
                  <Card className="h-full w-full bg-accent/30 border border-border/20 rounded-xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 cursor-default select-none">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        {Icon ? (
                          <Icon className={cn("size-10", COLORS.text)} />
                        ) : (
                          <FaGithub className={cn("size-10", COLORS.text)} />
                        )}
                        <div className="flex items-center gap-2">
                          {project.links?.githubUrl && (
                            <a
                              href={project.links.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                            >
                              <FaGithub className="size-5" />
                            </a>
                          )}
                          {project.links?.homepage && (
                            <a
                              href={project.links.homepage}
                              target="_blank"
                              rel="noreferrer"
                              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                            >
                              <SquareArrowOutUpRight className="size-5" />
                            </a>
                          )}
                          {project.links?.downloadUrl && (
                            <a
                              href={project.links.downloadUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                            >
                              <FileDown className="size-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <CardTitle className="text-xl font-bold">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </CardContent>

                    <div className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                      {project.tags?.map((tag) => {
                        const tech = getTechData(tag.id);
                        return (
                          <Badge
                            key={tag.id}
                            style={{
                              backgroundColor: `${tech.color}25`,
                              borderColor: `${tech.color}90`,
                            }}
                            className="rounded-sm"
                          >
                            {tech.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
