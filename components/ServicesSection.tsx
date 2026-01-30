import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

// Optional Lucide icons map
const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
  phone,
  whatsApp,
}: ServicesSectionData & {
  whatsApp?: string;
  phone?: string;
}) {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-main-color/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform translate-y-0 opacity-100">
          <div className="inline-flex items-center gap-2 bg-accent-pink/10 border border-accent-pink/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse"></div>
            <span className="text-accent-pink text-sm font-semibold tracking-wider">
              {label || "خدماتنا المميزة"}
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-[1.3]">
            <span className="text-white">{title}</span>{" "}
            <span className="text-gradient">المميزة للضيافة</span>
          </h2>

          <p className="text-low-color text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items &&
            items.map((card) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap];

              return (
                <div
                  key={card.title}
                  className="group bg-main-black/80 border border-main-color/30 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 w-full">
                  <div className="size-16 bg-main-color/10 rounded-xl flex items-center justify-center text-main-color mb-8 group-hover:bg-main-color/80 group-hover:text-white transition-colors">
                    {IconComponent && <IconComponent className="w-8 h-8" />}
                  </div>

                  <p className="text-xl text-white font-bold mb-4">
                    {card.title}
                  </p>

                  <p className="text-white/60 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="h-1 w-12 bg-main-color rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-linear-to-br from-card-background via-card-background/95 to-main-black border border-main-color/20 rounded-3xl p-12 text-center overflow-hidden transition-all duration-1000 delay-500 transform translate-y-0 opacity-100">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.4) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-linear-to-br from-main-color to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg
                className="w-10 h-10 text-main-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-4xl font-bold text-white mb-4 leading-[1.3]">
              هل أنت مستعد لتجربة ضيافة
              <span className="text-gradient"> لا تُنسى؟</span>
            </h3>

            <p className="text-low-color text-lg mb-8">
              احجز الآن واستمتع بأفضل مصادر القهوة في المملكة وتلمس شغفك الأكثر
              تميزاً
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {whatsApp && (
                <a
                  target="_blank"
                  href={`https://wa.me/${whatsApp?.replace("+", "")}?text=`}
                  className="group px-8 py-4 bg-linear-to-r from-accent-pink to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/50 flex items-center gap-2">
                  <span>احجز الآن</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}

              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group px-8 py-4 border-2 border-main-color/30 rounded-full text-white font-semibold hover:border-main-color hover:bg-main-color/10 transition-all duration-300">
                  اتصل بنا
                </a>
              )}
            </div>
          </div>

          {/* Floating decorations */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-main-color/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 bg-accent-pink/10 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </section>
  );
}
