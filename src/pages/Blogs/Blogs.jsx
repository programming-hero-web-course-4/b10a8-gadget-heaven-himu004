import React from "react";
import { Helmet } from "react-helmet-async";
import blogData from '../../../public/blogs.json';

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs | Gadjet Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white text-center space-y-3 py-10">
        <p className="md:text-4xl text-xl font-bold">Blogs</p>
        <p className="max-w-3xl mx-auto">
        Blogs about gadget shops typically focus on reviewing and showcasing the latest tech products, including smartphones, laptops, smart home devices, wearables, and accessories. They often provide insights on product features, comparisons, buying guides, and tips for using gadgets effectively.
        </p>
      </div>
      <div className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Latest Tech Blogs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={post.image} alt={post.title} className="w-full h-56 object-fit" />

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 ">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">By {post.author}</p>
                <p className="text-gray-700 mb-4">{post.full_description.substring(0, 120)}...</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blogs;
