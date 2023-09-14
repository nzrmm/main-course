export type IFoodResponseType = {
  id: number;
  nama: string;
  harga: number;
  tipe: string;
  gambar: string;
};

export type IFoodRequestType = {
  nominal_diskon: number;
  nominal_pesanan: number;
  items: {
    id: number;
    harga: number;
    catatan: string;
  }[];
};

export type ICartItemType = {
  id: number;
  nama: string;
  harga: number;
  tipe: string;
  gambar: string;
  note: string;
  totalItem: number;
};
