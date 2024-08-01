import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState = [
      [
        {
          id : nanoid(),
          name: "product-1",
          price : 100,
          quantity: 0
        },
        {
          id : nanoid(),
          name: "product-2",
          price : 200,
          quantity: 0
        },
        {
          id : nanoid(),  
          name: "product-3",
          price : 300,
          quantity: 0
        }
    
      ],
      [

      ],
]

export const cartSlice  = createSlice({

    name: "cart",
    initialState,
    reducers:{
            increaseQuantity: (state , action)=>{
                    state[0].map((elem)=>{
                        if(elem.id === action.payload)
                        {
                            elem.quantity +=1;
                            if(elem.quantity===1 && !state[1].find((a)=>a.id===elem.id))
                            {
                              state[1].push({id: elem.id , name: elem.name , quantity: elem.quantity , price: elem.price})
                            }
                            else
                            {
                              let ind = state[1].find((a)=>a.id === elem.id)
                              ind.quantity = elem.quantity;
                            }

                        }

                    })
            },
            decreaseQuantity: (state , action)=>{
                state[0].map((elem)=>{
                    if(elem.id === action.payload)
                    {
                        (elem.quantity>0)? elem.quantity -=1 : 0;
                        if(elem.quantity > 0)
                        {
                          let ind = state[1].find((a)=>a.id === elem.id)
                          ind.quantity = elem.quantity;
                        }
                        else{
                          state[1] =   state[1].filter((elem)=>elem.id!==action.payload)
                        }
                        
                    }
                   
                })

        },
        
    }
})
export const {increaseQuantity , decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;