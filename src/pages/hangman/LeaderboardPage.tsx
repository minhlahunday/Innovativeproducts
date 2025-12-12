import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Leaderboard from "@/components/hangman/Leaderboard";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import * as XLSX from "xlsx";

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const { entries, clearAll } = useLeaderboard(); // dùng hàm clearAll mới

  const handleExportToExcel = () => {
    // Sắp xếp theo điểm số từ cao đến thấp
    const sortedEntries = [...entries].sort((a, b) => b.score - a.score);

    // Chuẩn bị dữ liệu cho Excel
    const excelData = sortedEntries.map((entry, index) => ({
      "Hạng": index + 1,
      "Tên": entry.name,
      "Điểm": entry.score,
      "Số câu đúng": entry.correctAnswers ?? 0,
      "Tổng số câu": entry.totalQuestions ?? 0,
      "Tỷ lệ đúng (%)": (entry.totalQuestions ?? 0) > 0 
        ? (((entry.correctAnswers ?? 0) / (entry.totalQuestions ?? 0)) * 100).toFixed(1) + "%"
        : "Chưa có dữ liệu",
      "Thời gian hoàn thành": entry.date
    }));

    // Tạo worksheet và workbook
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bảng Xếp Hạng");

    // Tự động điều chỉnh độ rộng cột
    const colWidths = [
      { wch: 6 },  // Hạng
      { wch: 20 }, // Tên
      { wch: 10 }, // Điểm
      { wch: 12 }, // Số câu đúng
      { wch: 12 }, // Tổng số câu
      { wch: 15 }, // Tỷ lệ đúng
      { wch: 20 }, // Thời gian
    ];
    ws['!cols'] = colWidths;

    // Xuất file
    const timestamp = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `Bang_Xep_Hang_${timestamp}.xlsx`);
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/hangman")}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Quay lại</span>
          </Button>

          <h1 className="font-fredokaVN text-2xl md:text-3xl font-bold text-primary">
            Bảng Xếp Hạng
          </h1>

          <Button
            variant="ghost"
            size="icon"
            onClick={clearAll}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            title="Xóa tất cả"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </header>

        {/* Leaderboard Card */}
        <div className="bg-card rounded-3xl shadow-xl p-6 md:p-8">
          <Leaderboard entries={entries} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleExportToExcel}
            disabled={entries.length === 0}
            className="gap-2"
          >
            <Download className="w-5 h-5" />
            Tải xuống Excel
          </Button>
          
          <Button
            variant="game"
            size="lg"
            onClick={() => navigate("/game")}
            className="flex-1 sm:flex-initial sm:min-w-[200px]"
          >
            Chơi ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
