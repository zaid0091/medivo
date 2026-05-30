export function SectionHeader({ badge, title, description, align = "center" }) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`mb-14 max-w-2xl ${alignClass}`}>
      {badge && <p className="premium-badge mb-4">{badge}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
