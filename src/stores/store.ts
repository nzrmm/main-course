import { configureStore } from "@reduxjs/toolkit";

import foodSlice from "@/stores/food/foodSlice";

export const store = configureStore({
  reducer: {
    food: foodSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
