"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rocket, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ExitIntentModalProps = {
  whatsappLink: string;
};

const SESSION_KEY = "vcd-exit-intent-opened";

export function ExitIntentModal({ whatsappLink }: ExitIntentModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const alreadyShown = window.sessionStorage.getItem(SESSION_KEY);

    if (alreadyShown) {
      return;
    }

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.relatedTarget as Node | null;

      if (target === null && event.clientY <= 8) {
        setOpen(true);
        window.sessionStorage.setItem(SESSION_KEY, "true");
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#120d0a]/70 p-4 backdrop-blur md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/12 bg-[#1c1411] text-white shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Fechar popup"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/75 hover:bg-white/12 hover:text-white"
            >
              <X className="size-4" />
            </button>

            <div className="absolute inset-x-10 top-0 h-40 rounded-full bg-brand-primary/30 blur-3xl" />

            <div className="relative p-7 sm:p-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-soft/25 bg-brand-primary/12 px-4 py-2 text-sm font-semibold text-brand-soft">
                <Rocket className="size-4" />
                Antes de sair...
              </div>

              <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
                Você tem certeza que não quer escalar seu negócio no digital?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Clique no botão abaixo e ganhe uma consultoria gratuita de 1h
                para entender como transformar tráfego em mais oportunidades no
                WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Quero minha consultoria gratuita
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  className="border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.1]"
                  onClick={() => setOpen(false)}
                >
                  Continuar navegando
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
