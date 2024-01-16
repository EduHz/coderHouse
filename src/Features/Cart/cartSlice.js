import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "userLogged",
    updatedAt: Date.now().toLocaleString(),
    total: null,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        state.items.push(action.payload);
      }

      state.total = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.updatedAt = new Date().toLocaleString();
    },
    removeItem: (state, action) => {
      // Implement your removeItem logic here
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
