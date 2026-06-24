import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <div className="max-w-3xl mx-auto py-24 md:py-32">
        <h1 className="font-headline font-extrabold text-white leading-[1.1] tracking-tight mb-6 text-[40px] sm:text-[52px] md:text-[64px]">
          İnsanlar İçin Reklamlar<br />
          Reklamlar İçin İnsanlar
        </h1>
        <p className="text-white/55 font-body text-base md:text-lg leading-relaxed max-w-sm mx-auto mb-10">
          Sonuç odaklı dijital medya ajansınız olarak, markanızı anlamlı bağlantılar kurarak büyütüyoruz. Şeffaf, profesyonel ve yenilikçi yaklaşımımızla tanışın.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#hizmetler"
            className="inline-flex items-center gap-2 bg-white text-navy font-headline font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            Hizmetlerimiz
          </Link>
          <Link
            href="#iletisim"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-headline font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white/60 transition-colors duration-200"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
}
