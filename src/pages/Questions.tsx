import { Header } from "@/components/Header";
import { FlipCard } from "@/components/FlipCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sampleQuestions, Question } from "@/data/questions";
import { motion } from "framer-motion";
import { BookOpen, Filter, Plus, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const categories = ["Tất cả", "Thống nhất đất nước", "Xây dựng CNXH", "Bảo vệ Tổ quốc"];

export default function Questions() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = useMemo(() => {
    return sampleQuestions.filter((q) => {
      const matchesCategory = activeCategory === "Tất cả" || q.category === activeCategory;
      const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Flashcard ôn tập</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kho Câu Hỏi
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lật thẻ để xem đáp án. Phương pháp học hiệu quả giúp ghi nhớ lâu dài.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm câu hỏi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Filter className="w-4 h-4 text-muted-foreground" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card variant="elevated">
              <CardContent className="py-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Hiển thị <span className="font-semibold text-foreground">{filteredQuestions.length}</span> câu hỏi
                  </span>
                  <span className="text-muted-foreground">
                    Tổng: <span className="font-semibold text-foreground">{sampleQuestions.length}</span> câu
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Flashcards Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <FlipCard
                  front={
                    <div className="space-y-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {question.category}
                      </span>
                      <p className="text-foreground font-medium leading-relaxed">
                        {question.question}
                      </p>
                    </div>
                  }
                  back={
                    <div className="space-y-2">
                      <span className="text-primary-foreground/70 text-sm">Đáp án:</span>
                      <p className="text-primary-foreground font-medium leading-relaxed">
                        {question.answer}
                      </p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredQuestions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Không tìm thấy câu hỏi</h3>
              <p className="text-muted-foreground">Thử tìm kiếm với từ khóa khác</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
