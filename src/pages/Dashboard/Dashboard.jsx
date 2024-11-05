import React, { useContext, useEffect, useState } from "react";
import { ProductAssetContext } from "../../context/ProductContext";
import CartAddedProducts from "./CartAddedProducts";
import sort from "../../assets/sort.png";
import Wishlist from "./Wishlist";

const Dashboard = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleCart = () => {
      setIsActive(!isActive);
    };

    const handleWishlist = () => {
      setIsActive(!isActive);
    };

    
    
  const allProducts = useContext(ProductAssetContext);
  const { cartAddedProducts, handleDeleteFromCart, setCartAddedProducts, wishlistAddedProduct } = allProducts;

  const handleSortByPrice = () => {
    const sortedProducts = [...cartAddedProducts].sort((a, b) => b.price - a.price);
    setCartAddedProducts(sortedProducts);
  };


  useEffect(() => {
    let total = 0;
    for (const product of cartAddedProducts) {
      total = total + product.price;
    }
    setTotalPrice(total.toFixed(2));
  }, [cartAddedProducts]);

  

  return (
    <div>
      <div className="bg-[#9538E2] text-white text-center space-y-3 py-10">
        <p className="md:text-4xl text-xl font-bold">Dashboard</p>
        <p className="max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-5">
          <button 
          onClick={handleCart}
          className={`border rounded-full py-2 px-10 mt-5 text-md is ${isActive ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white"}`}>
            Cart
          </button>
          <button 
          onClick={handleWishlist}
          className={`border rounded-full py-2 px-10 mt-5 text-md is ${isActive ? "bg-[#9538E2] text-white" : "bg-white text-[#9538E2]" }`}>
            Wishlist
          </button>
        </div>
      </div>

      <div className="px-10 flex md:flex-row flex-col justify-between py-7">
        <p className="text-2xl font-bold text-center">
            {
                isActive ? "Cart" : "Wishlist"
            }
        </p>
        <div className="flex md:flex-row flex-col items-center gap-3">
          <p className={`font-bold ${isActive ? "" : "hidden"}`}>Total Cost: {totalPrice}</p>
          <button
          onClick={handleSortByPrice}
            className={`flex items-center gap-1 border border-[#9538E2] rounded-full text-[#9538E2] py-1 px-5 text-md bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent ${isActive ? "" : "hidden"}`}  
          >
            Sort By Price
            <img className="w-5" src={sort} alt="" />
          </button>
          <button
            className={`rounded-full text-white py-1 px-8 text-lg bg-gradient-to-r from-[#9538E2] to-blue-500 hover:from-pink-500 hover:to-orange-500 ${isActive ? "" : "hidden"}`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="container mx-auto">

        {
            isActive ? cartAddedProducts.map((product, idx) => (
                <CartAddedProducts key={idx} product={product} handleDeleteFromCart={handleDeleteFromCart} />
              )) : wishlistAddedProduct.map((product, idx) => (
                <Wishlist key={idx} product={product} />
              ))
        }

      </div>
    </div>
  );
};

export default Dashboard;
