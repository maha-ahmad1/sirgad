import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export function About() {
  const t = useTranslations("About");
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const getTextConfig = (number: string) => {
    const text = `+${number}`;
    
    if (isRTL) {
      return {
        x: "20%", 
        textAnchor: "end" as const,
        text: text
      };
    } else {
      return {
        x: number === "3000" ? "25%" : "8%",
        textAnchor: "middle" as const,
        text: text
      };
    }
  };

   const geyearsConfig = (number: string) => {
    const text = `+${number}`;
    
    if (isRTL) {
      return {
        x: "70%", 
        textAnchor: "end" as const,
        text: text
      };
    } else {
      return {
        x: number === "3000" ? "25%" : "8%",
        textAnchor: "middle" as const,
        text: text
      };
    }
  };

  const clientsConfig = getTextConfig("3000");
  const yearsConfig = geyearsConfig("20");

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground dark:text-[#FFFFFF]">
                {t("subtitle")}
              </span>
              <br />
              <br />
              <span className="dark:text-[#FFFFFF]/70">
                {t("description1")}
              </span>
              <br />
              <br />
              <span className="dark:text-[#FFFFFF]/70">
                {t("description2")}
              </span>
            </p>
            <div className={`grid grid-cols-2 gap-6 pt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="">
                <div className="lg:text-7xl text-5xl font-bold relative mb-4">
                  <span
                    className="bg-gradient-to-r from-cyan-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      WebkitTextStroke: "2px transparent",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      paintOrder: "stroke fill",
                      strokeWidth: "2px",
                      stroke: "url(#gradient)",
                    }}
                  >
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#14b8a6" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 80"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <text
                        x={clientsConfig.x}
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor={clientsConfig.textAnchor}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fontSize="80"
                        fontWeight="bold"
                        fontFamily={isRTL ? "Tajawal, system-ui" : "system-ui, -apple-system, sans-serif"}
                        direction={isRTL ? "rtl" : "ltr"}
                      >
                        {clientsConfig.text}
                      </text>
                    </svg>
                    <span className="opacity-0">{clientsConfig.text}</span>
                  </span>
                </div>
                <div className="text-lg text-[#222222] dark:text-[#FFFFFF] mt-2">
                  {t("clients")}
                </div>
              </div>

              <div className="">
                <div className="lg:text-7xl text-5xl font-bold relative mb-4">
                  <span
                    className="bg-gradient-to-r from-cyan-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      WebkitTextStroke: "2px transparent",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      paintOrder: "stroke fill",
                      strokeWidth: "2px",
                      stroke: "url(#gradient2)",
                    }}
                  >
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="50%" stopColor="#14b8a6" />
                          <stop offset="100%" stopColor="#facc15" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 80"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <text
                        x={yearsConfig.x}
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor={yearsConfig.textAnchor}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fontSize="80"
                        fontWeight="bold"
                        fontFamily={isRTL ? "Tajawal, system-ui" : "system-ui, -apple-system, sans-serif"}
                        direction={isRTL ? "rtl" : "ltr"}
                      >
                        {yearsConfig.text}
                      </text>
                    </svg>
                    <span className="opacity-0">{yearsConfig.text}</span>
                  </span>
                </div>
                <div className="text-lg mt-2 text-[#222222] dark:text-[#FFFFFF]">
                  {t("years")}
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/team.png"
              alt={t("imageAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}