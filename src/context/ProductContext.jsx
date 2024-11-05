import React, { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductAssetContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishlistLength, setWishlistLength] = useState(0);
  const [cartAddedProducts, setCartAddedProducts] = useState([]);
  const [wishlistAddedProduct, setWishlistAddedProduct] = useState([]);

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

  const handleWishlistList = (product) => {
    const existingProduct = wishlistAddedProduct.find((item) => item.product_id === product.product_id);
    if (!existingProduct) {
      const newWishlistAddedProduct = [...wishlistAddedProduct, product];
      setWishlistAddedProduct(newWishlistAddedProduct);
      setWishlistLength(newWishlistAddedProduct.length);
      toast.success(`${product.product_title} added to wishlist`, {
        position: "top-left",
      });
    } else {
      toast.error(`${product.product_title} is already in your wishlist`, {
        position: "top-left",
      });
    }
  };

  const handleDeleteFromCart = (product_id) => {
    const newCartAddedProducts = cartAddedProducts.filter(
      (pd) => pd.product_id !== product_id
    );
    setCartAddedProducts(newCartAddedProducts);
  };

  const handleDeleteFromWishList = (product_id) => {
    const newWishlistAddedProduct = wishlistAddedProduct.filter(
      (pd) => pd.product_id !== product_id
    );
    setWishlistAddedProduct(newWishlistAddedProduct);
    setWishlistLength(newWishlistAddedProduct.length);
  }

  const allProducts = {
    products,
    setProducts,
    handleAddToCart,
    handleWishlistList,
    wishlistLength,
    cartAddedProducts,
    handleDeleteFromCart,
    setCartAddedProducts,
    wishlistAddedProduct,
    handleDeleteFromWishList
  };
  return (
    <ProductAssetContext.Provider value={allProducts}>
      {children}
    </ProductAssetContext.Provider>
  );
};

export default ProductContext;
