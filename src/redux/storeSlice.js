import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITEMS_ENDPOINT, SERVER_URL } from "../constants";

const initialState = {
  items: [],
  cart: [],
};

export const fetchStoreItems = createAsyncThunk(
  "store/fetchStoreItems",
  async (_, thunkAPI) => {
    const response = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
    const data = await response.json();
    return data;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemId = action.payload;
      const storeItem = state.items.find((element) => element.id === itemId);
      if (storeItem.quantity === 0) return;

      storeItem.quantity--;

      let cartItem = state.cart.find((element) => element.id === itemId);

      if (!cartItem) {
        cartItem = { ...storeItem, quantity: 0 };
        state.cart = [...state.cart, cartItem];
      }

      cartItem.quantity++;
    },
    checkout: (state, action) => {
      state.cart = [];
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload.itemID;
      const storeItem = state.items.find((element) => element.id === itemId);
      if (!storeItem) return;
      storeItem.quantity++;

      let cartItem = state.cart.find((element) => element.id === itemId);
      if (!cartItem) {
        return;
      }
      cartItem.quantity--;
      if (cartItem.quantity <= 0 || action.payload.forceDelete) {
        state.cart.splice(state.cart.indexOf(itemId), 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addItemToCart, checkout, removeItemFromCart } =
  storeSlice.actions;

export default storeSlice.reducer;
