import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { CinemaHero } from "@/components/cinema-hero";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const createWhatsAppLink = (text: string) =>
  `https://api.whatsapp.com/send/?phone=5511991077836&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

const primaryWhatsAppLink = createWhatsAppLink(
  "Olá, vim pela landing page da Você Digital e quero saber como vocês podem ajudar minha empresa a vender mais no digital.",
);

const consultoriaWhatsAppLink = createWhatsAppLink(
  "Olá, vim pela landing page da Você Digital e quero aproveitar a consultoria gratuita de 1h para escalar meu negócio no digital.",
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Você Digital Propaganda",
      url: siteUrl,
      logo: `${siteUrl}/brand/logo-square.png`,
      description:
        "Agência de marketing digital focada em geração de leads, posicionamento e vendas online.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Serviços de marketing digital para geração de leads e vendas",
      serviceType: "Agência de marketing digital",
      areaServed: "Brasil",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      audience: {
        "@type": "Audience",
        audienceType: "Empresas, empreendedores e marcas que querem vender mais",
      },
    },
  ],
};

const benefits = [
  {
    icon: Sparkles,
    title: "Sua marca fica memorável",
    description:
      "Visual, discurso e direção criativa para sua empresa parecer premium e desejada.",
  },
  {
    icon: TrendingUp,
    title: "Seu tráfego rende mais",
    description:
      "Cada clique encontra uma experiência pensada para gerar contato e acelerar decisão.",
  },
  {
    icon: MessageCircle,
    title: "Seu WhatsApp recebe intenção real",
    description:
      "Menos curiosos, mais pessoas prontas para conversar sobre negócio e contratação.",
  },
];

const serviceHighlights = [
  "Landing pages que fazem o visitante agir.",
  "Tráfego e estratégia para atrair o público certo.",
  "Posicionamento visual para elevar percepção de valor.",
];

export const metadata: Metadata = {
  title: "Agência de marketing digital para gerar mais leads e vendas",
  description:
    "A Você Digital cria experiências premium para marcas que querem vender mais no digital, com foco em percepção de valor, geração de leads e conversão no WhatsApp.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-background text-foreground">
        <CinemaHero
          videoId="TpSnpdC5EKk"
          logoSrc="/brand/logo-primary-negative.png"
          whatsappLink={primaryWhatsAppLink}
        />

        <a
          href={primaryWhatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_20px_50px_rgba(37,211,102,0.28)] hover:-translate-y-0.5"
        >
          <MessageCircle className="size-4" />
          Falar no WhatsApp
        </a>

        <section
          id="diferenciais"
          aria-labelledby="diferenciais-title"
          className="relative py-20 sm:py-24"
        >
          <div className="section-shell">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                  Diferenciais
                </p>
                <h2
                  id="diferenciais-title"
                  className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
                >
                  Menos aparência de agência comum. Mais presença de marca que
                  vende.
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={0.06 * index}>
                  <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                    <div className="inline-flex rounded-2xl border border-brand-primary/20 bg-brand-primary/10 p-3 text-brand-secondary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-white/68">
                      {description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicos"
          aria-labelledby="servicos-title"
          className="py-12 sm:py-18"
        >
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
              <Reveal>
                <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,119,0,0.14),rgba(255,181,0,0.05),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-10">
                  <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                    O que fazemos
                  </p>
                  <h2
                    id="servicos-title"
                    className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
                  >
                    Ajudamos marcas a chamar atenção, criar desejo e converter
                    melhor.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                    Quando a imagem da empresa sobe, a resposta do mercado muda.
                    Quando a estratégia encaixa, o digital para de ser custo e
                    vira crescimento.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[2rem] border border-[#31261f] bg-[#120f0d] p-8 sm:p-10">
                  <div className="space-y-4">
                    {serviceHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-white/[0.04] px-4 py-4"
                      >
                        <Star className="mt-1 size-4 text-brand-secondary" />
                        <p className="text-base leading-8 text-white/76">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[1.6rem] border border-brand-primary/16 bg-brand-primary/[0.07] p-6">
                    <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                      Atendimento direto
                    </p>
                    <p className="mt-3 text-base leading-8 text-white/76">
                      O clique já abre uma mensagem dizendo que você veio da
                      landing page da Você Digital. É rápido, direto e sem
                      atrito.
                    </p>
                    <div className="mt-5">
                      <Button asChild size="lg">
                        <a
                          href={primaryWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Quero falar agora
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="final" aria-labelledby="final-title" className="py-20 sm:py-24">
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2.4rem] border border-[#3a2a20] bg-[linear-gradient(135deg,#140f0d_0%,#21150f_45%,#130f0d_100%)] shadow-[0_40px_100px_rgba(0,0,0,0.24)]">
                <div className="relative px-7 py-10 sm:px-10 sm:py-14 lg:px-14">
                  <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl" />
                  <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                    <div>
                      <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                        Vamos conversar
                      </p>
                      <h2
                        id="final-title"
                        className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
                      >
                        Se o seu negócio quer crescer no digital, o próximo passo
                        está aqui.
                      </h2>
                      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                        Clique no WhatsApp e comece a conversa com quem entende
                        posicionamento, percepção de valor e geração de demanda.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button asChild size="lg">
                        <a
                          href={primaryWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle className="size-4" />
                          Quero vender mais
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="border-white/14 bg-white/8 text-white hover:bg-white/12"
                      >
                        <a href="#topo">Voltar ao topo</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 text-sm text-white/42 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/logo-square.png"
                  alt="Símbolo da Você Digital Propaganda"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-xl"
                />
                <span>Você Digital Propaganda</span>
              </div>
              <p>Marketing digital com foco em percepção de marca, leads e vendas.</p>
            </div>
          </div>
        </section>
      </main>

      <ExitIntentModal whatsappLink={consultoriaWhatsAppLink} />
    </>
  );
}
