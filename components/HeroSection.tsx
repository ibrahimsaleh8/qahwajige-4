import Image from "next/image";
import { HeroSectionData, WhyUsFeatureData } from "@/lib/responseType";
import { Award, Clock, Shield, Sparkles, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Sparkles,
};

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
  features,
}: HeroSectionData & {
  image?: string | null;
  features?: WhyUsFeatureData[];
}) {
  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent-pink/10 border border-accent-pink/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-accent-pink rounded-full animate-pulse" />
              <span className="text-accent-pink text-sm font-medium">
                ضيافة تليق بمقامك
              </span>
            </div>

            <h1 className="md:text-6xl text-4xl lg:text-7xl font-bold text-white leading-[1.6]">
              {headline}
            </h1>

            <h2 className="text-white/60 text-lg max-w-xl">{subheadline}</h2>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                target="_blank"
                href={`https://wa.me/${
                  whatsApp?.includes("+") ? whatsApp.replace("+", "") : whatsApp
                }`}
                className="md:px-8 md:py-4 text-sm md:text-base px-6 flex items-center py-3 bg-linear-to-r from-accent-pink to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition">
                ابدأ تجربتك الآن
              </a>

              <a
                href="#services"
                className="md:px-8 md:py-4 text-sm md:text-base px-6 flex items-center py-3 border-2 border-main-color/30 rounded-full text-white font-semibold hover:bg-main-color/10 transition">
                تعرف على خدماتنا
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-main-color/20 shadow-2xl aspect-3/2">
              {image && (
                <Image
                  src={image}
                  alt="Hero Image"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-center object-cover"
                />
              )}
            </div>
          </div>
        </div>

        {/* Features / Stats (dynamic like old component) */}
        {features && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={item.title}
                  className="group bg-card-background border border-main-color/10 rounded-2xl p-6 text-center hover:border-main-color/30 transition">
                  {Icon && (
                    <Icon className="w-6 h-6 text-main-color mx-auto mb-3" />
                  )}

                  <div className="text-xl font-bold text-main-color mb-1">
                    {item.title}
                  </div>

                  <div className="text-low-color text-sm">
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
