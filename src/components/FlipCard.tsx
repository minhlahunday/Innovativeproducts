import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full h-64 cursor-pointer perspective-1000",
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.25 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl bg-card border-2 border-primary/20 shadow-lg p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-3 right-3 text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
            Nhấn để xem đáp án
          </div>
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl bg-primary text-primary-foreground shadow-lg p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-3 right-3 text-xs text-primary-foreground/70 px-2 py-1 bg-primary-foreground/10 rounded-full">
            Nhấn để ẩn
          </div>
          {back}
        </div>
      </motion.div>
    </div>
  );
}
