import React, { useContext, useEffect, useState } from "react";
import { ProductAssetContext } from "../../context/ProductContext";
import CartAddedProducts from "./CartAddedProducts";

const Dashboard = () => {

    const [totalPrice, setTotalPrice] = useState(0);

    
    
  const allProducts = useContext(ProductAssetContext);
  const { cartAddedProducts, handleDeleteFromCart } = allProducts;


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
          <button className="border rounded-full text-white py-2 px-10 mt-5 text-md hover:bg-white hover:text-[#9538E2]">
            Cart
          </button>
          <button className="border rounded-full text-white py-2 px-10 mt-5 text-md hover:bg-white hover:text-[#9538E2]">
            Wishlist
          </button>
        </div>
      </div>

      <div className="px-5 flex justify-between py-7">
        <p className="text-2xl font-bold">Cart</p>
        <div className="flex items-center space-x-3">
          <p className="font-bold">Total Cost: {totalPrice}</p>
          <button
            className={`border border-[#9538E2] rounded-full text-[#9538E2] py-1 px-8 text-md hover:bg-[#9538E2] hover:text-white`}
          >
            Sort
          </button>
          <button
            className={`border border-[#9538E2] rounded-full text-[#9538E2] py-1 px-8 text-md hover:bg-[#9538E2] hover:text-white`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="container mx-auto">

        {cartAddedProducts.map((product) => (
          <CartAddedProducts key={product.product_id} product={product} handleDeleteFromCart={handleDeleteFromCart} />
        ))}

      </div>
    </div>
  );
};

export default Dashboard;
