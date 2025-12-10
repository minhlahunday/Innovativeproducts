// utils/normalize.ts
export function normalizeVietnamese(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // bỏ dấu
    .replace(/Đ/g, "D")
    .replace(/đ/g, "d");
}
