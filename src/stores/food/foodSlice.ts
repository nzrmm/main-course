import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  foods: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    data: [],
  },
};

export const getListFood = createAsyncThunk("food/getList", async () => {
  const response = await axios.get("https://tes-mobile.landa.id/api/menus");
  return response.data;
});

const foodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getListFood.pending, (state) => {
      state.foods.isLoading = true;
    }),
      builder.addCase(getListFood.fulfilled, (state, { payload }) => {
        state.foods.isLoading = false;
        state.foods.isSuccess = true;
        state.foods.isError = false;
        state.foods.errorMessage = "";
        state.foods.data = payload?.datas || [];
      }),
      builder.addCase(getListFood.rejected, (state, { error }) => {
        state.foods.isLoading = false;
        state.foods.isSuccess = false;
        state.foods.isError = true;
        state.foods.errorMessage = error.message || "";
        state.foods.data = [];
      });
  },
  reducers: {},
});

export default foodSlice.reducer;
