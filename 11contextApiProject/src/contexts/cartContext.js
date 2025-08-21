import {React,useContext,createContext} from 'react'

export const CartContext = createContext({
    items: null,
    addItems : () =>{},
    rmvItems: () =>{}
});

export const CartContextProvider = CartContext.Provider;

export default function useCartContext(){
    return useContext(CartContext);
}

