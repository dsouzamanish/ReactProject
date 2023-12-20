import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
    items: any[]
}
export const cartSlice = createSlice<cartState>({
    name: 'cart',
    initialState: {
        items : []
    },
    reducers: {
        addItem: (state: cartState, action: PayloadAction) => {
          state.items.push(action.payload)
        },
        removeItem: (state:cartState, action: PayloadAction) => {
            state.items.splice(state.items.findIndex((item) => item.id === action.payload.id), 1);
        },
        clearCart: (state:cartState)=> {
            return state.items.length = 0;   //we have to mutate the state. cannot assign [] like state.items = []
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;