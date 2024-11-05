import React, { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductAssetContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishlistLength, setWishlistLength] = useState(0);
  const [cartAddedProducts, setCartAddedProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCartAddedProducts = [...cartAddedProducts, product];
    setCartAddedProducts(newCartAddedProducts);

    // console.log(newCartAddedProducts);

    toast.success(`${product.product_title} added to cart`, {
      position: "top-left",
    });
  };

  const handleWishlistList = () => {
    toast.success("Product added to wishlist", {
      position: "top-left",
    });
    setWishlistLength(wishlistLength + 1);
  };

  const handleDeleteFromCart = (product_id) => {
    const newCartAddedProducts = cartAddedProducts.filter(
      (pd) => pd.product_id !== product_id
    );
    setCartAddedProducts(newCartAddedProducts);
  };

  const allProducts = {
    products,
    setProducts,
    handleAddToCart,
    handleWishlistList,
    wishlistLength,
    cartAddedProducts,
    handleDeleteFromCart,
    setCartAddedProducts
  };
  return (
    <ProductAssetContext.Provider value={allProducts}>
      {children}
    </ProductAssetContext.Provider>
  );
};

export default ProductContext;
