"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { COLORS } from "@/app/theme.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-24">
      <div className="space-y-4">
        <h1 className="text-9xl font-bold text-blue-500 font-heading">404</h1>
        <h2 className="text-3xl font-bold text-foreground">
          Página não encontrada
        </h2>
        <p className="text-base text-muted-foreground max-w-md mx-auto">
          A página que você está procurando não existe, foi removida ou o
          endereço está incorreto.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/">
          <Button
            className={cn(COLORS.button, "flex items-center gap-2 text-sm")}
          >
            <ArrowLeft className="size-4" />
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
}
