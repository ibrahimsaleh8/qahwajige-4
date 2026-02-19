"use client";

import { useState, useEffect } from "react";
import { Star, Sparkles } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) {
          setSubmitted(value);
        }
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {
          // localStorage not available
        }
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="relative inline-block">
          {interactive ? (
            <button
              type="button"
              disabled={isLoading || !mounted}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 rounded-lg transition-all duration-200 hover:scale-125 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none"
              aria-label={`تقييم ${star} من 5`}
              style={
                star <= value
                  ? { filter: "drop-shadow(0 0 8px rgba(233,30,99,0.6))" }
                  : {}
              }>
              <Star
                className={`w-10 h-10 md:w-12 md:h-12 transition-all duration-200 ${
                  star <= value
                    ? "fill-[#e91e63] text-[#e91e63]"
                    : "fill-transparent text-[#333]"
                }`}
                style={star > value ? { stroke: "rgba(233,30,99,0.25)" } : {}}
              />
            </button>
          ) : (
            <Star
              className={`w-10 h-10 md:w-12 md:h-12 ${
                star <= value
                  ? "fill-[#e91e63] text-[#e91e63]"
                  : "fill-transparent text-[#333]"
              }`}
              style={star > value ? { stroke: "rgba(233,30,99,0.25)" } : {}}
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="rating"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--main-background, #0a0a0a)" }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e91e63 1px, transparent 1px), linear-gradient(90deg, #e91e63 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(233,30,99,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #e91e63, transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        {/* Section label */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-12 rounded-full"
              style={{ background: "rgba(233,30,99,0.4)" }}
            />
            <Sparkles className="w-4 h-4" style={{ color: "#e91e63" }} />
            <div
              className="h-px w-12 rounded-full"
              style={{ background: "rgba(233,30,99,0.4)" }}
            />
          </div>
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4"
            style={{
              color: "#e91e63",
              borderColor: "rgba(233,30,99,0.3)",
              background: "rgba(233,30,99,0.08)",
            }}>
            آراء العملاء
          </span>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden relative"
          style={{
            background: "var(--card-background, #1a1a1a)",
            border: "1px solid rgba(233,30,99,0.2)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}>
          {/* Pink top accent bar */}
          <div
            className="h-0.5 w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #e91e63, transparent)",
            }}
          />

          <div className="p-8 md:p-12 text-center" dir="rtl">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight"
              style={{ color: "#ffffff" }}>
              قيّم <span style={{ color: "#e91e63" }}>تجربتك</span> معنا
            </h2>
            <p
              className="text-base md:text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "#979797" }}>
              رأيك يهمنا! ساعدنا في التحسين من خلال تقييم تجربتك
            </p>

            {/* Stats row */}
            {(averageRating > 0 || totalRatings > 0) && (
              <div
                className="inline-flex flex-wrap justify-center gap-6 md:gap-10 mb-8 px-6 py-3 rounded-xl"
                style={{
                  background: "rgba(233,30,99,0.06)",
                  border: "1px solid rgba(233,30,99,0.12)",
                }}>
                {averageRating > 0 && (
                  <div className="flex items-center gap-2">
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "#ffffff" }}>
                      {averageRating.toFixed(1)}
                    </span>
                    <span style={{ color: "#979797" }}>/ 5</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4"
                          style={
                            star <= Math.round(averageRating)
                              ? { fill: "#e91e63", color: "#e91e63" }
                              : {
                                  fill: "transparent",
                                  color: "rgba(233,30,99,0.2)",
                                }
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}
                {totalRatings > 0 && (
                  <div
                    className="text-sm md:text-base"
                    style={{ color: "#979797" }}>
                    <span
                      className="font-semibold"
                      style={{ color: "#e91e63" }}>
                      {totalRatings}
                    </span>{" "}
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </div>
                )}
              </div>
            )}

            {/* Stars & feedback */}
            {submitted !== null && mounted ? (
              <motion.div
                className="py-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}>
                {renderStars(submitted, false)}
                <p
                  className="font-bold mt-5 text-lg"
                  style={{ color: "#e91e63" }}>
                  شكراً لتقييمك! 🎉
                </p>
                <p className="text-sm mt-1" style={{ color: "#979797" }}>
                  نسعد بتقييمك وسنعمل على تحسين تجربتك
                </p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                {renderStars(displayRating || 0, true)}
                <p
                  className="text-sm"
                  style={{ color: "rgba(151,151,151,0.6)" }}>
                  {mounted && !isLoading
                    ? "انقر على النجم المناسب للتقييم"
                    : ""}
                  {isLoading && (
                    <span style={{ color: "#e91e63" }}>جاري الإرسال...</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
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
