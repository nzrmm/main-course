import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ICartItemType,
  IFoodRequestType,
  IFoodResponseType,
} from "@/types/food";

type IInitialStateType = {
  foods: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    errorMessage: string;
    data: IFoodResponseType[];
  };
  cart: {
    items: ICartItemType[];
    totalVoucher: number;
    totalOrder: number;
  };
  order: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
};

const initialState: IInitialStateType = {
  foods: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    data: [],
  },
  cart: {
    items: [],
    totalVoucher: 0,
    totalOrder: 0,
  },
  order: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
  },
};

export const getListFood = createAsyncThunk("food/getList", async () => {
  const response = await axios.get("https://tes-mobile.landa.id/api/menus");
  return response.data;
});

export const orderFood = createAsyncThunk(
  "food/orderFood",
  async (data: IFoodRequestType) => {
    const response = await axios.post(
      "https://tes-mobile.landa.id/api/order",
      data
    );

    return response;
  }
);

export const getVoucher = createAsyncThunk(
  "food/getVoucher",
  async (code: string) => {
    const response = await axios.get(
      `https://tes-mobile.landa.id/api/vouchers?kode=${code}`
    );
    return response.data;
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    // GET: List food
    builder.addCase(getListFood.pending, (state) => {
      state.foods.isLoading = true;
    });
    builder.addCase(getListFood.fulfilled, (state, { payload }) => {
      state.foods.isLoading = false;
      state.foods.isSuccess = true;
      state.foods.isError = false;
      state.foods.errorMessage = "";
      state.foods.data = payload?.datas || [];
    });
    builder.addCase(getListFood.rejected, (state, { error }) => {
      state.foods.isLoading = false;
      state.foods.isSuccess = false;
      state.foods.isError = true;
      state.foods.errorMessage = error.message || "";
      state.foods.data = [];
    });

    // POST: Order food
    builder.addCase(orderFood.pending, (state) => {
      state.order.isLoading = true;
    });
    builder.addCase(orderFood.fulfilled, (state) => {
      state.order.isLoading = false;
      state.order.isSuccess = true;
      state.order.isError = false;
      state.order.errorMessage = "";
    });
    builder.addCase(orderFood.rejected, (state, { error }) => {
      state.order.isLoading = false;
      state.order.isSuccess = false;
      state.order.isError = true;
      state.order.errorMessage = error.message || "";
    });

    // GET: Get Voucher
    builder.addCase(getVoucher.fulfilled, (state, { payload }) => {
      state.cart.totalVoucher = payload?.datas?.nominal || 0;

      if (state.cart.totalOrder > payload?.datas?.nominal) {
        state.cart.totalOrder -= payload?.datas?.nominal || 0;
      } else if (state.cart.totalOrder < payload?.datas?.nominal) {
        state.cart.totalOrder = 0;
      }
    });
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const data = {
        ...payload,
        note: "",
        totalItem: 1,
      };

      state.cart.items.push(data);
      state.cart.totalOrder = state.cart.items.reduce(
        (acc, curValue) => acc + curValue.harga * curValue.totalItem,
        0
      );
    },
    setNoteInItem: (state, { payload }) => {
      const itemIndex = state.cart.items.findIndex(
        (cartItem) => cartItem?.id === payload.id
      );

      state.cart.items[itemIndex].note = payload.value;
    },
    onIncrement: (state, { payload }) => {
      const itemIndex = state.cart.items.findIndex(
        (cartItem) => cartItem?.id === payload.id
      );

      state.cart.items[itemIndex].totalItem += 1;
      state.cart.totalOrder = state.cart.items.reduce(
        (acc, curValue) => acc + curValue.harga * curValue.totalItem,
        0
      );
    },
    onDecrement: (state, { payload }) => {
      const itemIndex = state.cart.items.findIndex(
        (cartItem) => cartItem?.id === payload.id
      );

      if (state.cart.items[itemIndex].totalItem > 1) {
        state.cart.items[itemIndex].totalItem -= 1;

        state.cart.totalOrder = state.cart.items.reduce(
          (acc, curValue) => acc + curValue.harga * curValue.totalItem,
          0
        );
      }
    },
  },
});

export default foodSlice.reducer;

export const { addToCart, setNoteInItem, onIncrement, onDecrement } =
  foodSlice.actions;
