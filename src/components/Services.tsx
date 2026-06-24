const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: "Sosyal Medya Yönetimi",
    description:
      "Topluluklarınızı büyütüyor, etkileşimi artırıyoruz.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Dijital Reklam Yönetimi",
    description:
      "Google Ads, Meta ve LinkedIn platformlarında veriye dayalı stratejilerle bütçenizi en verimli şekilde yönetiyor, dönüşümlerinizi artırıyoruz.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="10" y1="17" x2="10" y2="21" />
        <line x1="14" y1="17" x2="14" y2="21" />
      </svg>
    ),
    title: "İçerik Stratejisi",
    description:
      "Markanızın sesini yansıklayan yaratıcı içerikler.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Marka Yönetimi",
    description:
      "Kurumsal kimliğinizi dijitalde sağlamlaştırıyoruz.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" />
        <path d="M17 9l-5 5-3-3" />
      </svg>
    ),
    title: "Reklam / Tanıtım Filmi",
    description:
      "Markanızı ve ürünlerinizi en etkili şekilde anlatan profesyonel prodüksiyonlar.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Video & Drone Çekimi",
    description:
      "Yaratıcı bakış açımız ve yüksek teknoloji ekipmanlarımızla markanıza güç katıyoruz.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Web Tasarım",
    description:
      "Dijitaldeki yüzünüzü modern, kullanıcı dostu ve güven veren tasarımlarla inşa ediyoruz.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "SEO",
    description:
      "Arama motorlarında zirveye giden yolculuğunuzda markanızı görünür kılıyoruz.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-headline font-bold text-on-surface text-[28px] md:text-[40px] tracking-tight text-center mb-12 md:mb-16">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-border rounded-lg p-6 hover:border-navy/30 hover:scale-[1.02] transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center mb-4 text-muted group-hover:text-navy group-hover:bg-surface-container transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="font-headline font-semibold text-on-surface text-[15px] leading-snug mb-2">
                {service.title}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
