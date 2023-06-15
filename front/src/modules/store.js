import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loading.js";
import btnReducer from "./btn.js";

const store = configureStore({
  reducer: {
    btn: btnReducer,
    loading: loadingReducer,
  },
});

export default store;
