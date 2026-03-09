import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "الرئيسية", href: "/#home" },
      { name: "عن الشركة", href: "/#about" },
      { href: "/articles", name: "خدمات الضيافة" },
      { name: "خدماتنا", href: "/#services" },
      { name: "اتصل بنا", href: "/#contact" },
    ],
  };

  return (
    <footer className="bg-main-black border-t border-white/5 relative z-10 overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-6 text-xl font-bold text-white hover:text-main-color transition-colors">
              {brandName}
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">{description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-main-color transition-colors inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-white/80">
              {address && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>{address}</span>
                </li>
              )}
              {email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-main-color transition-colors">
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-main-color transition-colors">
                    {phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6">
          <p className="text-white/60 text-sm text-center md:text-center">
            © {currentYear} {brandName}. جميع الحقوق محفوظة
          </p>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-main-color/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
