import React, {createContext, useState, useContext} from 'react'

const StoreContext = createContext();
const useCartContext = () => useContext(StoreContext)

export const StoreProvider = ({children}) => {
    const[products, setProducts] = useState([])
    const addItem = (item, quantity) => {
        setProducts([...products,{'item' : item,'quantity' : quantity}]);
    }

    return (
        <StoreContext.Provider
        value = {{products, addItem}}>
            {console.log(products)}
            {children}

        </StoreContext.Provider>
    )
 }
 export default useCartContext;