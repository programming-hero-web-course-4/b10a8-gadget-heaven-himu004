import React, { useContext, useState } from "react";
import { ProductAssetContext } from "../../context/ProductContext";

const Wishlist = ({ product, handleDeleteFromCart }) => {
  const allProducts = useContext(ProductAssetContext);
  const { wishlistAddedProduct, handleAddToCart, handleDeleteFromWishList } = allProducts;
  const [emptyWishlist, setEmptyWishlist] = useState(false);

  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div>
      <div className="flex md:flex-row flex-col space-x-3 bg-white p-5 rounded-xl m-5">
        <div className="mx-auto flex items-center">
          <img className="w-20" src={product_image} alt="" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="p-5 md:p-0 space-y-1">
            <h2 className="font-bold">{product_title}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="font-bold">Price: {price}K</p>
            <button 
            onClick={() => {
              handleAddToCart(product);
              handleDeleteFromWishList(product_id);
            }}
            className="bg-[#9538E2] text-white px-3 py-1 rounded">Add to cart</button>
          </div>
          <div>
            <button
              onClick={() => handleDeleteFromWishList(product_id)}
              className="btn btn-circle btn-outline btn-error btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Wishlist;
