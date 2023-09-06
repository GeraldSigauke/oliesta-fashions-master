import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from "react-router-dom";

import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import ft1 from "../images/ft1.jpg";
import ft2 from "../images/ft2.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div 
                className={` ${
                    location.pathname === "/product" ? `gr-${grid}` : "col-3"
                } `}
            >
                <Link to=':id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={ wish } alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img
                            src={ ft1 }
                            className="img-fluid"
                            alt="product" 
                        />
                        <img
                            src={ ft2 }
                            className="img-fluid" alt="product" 
                        />
                    </div>
                    <div
                    className="product-details">
                        <h6 className="brand">Adidas</h6>
                        <h5 className="product-title">Women's Tracksuits</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p id="product-cart-description" className={`${ grid === 12 ? "d-block" : "d-none" } description`}>
                            The finest in women's sports wear.
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent"><img src={ prodcompare } alt="compare" /></button>
                            <button className="border-0 bg-transparent"><img src={ view } alt="view" /></button>
                            <button className="border-0 bg-transparent"><img src={ addcart } alt="addcart" /></button>
                        </div>
                    </div>
                </Link>
            </div>
            <div 
                className={` ${
                    location.pathname === "/product" ? `gr-${grid}` : "col-3"
                } `}
            >
                <Link to=':id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={ wish } alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img
                            src={ ft1 }
                            className="img-fluid"
                            alt="product" 
                        />
                        <img
                            src={ ft2 }
                            className="img-fluid" alt="product" 
                        />
                    </div>
                    <div
                    className="product-details">
                        <h6 className="brand">Adidas</h6>
                        <h5 className="product-title">Women's Tracksuits</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p id="product-cart-description" className={`${ grid === 12 ? "d-block" : "d-none" } description`}>
                            The finest in women's sports wear.
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent"><img src={ prodcompare } alt="compare" /></button>
                            <button className="border-0 bg-transparent"><img src={ view } alt="view" /></button>
                            <button className="border-0 bg-transparent"><img src={ addcart } alt="addcart" /></button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard