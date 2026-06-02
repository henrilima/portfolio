"use client";

import { ArrowRight, Check, Copy, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { personalInfo, socialLinks } from "@/app/social.config";
import { COLORS } from "@/app/theme.config";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
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
          Contato.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          Tem uma ideia, uma vaga aberta ou quer apenas trocar uma ideia sobre
          tecnologia? Sinta-se à vontade para se conectar comigo!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="h-full bg-accent/20 border border-border rounded-2xl flex flex-col justify-between p-8 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 size-12 rounded-xl flex items-center justify-center">
                <Mail className="size-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs text-muted-foreground">
                  E-mail para contato
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-heading overflow-hidden whitespace-nowrap text-ellipsis">
                  {personalInfo.email}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6 border-t border-border/10 relative z-10">
              <p className="text-xs text-muted-foreground">
                Responderei o mais rápido possível, geralmente em até 24 horas.
              </p>

              <Button
                onClick={handleCopyEmail}
                className={cn(
                  "flex items-center gap-2 text-xs font-semibold px-4 py-2 transition-all duration-200 cursor-pointer outline-none",
                  copied ? COLORS.buttonSuccess : COLORS.button,
                )}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="checked"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check className="size-3.5" />
                      Copiado!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <Copy className="size-3.5" />
                      Copiar e-mail
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </Card>
        </motion.div>

        <div className="flex flex-col gap-4 justify-between h-full">
          {socialLinks
            .filter((social) => social.name.toLowerCase() !== "e-mail")
            .map((social, index) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex-1"
                >
                  <Card className="h-full bg-accent/20 border border-border rounded-2xl flex flex-row items-center justify-between p-6 hover:border-blue-500/20 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted/60 border-border text-muted-foreground group-hover:text-blue-400 group-hover:border-blue-500/25 group-hover:bg-blue-500/5 size-12 rounded-xl flex items-center justify-center transition-all duration-300">
                        <Icon className="size-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">
                          {social.name}
                        </span>
                        <span className="text-sm font-semibold text-foreground mt-0.5 font-sans">
                          {social.label}
                        </span>
                      </div>
                    </div>

                    <div className="text-muted-foreground/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="size-4" />
                    </div>
                  </Card>
                </motion.a>
              );
            })}
        </div>
      </div>
    </section>
  );
}
