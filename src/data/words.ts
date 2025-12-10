export interface WordData {
  word: string;
  hint: string;
  category: string;
}

export const words: WordData[] = [
  // Động vật
  { word: "VỊNH", hint: "Nơi biển lõm vào đất liền", category: "Địa lý" },
  { word: "BƯỚM", hint: "Côn trùng có cánh đẹp", category: "Động vật" },
  { word: "RỒNG", hint: "Sinh vật huyền thoại bay được", category: "Huyền thoại" },
  { word: "CÁ VOI", hint: "Động vật có vú lớn nhất", category: "Động vật" },
  { word: "VOI", hint: "Động vật có vòi dài", category: "Động vật" },
  { word: "HỔ", hint: "Vua của rừng xanh", category: "Động vật" },
  { word: "SƯ TỬ", hint: "Chúa tể thảo nguyên", category: "Động vật" },
  
  // Thức ăn
  { word: "PHỞ", hint: "Món ăn truyền thống Việt Nam", category: "Ẩm thực" },
  { word: "BÁNH MÌ", hint: "Thức ăn nhanh Việt Nam nổi tiếng", category: "Ẩm thực" },
  { word: "BÚN CHẢ", hint: "Đặc sản Hà Nội", category: "Ẩm thực" },
  { word: "GỎI CUỐN", hint: "Món cuốn tươi ngon", category: "Ẩm thực" },
  
  // Địa danh
  { word: "HÀ NỘI", hint: "Thủ đô Việt Nam", category: "Địa danh" },
  { word: "SÀI GÒN", hint: "Thành phố lớn nhất phía Nam", category: "Địa danh" },
  { word: "ĐÀ NẴNG", hint: "Thành phố đáng sống", category: "Địa danh" },
  { word: "HỘI AN", hint: "Phố cổ nổi tiếng", category: "Địa danh" },
  { word: "HẠ LONG", hint: "Vịnh di sản thế giới", category: "Địa danh" },
  
  // Thiên nhiên
  { word: "CẦU VỒNG", hint: "Hiện tượng sau mưa", category: "Thiên nhiên" },
  { word: "MẶT TRỜI", hint: "Ngôi sao của hệ mặt trời", category: "Thiên nhiên" },
  { word: "MẶT TRĂNG", hint: "Vệ tinh tự nhiên của Trái Đất", category: "Thiên nhiên" },
  { word: "BIỂN", hint: "Nơi có nước mặn rộng lớn", category: "Thiên nhiên" },
  { word: "NÚI", hint: "Địa hình cao nhô lên", category: "Thiên nhiên" },
  
  // Đồ vật
  { word: "ĐIỆN THOẠI", hint: "Thiết bị liên lạc cầm tay", category: "Công nghệ" },
  { word: "MÁY TÍNH", hint: "Thiết bị xử lý thông tin", category: "Công nghệ" },
  { word: "TIVI", hint: "Thiết bị giải trí trong nhà", category: "Công nghệ" },
  
  // Nghề nghiệp
  { word: "BÁC SĨ", hint: "Người chữa bệnh", category: "Nghề nghiệp" },
  { word: "GIÁO VIÊN", hint: "Người dạy học", category: "Nghề nghiệp" },
  { word: "KỸ SƯ", hint: "Người thiết kế và xây dựng", category: "Nghề nghiệp" },
  
  // Thể thao
  { word: "BÓNG ĐÁ", hint: "Môn thể thao vua", category: "Thể thao" },
  { word: "CẦU LÔNG", hint: "Môn thể thao dùng vợt và cầu", category: "Thể thao" },
  { word: "BƠI LỘI", hint: "Môn thể thao dưới nước", category: "Thể thao" },
];

export const getRandomWord = (): WordData => {
  return words[Math.floor(Math.random() * words.length)];
};
