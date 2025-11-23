import { useTranslations, useLocale } from "next-intl";

const services = [
  {
    number: "01",
    titleKey: "strategy",
    descriptionKey: "strategyDescription"
  },
  {
    number: "02", 
    titleKey: "solutions",
    descriptionKey: "solutionsDescription"
  },
  {
    number: "03",
    titleKey: "staff", 
    descriptionKey: "staffDescription"
  },
  {
    number: "04",
    titleKey: "quality",
    descriptionKey: "qualityDescription"
  },
]

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            return (
              <div key={service.titleKey} className="border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <div className="relative h-26">
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="xMinYMin meet"
                    style={{ direction: 'ltr' }} 
                  >
                    <defs>
                      <linearGradient 
                        id={`fadeGradient${service.number}`} 
                        x1="0%" 
                        y1="95%" 
                        x2="0%" 
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#ffff" stopOpacity="-4" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <text
                      x={isRTL ? "120" : "0"} 
                      y="80"
                      fill={`url(#fadeGradient${service.number})`}
                      fontSize="100"
                      fontWeight="bold"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor={isRTL ? "end" : "start"} 
                      direction="ltr" 
                    >
                      {service.number}
                    </text>
                  </svg>
                </div>
                <h1 
                  className={`text-xl mb-4 font-bold font-work-sans dark:text-[#FFFFFF] ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  {t(service.titleKey)}
                </h1>
                <div>
                  <p 
                    className={`text-sm leading-relaxed dark:text-[#FFFFFF]/70 ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}