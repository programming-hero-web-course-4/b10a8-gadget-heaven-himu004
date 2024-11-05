import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { ProductAssetContext } from "../../context/ProductContext";

const Header = () => {
  const allProducts = useContext(ProductAssetContext);
  const { wishlistAddedProduct, cartAddedProducts } = allProducts;
  // console.log(wishlistAddedProduct);

  return (
    <div className="navbar bg-[#9538E2] container mx-auto p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Statistic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-[2.5vw] text-white">Gadjet Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Statistic
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3 p-1">
          <div className="bg-white rounded-full md:p-2 p-1 relative">
            <Link to="/dashboard">
              <BsCart2 className="md:text-xl font-extrabold " />
            </Link>
            {cartAddedProducts.length > 0 && (
              <span className="badge badge-secondary badge-sm absolute top-0 right-0">
                {cartAddedProducts.length}
              </span>
            )}
          </div>
          <div className="bg-white rounded-full md:p-2 p-1 relative">
            <CiHeart className="md:text-xl extrabold relative" />
            {wishlistAddedProduct.length > 0 && (
              <span className="badge badge-secondary badge-sm absolute top-0 right-0">
                {wishlistAddedProduct.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
