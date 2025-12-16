import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

export default function Flipbook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4"
            >
              <Book className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Flipbook Xây dựng Chủ nghĩa Xã hội và Bảo vệ Tổ quốc
            </h1>
            {/* <p className="text-lg text-muted-foreground">
              Khám phá lịch sử Việt Nam qua các trang sách tương tác
            </p> */}
          </div>


          <iframe
            title="Flipbook hướng dẫn"
            src="https://publuu.com/flip-book/1029074/2283147/page/1?embed&transparent"
            width="100%"
            className="publuuflip h-[80vh]"
            scrolling="no"
            frameBorder="0"
            allow="clipboard-write; autoplay; fullscreen"
            allowFullScreen
          ></iframe>

        </motion.div>
      </main>
    </div>
  );
}
