"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type CinemaHeroProps = {
  videoId: string;
  logoSrc: string;
  whatsappLink: string;
};

export function CinemaHero({
  videoId,
  logoSrc,
  whatsappLink,
}: CinemaHeroProps) {
  const [open, setOpen] = useState(false);
  const backgroundVideoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`;
  const fullVideoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`;

  return (
    <>
      <section
        id="topo"
        aria-labelledby="hero-title"
        className="relative isolate min-h-[92svh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#080706]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <iframe
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.08]"
            src={backgroundVideoUrl}
            title="Você Digital Propaganda background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,5,5,0.44)_0%,rgba(8,7,6,0.54)_26%,rgba(8,7,6,0.72)_56%,#080706_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,119,0,0.18),transparent_16%),radial-gradient(circle_at_center,transparent_48%,rgba(8,7,6,0.28)_100%)]" />

        <div className="relative z-10">
          <div className="section-shell pt-5 sm:pt-7">
            <header className="mx-auto max-w-6xl rounded-[2rem] border border-white/8 bg-black/18 px-4 py-3 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.14)] sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <a href="#topo" aria-label="Você Digital Propaganda">
                  <Image
                    src={logoSrc}
                    alt="Você Digital Propaganda"
                    width={4763}
                    height={3368}
                    className="h-auto w-32 sm:w-36"
                    priority
                  />
                </a>

                <nav className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.16em] text-white/54 uppercase md:flex">
                  <a href="#diferenciais" className="hover:text-white/84">
                    Diferenciais
                  </a>
                  <a href="#servicos" className="hover:text-white/84">
                    Serviços
                  </a>
                  <a href="#final" className="hover:text-white/84">
                    Contato
                  </a>
                </nav>

                <Button asChild size="sm">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </header>
          </div>

          <div className="section-shell flex min-h-[calc(92svh-5rem)] items-end py-12 sm:py-16">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-7"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/76 uppercase backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-brand-secondary" />
                  Você Digital Propaganda
                </div>

                <div className="space-y-4">
                  <h1
                    id="hero-title"
                    className="max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white text-balance sm:text-6xl lg:text-[4.8rem] xl:text-[5.2rem]"
                  >
                    Presença que impõe valor. Estratégia que move vendas.
                  </h1>
                  <p className="max-w-xl text-base leading-7 text-white/66 sm:text-lg">
                    Criamos experiências digitais elegantes, precisas e
                    comerciais para marcas que querem parecer maiores e vender
                    melhor.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" />
                      Quero falar com a agência
                    </a>
                  </Button>
                  <Button
                    type="button"
                    size="md"
                    variant="secondary"
                    className="border-white/12 bg-white/[0.04] text-white/82 hover:border-white/18 hover:bg-white/[0.08]"
                    onClick={() => setOpen(true)}
                  >
                    <Play className="size-4 fill-current" />
                    Ver filme
                  </Button>
                </div>

                <div className="grid max-w-3xl gap-3 pt-2 sm:grid-cols-3">
                  {[
                    "Marca mais desejada",
                    "Leads mais qualificados",
                    "Conversão mais elegante",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/62 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.52)]"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Fechar vídeo"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/14 bg-black/55 text-white hover:bg-black/80"
              >
                <X className="size-4" />
              </button>

              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={fullVideoUrl}
                  title="Você Digital Propaganda video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
