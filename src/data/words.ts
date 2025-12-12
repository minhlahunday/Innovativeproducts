export interface WordData {
  word: string;
  hint: string;
  category: string;
}

export const words: WordData[] = [
  // Động vật
  { word: "TRƯỜNG CHINH", hint: "Trưởng đoàn đại biểu miền Bắc tại Hội nghị Hiệp thương chính trị 1975", category: "Lịch sử" },
  { word: "TỔNG TUYỂN CỬ", hint: "Sự kiện ngày 25/4/1976 với hơn 23 triệu cử tri tham gia", category: "Lịch sử" },
  { word: "KHOA HỌC KỸ THUẬT", hint: "Đại hội IV xác định cuộc cách mạng nào giữ vai trò then chốt?'", category: "Chính trị" },
  { word: "TRUNG QUỐC", hint: "Quốc gia nào đã huy động 60 vạn quân tấn công biên giới phía Bắc Việt Nam năm 1979?", category: "Lịch sử" },
  { word: "CÔNG NGHIỆP HÓA", hint: "Tại Đại hội IV, Đảng xác định nhiệm vụ trung tâm của cả thời kỳ quá độ là gì?", category: "Chính trị" },
  { word: "LIÊN XÔ", hint: "Ngoài Lào và Campuchia, Đại hội IV chủ trương đẩy mạnh hợp tác với nước lớn nào?", category: "Quốc tế" },
  { word: "TÂY NGUYÊN", hint: " Tổ chức FULRO vũ trang hoạt động chống phá ở khu vực nào của nước ta?", category: "Địa lý–Lịch sử" },
  { word: "ĐẢNG CỘNG SẢN VIỆT NAM", hint: "Tên mới của Đảng Lao động Việt Nam theo Đại hội IV (1976)", category: "Chính trị" },
  { word: "PHẠM HÙNG", hint: "Trưởng đoàn đại biểu miền Nam tại Hội nghị Hiệp thương chính trị 1975", category: "Lịch sử" },
  { word: "PHẠM VĂN ĐỒNG", hint: "Ai được Quốc hội bầu làm Thủ tướng Chính phủ của nước Việt Nam thống nhất (1976)?", category: "Lịch sử" },
  { word: "SÀI GÒN", hint: "Địa điểm tổ chức Hội nghị Hiệp thương chính trị 11/1975", category: "Địa lý" },
  { word: "BA", hint: "Số cuộc cách mạng cần tiến hành đồng thời theo Đại hội IV", category: "Chính trị" },
  { word: "NGUYỄN HỮU THỌ", hint: "Cùng với Nguyễn Lương Bằng, ai được bầu làm Phó Chủ tịch nước năm 1976?", category: "Lịch sử" },
  { word: "TIẾN QUÂN CA", hint: "Tên bài hát được chọn làm Quốc ca", category: "Văn hóa" },
  { word: "KÍN", hint: "Một trong các nguyên tắc bầu cử của Tổng tuyển cử năm 1976", category: "Chính trị" },
  { word: "FULRO", hint: "Lực lượng phản động vũ trang bị quân dân ta đánh bại ở Tây Nguyên", category: "Lịch sử" },
  { word: "DIỆT CHỦNG", hint: "Chính sách tàn bạo của tập đoàn Pôn Pốt ở Campuchia", category: "Lịch sử quốc tế" }
  // { word: "CÁ VOI", hint: "Động vật có vú lớn nhất", category: "Động vật" },
  // { word: "VOI", hint: "Động vật có vòi dài", category: "Động vật" },
  // { word: "HỔ", hint: "Vua của rừng xanh", category: "Động vật" },
  // { word: "SƯ TỬ", hint: "Chúa tể thảo nguyên", category: "Động vật" },
  
  // // Thức ăn
  // { word: "PHỞ", hint: "Món ăn truyền thống Việt Nam", category: "Ẩm thực" },
  // { word: "BÁNH MÌ", hint: "Thức ăn nhanh Việt Nam nổi tiếng", category: "Ẩm thực" },
  // { word: "BÚN CHẢ", hint: "Đặc sản Hà Nội", category: "Ẩm thực" },
  // { word: "GỎI CUỐN", hint: "Món cuốn tươi ngon", category: "Ẩm thực" },
  
  // // Địa danh
  // { word: "HÀ NỘI", hint: "Thủ đô Việt Nam", category: "Địa danh" },
  // { word: "SÀI GÒN", hint: "Thành phố lớn nhất phía Nam", category: "Địa danh" },
  // { word: "ĐÀ NẴNG", hint: "Thành phố đáng sống", category: "Địa danh" },
  // { word: "HỘI AN", hint: "Phố cổ nổi tiếng", category: "Địa danh" },
  // { word: "HẠ LONG", hint: "Vịnh di sản thế giới", category: "Địa danh" },
  
  // // Thiên nhiên
  // { word: "CẦU VỒNG", hint: "Hiện tượng sau mưa", category: "Thiên nhiên" },
  // { word: "MẶT TRỜI", hint: "Ngôi sao của hệ mặt trời", category: "Thiên nhiên" },
  // { word: "MẶT TRĂNG", hint: "Vệ tinh tự nhiên của Trái Đất", category: "Thiên nhiên" },
  // { word: "BIỂN", hint: "Nơi có nước mặn rộng lớn", category: "Thiên nhiên" },
  // { word: "NÚI", hint: "Địa hình cao nhô lên", category: "Thiên nhiên" },
  
  // // Đồ vật
  // { word: "ĐIỆN THOẠI", hint: "Thiết bị liên lạc cầm tay", category: "Công nghệ" },
  // { word: "MÁY TÍNH", hint: "Thiết bị xử lý thông tin", category: "Công nghệ" },
  // { word: "TIVI", hint: "Thiết bị giải trí trong nhà", category: "Công nghệ" },
  
  // // Nghề nghiệp
  // { word: "BÁC SĨ", hint: "Người chữa bệnh", category: "Nghề nghiệp" },
  // { word: "GIÁO VIÊN", hint: "Người dạy học", category: "Nghề nghiệp" },
  // { word: "KỸ SƯ", hint: "Người thiết kế và xây dựng", category: "Nghề nghiệp" },
  
  // // Thể thao
  // { word: "BÓNG ĐÁ", hint: "Môn thể thao vua", category: "Thể thao" },
  // { word: "CẦU LÔNG", hint: "Môn thể thao dùng vợt và cầu", category: "Thể thao" },
  // { word: "BƠI LỘI", hint: "Môn thể thao dưới nước", category: "Thể thao" },
];

export const getRandomWord = (): WordData => {
  return words[Math.floor(Math.random() * words.length)];
};
