"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type CinemaHeroProps = {
  videoSrc: string;
  logoSrc: string;
  whatsappLink: string;
};

export function CinemaHero({
  videoSrc,
  logoSrc,
  whatsappLink,
}: CinemaHeroProps) {
  const [open, setOpen] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);

  return (
    <>
      <section
        id="topo"
        aria-labelledby="hero-title"
        className="relative isolate min-h-[100svh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#080706]" />

        {hasVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setHasVideo(false)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,5,5,0.28)_0%,rgba(8,7,6,0.58)_32%,rgba(8,7,6,0.86)_72%,#080706_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,119,0,0.28),transparent_18%),radial-gradient(circle_at_center,transparent_42%,rgba(8,7,6,0.4)_100%)]" />

        <div className="relative z-10">
          <div className="section-shell pt-6 sm:pt-8">
            <header className="rounded-full border border-white/10 bg-white/8 px-5 py-4 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:px-7">
              <div className="flex items-center justify-between gap-4">
                <a href="#topo" aria-label="Você Digital Propaganda">
                  <Image
                    src={logoSrc}
                    alt="Você Digital Propaganda"
                    width={4763}
                    height={3368}
                    className="h-auto w-40 sm:w-44"
                    priority
                  />
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium text-white/64 md:flex">
                  <a href="#diferenciais" className="hover:text-white">
                    Diferenciais
                  </a>
                  <a href="#servicos" className="hover:text-white">
                    Serviços
                  </a>
                  <a href="#final" className="hover:text-white">
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

          <div className="section-shell flex min-h-[calc(100svh-6rem)] items-end py-14 sm:py-18">
            <div className="max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/82 backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-secondary" />
                  Performance, posicionamento e venda no mesmo movimento
                </div>

                <div className="space-y-5">
                  <h1
                    id="hero-title"
                    className="max-w-5xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-white text-balance sm:text-6xl lg:text-7xl xl:text-[5.6rem]"
                  >
                    Seu negócio pode parecer maior, vender melhor e dominar o
                    digital.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                    A Você Digital cria presença, desejo e direção para marcas
                    que querem sair do comum e transformar atenção em vendas.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" />
                      Quero crescer com a Você Digital
                    </a>
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="secondary"
                    className="border-white/16 bg-white/10 text-white hover:border-white/24 hover:bg-white/14"
                    onClick={() => setOpen(true)}
                  >
                    <Play className="size-4 fill-current" />
                    Assistir apresentação
                    <ArrowRight className="size-4" />
                  </Button>
                </div>

                <div className="grid max-w-4xl gap-4 pt-4 sm:grid-cols-3">
                  {[
                    "Mais autoridade para a sua marca",
                    "Mais leads certos chegando no WhatsApp",
                    "Mais percepção de valor na primeira impressão",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] px-5 py-5 text-sm leading-7 text-white/78 backdrop-blur"
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

              {hasVideo ? (
                <div className="aspect-video w-full bg-black">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    onError={() => setHasVideo(false)}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,#080706_0%,#1d140f_50%,#080706_100%)] p-10 text-center text-white">
                  <div className="max-w-2xl space-y-4">
                    <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                      Vídeo indisponível
                    </p>
                    <h3 className="font-display text-4xl font-semibold tracking-tight">
                      O arquivo do vídeo não carregou neste ambiente.
                    </h3>
                    <p className="text-base leading-8 text-white/74">
                      A estrutura do hero e da reprodução completa já está
                      pronta. Se você quiser, eu também consigo trocar este
                      arquivo por outro vídeo da marca.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
