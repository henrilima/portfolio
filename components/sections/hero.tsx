"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/app/theme.config";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    // Seção principal
    <section className="flex flex-col lg:flex-row lg:max-h-[90vh] min-h-[90vh] items-center lg:items-end justify-between px-6 sm:px-12 lg:px-24 pt-8 lg:pt-0 gap-10 overflow-hidden">
      {/* Bloco de texto e ações */}
      <div className="flex-1 flex flex-col items-start max-w-xl lg:self-center py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <Badge
            variant="secondary"
            className="text-xs uppercase tracking-wider"
          >
            ENGENHARIA • DESIGN • PRODUTO
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            Olá, eu me chamo José Henrique.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            ease: "easeOut",
          }}
        >
          <p className="text-lg md:text-sm font-light text-muted-foreground mt-4">
            Estudante de Engenharia de Software e desenvolvedor Web Full Stack.
            Gosto de transformar ideias em produtos digitais, combinando
            desenvolvimento, design e tecnologia para criar experiências úteis e
            bem construídas.
          </p>
        </motion.div>

        <div className="mt-8 flex gap-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            <Link href="#projects">
              <Button className={cn(COLORS.button, "text-sm")}>
                Explorar projetos
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: "easeOut",
            }}
          >
            <Link href="#about">
              <Button variant="secondary" className="text-sm">
                Quem sou eu
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* alinhado à base da seção e com tamanho otimizado */}
      <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-4/5 lg:aspect-3/4 self-center lg:self-end flex items-end">
        {/* Efeito de brilho azul desfocado ao fundo da foto */}
        <motion.div
          className="absolute bg-blue-800/25 blur-[50px] bottom-0 right-0 rounded-full -z-10 h-130 w-130 max-md:inset-[-40]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            ease: "easeOut",
          }}
        ></motion.div>

        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: "easeOut",
          }}
        >
          <Image
            className="object-contain object-bottom"
            src="/henri.png"
            alt="José Henrique"
            fill
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 550px"
            priority
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}
