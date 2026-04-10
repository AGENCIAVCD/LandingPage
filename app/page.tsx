import type { Metadata } from "next";
import Image from "next/image";
import {
  MessageCircle,
  TrendingUp,
  Sparkles,
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
    title: "Sutil no visual. Forte no impacto.",
    description:
      "Design com presença, mas sem excesso. Cada detalhe trabalha a percepção de valor.",
  },
  {
    icon: TrendingUp,
    title: "Tráfego com destino certo.",
    description:
      "A atenção não se perde. Ela encontra direção, argumento e ação imediata.",
  },
  {
    icon: MessageCircle,
    title: "Contato mais qualificado.",
    description:
      "O clique abre o WhatsApp com contexto, intenção e muito menos fricção comercial.",
  },
];

const serviceHighlights = [
  "Posicionamento para marcas que querem parecer maiores.",
  "Landing pages para elevar desejo e resposta comercial.",
  "Estratégia digital com foco em demanda e venda.",
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
          className="fixed bottom-5 left-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-[#25D366] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_16px_38px_rgba(37,211,102,0.2)] hover:-translate-y-0.5"
        >
          <MessageCircle className="size-4" />
          Falar no WhatsApp
        </a>

        <section
          id="diferenciais"
          aria-labelledby="diferenciais-title"
          className="relative py-18 sm:py-22"
        >
          <div className="section-shell">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-[11px] font-medium tracking-[0.18em] text-brand-soft uppercase">
                  Diferenciais
                </p>
                <h2
                  id="diferenciais-title"
                  className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl"
                >
                  Sofisticação sem exagero. Conversão sem ruído.
                </h2>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-4 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={0.06 * index}>
                  <article className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-6 backdrop-blur">
                    <div className="inline-flex rounded-xl border border-brand-primary/14 bg-brand-primary/[0.07] p-2.5 text-brand-secondary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/62">
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
          className="py-10 sm:py-14"
        >
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:items-start">
              <Reveal>
                <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,119,0,0.08),rgba(255,181,0,0.03),rgba(255,255,255,0.02))] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.15)] sm:p-8">
                  <p className="text-[11px] font-medium tracking-[0.18em] text-brand-soft uppercase">
                    O que fazemos
                  </p>
                  <h2
                    id="servicos-title"
                    className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl"
                  >
                    Elevamos a imagem da marca e facilitamos a decisão de compra.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/62 sm:text-base">
                    O digital começa na percepção. Quando sua presença é mais
                    refinada, o mercado responde com mais atenção, mais confiança
                    e mais intenção.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[1.8rem] border border-white/8 bg-[#120f0d] p-7 sm:p-8">
                  <div className="space-y-3">
                    {serviceHighlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.1rem] border border-white/7 bg-white/[0.03] px-4 py-3.5 text-[15px] leading-7 text-white/68"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.2rem] border border-brand-primary/12 bg-brand-primary/[0.05] p-5">
                    <p className="text-[11px] font-medium tracking-[0.18em] text-brand-soft uppercase">
                      Atendimento direto
                    </p>
                    <p className="mt-3 text-[15px] leading-7 text-white/62">
                      O WhatsApp abre com mensagem pronta dizendo que você veio
                      desta landing page. Menos atrito, mais contexto.
                    </p>
                    <div className="mt-4">
                      <Button asChild size="md">
                        <a
                          href={primaryWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Quero falar agora
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="final" aria-labelledby="final-title" className="py-18 sm:py-22">
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,#100d0b_0%,#17110d_55%,#0f0c0b_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                <div className="relative px-7 py-9 sm:px-9 sm:py-11 lg:px-12">
                  <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-brand-primary/14 blur-3xl" />
                  <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.18em] text-brand-soft uppercase">
                        Vamos conversar
                      </p>
                      <h2
                        id="final-title"
                        className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl"
                      >
                        Se a sua marca merece parecer maior, o próximo passo está aqui.
                      </h2>
                      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/62 sm:text-base">
                        Fale com a Você Digital no WhatsApp e comece uma conversa
                        com direção, clareza e ambição de crescimento.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <Button asChild size="md">
                        <a
                          href={primaryWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle className="size-4" />
                          Quero falar no WhatsApp
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="md"
                        variant="secondary"
                        className="border-white/10 bg-white/[0.04] text-white/78 hover:bg-white/[0.08]"
                      >
                        <a href="#topo">Voltar ao topo</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-5 text-sm text-white/38 sm:flex-row sm:items-center">
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
