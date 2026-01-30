import { AboutSectionData } from "@/lib/responseType";
import { ChevronLeft } from "lucide-react";

export default function AboutSection({
  description1,
  label,
  title,
  whatsApp,
  brandName,
}: AboutSectionData & { whatsApp?: string | undefined; brandName?: string }) {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-main-color to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right side - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 transform translate-x-0 opacity-100`}>
            <div className="inline-flex items-center gap-2 bg-accent-pink/10 border border-main-color/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-main-color rounded-full animate-pulse"></div>
              <span className="text-accent-pink text-sm font-semibold tracking-wider">
                {label}
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              {title}
            </h2>

            <div className="space-y-4">
              <p className="text-low-color text-lg leading-relaxed">
                {description1}
              </p>
            </div>
            {whatsApp && (
              <a
                target="_blank"
                href={`https://wa.me/${
                  whatsApp.includes("+") ? whatsApp.replace("+", "") : whatsApp
                }`}
                className="w-fit group mt-8 px-8 py-4 bg-linear-to-r from-main-color to-amber-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-main-color/50 flex items-center gap-2">
                احجز معنا <ChevronLeft className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Left side - Visual elements */}
          <div
            className={`relative transition-all duration-1000 delay-300 transform translate-x-0 opacity-100`}>
            <div className="relative">
              {/* Main decorative card */}
              <div className="relative bg-linear-to-br from-card-background via-card-background to-main-black border border-main-color/20 rounded-3xl p-8 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
                      backgroundSize: "40px 40px",
                    }}></div>
                </div>

                <div className="relative z-10 space-y-8">
                  {/* Quote section */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-main-color/10 rounded-full flex items-center justify-center mx-auto">
                      <svg
                        className="w-8 h-8 text-main-color"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-2xl text-white font-serif italic leading-relaxed">
                      الضيافة ليست مجرد خدمة،
                      <br />
                      بل هي فن نتقنه بشغف
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-px w-12 bg-linear-to-r from-transparent to-main-color"></div>
                      <span className="text-main-color text-sm font-semibold">
                        {brandName}
                      </span>
                      <div className="h-px w-12 bg-linear-to-l from-transparent to-main-color"></div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-main-color/10">
                    {[
                      { value: "10+", label: "سنين خبرة" },
                      { value: "50+", label: "خبير ضيافة" },
                      { value: "5000+", label: "عميل سعيد" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center group cursor-default">
                        <div className="text-3xl font-bold text-main-color mb-1 group-hover:scale-110 transition-transform">
                          {stat.value}
                        </div>
                        <div className="text-low-color text-xs">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-main-color/10 rounded-full blur-xl animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-pink/10 rounded-full blur-xl animate-pulse"
                  style={{ animationDelay: "1s" }}></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 border-t-4 border-r-4 border-main-color/40 rounded-tr-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-4 border-l-4 border-accent-pink/40 rounded-bl-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
