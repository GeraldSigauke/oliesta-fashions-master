import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import Color from '../components/Color';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import nike from "../images/03-04-2013_nike_airclassic_navy_.webp";
import nike2 from "../images/03-04-2013_nike_airclassic_navy_d1.webp";
import nike3 from "../images/03-04-2013_nike_airclassic_navy_d2.webp";
import nike4 from "../images/th (18).jpg";
import ProductCard from '../components/ProductCard';
import Container from '../components/Container';

const SingleProduct = () => { 
    const props = {
        width: 400, 
        height: 600, 
        zoomWidth: 600, 
        img: { nike2 }
    };
    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text);
        let textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };
  return (
    <>
        <Meta title={'Dynamic Product Name'} />
        <BreadCrumb title="Dynamic Product Name" />
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div className="">
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div className=""><img src={ nike } alt="product" className="img-fluid" /></div>
                            <div className=""><img src={ nike2 } alt="product" className="img-fluid" /></div>
                            <div className=""><img src={ nike3 } alt="product" className="img-fluid" /></div>
                            <div className=""><img src={ nike4 } alt="product" className="img-fluid" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Nike Sneakers
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$100.00</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>( Reviews )</p>                                   
                                </div>
                                <a href="#review">Write a Review</a>
                            </div>
                            <div className="py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Type :</h3><p className='product-data'>Sneakers</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Brand :</h3><p className='product-data'>Nike</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Category :</h3><p className='product-data'>Shoes</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Tags :</h3><p className='product-data'>Sportswear Nike Sneakers</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>SKU :</h3><p className='product-data'>PN12345</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Availability :</h3><p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='product-heading'>Size :</h3><div className="d-flex flex-rap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">SS</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className='product-heading'>Color :</h3><Color />
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className='product-heading'>Quantity :</h3>
                                        <div className="">
                                            <input 
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{ width: "70px" }} 
                                                type="number" 
                                                name="" 
                                                id=""
                                                />
                                        </div>
                                        <div className="d-flex align-items-center gap-30 ms-5">
                                            <button className='button border-0' type='submit'>Add to Cart</button>
                                            <button to="/signup" className='button signup'>Buy It Now</button>
                                        </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div className="">
                                        <a href="fs-5 me-2"><TbGitCompare /> Add to Compare</a>
                                    </div>
                                    <div className="">
                                        <a href="fs-5 me-2"><AiOutlineHeart /> Add to Wishlist</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br />We ship all local orders within <br />5-10 business days!
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className='product-heading'>Product Link :</h3>
                                    <a 
                                        href="javascript:void(0);" 
                                        onClick={() => {
                                            copyToClipboard(
                                                "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1440837908/247205_FWCZG_4080_002_080_0000_Light-Vintage-Web-Original-GG-boston-bag.jpg"
                                            );
                                        }}
                                    >
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className="bg-white p-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti animi aspernatur vel, iste eum quidem reprehenderit, nostrum repellat tenetur, earum sapiente! Quidem labore laudantium saepe consequatur vel, a commodi?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container class1="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items end">
                                <div className="">
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div 
                                        style={{ 
                                            paddingBottom: "20px" 
                                            }} 
                                            className="d-flex align-items-center gap-10"
                                    >
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div
                                        style={{ 
                                            paddingTop: "34px" 
                                            }} 
                                    >
                                        <a href="#review" className="text-dark text-decoration-underline">Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                
                                <h4 className='review-btn' id='review'>Write a Review</h4>
                                <form 
                                action="" 
                                classsName="d-flex flex-column gap-15" 
                                >
                                    <div className="">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="">
                                        <textarea 
                                        name="" placeholder="Comments"
                                        className='w-100 form-control' 
                                        id="" 
                                        cols="30" 
                                        rows="4"
                                        style={{ "margin-bottom": "15px" }}
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>
                                
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                    <h6 className='mb-0'>Barry Allen</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="mt-3">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos alias eum reiciendis voluptate commodi temporibus mollitia, debitis in est. Animi earum impedit nisi quos, consequatur iure praesentium rerum ducimus aspernatur.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                </div>
            </div>
        </Container>
    </>
  )
}

export default SingleProduct