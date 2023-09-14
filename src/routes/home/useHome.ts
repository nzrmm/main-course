import { useAppDispatch, useAppSelector } from "@/stores/hooks";

import {
  addToCart,
  orderFood,
  getListFood,
  onIncrement,
  onDecrement,
  setNoteInItem,
  getVoucher,
} from "@/stores/food/foodSlice";

import { IFoodType } from "@/types/food";

const useHome = () => {
  const dispatch = useAppDispatch();
  const { foods, cart, order } = useAppSelector((state) => state.food);

  const handleGetListFood = () => {
    dispatch(getListFood());
  };

  const handleAddToCart = (value: IFoodType) => {
    dispatch(addToCart(value));
  };

  const handleSetNoteInItem = (id: string, value: string) => {
    dispatch(setNoteInItem({ id, value }));
  };

  const handleOnIncrement = (id: string) => {
    dispatch(onIncrement({ id }));
  };

  const handleOnDecrement = (id: string) => {
    dispatch(onDecrement({ id }));
  };

  const handleOrderFood = () => {
    const payload = {
      nominal_diskon: cart.totalVoucher,
      nominal_pesanan: cart.totalOrder,
      items: cart.items.map((item) => {
        return {
          id: item.id,
          harga: item.harga,
          catatan: item.note || "-",
        };
      }),
    };

    dispatch(orderFood(payload));
  };

  const handleGetVoucher = (code: string) => {
    dispatch(getVoucher(code));
  };

  return {
    data: {
      cart,
      foods,
      order,
    },
    method: {
      handleAddToCart,
      handleOrderFood,
      handleGetVoucher,
      handleGetListFood,
      handleOnDecrement,
      handleOnIncrement,
      handleSetNoteInItem,
    },
  };
};

export default useHome;
