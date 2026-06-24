import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="People&Co"
                width={110}
                height={33}
              />
            </div>
            <p className="font-body text-muted text-sm leading-relaxed max-w-[260px]">
              İnsan odaklı dijital medya ajansı. Veriyle beslenen, yaratıcılıkla şekillenen ve gerçek bağlar kuran stratejilerle markanızı geleceğe taşıyoruz.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-label text-[11px] font-semibold tracking-[0.1em] uppercase text-on-surface mb-5">
              Menü
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Ana Sayfa", href: "#" },
                { label: "Hizmetler", href: "#hizmetler" },
                { label: "İletişim", href: "#iletisim" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-muted hover:text-on-surface transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-[11px] font-semibold tracking-[0.1em] uppercase text-on-surface mb-5">
              İletişim
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-muted">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-body text-sm">Bornova / İzmir</span>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16.25l.42.67z" />
                </svg>
                <a href="tel:+905071894287" className="font-body text-sm hover:text-on-surface transition-colors duration-200">
                  +90 507 189 42 87
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@peoplencoagency.com" className="font-body text-sm hover:text-on-surface transition-colors duration-200">
                  info@peoplencoagency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-label text-[11px] text-muted tracking-wide">
            © 2026 People&Co Digital Media Agency. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-muted hover:text-on-surface transition-colors duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-muted hover:text-on-surface transition-colors duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="text-muted hover:text-on-surface transition-colors duration-200">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
