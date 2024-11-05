import { useContext, useState, useEffect } from "react";
import { ProductAssetContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const Products = () => {
    const allProducts = useContext(ProductAssetContext);
    const { products } = allProducts;

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        if (products && products.length > 0) {
            setFilteredProducts(products);
        }
    }, [products]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        if (category === "All") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <>
            <div className="text-center py-10">
                <p className="text-5xl font-bold">Explore Cutting-Edge Gadgets</p>
            </div>
            <div className="container mx-auto md:grid grid-cols-6 gap-4 pb-10">
                {/* Category Buttons */}
                <div className="col-span-1 bg-white rounded-lg mb-5">
                    <div className="flex flex-col h-[80vh]">
                        <button
                            onClick={() => handleCategoryClick("All")}
                            className={`btn m-3 rounded-full ${selectedCategory === "All" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            All Products
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Laptops")}
                            className={`btn m-3 rounded-full ${selectedCategory === "Laptops" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Laptops
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Smartphones")}
                            className={`btn m-3 rounded-full ${selectedCategory === "Smartphones" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Phones
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Accessories")}
                            className={`btn m-3 rounded-full ${selectedCategory === "Accessories" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Accessories
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Smart Watches")}
                            className={`btn m-3 rounded-full ${selectedCategory === "Smart Watches" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Smart Watches
                        </button>
                        <button
                            onClick={() => handleCategoryClick("MacBook")}
                            className={`btn m-3 rounded-full ${selectedCategory === "MacBook" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            MacBooks
                        </button>
                        <button
                            onClick={() => handleCategoryClick("iPhone")}
                            className={`btn m-3 rounded-full ${selectedCategory === "iPhone" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            iPhone
                        </button>
                    </div>
                </div>
                {/* Products */}
                <div className="col-span-5 grid md:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.product_id} product={product}/>
                        ))
                    ) : (
                        <p className="text-center text-xl">Loading products...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Products;