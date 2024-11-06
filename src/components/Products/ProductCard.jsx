import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

    const {product_id, product_title, product_image,  price } = product

    return (
        <div className="card bg-white shadow-xl h-[390px]">
        <figure className="px-5 pt-5">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl object-cover h-40"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className='text-gray-500'>Price: {price}K</p>
          <div className="card-actions">
            <Link to={`/product/${product_id}`} >
            <button className="border-2 py-2 px-5 text-[#9538E2] border-[#9538E2] rounded-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};


export default ProductCard;