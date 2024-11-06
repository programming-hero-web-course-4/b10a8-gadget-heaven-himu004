import React, { useContext, useEffect, useState } from "react";
import { ProductAssetContext } from "../../context/ProductContext";
import CartAddedProducts from "./CartAddedProducts";
import sort from "../../assets/sort.png";
import purchase from "../../assets/purchase.png";
import Wishlist from "./Wishlist";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartActive, setIsCartActive] = useState(true);
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const navigate = useNavigate();

  const handleCart = () => {
    setIsCartActive(true);
    setIsWishlistActive(false);
  };

  const handleWishlist = () => {
    setIsWishlistActive(true);
    setIsCartActive(false);
  };

  const allProducts = useContext(ProductAssetContext);
  const {
    cartAddedProducts,
    handleDeleteFromCart,
    setCartAddedProducts,
    wishlistAddedProduct,
    setWishlistAddedProduct,
  } = allProducts;

  const handlePurchase = () => {
    setCartAddedProducts([]);
    setWishlistAddedProduct([]);
    navigate("/");
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...cartAddedProducts].sort(
      (a, b) => b.price - a.price
    );
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
      <Helmet>
        <title>Dashboard | Gadjet Heaven</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <div className="bg-[#9538E2] text-white text-center space-y-3 py-10">
        <p className="md:text-4xl text-xl font-bold">Dashboard</p>
        <p className="max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-5">
          <button
            onClick={handleCart}
            className={`border rounded-full py-2 px-10 mt-5 text-md is ${
              isCartActive
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handleWishlist}
            className={`border rounded-full py-2 px-10 mt-5 text-md is ${
              isWishlistActive
                ? "bg-white text-[#9538E2]"
                : "bg-[#9538E2] text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="px-10 flex md:flex-row flex-col justify-between py-7">
        <p className="text-2xl font-bold text-center">
          {isCartActive ? "Cart" : "Wishlist"}
        </p>
        <div className="flex md:flex-row flex-col items-center gap-3">
          <p className={`font-bold ${isCartActive ? "" : "hidden"}`}>
            Total Cost: {totalPrice}
          </p>
          <button
            onClick={handleSortByPrice}
            className={`flex items-center gap-1 border border-[#9538E2] rounded-full text-[#9538E2] py-1 px-5 text-md bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent ${
              isCartActive ? "" : "hidden"
            }`}
          >
            Sort By Price
            <img className="w-5" src={sort} alt="" />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className={`rounded-full text-white py-1 px-8 text-lg bg-gradient-to-r from-[#9538E2] to-blue-500 hover:from-pink-500 hover:to-orange-500  ${
              totalPrice > 0 ? "" : "btn-disabled opacity-50"
            } ${isCartActive ? "" : "hidden"}`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        {isCartActive ? (
          cartAddedProducts.length > 0 ? (
            cartAddedProducts.map((product, idx) => (
              <CartAddedProducts
                key={idx}
                product={product}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            ))
          ) : (
            <p className="text-center text-2xl text-[#9538E2] py-5 font-bold">
              Your cart is empty
            </p>
          )
        ) : isWishlistActive ? (
          wishlistAddedProduct.length > 0 ? (
            wishlistAddedProduct.map((product, idx) => (
              <Wishlist key={idx} product={product} />
            ))
          ) : (
            <p className="text-center text-2xl text-[#9538E2] py-5 font-bold">
              Your wishlist is empty
            </p>
          )
        ) : (
          ""
        )}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <img src={purchase} alt="" />
          <p className="py-4 text-xl font-bold">Payment Successfully</p>
          <div className="divider px-10"></div>
          <p className="text-gray-500 font-bold">Thanks for your purchasing</p>
          <p className="text-lg font-bold ">Total Cost: ${totalPrice}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handlePurchase} className="btn px-24 text-lg">
                Buy More
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
