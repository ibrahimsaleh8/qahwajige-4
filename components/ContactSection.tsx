"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-main-color/10 border border-main-color/30 rounded-full px-6 py-2 mb-4">
            <span className="text-main-color font-semibold">تواصل معنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            احجز موعدك الآن
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا وسنكون سعداء بتلبية
            احتياجاتكم
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="bg-card-background border border-white/5 rounded-3xl p-8 shadow-lg shadow-main-color/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              معلومات التواصل
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              {phone && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-main-color/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-main-color" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">اتصل بنا</h4>
                    <a
                      href={`tel:${phone}`}
                      className="text-white/60 dir-ltr text-left hover:text-main-color transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Email */}
              {email && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-main-color/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-main-color" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">راسلنا</h4>
                    <a
                      href={`mailto:${email}`}
                      className="text-white/60 dir-ltr text-left hover:text-main-color transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {/* Location */}
              {address && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-main-color/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-main-color" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">موقعنا</h4>
                    <p className="text-white/60">{address}</p>
                  </div>
                </div>
              )}

              {/* WhatsApp */}
              {whatsapp && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-main-color/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-main-color" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">واتس آب</h4>
                    <a
                      href={`https://wa.me/${
                        whatsapp.includes("+")
                          ? whatsapp.split("+").join("")
                          : whatsapp
                      }?text=`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 dir-ltr text-left hover:text-main-color transition-colors">
                      {whatsapp}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-main-color/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent-pink/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      </div>
    </section>
  );
}
