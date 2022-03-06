// import { createSlice } from "@reduxjs/toolkit";
// import data from "../../data";

// const initialState = {
//   data: data.products
// };

// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.data[action.payload - 1].addToCart = true;
//       // state.data.filter(item=>item._id===action.payload).addToCart=true
//     }
//   }
// });

// // Action creators are generated for each case reducer function
// export const { addToCart } = productSlice.actions;

// export default productSlice.reducer;
