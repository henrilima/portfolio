"use client";

import { Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { COLORS } from "@/app/theme.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-24">
      <div className="space-y-4">
        <h1 className="text-9xl font-bold text-red-500 font-heading">Erro</h1>
        <h2 className="text-3xl font-bold text-foreground">Algo deu errado!</h2>
        <p className="text-base text-muted-foreground max-w-md mx-auto">
          Ocorreu um erro inesperado ao carregar esta página. Tente recarregar
          ou volte para a página inicial.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <Button
          onClick={() => reset()}
          className={cn(COLORS.button, "flex items-center gap-2 text-sm")}
        >
          <RefreshCw className="size-4" />
          Tentar novamente
        </Button>
        <Link href="/">
          <Button
            variant="secondary"
            className="flex items-center gap-2 text-sm"
          >
            <Home className="size-4" />
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
}
