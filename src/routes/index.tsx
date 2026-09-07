import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Users,
  ClipboardList,
  GraduationCap,
  Building2,
  Wallet,
  Headphones,
  Code2,
  Receipt,
  Check,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { CityBackdrop } from "@/components/CityBackdrop";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/erc-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Єдиний розрахунковий центр — рішення для підприємств ЖКГ",
      },
      {
        name: "description",
        content:
          "ТОВ «УК «Єдиний розрахунковий центр» — аудит процесів, абонентські служби, робота із заборгованістю, контакт-центри, білінгові системи та навчання персоналу для підприємств ЖКГ.",
      },
      {
        property: "og:title",
        content: "Єдиний розрахунковий центр — рішення для підприємств ЖКГ",
      },
      {
        property: "og:description",
        content:
          "Комплексні рішення для підприємств житлово-комунального господарства: абонентське обслуговування, білінг, робота з боржниками, навчання персоналу.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const directions = [
  {
    icon: BarChart3,
    text: "Аналіз роботи підприємства або окремого структурного підрозділу",
  },
  { icon: Users, text: "Побудова та організація роботи абонентської служби" },
  {
    icon: ClipboardList,
    text: "Прийом абонентів, консультації, обробка звернень і показників лічильників",
  },
  {
    icon: GraduationCap,
    text: "Навчання співробітників стандартам якісного обслуговування",
  },
  {
    icon: Building2,
    text: "Створення нових підрозділів і налаштування внутрішніх бізнес-процесів",
  },
  {
    icon: Wallet,
    text: "Повноцінна робота з абонентами, які мають заборгованість за житлово-комунальні послуги",
  },
  { icon: Headphones, text: "Створення, запуск і навчання контактних центрів" },
  {
    icon: Code2,
    text: "Розробка програмного забезпечення для будь-якого підрозділу сфери ЖКГ",
  },
  {
    icon: Receipt,
    text: "Створення та впровадження білінгових систем для обліку нарахувань, оплат і заборгованості",
  },
];

const detailSections = [
  {
    id: "analytics",
    title: "Аналітика та аудит роботи підприємства",
    paragraphs: [
      "Одним із ключових напрямів нашої роботи є проведення аналізу діяльності підприємства або окремого підрозділу. Ми вивчаємо, як побудовані внутрішні процеси, як організовано прийом абонентів, як ведеться облік звернень, показників, оплат, нарахувань і заборгованості. За результатами аналізу підприємство отримує чітке бачення проблемних зон, рекомендації щодо оптимізації роботи та покроковий план змін.",
      "Такий аудит дозволяє виявити дублювання функцій, неефективний розподіл обов'язків, слабкі місця у комунікації між підрозділами, недостатній контроль за виконанням задач або відсутність єдиних стандартів роботи з абонентами. Ми не обмежуємося загальними висновками — кожна рекомендація має практичне застосування та може бути впроваджена в роботу підприємства.",
    ],
  },
  {
    id: "subscribers",
    title: "Організація абонентської служби",
    paragraphs: [
      "Абонентська служба є одним із найважливіших підрозділів будь-якого підприємства ЖКГ, адже саме через неї відбувається основна взаємодія з населенням. Ми допомагаємо створити або реорганізувати абонентську службу таким чином, щоб кожне звернення абонента було зафіксоване, опрацьоване та доведене до результату.",
      "До цього напряму входить організація прийому абонентів, налаштування процесу передачі та обробки показників лічильників, консультації щодо нарахувань і оплат, обробка заяв, скарг, звернень, перерахунків та інших щоденних питань. Ми також допомагаємо визначити функціональні обов'язки співробітників, розробити внутрішні інструкції та стандарти обслуговування.",
    ],
  },
  {
    id: "debt",
    title: "Робота з абонентами, які мають заборгованість",
    paragraphs: [
      "Ефективна робота з дебіторською заборгованістю потребує системного підходу. Ми допомагаємо підприємствам ЖКГ створити зрозумілий алгоритм взаємодії з абонентами-боржниками: від інформування про наявну заборгованість до супроводу домовленостей щодо її погашення. Такий підхід дозволяє підвищити платіжну дисципліну, зменшити обсяг прострочених платежів і покращити фінансову стабільність підприємства.",
      "Ми можемо допомогти налагодити облік боржників, сегментацію абонентів за сумою та строком заборгованості, підготовку інформаційних повідомлень, сценаріїв спілкування, графіків роботи відповідальних працівників і систему контролю результатів. Окрема увага приділяється коректній, законній та професійній комунікації з населенням.",
    ],
  },
  {
    id: "callcenter",
    title: "Створення та навчання контактних центрів",
    paragraphs: [
      "Контактний центр дозволяє підприємству швидко та якісно обробляти звернення абонентів телефоном, електронною поштою, через месенджери або інші канали зв'язку. Ми допомагаємо розробити структуру контактного центру, визначити необхідну кількість операторів, підготувати сценарії відповідей, правила фіксації звернень і систему контролю якості обслуговування.",
      "Навчання співробітників контактного центру включає роботу з типовими та складними зверненнями, правила ділового спілкування, обробку конфліктних ситуацій, внесення інформації до облікових систем і передачу задач відповідальним підрозділам. Це дозволяє підприємству зменшити навантаження на абонентську службу та забезпечити абонентам зручний канал комунікації.",
    ],
  },
  {
    id: "software",
    title: "Програмне забезпечення та білінгові системи",
    paragraphs: [
      "Для ефективної роботи сучасного підприємства ЖКГ важливо мати зручні цифрові інструменти. Ми займаємося розробкою програмного забезпечення для різних підрозділів: абонентських служб, розрахункових відділів, контактних центрів, відділів по роботі із заборгованістю, аналітичних та управлінських підрозділів.",
      "Окремо ми пропонуємо створення та впровадження білінгових систем, які дозволяють вести облік абонентів, нарахувань, оплат, показників приладів обліку, пільг, перерахунків і заборгованості. Такі системи можуть бути адаптовані під конкретні потреби підприємства, його структуру, кількість абонентів і особливості надання послуг.",
    ],
  },
  {
    id: "training",
    title: "Навчання персоналу",
    paragraphs: [
      "Ми проводимо навчання співробітників підприємств ЖКГ з урахуванням їхніх посадових обов'язків і щоденних задач. Навчальні програми можуть охоплювати роботу з абонентами, ведення обліку, обробку звернень, використання програмного забезпечення, роботу із заборгованістю, стандарти комунікації та внутрішню взаємодію між підрозділами.",
      "Головна мета навчання — щоб працівники не лише знали теорію, а й могли впевнено застосовувати нові підходи у своїй роботі. Ми допомагаємо сформувати єдині стандарти, підвищити відповідальність персоналу та зробити роботу підрозділів більш узгодженою.",
    ],
  },
];

const advantages = [
  "Практичний досвід роботи з підприємствами комунального сектору",
  "Комплексний підхід до організації абонентського обслуговування",
  "Можливість створення служб і підрозділів «з нуля»",
  "Навчання персоналу та впровадження зрозумілих стандартів роботи",
  "Розробка програмних рішень під конкретні потреби підприємства",
  "Орієнтація на зменшення витрат, підвищення дисципліни оплат і покращення сервісу для абонентів",
];

const tags = [
  "Комунальні підприємства",
  "Управляючі компанії",
  "ОСББ",
  "Водоканали",
  "Тепломережі",
  "Газо- та електропостачання",
  "Розрахункові центри",
  "Сервісні організації",
];

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center overflow-hidden"
      >
        <CityBackdrop />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur">
              Житлово-комунальне господарство
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">
              ТОВ «Управляюча компанія{" "}
              <span className="text-gradient">«Єдиний розрахунковий центр»</span>
              »
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-2xl text-lg text-foreground/85 sm:text-xl">
              Комплексні рішення для підприємств житлово-комунального
              господарства
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              ТОВ «Управляюча компанія «Єдиний розрахунковий центр»» надає
              професійні послуги для підприємств житлово-комунального
              господарства. Ми допомагаємо комунальним підприємствам,
              управляючим компаніям, тепломережам, водоканалам та іншим
              організаціям ефективно організовувати роботу з абонентами,
              впроваджувати сучасні підходи до обліку, обслуговування, білінгу
              та управління заборгованістю.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Залишити заявку <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/30 px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
              >
                Наші напрями
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ПРО КОМПАНІЮ */}
      <section id="about" className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Про нас" title="Про компанію" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Наша компанія спеціалізується на комплексному супроводі підприємств ЖКГ: від аналізу поточної роботи окремого підрозділу або всього підприємства до створення нових служб, навчання персоналу та впровадження програмних рішень. Ми орієнтовані на практичний результат, прозорі процеси та підвищення якості взаємодії з абонентами.",
              "Ми розуміємо специфіку роботи підприємств житлово-комунальної сфери: велику кількість абонентів, постійний обсяг звернень, необхідність точного обліку показників, своєчасного нарахування платежів, контролю оплат і системної роботи із заборгованістю. Саме тому наші рішення спрямовані не лише на консультації, а й на реальне впровадження ефективних інструментів у щоденну роботу підприємства.",
              "Наша мета — допомогти підприємствам ЖКГ працювати зрозуміло, прозоро та результативно: скоротити хаос у внутрішніх процесах, підвищити якість обслуговування населення, забезпечити контроль за фінансовими потоками та створити сучасну систему взаємодії з абонентами.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="surface-card h-full p-6">
                  <span className="font-display text-sm text-primary">
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* НАПРЯМИ */}
      <section id="services" className="relative py-24">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Послуги"
              title="Основні напрями діяльності"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map((d, i) => (
              <Reveal key={d.text} delay={(i % 3) * 80}>
                <article className="surface-card group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary">
                    <d.icon className="h-5 w-5 text-primary" />
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                    {d.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ДЕТАЛЬНІ НАПРЯМИ */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl space-y-6 px-5 lg:px-8">
          {detailSections.map((s, i) => (
            <Reveal key={s.id}>
              <article
                id={s.id}
                className="surface-card grid gap-6 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]"
              >
                <div>
                  <span className="font-display text-xs tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold leading-snug">
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {s.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 24)}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ЩО МИ МОЖЕМО */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle title="Що ми можемо зробити для вашого підприємства" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              "Ми допомагаємо налагодити ефективну систему взаємодії з абонентами: від першого звернення до повного супроводу питань щодо нарахувань, оплат, показників, перерахунків і заборгованості. За потреби наша команда може провести аудит існуючих процесів, виявити слабкі місця, підготувати пропозиції щодо оптимізації та супроводити впровадження змін.",
              "Окремий напрям роботи — управління дебіторською заборгованістю у сфері ЖКГ. Ми вибудовуємо системну комунікацію з боржниками, допомагаємо організувати роботу відповідного підрозділу, розробити алгоритми взаємодії з абонентами та підвищити рівень оплат за надані послуги.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="surface-card h-full p-7 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ПЕРЕВАГИ */}
      <section id="advantages" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Переваги" title="Наші переваги" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((a, i) => (
              <Reveal key={a} delay={(i % 2) * 80}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface/50 p-5">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section id="audience" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Аудиторія" title="Для кого наші послуги" />
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Наші послуги будуть корисними для комунальних підприємств,
              управляючих компаній, об'єднань співвласників багатоквартирних
              будинків, підприємств водо-, тепло-, газо- та електропостачання,
              розрахункових центрів, сервісних організацій і будь-яких структур,
              що працюють із великою кількістю абонентів у сфері
              житлово-комунальних послуг.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-foreground/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div
              className="overflow-hidden rounded-3xl border border-border p-8 sm:p-14"
              style={{ background: "var(--gradient-brand)" }}
            >
              <h2 className="max-w-2xl text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Результат співпраці
              </h2>
              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                У результаті співпраці підприємство отримує впорядковані
                процеси, підготовлений персонал, зрозумілу систему роботи з
                абонентами, дієві інструменти контролю оплат і заборгованості, а
                також програмні рішення, які відповідають реальним потребам
                організації. Ми допомагаємо не просто описати проблему, а
                створити практичну модель роботи, яка може бути використана
                щодня.
              </p>
              <a
                href="#contacts"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                Зв'язатися з нами <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* КОНТАКТИ */}
      <section id="contacts" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Зв'язок" title="Контакти" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal>
              <div className="surface-card flex h-full flex-col gap-4 p-7">
                <a
                  href="tel:+380986511747"
                  className="group flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                    <Phone className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Подзвонити
                    </span>
                    <span className="text-base font-semibold">
                      (+380) 98-651-17-47
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:bazilevs2@ukr.net"
                  className="group flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                    <Mail className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">
                      Написати
                    </span>
                    <span className="text-base font-semibold">
                      bazilevs2@ukr.net
                    </span>
                  </span>
                </a>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  Залиште заявку — ми зв'яжемося з вами, уточнимо задачі
                  підприємства та запропонуємо формат співпраці.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Логотип ЄРЦ"
                loading="lazy"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display font-semibold">ЄРЦ</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              ТОВ «Управляюча компанія «Єдиний розрахунковий центр»»
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href="#about">
              Про компанію
            </a>
            <a className="hover:text-foreground" href="#services">
              Напрями діяльності
            </a>
            <a className="hover:text-foreground" href="#advantages">
              Наші переваги
            </a>
            <a className="hover:text-foreground" href="#audience">
              Для кого наші послуги
            </a>
            <a className="hover:text-foreground" href="#contacts">
              Контакти
            </a>
          </nav>
          <div className="text-sm text-muted-foreground">
            <a className="block hover:text-foreground" href="tel:+380986511747">
              (+380) 98-651-17-47
            </a>
            <a
              className="mt-2 block hover:text-foreground"
              href="mailto:bazilevs2@ukr.net"
            >
              bazilevs2@ukr.net
            </a>
            <p className="mt-6 text-xs">
              © 2026 Єдиний розрахунковий центр. Усі права захищені.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
