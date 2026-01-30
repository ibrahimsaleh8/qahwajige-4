import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent-pink to-transparent"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 transform translate-y-0 opacity-100`}>
          <div className="inline-flex items-center gap-2 bg-main-color/10 border border-main-color/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-main-color rounded-full animate-pulse"></div>
            <span className="text-main-color text-sm font-semibold tracking-wider">
              معرض الأعمال
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-[1.4]">
            <span className="text-white">إبداعاتنا في </span>
            <span className="text-gradient">عالم الضيافة</span>
          </h2>

          <p className="text-low-color text-lg">
            استكشف مجموعة من أعمالنا المميزة وتجاربنا الفاخرة
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`relative bg-white/60 overflow-hidden rounded-2xl cursor-pointer group shadow-soft hover:shadow-luxury transition-all duration-300`}>
              <div className={`aspect-square `}>
                <Image
                  src={image.url}
                  alt={image.alt ?? `صورة-${index + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[hsl(var(--coffee-dark)/0)] group-hover:bg-[hsl(var(--coffee-dark)/0.4)] transition-colors duration-300 flex items-center justify-center rounded-2xl">
                <span className="text-[hsl(var(--cream))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-center px-2">
                  {image.alt ?? `صورة-${index + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
