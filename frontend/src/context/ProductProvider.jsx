import { createContext, useEffect, useState } from "react";

import {products as data} from "../data/products"

export const ProductContext = createContext()

const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [])

  return (
    <ProductContext.Provider 
      value={
        products
      }
      >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductProvider