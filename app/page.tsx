import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Gauge,
  LineChart,
  MousePointerClick,
  Search,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Estratégia orientada à conversão",
    description:
      "Cada bloco da página conduz o visitante com clareza até a ação, reduzindo distrações e aumentando a intenção de contato.",
    icon: MousePointerClick,
  },
  {
    title: "Performance para mídia paga",
    description:
      "Estrutura leve, imagens otimizadas e carregamento rápido para sustentar campanhas com melhor experiência e menor desperdício.",
    icon: Gauge,
  },
  {
    title: "SEO desde a fundação",
    description:
      "Semântica forte, metadata rica e JSON-LD prontos para ampliar visibilidade e consistência na indexação.",
    icon: Search,
  },
  {
    title: "Mobile-first de verdade",
    description:
      "A interface prioriza celulares e pequenas telas, onde boa parte das decisões de compra já acontece.",
    icon: Smartphone,
  },
];

const serviceSteps = [
  {
    title: "Diagnóstico e posicionamento",
    description:
      "Entendemos oferta, objeções e canais de aquisição para transformar sua proposta em mensagem clara.",
  },
  {
    title: "Design com foco comercial",
    description:
      "Criamos seções que equilibram autoridade, legibilidade e ritmo visual para guiar a leitura até o CTA.",
  },
  {
    title: "Publicação otimizada",
    description:
      "A entrega sai pronta para escalar com tráfego pago, SEO técnico e acompanhamento de performance.",
  },
];

const featurePills = [
  "Copy persuasiva",
  "SEO técnico",
  "Animações refinadas",
  "Estrutura escalável",
];

const stats = [
  { label: "Objetivo", value: "Leads qualificados" },
  { label: "Entrega", value: "Pronta para deploy" },
  { label: "Padrão", value: "Lighthouse 90+" },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
        "Agência focada em geração de leads, landing pages de alta conversão e vendas online para pequenas empresas.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Criação de Landing Pages de Alta Conversão",
      serviceType: "Landing Page para geração de leads e vendas online",
      areaServed: "Brasil",
      audience: {
        "@type": "Audience",
        audienceType: "Empreendedores e pequenas empresas",
      },
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: siteUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Você Digital Propaganda",
      inLanguage: "pt-BR",
    },
  ],
};

export const metadata: Metadata = {
  title: "Landing Pages de Alta Conversão",
  description:
    "A Você Digital Propaganda desenvolve landing pages rápidas, persuasivas e prontas para gerar mais leads e vendas online.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="topo"
        aria-labelledby="hero-title"
        className="relative isolate pb-20 pt-6 sm:pb-24 sm:pt-8"
      >
        <div className="section-shell">
          <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-border-soft/80 bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(35,31,32,0.05)] backdrop-blur sm:px-6">
            <a
              href="#topo"
              className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-foreground uppercase"
              aria-label="Você Digital Propaganda"
            >
              <Image
                src="/brand/logo-square.png"
                alt="Logo Você Digital Propaganda"
                width={40}
                height={40}
                className="h-10 w-10 rounded-2xl"
                priority
              />
              <Image
                src="/brand/logo-primary.png"
                alt="Você Digital Propaganda"
                width={4763}
                height={3368}
                className="hidden h-auto w-36 sm:block"
                priority
              />
            </a>

            <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
              <a href="#beneficios" className="hover:text-foreground">
                Benefícios
              </a>
              <a href="#servico" className="hover:text-foreground">
                Serviço
              </a>
              <a href="#cta" className="hover:text-foreground">
                Contato
              </a>
            </nav>

            <Button asChild size="sm">
              <a href="#cta">Quero captar mais</a>
            </Button>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-16">
            <Reveal className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/90 px-4 py-2 text-sm font-medium text-muted shadow-[0_12px_32px_rgba(255,119,0,0.08)]">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                Landing pages para gerar leads e acelerar vendas online
              </div>

              <div className="space-y-5">
                <h1
                  id="hero-title"
                  className="max-w-3xl font-display text-5xl leading-[0.96] font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
                >
                  Transforme visitas em oportunidades com uma LP pensada para
                  vender.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  A Você Digital Propaganda cria páginas rápidas, persuasivas e
                  preparadas para tráfego pago, SEO e conversão. Ideal para
                  empreendedores e pequenas empresas que precisam de mais
                  previsibilidade nas vendas.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#cta">
                    Solicitar diagnóstico
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#beneficios">Ver diferenciais</a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-border-soft bg-white/90 p-4 shadow-[0_18px_40px_rgba(35,31,32,0.05)]"
                  >
                    <p className="text-sm font-medium text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} className="relative">
              <div className="absolute inset-x-8 top-4 -z-10 h-44 rounded-full bg-brand-secondary/20 blur-3xl" />
              <div className="card-border overflow-hidden rounded-[2rem] bg-surface-strong shadow-[0_30px_80px_rgba(35,31,32,0.18)]">
                <div className="bg-mesh relative p-6 sm:p-8">
                  <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/[0.85] uppercase backdrop-blur">
                    Growth Stack
                  </div>
                  <Image
                    src="/brand/logo-primary-negative.png"
                    alt="Logo negativo Você Digital Propaganda"
                    width={4763}
                    height={3368}
                    className="h-auto w-40 sm:w-48"
                  />
                  <div className="mt-8 space-y-4 text-white">
                    <h2 className="font-display text-3xl leading-tight font-semibold text-balance">
                      Design, clareza e performance no mesmo fluxo.
                    </h2>
                    <p className="max-w-md text-sm leading-7 text-white/[0.78] sm:text-base">
                      Uma boa landing page não depende só de beleza. Ela precisa
                      carregar rápido, explicar sua proposta sem ruído e guiar
                      o clique com confiança.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {featurePills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-3 rounded-[1.75rem] bg-white/[0.08] p-4 backdrop-blur">
                    <div className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-black/10 px-4 py-3">
                      <div>
                        <p className="text-sm text-white/70">Aquisição</p>
                        <p className="font-semibold">Tráfego com direção</p>
                      </div>
                      <LineChart className="size-5 text-brand-soft" />
                    </div>
                    <div className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-black/10 px-4 py-3">
                      <div>
                        <p className="text-sm text-white/70">Experiência</p>
                        <p className="font-semibold">Leitura fluida em mobile</p>
                      </div>
                      <Gauge className="size-5 text-brand-soft" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        aria-labelledby="beneficios-title"
        className="py-20 sm:py-24"
      >
        <div className="section-shell">
          <Reveal>
            <div id="beneficios-title">
              <SectionHeading
                eyebrow="Benefícios"
                title="Uma estrutura comercial pronta para transformar atenção em ação."
                description="Cada seção foi pensada para reduzir objeções, destacar valor e criar um caminho claro até o CTA."
              />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={0.06 * index}>
                <article className="card-border h-full rounded-[1.75rem] bg-white p-6 shadow-[0_18px_45px_rgba(35,31,32,0.05)]">
                  <div className="mb-6 inline-flex rounded-2xl bg-brand-primary/10 p-3 text-brand-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servico"
        aria-labelledby="servico-title"
        className="py-20 sm:py-24"
      >
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)] lg:items-start">
            <Reveal>
              <div className="rounded-[2rem] border border-border-soft bg-white/90 p-8 shadow-[0_24px_60px_rgba(35,31,32,0.06)] sm:p-10">
                <SectionHeading
                  eyebrow="Sobre o serviço"
                  title="Autoridade visual com clareza comercial para pequenas empresas crescerem com consistência."
                  description="A proposta da Você Digital Propaganda é simples: entregar uma landing page que una posicionamento, design e velocidade para que sua marca converta melhor hoje e escale melhor amanhã."
                />

                <div className="mt-8 grid gap-6 border-t border-border-soft pt-8 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold tracking-[0.18em] text-brand-primary uppercase">
                      Foco real
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted">
                      Ideal para campanhas de aquisição, ofertas sazonais,
                      lançamento de serviços e páginas de captação que exigem
                      leitura rápida e uma proposta forte.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.18em] text-brand-primary uppercase">
                      Base sólida
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted">
                      Next.js, TypeScript estrito, Tailwind CSS e componentes
                      acessíveis para garantir manutenção simples e evolução
                      futura sem retrabalho.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] bg-gradient-to-br from-[#231F20] via-[#2b2625] to-[#3b2f23] p-1 shadow-[0_30px_80px_rgba(35,31,32,0.16)]">
                <div className="rounded-[1.8rem] bg-surface-strong p-7 text-white sm:p-8">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                        Processo
                      </p>
                      <h2
                        id="servico-title"
                        className="mt-2 font-display text-3xl font-semibold tracking-tight"
                      >
                        Como a página ganha tração
                      </h2>
                    </div>
                    <Image
                      src="/brand/logo-negative.png"
                      alt="Logotipo negativo da Você Digital Propaganda"
                      width={3572}
                      height={2526}
                      className="hidden h-auto w-28 sm:block"
                    />
                  </div>

                  <div className="space-y-4">
                    {serviceSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                            0{index + 1}
                          </span>
                          <h3 className="font-display text-xl font-semibold">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-3 pl-[3.25rem] text-sm leading-7 text-white/75 sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer
        id="cta"
        aria-labelledby="cta-title"
        className="pb-12 pt-6 sm:pb-16"
      >
        <div className="section-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[2.25rem] bg-gradient-to-r from-brand-primary via-[#ff8b10] to-brand-secondary p-[1px] shadow-[0_35px_90px_rgba(255,119,0,0.18)]">
              <div className="rounded-[2.15rem] bg-[#1d1816] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <div>
                    <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                      CTA final
                    </p>
                    <h2
                      id="cta-title"
                      className="mt-3 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl"
                    >
                      Se sua próxima campanha precisa performar melhor, essa é a
                      base certa para começar.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
                      Posicionamento claro, visual profissional e tecnologia
                      pronta para capturar demanda com muito mais consistência.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-foreground hover:bg-white/92"
                    >
                      <a href="#topo">
                        Quero uma LP focada em vendas
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.12]"
                    >
                      <a href="#servico">Entender a entrega</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-border-soft/80 pt-6 text-sm text-muted sm:flex-row sm:items-center">
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
            <p>Landing page construída com foco em performance, SEO e conversão.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
