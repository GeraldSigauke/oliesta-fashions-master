import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';

import cross from "../images/cross.svg";
import naj from "../images/nike air jordan-785jra.jpg";
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
        <Meta title={'Compare Products'} />
        <BreadCrumb title="Compare Products" />
        <Container class1="compare-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div className="product-card-image img-fluid d-flex justify-content-center align-items-center">
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                                />
                            </div>
                            <div className="compare-product-details pt-3">
                                <h5 className="title" style={{ textTransform: "uppercase" }}>
                                    Nike Airforce 1
                                </h5>
                                <h6 className="price mb-3 mt-3">
                                    $125.00
                                </h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Nike</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Shoes</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>SKU:</h5>
                                        <p>1234567</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Colour:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div className="product-card-image img-fluid d-flex justify-content-center align-items-center">
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                                />
                            </div>
                            <div className="compare-product-details pt-3">
                                <h5 className="title" style={{ textTransform: "uppercase" }}>
                                    Nike Airforce 1
                                </h5>
                                <h6 className="price mb-3 mt-3">
                                    $125.00
                                </h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Nike</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Shoes</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>SKU:</h5>
                                        <p>1234567</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Colour:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div className="product-card-image img-fluid d-flex justify-content-center align-items-center">
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                                />
                            </div>
                            <div className="compare-product-details pt-3">
                                <h5 className="title" style={{ textTransform: "uppercase" }}>
                                    Nike Airforce 1
                                </h5>
                                <h6 className="price mb-3 mt-3">
                                    $125.00
                                </h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Nike</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Shoes</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>SKU:</h5>
                                        <p>1234567</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Colour:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div className="product-card-image img-fluid d-flex justify-content-center align-items-center">
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                                />
                            </div>
                            <div className="compare-product-details pt-3">
                                <h5 className="title" style={{ textTransform: "uppercase" }}>
                                    Nike Airforce 1
                                </h5>
                                <h6 className="price mb-3 mt-3">
                                    $125.00
                                </h6>
                                <div className="">
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Nike</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Shoes</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>SKU:</h5>
                                        <p>1234567</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Colour:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            <p>XL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default CompareProduct