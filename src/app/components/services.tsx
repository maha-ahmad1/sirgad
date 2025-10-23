import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users, Award } from "lucide-react"

const services = [
  {
    icon: Target,
    number: "01",
    title: "Strategy",
    description:
      "We deliver strategic IT leadership and ultra-efficient operations to ensure your business stays ahead of the curve.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Solutions",
    description:
      "We deliver innovative, high-value IT solutions with integrity, guiding businesses through transformative journeys for superior results.",
  },
  {
    icon: Users,
    number: "03",
    title: "Staff",
    description:
      "Our team comprises tech-savvy professionals dedicated to delivering innovative, tailored solutions that drive your business forward.",
  },
  {
    icon: Award,
    number: "04",
    title: "Quality",
    description:
      "By tracking the latest IT innovations, we craft tailored solutions to resolve your business challenges with confidence and proven expertise.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <CardHeader>
                  <div className="relative mb-4 h-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
                      <defs>
                        <linearGradient id={`fadeGradient${service.number}`} x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <text
                        x="0"
                        y="80"
                        fill={`url(#fadeGradient${service.number})`}
                        fontSize="80"
                        fontWeight="bold"
                        fontFamily="system-ui, -apple-system, sans-serif"
                      >
                        {service.number}
                      </text>
                    </svg>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
