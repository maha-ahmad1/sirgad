"use client"

export function Partners() {
  const partners = [
    { name: "Partner 1", color: "bg-[#00AEEF]" },
    { name: "Partner 2", color: "bg-[#FEB71B]" },
    { name: "Partner 3", color: "bg-[#7CB342]" },
    { name: "Partner 4", color: "bg-[#00897B]" },
    { name: "Partner 5", color: "bg-[#1E88E5]" },
    { name: "Partner 6", color: "bg-[#5E35B1]" },
  ]

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary mb-4 tracking-wider">BACKED BY LEADING PARTNERS</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          <span className="text-foreground">We proudly </span>
          <span className="bg-gradient-to-r from-[#00AEEF] to-[#FEB71B] bg-clip-text text-transparent">
            collaborate
          </span>
          <span className="text-foreground"> with</span>
          <br />
          <span className="text-foreground">local and </span>
          <span className="bg-gradient-to-r from-[#00AEEF] to-[#FEB71B] bg-clip-text text-transparent">global</span>
          <br />
          <span className="text-foreground">organizations to empower</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-[#00AEEF] text-white px-2">the next generation of</span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="bg-[#00AEEF] text-white px-2">innovators</span>
          </span>
        </h2>

        {/* Floating partner logos */}
        <div className="relative h-64 mt-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`absolute ${partner.color} rounded-full w-16 h-16 flex items-center justify-center text-white font-bold shadow-lg`}
              style={{
                top: `${Math.random() * 60 + 20}%`,
                left: `${Math.random() * 80 + 10}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}
