"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type VideoShowcaseProps = {
  videoSrc: string;
  whatsappLink: string;
  logoSrc: string;
};

export function VideoShowcase({
  videoSrc,
  whatsappLink,
  logoSrc,
}: VideoShowcaseProps) {
  const [open, setOpen] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);

  return (
    <>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a1310] shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,181,0,0.24),transparent_28%),linear-gradient(135deg,#1a1310_0%,#2c1e16_50%,#140f0c_100%)]" />

        {hasVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
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

        <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
              Vídeo manifesto
            </p>
            <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
              Veja a energia de uma marca que quer liderar no digital, não só
              existir nele.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
              Uma apresentação em vídeo aumenta retenção, reforça autoridade e
              ajuda o visitante a sentir a energia da sua marca antes mesmo do
              primeiro contato comercial.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              type="button"
              size="lg"
              className="bg-white text-foreground hover:bg-white/92"
              onClick={() => setOpen(true)}
            >
              <Play className="size-4 fill-current" />
              Assistir vídeo completo
            </Button>
            <Button asChild size="lg">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                aria-label="Fechar vídeo"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white hover:bg-black/70"
              >
                <X className="size-4" />
              </button>

              {hasVideo ? (
                <div className="aspect-video w-full bg-[linear-gradient(135deg,#1a1310_0%,#2c1e16_50%,#140f0c_100%)]">
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
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-6 bg-[linear-gradient(135deg,#1a1310_0%,#2c1e16_50%,#140f0c_100%)] px-8 text-center text-white">
                  <Image
                    src={logoSrc}
                    alt="Você Digital Propaganda"
                    width={4763}
                    height={3368}
                    className="h-auto w-44"
                  />
                  <div className="space-y-3">
                    <h4 className="font-display text-3xl font-semibold tracking-tight">
                      Apresentação em vídeo pronta para entrar aqui
                    </h4>
                    <p className="max-w-2xl text-base leading-8 text-white/74">
                      Assim que o arquivo do vídeo estiver no projeto, esta
                      janela passa a reproduzir a versão completa sem precisar
                      refazer a seção.
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
