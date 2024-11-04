import React from 'react';

const ProductCard = ({product}) => {

    const {product_id, product_title, product_image, category, price, description, specification, availability, rating} = product

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
            <button className="border py-2 px-5 text-[#9538E2] border-[#9538E2] rounded-full">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;