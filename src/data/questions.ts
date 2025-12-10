export interface Question {
  id: string;
  question: string;
  answer: string;
  options?: string[];
  category: string;
}

export const sampleQuestions: Question[] = [
  {
    id: "1",
    question: "Sau năm 1975, nhiệm vụ cách mạng của cả nước là gì?",
    answer: "Hoàn thành thống nhất đất nước về mặt nhà nước, khắc phục hậu quả chiến tranh và xây dựng chủ nghĩa xã hội.",
    options: [
      "Chỉ tập trung phát triển kinh tế",
      "Hoàn thành thống nhất đất nước về mặt nhà nước, khắc phục hậu quả chiến tranh và xây dựng chủ nghĩa xã hội",
      "Chỉ bảo vệ Tổ quốc",
      "Chỉ khắc phục hậu quả chiến tranh"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "2",
    question: "Hội nghị hiệp thương chính trị thống nhất đất nước diễn ra vào thời gian nào?",
    answer: "Ngày 15 đến 21/11/1975 tại Sài Gòn",
    options: [
      "Ngày 1/5/1975 tại Hà Nội",
      "Ngày 15 đến 21/11/1975 tại Sài Gòn",
      "Ngày 25/4/1976 tại Huế",
      "Ngày 2/7/1976 tại Hà Nội"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "3",
    question: "Cuộc Tổng tuyển cử bầu Quốc hội chung diễn ra vào ngày nào?",
    answer: "Ngày 25/4/1976",
    options: [
      "Ngày 30/4/1975",
      "Ngày 25/4/1976",
      "Ngày 2/7/1976",
      "Ngày 1/1/1976"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "4",
    question: "Quốc hội khóa VI quyết định đổi tên nước ta thành gì?",
    answer: "Cộng hòa Xã hội Chủ nghĩa Việt Nam",
    options: [
      "Việt Nam Dân chủ Cộng hòa",
      "Cộng hòa Xã hội Chủ nghĩa Việt Nam",
      "Việt Nam Cộng hòa",
      "Nhà nước Việt Nam thống nhất"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "5",
    question: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng diễn ra vào thời gian nào?",
    answer: "Tháng 12/1976",
    options: [
      "Tháng 4/1975",
      "Tháng 7/1976",
      "Tháng 12/1976",
      "Tháng 1/1977"
    ],
    category: "Xây dựng CNXH"
  },
  {
    id: "6",
    question: "Kế hoạch 5 năm lần thứ nhất (1976-1980) đặt ra mục tiêu gì?",
    answer: "Xây dựng bước đầu cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội, cải thiện một bước đời sống nhân dân.",
    options: [
      "Chỉ phát triển nông nghiệp",
      "Xây dựng bước đầu cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội, cải thiện một bước đời sống nhân dân",
      "Chỉ phát triển công nghiệp nặng",
      "Chỉ mở rộng quan hệ quốc tế"
    ],
    category: "Xây dựng CNXH"
  },
  {
    id: "7",
    question: "Chiến tranh biên giới Tây Nam xảy ra vào năm nào?",
    answer: "Năm 1977-1979, khi tập đoàn Pôn Pốt xâm lược biên giới Tây Nam",
    options: [
      "1975-1976",
      "1977-1979",
      "1980-1981",
      "1982-1983"
    ],
    category: "Bảo vệ Tổ quốc"
  },
  {
    id: "8",
    question: "Chiến tranh bảo vệ biên giới phía Bắc xảy ra vào năm nào?",
    answer: "Tháng 2/1979",
    options: [
      "Tháng 12/1978",
      "Tháng 2/1979",
      "Tháng 4/1979",
      "Tháng 6/1979"
    ],
    category: "Bảo vệ Tổ quốc"
  },
  {
    id: "9",
    question: "Thủ đô của nước Cộng hòa XHCN Việt Nam được đặt ở đâu?",
    answer: "Hà Nội",
    options: [
      "Sài Gòn",
      "Huế",
      "Hà Nội",
      "Đà Nẵng"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "10",
    question: "Thành phố Sài Gòn - Gia Định được đổi tên thành gì?",
    answer: "Thành phố Hồ Chí Minh",
    options: [
      "Thành phố Sài Gòn",
      "Thành phố Hồ Chí Minh",
      "Thành phố Gia Định",
      "Thành phố Thống Nhất"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "11",
    question: "Quốc kỳ của nước Cộng hòa XHCN Việt Nam là gì?",
    answer: "Cờ đỏ sao vàng",
    options: [
      "Cờ vàng ba sọc đỏ",
      "Cờ đỏ sao vàng",
      "Cờ xanh sao trắng",
      "Cờ đỏ búa liềm"
    ],
    category: "Thống nhất đất nước"
  },
  {
    id: "12",
    question: "Sau 1975, Việt Nam gặp khó khăn gì về kinh tế?",
    answer: "Nền kinh tế lạc hậu, hậu quả chiến tranh nặng nề, bị bao vây cấm vận",
    options: [
      "Kinh tế phát triển mạnh",
      "Nền kinh tế lạc hậu, hậu quả chiến tranh nặng nề, bị bao vây cấm vận",
      "Được hỗ trợ đầy đủ từ quốc tế",
      "Không có khó khăn gì"
    ],
    category: "Xây dựng CNXH"
  }
];
