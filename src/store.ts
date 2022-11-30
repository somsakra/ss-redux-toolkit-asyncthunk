import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter-slice";
import dogReducer from "./features/dogs/dogs-api-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dog: dogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
