import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import logo from "../images/oflw.png";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p
                className='text-white mb-0'
              >
                Free Shipping Over $100 & Free Returns
              </p>              
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Hotline:
                <a className="text-white" href="tel:+27 78 479 3775">
                  +27 78 479 3775
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center header-2">
            <div id='logoContainer' className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <img 
                id='logo' className='img-fluid' src={ logo } alt="logo" 
              />
            </div>
            <div id="search-bar" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <div id='mw'>
                <div class="input-group">
                  <input 
                    type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text p-3" id="basic-addon2">
                    <BsSearch className='fs-6' />
                  </span>
                </div>
              </div>
            </div>
            <div id="header-upper-links" className="col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
              <div
                className="header-upper-links d-flex align-items-center justify-content-between text-white"
              >
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img id='header-icon' src={ compare } alt="compare" />
                    <p id="compare-products" className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img id='header-icon' src={ wishlist } alt="wishlist" />
                    <p id="favourite-wishlist" className='mb-0'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img id='header-icon' src={ user } alt="user" />
                    <p id="log-in-my-account" className='mb-0'>
                      Log in <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link  to='/cart' className='d-flex align-items-center gap-10 text-white'>
                    <img id='header-icon' src={ cart } alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark ">0</span>
                      <p id='checkout-amount' className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">


              <div id="header-lower" className="d-flex align-items-center gap-30 row">

                <div id='menu-button' className="menu-bottom d-flex align-items-center gap-30 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                  <div>
                    <div className="dropdown">
                      <button 
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                        type='button' 
                        id='dropdownMenuButton1' 
                        data-bs-toggle='dropdown' 
                        aria-expanded='false'
                      >
                        <img src={ menu } alt="" />
                        <span className='me-5 d-inline-bto'>Shop Categories</span>
                      </button>
                      <ul 
                        className="dropdown-menu" 
                        aria-labelledby='dropdownMenuButton1'
                      >
                        <li><a to="/" className="dropdown-item text-white">Shop Categories</a></li>
                        <li><a to="/" className="dropdown-item text-white">Another action</a></li>
                        <li><a to="/" className="dropdown-item text-white">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="menu-links col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                  <div id='menu-links' className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header