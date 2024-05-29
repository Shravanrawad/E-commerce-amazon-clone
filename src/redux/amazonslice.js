import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      products:[],
      userinfo: null,
}

export const amazonslice = createSlice({
       name:'amazon',
       initialState,
       reducers: {
          addtocart: (state,action) => {
               const item = state.products.find((item) => item.id === action.payload.id)
               if(item){
                 item.quantity += action.payload.quantity;
               }
               else {
                state.products.push(action.payload)
               }
          },
          increment:(state,action) => {
               const item = state.products.find((item) => item.id === action.payload)
               item.quantity++
          },

          decrement:(state, action) => {
               const item = state.products.find((item) => item.id === action.payload)
               if(item.quantity === 1){
                item.quantity = 1
               }
               else {
                item.quantity--
               }
          },

          deleteitem:(state,action) => {
               state.products = state.products.filter((item) =>item.id !== action.payload)
          },
          
          resetcart:(state) => {
              state.products = [];
          }
            ,
          setuserinfo:(state,action) => {
              state.userinfo = action.payload
          },

          usersignout: (state) => {
               state.userinfo = null
          }

       }
})

export const {addtocart, usersignout, setuserinfo, deleteitem, resetcart, increment, decrement} = amazonslice.actions
export default amazonslice.reducer