type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
