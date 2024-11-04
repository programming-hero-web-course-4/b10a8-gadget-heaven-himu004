import React, { Children, createContext, useEffect, useState } from 'react';

export const ProductAssetContext = createContext();

const ProductContext = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, []);

  const allProducts = {
    products,
    setProducts
  };
    return (
        <ProductAssetContext.Provider value={allProducts}>
            {children}
        </ProductAssetContext.Provider>
      
    );
};

export default ProductContext;