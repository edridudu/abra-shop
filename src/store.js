import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./redux/storeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedStoreReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    store: persistedStoreReducer,
  },
});

export const persistor = persistStore(store)
