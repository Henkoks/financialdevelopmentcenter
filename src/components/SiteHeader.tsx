import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/erc-logo.png";

const nav = [
  { href: "#about", label: "Про нас" },
  { href: "#services", label: "Послуги" },
  { href: "#advantages", label: "Переваги" },
  { href: "#audience", label: "Для кого" },
  { href: "#contacts", label: "Контакти" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Логотип Єдиний розрахунковий центр"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold">
              ЄРЦ
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:block">
              Єдиний розрахунковий центр
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основна навігація">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+380986511747"
             className="hidden items-center gap-2 border-l border-border px-4 py-2 text-sm text-foreground transition-colors hover:text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            (+380) 98-651-17-47
          </a>
          <Button asChild className="hidden h-10 rounded-sm px-5 sm:inline-flex">
            <a href="#contacts">Залишити заявку</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Залишити заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
