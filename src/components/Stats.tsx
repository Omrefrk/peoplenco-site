const stats = [
  { value: "150+", label: "Marka" },
  { value: "5M+", label: "Kişiye Erişim" },
  { value: "%98", label: "Müşteri Memnuniyeti" },
  { value: "7+", label: "Yıl Deneyim" },
];

export default function Stats() {
  return (
    <section className="bg-navy py-20 md:py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-headline font-extrabold text-white text-[40px] md:text-[56px] leading-none tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="font-label text-white/50 text-[11px] font-semibold tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
