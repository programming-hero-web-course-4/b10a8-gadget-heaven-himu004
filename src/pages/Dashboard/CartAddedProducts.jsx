import React from "react";

const CartAddedProducts = ({ product, handleDeleteFromCart }) => {


  const { product_id, product_title, product_image, price, description } =
    product;

  return (
    <div className="flex space-x-3 bg-white p-5 rounded-xl m-5">
      <div>
        <img className="w-20" src={product_image} alt="" />
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <h2>{product_title}</h2>
          <p>{description}</p>
          <p>Price: {price}K</p>
        </div>
        <div>
          <button 
          onClick={() => handleDeleteFromCart(product_id)}
          className="btn btn-circle btn-outline btn-error btn-sm">
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
  );
};

export default CartAddedProducts;