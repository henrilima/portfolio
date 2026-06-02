"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Award, Calendar, ShieldCheck, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogDescription,
} from "../ui/alert-dialog";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  file: string;
}

const certificatesList: Certificate[] = [
  {
    id: "c01",
    title: "Curso Web Moderno Completo com JavaScript + Projetos",
    issuer: "Udemy (Cod3r Cursos Online)",
    date: "2025",
    file: "c01.jpg",
  },
  {
    id: "c02",
    title: "Aprenda Flutter e Desenvolva Apps Para Android e IOS",
    issuer: "Udemy (Cod3r & Academind)",
    date: "2026",
    file: "c02.jpg",
  },
  {
    id: "c03",
    title: "Imersão Mobile",
    issuer: "Alura",
    date: "2025",
    file: "c03.jpg",
  },
  {
    id: "c04",
    title: "Imersão Dev com Google Gemini",
    issuer: "Alura & Google Gemini",
    date: "2024",
    file: "c04.jpg",
  },
  {
    id: "c05",
    title: "NLW Agents - Avançado",
    issuer: "Rocketseat",
    date: "2025",
    file: "c05.jpg",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const section = document.getElementById("certificates");
      if (section?.contains(e.target as Node)) {
        e.preventDefault();
        return;
      }

      const modal = document.querySelector('[data-slot="alert-dialog-content"]');
      if (modal?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlS = e.ctrlKey && (e.key === "s" || e.key === "S");
      const isCtrlP = e.ctrlKey && (e.key === "p" || e.key === "P");
      const isCtrlU = e.ctrlKey && (e.key === "u" || e.key === "U");
      const isCtrlC = e.ctrlKey && (e.key === "c" || e.key === "C");
      const isCtrlShiftI = e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I");
      const isCtrlShiftC = e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C");
      const isCtrlShiftJ = e.ctrlKey && e.shiftKey && (e.key === "j" || e.key === "J");
      const isF12 = e.key === "F12";

      if (isCtrlS || isCtrlP || isCtrlU || isCtrlC || isCtrlShiftI || isCtrlShiftC || isCtrlShiftJ || isF12) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section
      id="certificates"
      className="w-full px-6 sm:px-12 lg:px-24 pt-12 pb-12 lg:pt-24 lg:pb-24 flex flex-col gap-12 select-none"
    >
      <div className="flex flex-col gap-4 items-start max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-6xl font-bold"
        >
          Certificados.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          Certificações de cursos, eventos e qualificações que comprovam minha
          trajetória técnica e acadêmica.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {certificatesList.map((cert, index) => (
          <motion.button
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="w-full bg-transparent border-none p-0 text-left block cursor-pointer h-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
          >
            <Card className="h-full bg-accent/30 border border-border/20 rounded-xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 select-none">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Award className="size-8 text-blue-400" />
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground/80 bg-muted/30 px-2 py-0.5 rounded border border-border/10">
                    <Calendar className="size-3" />
                    {cert.date}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <CardTitle className="text-base font-bold line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2">
                    {cert.issuer}
                  </CardDescription>
                </div>
              </CardContent>
              
              <div className="px-6 pb-6 pt-0 mt-auto">
                <span className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors">
                  Visualizar certificado
                  <Eye className="size-3" />
                </span>
              </div>
            </Card>
          </motion.button>
        ))}
      </div>

      <AlertDialog open={selectedCert !== null} onOpenChange={(open) => {
        if (!open) setSelectedCert(null);
      }}>
        <AlertDialogContent className="w-[92vw] max-w-2xl! p-6 rounded-2xl flex flex-col gap-6 bg-background/95 border border-border/20 backdrop-blur-md outline-none overflow-hidden text-center items-center">
          {selectedCert && (
            <>
              <AlertDialogHeader className="flex flex-col items-center gap-2 border-b border-border/10 pb-4 w-full text-center sm:group-data-[size=default]/alert-dialog-content:text-center sm:group-data-[size=default]/alert-dialog-content:place-items-center">
                <div className="flex flex-col items-center gap-1 w-full text-center">
                  <ShieldCheck className="size-8 text-blue-400 mb-1 shrink-0" />
                  <AlertDialogTitle className="text-base md:text-lg font-bold text-foreground text-center leading-snug">
                    {selectedCert.title}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="sr-only">
                    Visualização ampliada do certificado {selectedCert.title} emitido por {selectedCert.issuer}.
                  </AlertDialogDescription>
                  <span className="text-xs text-muted-foreground text-center">
                    {selectedCert.issuer} &bull; Concluído em {selectedCert.date}
                  </span>
                </div>
              </AlertDialogHeader>

              <div className="w-full bg-accent/5 border border-border/10 rounded-xl overflow-hidden relative flex items-center justify-center p-2 min-h-[200px] max-h-[50vh] select-none">
                <div className="relative max-h-[48vh] overflow-hidden rounded-lg select-none">
                  <Image
                    src={`/certificates/${selectedCert.file}`}
                    alt={selectedCert.title}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[46vh] object-contain rounded-lg select-none pointer-events-none bg-white/5"
                    draggable={false}
                    priority
                  />
                  <div 
                    className="absolute inset-0 z-10 bg-transparent cursor-default pointer-events-auto"
                  />
                  <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center select-none opacity-[0.03]">
                    <div className="text-3xl md:text-5xl font-bold uppercase text-foreground rotate-[-20deg] text-center px-4">
                      Protegido
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full mt-2">
                <AlertDialogCancel 
                  variant="default" 
                  className="w-full max-w-[200px]"
                >
                  OK
                </AlertDialogCancel>
              </div>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
