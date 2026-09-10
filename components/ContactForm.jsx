"use client";

import { useState } from "react";
import Script from "next/script";
import { useLanguage } from "@/context/LanguageContext";

const WEB3FORMS_ACCESS_KEY = "237bfbbb-39dc-4b99-825c-c4e109df365a";
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY";

export function ContactForm() {
  const { T } = useLanguage();
  const f = T.contact.form;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    const token =
      typeof window !== "undefined" && window.grecaptcha
        ? window.grecaptcha.getResponse()
        : "";

    if (!token) {
      setErrorMsg(f.captchaRequired);
      return;
    }

    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);

    try {
      // 1) Verify the token server-side (our own API route holds the secret).
      const verifyRes = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        setStatus("error");
        setErrorMsg(f.error);
        window.grecaptcha?.reset();
        return;
      }

      // 2) Only after verification, submit directly from the browser to the
      // form backend — never proxy this through our own server (see skill notes
      // on Cloudflare blocking server-to-server submissions).
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "Nueva consulta — SamGeronimo Group");

      const submitRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const submitData = await submitRes.json();

      if (submitData.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(f.error);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(f.error);
    } finally {
      window.grecaptcha?.reset();
    }
  }

  const services = T.services.items.map((s) => s.name);

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label={f.name} name="name" required />
          <Field label={f.company} name="company" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label={f.email} name="email" type="email" required />
          <Field label={f.phone} name="phone" type="tel" />
        </div>

        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">
            {f.service}
          </label>
          <select
            name="service"
            required
            defaultValue=""
            className="w-full min-h-[44px] bg-charcoal border border-line rounded-sm2 px-4 py-3 text-off focus:border-accent focus:outline-none transition-colors"
          >
            <option value="" disabled>
              {f.servicePlaceholder}
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">
            {f.message}
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full bg-charcoal border border-line rounded-sm2 px-4 py-3 text-off focus:border-accent focus:outline-none transition-colors resize-none"
          />
        </div>

        <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} />

        {errorMsg && <p className="text-sm text-accent">{errorMsg}</p>}
        {status === "success" && (
          <p className="text-sm text-off bg-charcoal border border-line rounded-sm2 px-4 py-3">
            {f.success}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center rounded-sm2 bg-accent px-7 py-3.5 font-mono text-xs tracking-widest uppercase text-ink font-medium hover:-translate-y-0.5 transition-transform duration-200 disabled:opacity-60 disabled:hover:translate-y-0 min-h-[44px]"
        >
          {status === "sending" ? f.sending : f.submit}
        </button>
      </form>
    </>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="block font-mono text-xs tracking-widest uppercase text-muted mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full min-h-[44px] bg-charcoal border border-line rounded-sm2 px-4 py-3 text-off focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}
