import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const EMAIL = "bazilevs2@ukr.net";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: { name?: string; contact?: string } = {};
    if (name.trim().length < 2) next.name = "Вкажіть, будь ласка, ваше ім'я";
    if (contact.trim().length < 5)
      next.contact = "Вкажіть телефон або email для зв'язку";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Ім'я: ${name}`,
      `Контакт: ${contact}`,
      "",
      message || "(без повідомлення)",
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Заявка з сайту ЄРЦ",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring";

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Ім'я *
          </label>
          <input
            id="name"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Як до вас звертатися"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact" className="mb-2 block text-sm font-medium">
            Телефон / Email *
          </label>
          <input
            id="contact"
            className={field}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+380 ... або email"
          />
          {errors.contact && (
            <p className="mt-1.5 text-xs text-destructive">{errors.contact}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Повідомлення
        </label>
        <textarea
          id="message"
          rows={5}
          className={field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Коротко опишіть завдання підприємства"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
        style={{ boxShadow: "var(--shadow-glow)" }}
      >
        <Send className="h-4 w-4" />
        Надіслати заявку
      </button>

      {sent && (
        <p className="mt-4 text-sm text-primary">
          Дякуємо! Відкрито поштову програму — надішліть лист, і ми зв'яжемося з
          вами найближчим часом.
        </p>
      )}
    </form>
  );
}
