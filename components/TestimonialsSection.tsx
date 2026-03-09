import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "محمد العمري",
    role: "مدير فعاليات",
    company: "شركة الرياض للفعاليات",
    rating: 5,
    text: "تجربة استثنائية من البداية للنهاية! قهوجيين الرياض أضافوا لمسة من الفخامة لحفل شركتنا. الخدمة كانت احترافية جداً والقهوة العربية بمذاق لا يُنسى. سنتعامل معهم دائماً في كل مناسباتنا.",
    event: "مؤتمر سنوي",
  },
  {
    id: 2,
    name: "سارة الشمري",
    role: "صاحبة حفل زفاف",
    company: "",
    rating: 5,
    text: "أفضل قرار اتخذته لحفل زفافي! الفريق كان رائعاً والضيافة أبهرت جميع ضيوفي. القهوة العربية والشاي كانا من أعلى مستوى وقدّموا الخدمة بأسلوب ملكي حقيقي.",
    event: "حفل زفاف",
  },
  {
    id: 3,
    name: "خالد الدوسري",
    role: "رئيس تنفيذي",
    company: "مجموعة الدوسري للأعمال",
    rating: 5,
    text: "تعاملنا مع قهوجيين الرياض في أكثر من ١٠ فعاليات مؤسسية وفي كل مرة يتجاوزون توقعاتنا. الالتزام بالمواعيد والجودة العالية ميزتهم عن غيرهم. نوصي بهم بكل ثقة.",
    event: "فعاليات مؤسسية",
  },
  {
    id: 4,
    name: "نورة القحطاني",
    role: "منظمة فعاليات",
    company: "نوف للفعاليات",
    rating: 5,
    text: "منذ أول تعامل معهم أصبحوا شريكنا الأول في كل مناسبة. الفريق محترف ومتميز وعنده حضور قوي يضيف بهجة حقيقية للحفل. عملاؤنا دائماً يسألون عنهم!",
    event: "حفلات خاصة",
  },
  {
    id: 5,
    name: "عبدالله الغامدي",
    role: "مدير مشتريات",
    company: "شركة سامي للتطوير",
    rating: 5,
    text: "وفّروا لنا تجربة ضيافة راقية في معرضنا السنوي. أبهروا زوارنا من مختلف الجنسيات وجسّدوا عراقة الضيافة السعودية بصورة عصرية مبهجة.",
    event: "معرض تجاري",
  },
  {
    id: 6,
    name: "ريم المطيري",
    role: "صاحبة حفل تخرج",
    company: "",
    rating: 5,
    text: "حفل تخرج بنتي كان أجمل مما تخيلت بفضل قهوجيين الرياض. كل شيء كان مثالياً من المظهر إلى الجودة والخدمة. شكراً لهذا الفريق المبدع!",
    event: "حفل تخرج",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-main-color fill-main-color"
              : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-main-color/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-pink/10 border border-accent-pink/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse" />
            <span className="text-accent-pink text-sm font-semibold tracking-wider">
              آراء عملائنا
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-[1.3]">
            <span className="text-white">ماذا يقول </span>
            <span className="text-gradient">عملاؤنا؟</span>
          </h2>

          <p className="text-low-color text-lg leading-relaxed">
            ثقة عملائنا هي أعظم جائزة نحصل عليها. إليك ما يقوله من اختبروا
            تجربة الضيافة الفاخرة مع قهوجيين الرياض.
          </p>
        </div>

        {/* Overall Rating Banner */}
        <div className="relative bg-linear-to-br from-card-background via-card-background/95 to-main-black border border-main-color/20 rounded-3xl p-8 mb-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(233, 30, 99, 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <div className="text-7xl font-bold text-gradient mb-2">5.0</div>
              <div className="flex gap-1 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-main-color fill-main-color" />
                ))}
              </div>
              <p className="text-low-color text-sm">متوسط التقييم</p>
            </div>

            <div className="hidden md:block h-20 w-px bg-main-color/20" />

            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "+1500", label: "مناسبة ناجحة" },
                { value: "5000+", label: "عميل سعيد" },
                { value: "99.5%", label: "رضا العملاء" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-main-color mb-1">
                    {stat.value}
                  </div>
                  <div className="text-low-color text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-main-black/80 border border-main-color/20 rounded-2xl p-6 hover:border-main-color/50 hover:shadow-lg hover:shadow-main-color/10 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-accent-pink/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-pink/20 transition-colors">
                <Quote className="w-5 h-5 text-accent-pink" />
              </div>

              {/* Review Text */}
              <p className="text-white/70 leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Event badge */}
              <div className="inline-flex w-fit items-center gap-1.5 bg-main-color/10 border border-main-color/20 rounded-full px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-main-color" />
                <span className="text-main-color text-xs font-medium">
                  {testimonial.event}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-main-color/10 mb-4 group-hover:bg-main-color/30 transition-colors" />

              {/* Author + Rating */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                
                </div>

                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-low-color text-lg mb-6">
            انضم إلى آلاف العملاء الراضين وجرّب فخامة الضيافة السعودية الحقيقية
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-accent-pink to-pink-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/50"
          >
            احجز تجربتك الآن
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
