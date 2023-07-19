import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const existingItem = state.products.find((item) => item.id === action.payload.id);
            if (!existingItem) {
                state.products.push(action.payload);

                toast.success(`Added ${action.payload.title}`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              } else {
                // If product is added then update product quantity
                existingItem.quantity += action.payload.quantity;
                
                toast.success(`Added More ${action.payload.title}`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              }

              state.total = (
                state.total * 1 +
                action.payload.minimum * action.payload.quantity
              );

        },
        removeProduct: (state, action) => {

            const existingItem = state.products.find((item) => item.id === action.payload.id); 

          const itemsToRemove =  state.products.filter((item) => item.id !== action.payload.id);
          state.products = itemsToRemove

          toast.error(`Removed ${action.payload.title}`, {
            position: toast.POSITION.TOP_RIGHT,
          });

          state.total = (
            state.total * 1 -
            existingItem.minimum * existingItem.quantity
          )

        },
        increaseCart: (state, action) => {
            const increaseItem =  state.products.find((item) => item.id === action.payload.id);

            if(increaseItem.quantity >= 1){
              
                increaseItem.quantity += 1

                state.total = (
                    state.total * 1 +
                    action.payload.minimum
                  )
            }
           
          },
          decreaseCart: (state, action) => {

           const increaseItem =  state.products.find((item) => item.id === action.payload.id);

            
            if(increaseItem.quantity > 1){
                increaseItem.quantity -= 1

                state.total = (
                    state.total * 1 -
                    action.payload.minimum
                  )
            }

           
          }

    } 
});

export const {addProduct, removeProduct, increaseCart, decreaseCart} = cartSlice.actions;
export default cartSlice.reducer;