import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Gamepad2, HelpCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-history.jpg";

const features = [
  // {
  //   icon: HelpCircle,
  //   title: "Kho Câu Hỏi",
  //   description: "Lưu trữ và quản lý các câu hỏi ôn tập theo từng chủ đề lịch sử.",
  //   link: "/questions",
  //   color: "bg-primary/10 text-primary",
  // },
  {
    icon: Gamepad2,
    title: "Trò Chơi Ôn Tập",
    description: "Học qua trò chơi quiz thú vị, ghi nhớ kiến thức nhanh chóng.",
    link: "/hangman",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: BookOpen,
    title: "Flipbook",
    description: "Xem đáp án bằng cách lật thẻ, phương pháp học hiệu quả.",
    link: "/flipbook",
    color: "bg-sage text-olive-dark",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-16">
        <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Xây dựng chủ nghĩa xã hội Việt Nam 1975-1981"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary mb-6"
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Ôn tập Lịch Sử Việt Nam</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="whitespace-nowrap inline-block mb-2">Xây dựng Chủ nghĩa Xã hội</span>
              <br />
              <span className="text-gradient">& Bảo vệ Tổ quốc</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Giai đoạn 1975 - 1981: Thống nhất đất nước, khắc phục hậu quả chiến tranh
              và những bước đầu xây dựng chủ nghĩa xã hội trên cả nước.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/flipbook">
                <Button variant="hero" size="xl">
                  Bắt đầu xem Flipbook
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/hangman">
                <Button variant="heroOutline" size="xl">
                  Chơi trò chơi
                  <Gamepad2 className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Phương pháp học hiệu quả
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kết hợp nhiều phương pháp học tập giúp ghi nhớ kiến thức lâu dài
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to={feature.link}>
                  <Card variant="interactive" className="h-full">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center text-primary font-medium text-sm">
                        Khám phá ngay
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Các sự kiện quan trọng
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { year: "1975", event: "Giải phóng miền Nam, thống nhất đất nước" },
              { year: "1976", event: "Tổng tuyển cử bầu Quốc hội chung, đổi tên nước thành CHXHCN Việt Nam" },
              { year: "1976-1980", event: "Thực hiện Kế hoạch 5 năm lần thứ nhất" },
              { year: "1977", event: "Việt Nam gia nhập Liên Hợp Quốc" },
              { year: "1977-1979", event: "Chiến tranh bảo vệ biên giới Tây Nam" },
              { year: "1979", event: "Chiến tranh bảo vệ biên giới phía Bắc" },
              { year: "1980", event: "Thông qua Hiến pháp 1980" },
              { year: "1981", event: "Thành lập Hội đồng Bộ trưởng, bắt đầu khoán 100 trong nông nghiệp" },

            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl">
                  {item.year}
                </div>
                <Card variant="elevated" className="flex-1">
                  <CardContent className="p-4">
                    <p className="text-foreground">{item.event}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <Card variant="feature" className="overflow-hidden">
            <div className="hero-gradient p-8 sm:p-12 text-center text-primary-foreground">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Sẵn sàng ôn tập?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                Hãy bắt đầu hành trình khám phá lịch sử Việt Nam với phương pháp học tập thú vị và hiệu quả.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/hangman">
                  <Button variant="accent" size="xl">
                    Chơi trò chơi ngay
                    <Gamepad2 className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Ôn tập Lịch Sử Việt Nam - Giai đoạn 1975-1981</p>
        </div>
      </footer>
    </div>
  );
}
