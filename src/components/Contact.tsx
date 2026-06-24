"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="iletisim" className="bg-navy py-24 md:py-32 px-6">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left */}
        <div>
          <h2 className="font-headline font-bold text-white text-[28px] md:text-[40px] tracking-tight mb-4">
            İletişime Geçin
          </h2>
          <p className="font-body text-white/55 text-base md:text-lg leading-relaxed mb-10">
            Bir sonraki büyük projenizi konuşmak için buradayız.
          </p>
          <div className="flex flex-col gap-5">
            <a
              href="mailto:info@peoplencoagency.com"
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
            >
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-white/40 transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="font-body text-sm">info@peoplencoagency.com</span>
            </a>
            <div className="flex items-center gap-3 text-white/70">
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span className="font-body text-sm">Bornova / İzmir</span>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="bg-white rounded-xl p-7 md:p-9">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-surface-low flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#081c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-headline font-bold text-on-surface text-lg mb-2">Mesajınız İletildi</h3>
              <p className="font-body text-muted text-sm">En kısa sürede size geri döneceğiz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="font-label text-[11px] font-semibold tracking-[0.05em] uppercase text-muted block mb-1.5">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Adınız Soyadınız"
                  className="w-full border border-border rounded-[8px] px-4 py-3 font-body text-sm text-on-surface placeholder:text-muted/50 focus:outline-none focus:border-navy transition-colors duration-200"
                />
              </div>
              <div>
                <label className="font-label text-[11px] font-semibold tracking-[0.05em] uppercase text-muted block mb-1.5">
                  E-posta
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ornek@sirket.com"
                  className="w-full border border-border rounded-[8px] px-4 py-3 font-body text-sm text-on-surface placeholder:text-muted/50 focus:outline-none focus:border-navy transition-colors duration-200"
                />
              </div>
              <div>
                <label className="font-label text-[11px] font-semibold tracking-[0.05em] uppercase text-muted block mb-1.5">
                  Mesaj
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Projenizden bahsedin…"
                  className="w-full border border-border rounded-[8px] px-4 py-3 font-body text-sm text-on-surface placeholder:text-muted/50 focus:outline-none focus:border-navy transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white font-headline font-semibold text-sm py-3.5 rounded-full hover:bg-navy-mid transition-colors duration-200 mt-1"
              >
                Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
