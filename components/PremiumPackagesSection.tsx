"use client";
import { motion } from "motion/react";
import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--main-background, #0a0a0a)" }}>
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e91e63 1px, transparent 1px), linear-gradient(90deg, #e91e63 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233,30,99,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,115,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #e91e63, transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20 max-w-2xl mx-auto"
          dir="rtl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{
                color: "#e91e63",
                borderColor: "rgba(233,30,99,0.3)",
                background: "rgba(233,30,99,0.08)",
              }}>
              باقاتنا
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug"
            style={{ color: "#ffffff" }}>
            اختر الباقة <span style={{ color: "#e91e63" }}>المناسبة</span> لك
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              className="h-px w-16 rounded-full"
              style={{ background: "rgba(233,30,99,0.4)" }}
            />
            <Sparkles className="w-4 h-4" style={{ color: "#e91e63" }} />
            <div
              className="h-px w-16 rounded-full"
              style={{ background: "rgba(233,30,99,0.4)" }}
            />
          </div>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#979797" }}>
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto w-full">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              key={pkg.id}
              className="group relative flex flex-col h-full w-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "var(--card-background, #1a1a1a)",
                border: "1px solid rgba(233,30,99,0.15)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(233,30,99,0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(233,30,99,0.15), 0 2px 20px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(233,30,99,0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 20px rgba(0,0,0,0.4)";
              }}>
              {/* Image */}
              <div
                className="relative aspect-video overflow-hidden"
                style={{ background: "#111318" }}>
                {pkg.image ? (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #111318 0%, #1a1a1a 100%)",
                    }}>
                    <span
                      className="text-5xl font-extrabold"
                      style={{ color: "rgba(233,30,99,0.3)" }}>
                      {pkg.title?.charAt(0) ?? "?"}
                    </span>
                  </div>
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                  }}
                />

                {/* Package badge */}
                <div className="absolute top-3 right-3" dir="rtl">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    style={{
                      background: "#e91e63",
                      color: "#ffffff",
                    }}>
                    الباقة {index + 1}
                  </span>
                </div>

                {/* Bottom pink glow line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #e91e63, transparent)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-7" dir="rtl">
                <h3
                  className="text-xl md:text-2xl font-extrabold mb-3 text-right"
                  style={{ color: "#ffffff" }}>
                  {pkg.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-10 h-0.5 rounded-full mb-5"
                  style={{ background: "#e91e63" }}
                />

                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <div className="flex-1 mb-6">
                    <p
                      className="text-sm font-bold mb-3 text-right"
                      style={{ color: "#e91e63" }}>
                      المميزات :
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-right">
                          <span
                            className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(233,30,99,0.15)" }}>
                            <Check
                              className="w-3 h-3"
                              style={{ color: "#e91e63" }}
                              strokeWidth={3}
                            />
                          </span>
                          <span
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: "#979797" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1 mb-6" />
                )}

                {/* CTA Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                  style={{
                    background: "rgba(233,30,99,0.1)",
                    color: "#e91e63",
                    border: "1px solid rgba(233,30,99,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#e91e63";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    (e.currentTarget as HTMLElement).style.border =
                      "1px solid #e91e63";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 20px rgba(233,30,99,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(233,30,99,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#e91e63";
                    (e.currentTarget as HTMLElement).style.border =
                      "1px solid rgba(233,30,99,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}>
                  <MessageCircle className="w-5 h-5" />
                  اطلب الخدمة عبر واتساب
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #e91e63, transparent)",
        }}
      />
    </section>
  );
}
