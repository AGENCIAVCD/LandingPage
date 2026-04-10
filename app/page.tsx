import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ChartColumnIncreasing,
  Clock3,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { VideoShowcase } from "@/components/video-showcase";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const createWhatsAppLink = (text: string) =>
  `https://api.whatsapp.com/send/?phone=5511991077836&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

const primaryWhatsAppLink = createWhatsAppLink(
  "Olá, vim pela landing page da Você Digital e quero entender como vocês podem escalar meu negócio no digital.",
);

const consultoriaWhatsAppLink = createWhatsAppLink(
  "Olá, tentei sair da landing page, mas quero aproveitar a consultoria gratuita de 1h para escalar meu negócio no digital.",
);

const videoWhatsAppLink = createWhatsAppLink(
  "Olá, vim pela landing page da Você Digital, assisti a apresentação e quero falar sobre uma estratégia para gerar mais leads e vendas.",
);

const benefits = [
  {
    icon: Target,
    title: "Mais clique qualificado",
    description:
      "A página fala com a dor certa, elimina ruído e conduz o visitante até o WhatsApp com mais intenção de compra.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Menos desperdício de mídia",
    description:
      "Campanhas boas perdem força quando aterrissam em páginas fracas. Aqui a experiência acompanha o investimento.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança em segundos",
    description:
      "Autoridade visual, copy persuasiva e estrutura clara para sua marca parecer séria, atual e pronta para vender.",
  },
  {
    icon: Clock3,
    title: "Resposta mais rápida",
    description:
      "O caminho é curto: o lead entende a proposta, se interessa e já chama no WhatsApp com a mensagem certa.",
  },
];

const deliverables = [
  "Hero de alto impacto com proposta clara e CTA direto para o WhatsApp.",
  "Blocos de benefício, autoridade e objeção pensados para gerar conversa comercial.",
  "Experiência mobile-first, leve e preparada para tráfego pago e SEO técnico.",
  "Fluxo visual que valoriza sua marca e aumenta a sensação de profissionalismo.",
];

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
        "Agência focada em geração de leads, vendas online e landing pages de alta conversão.",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Landing Page para geração de leads e vendas no WhatsApp",
      serviceType: "Criação de landing pages de alta conversão",
      areaServed: "Brasil",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      audience: {
        "@type": "Audience",
        audienceType: "Empreendedores e pequenas empresas",
      },
      offers: {
        "@type": "Offer",
        url: siteUrl,
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Landing Pages que geram conversas no WhatsApp",
  description:
    "A Você Digital cria landing pages com identidade forte, performance alta e CTA pensado para transformar tráfego em conversas no WhatsApp.",
};

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a
          href={primaryWhatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_20px_50px_rgba(37,211,102,0.35)] hover:-translate-y-0.5"
        >
          <MessageCircle className="size-4" />
          Chamar no WhatsApp
        </a>

        <section
          id="topo"
          aria-labelledby="hero-title"
          className="relative isolate overflow-hidden px-0 pb-16 pt-6 sm:pb-20 sm:pt-8"
        >
          <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(255,181,0,0.22),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,119,0,0.28),transparent_30%),linear-gradient(180deg,#221814_0%,#120d0a_70%,#f7f0e8_100%)]" />

          <div className="section-shell">
            <header className="rounded-full border border-white/12 bg-white/88 px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur sm:px-7">
              <div className="flex items-center justify-between gap-4">
                <a
                  href="#topo"
                  className="flex items-center"
                  aria-label="Você Digital Propaganda"
                >
                  <Image
                    src="/brand/logo-primary.png"
                    alt="Você Digital Propaganda"
                    width={4763}
                    height={3368}
                    className="h-auto w-40 sm:w-44"
                    priority
                  />
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium text-[#58595B] md:flex">
                  <a href="#beneficios" className="hover:text-foreground">
                    Benefícios
                  </a>
                  <a href="#video" className="hover:text-foreground">
                    Vídeo
                  </a>
                  <a href="#entrega" className="hover:text-foreground">
                    Entrega
                  </a>
                </nav>

                <Button asChild size="sm">
                  <a
                    href={primaryWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </header>

            <div className="grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:py-18">
              <Reveal className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-soft/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
                  <Sparkles className="size-4 text-brand-secondary" />
                  Tráfego bom merece uma landing page que converte
                </div>

                <div className="space-y-5">
                  <h1
                    id="hero-title"
                    className="max-w-4xl font-display text-5xl leading-[0.92] font-semibold tracking-tight text-white text-balance sm:text-6xl xl:text-7xl"
                  >
                    Chega de levar seus anúncios para páginas que não fazem o
                    lead chamar no WhatsApp.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                    A Você Digital cria landing pages com identidade forte,
                    argumento comercial e uma direção clara: transformar o
                    clique em conversa e a conversa em venda.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a
                      href={primaryWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quero gerar mais leads
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href="#video">Ver apresentação</a>
                  </Button>
                </div>

                <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
                  <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                    Mensagem pré-preenchida
                  </p>
                  <p className="mt-3 text-base leading-8 text-white/78">
                    Quando a pessoa clicar no botão, o WhatsApp já abre com um
                    texto pronto dizendo que veio da landing page da Você
                    Digital. Isso acelera atendimento e contexto comercial.
                  </p>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-sm text-white/88">
                    “Olá, vim pela landing page da Você Digital e quero
                    entender como vocês podem escalar meu negócio no digital.”
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,#2a1d17_0%,#160f0c_42%,#100b09_100%)] shadow-[0_35px_90px_rgba(0,0,0,0.28)]">
                  <div className="bg-[radial-gradient(circle_at_top_right,rgba(255,181,0,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,119,0,0.18),transparent_30%)] p-7 sm:p-9">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-brand-soft/25 bg-brand-primary/12 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-brand-soft uppercase">
                        LP de conversão
                      </span>
                      <Rocket className="size-5 text-brand-secondary" />
                    </div>

                    <div className="mt-8 space-y-5">
                      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Uma página feita para convencer, não só para “estar no
                        ar”.
                      </h2>
                      <p className="text-base leading-8 text-white/74">
                        Copy estratégica, visual premium, carregamento rápido e
                        CTA no lugar certo para levar o lead a tomar atitude.
                      </p>
                    </div>

                    <div className="mt-8 grid gap-4">
                      {[
                        "Mais percepção de valor na primeira dobra.",
                        "Mais segurança para quem ainda não conhece sua marca.",
                        "Mais conversa iniciada no canal que fecha venda.",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-4"
                        >
                          <BadgeCheck className="mt-0.5 size-5 text-brand-secondary" />
                          <p className="text-sm leading-7 text-white/82 sm:text-base">
                            {item}
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

        <section
          id="beneficios"
          aria-labelledby="beneficios-title"
          className="py-18 sm:py-24"
        >
          <div className="section-shell">
            <Reveal>
              <div id="beneficios-title">
                <SectionHeading
                  eyebrow="Por que funciona"
                  title="A página precisa fazer o visitante sentir que falar com você é o próximo passo óbvio."
                  description="É isso que a gente constrói aqui: percepção de valor, clareza na oferta e um caminho curto até o WhatsApp."
                />
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={0.05 * index}>
                  <article className="h-full rounded-[1.8rem] border border-[#f2dfcd] bg-white px-6 py-7 shadow-[0_18px_45px_rgba(59,40,22,0.06)]">
                    <div className="inline-flex rounded-2xl bg-brand-primary/10 p-3 text-brand-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-muted">
                      {description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="video" aria-labelledby="video-title" className="py-8 sm:py-12">
          <div className="section-shell">
            <Reveal>
              <div className="mb-8 max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase">
                  Presença de marca
                </p>
                <h2
                  id="video-title"
                  className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
                >
                  Vídeo em destaque para elevar a percepção da marca logo no
                  meio da jornada.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <VideoShowcase
                videoSrc="/brand/vcd-showreel.mp4"
                whatsappLink={videoWhatsAppLink}
                logoSrc="/brand/logo-primary-negative.png"
              />
            </Reveal>
          </div>
        </section>

        <section
          id="entrega"
          aria-labelledby="entrega-title"
          className="py-18 sm:py-24"
        >
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
              <Reveal>
                <div className="rounded-[2rem] bg-[#16100d] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-10">
                  <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                    O que entregamos
                  </p>
                  <h2
                    id="entrega-title"
                    className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
                  >
                    Uma experiência pensada para vender mais com menos atrito.
                  </h2>

                  <div className="mt-8 grid gap-4">
                    {deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-4 py-4"
                      >
                        <BadgeCheck className="mt-0.5 size-5 text-brand-secondary" />
                        <p className="text-sm leading-7 text-white/78 sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-[2rem] border border-[#ecd6c1] bg-[linear-gradient(180deg,#fff9f3_0%,#fff3e5_100%)] p-8 shadow-[0_22px_60px_rgba(76,46,12,0.07)] sm:p-10">
                  <p className="text-sm font-semibold tracking-[0.18em] text-brand-primary uppercase">
                    Para quem é
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
                    Empreendedores e pequenas empresas que precisam de mais
                    consistência na geração de leads.
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#58595B]">
                    Se você investe em tráfego, publica conteúdo ou já sente que
                    seu serviço tem valor, mas sua página ainda não sustenta essa
                    percepção, a landing page certa muda o jogo.
                  </p>

                  <div className="mt-8 rounded-[1.6rem] border border-brand-primary/12 bg-white p-6">
                    <p className="text-sm font-semibold tracking-[0.18em] text-brand-primary uppercase">
                      Próximo passo
                    </p>
                    <p className="mt-3 text-base leading-8 text-[#58595B]">
                      Clique no botão, abra o WhatsApp e já chegue com contexto:
                      a mensagem informa que você veio desta LP e quer escalar o
                      negócio no digital.
                    </p>
                    <div className="mt-5">
                      <Button asChild size="lg">
                        <a
                          href={primaryWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Quero atendimento no WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <footer
          id="contato"
          aria-labelledby="cta-title"
          className="pb-18 pt-4 sm:pb-20"
        >
          <div className="section-shell">
            <Reveal>
              <div className="overflow-hidden rounded-[2.3rem] bg-[linear-gradient(135deg,#ff7700_0%,#ff8f0a_36%,#ffb500_100%)] p-[1px] shadow-[0_40px_100px_rgba(255,119,0,0.22)]">
                <div className="rounded-[2.2rem] bg-[#16100d] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-12">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                    <div>
                      <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
                        CTA final
                      </p>
                      <h2
                        id="cta-title"
                        className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
                      >
                        Sua próxima venda pode começar com um clique no botão
                        certo.
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                        Fale com a Você Digital no WhatsApp e envie sua demanda
                        já com contexto. A conversa começa mais rápida, mais
                        clara e muito mais estratégica.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <Button asChild size="lg">
                        <a
                          href={primaryWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Chamar agora no WhatsApp
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                      <Button asChild variant="secondary" size="lg">
                        <a href="#topo">Voltar ao topo</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-[#ead9c7] pt-6 text-sm text-[#6D6E70] sm:flex-row sm:items-center">
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
              <p>Landing page focada em WhatsApp, conversão e percepção de marca.</p>
            </div>
          </div>
        </footer>
      </main>

      <ExitIntentModal whatsappLink={consultoriaWhatsAppLink} />
    </>
  );
}
