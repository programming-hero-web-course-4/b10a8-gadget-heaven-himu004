import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { ProductAssetContext } from "../../context/ProductContext";

const ProductDetails = () => {
    
  const { productId } = useParams();
  //   console.log(productId);

  const data = useLoaderData();

  const product = data.find((product) => product.product_id === productId);

  //   console.log(product);

  const allProducts = useContext(ProductAssetContext);
  const { handleAddToCart, handleWishlistList } = allProducts;

  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const startRating = Array(Math.round(rating)).fill(<FaStar />);

  return (
    <div className="mb-28">
      <div className="bg-[#9538E2] h-56 text-center space-y-5 text-white">
        <p className="text-2xl md:text-5xl font-bold">Product Details</p>
        <p className="max-w-md text-center mx-auto pb-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-5xl mx-auto md:flex gap-8 justify-center items-center bg-white rounded-xl p-14 space-y-5 -mt-16">
        <div>
          <img className="" src={product_image} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{product_title}</h1>
          <p className="text-md font-bold">Price: {price}K</p>
          <button className="text-green-700 bg-green-300/35 border border-green-500 rounded-full px-5 text-sm">
            {availability ? "in Stock" : "out of Stock"}
          </button>
          <p className="text-gray-500">Category: {category}</p>
          <p className="text-gray-500">Description: {description}</p>
          <p className="font-bold text-sm ">Specification: </p>
          <ul className="list-decimal ml-5">
            {specification.map((item, index) => (
              <li key={index} className="text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 text-gray-500">
            Rating: <FaStar className="text-yellow-500" />
          </p>
          <p className="text-yellow-500 flex items-center gap-1">
            {startRating.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            <span className="text-xs font-thin text-black bg-gray-200 px-2 py-1 rounded-full">
              {rating}
            </span>
          </p>
          <div className="flex gap-5 pt-3">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex justify-center items-center gap-2 bg-[#9538E2] text-white px-5 py-2 rounded-full"
            >
              Add to Cart
              <BsCart2 className="md:text-xl font-extrabold " />
            </button>
            <button
              onClick={handleWishlistList}
              className="border rounded-full p-2"
            >
              <CiHeart className="md:text-2xl extrabold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
