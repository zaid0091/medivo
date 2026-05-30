import Link from "next/link";

const footerLinks = [
  { label: "About Medivo", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-white text-black">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 pt-16 md:px-10 md:pb-12 md:pt-20">
        <h2
          className="select-none text-center font-bold leading-[0.95] tracking-[-0.05em] text-black"
          style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
          aria-hidden
        >
          Medivo
        </h2>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:mt-20 sm:flex-row sm:items-end">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-black hover:opacity-70"
          >
            Medivo
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-black/80">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-opacity hover:text-black hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
