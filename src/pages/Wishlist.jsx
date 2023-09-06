import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import cross from "../images/cross.svg";
import naj from "../images/nike air jordan-785jra.jpg";
import bd1 from "../images/bd1.png";
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
        <Meta title={'Wishlist'} />
        <BreadCrumb title="Wishlist" />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src={ cross }  alt="cross"  className="position-absolute cross img-fluid"
                            />
                            <div 
                                className="wishlist-card-image img-fluid bg-white d-flex justify-content-center align-items-center"
                                style={{ aspectRatio: "1/1", borderRadius: "10px" }}
                            >
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="image-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 
                                    className='title' 
                                    style={{ textTransform: "upperCase" }}
                                >
                                Nike Air Jordan
                                </h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div 
                                className="wishlist-card-image img-fluid bg-white d-flex justify-content-center align-items-center"
                                style={{ aspectRatio: "1/1", borderRadius: "10px" }}
                            >
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="image-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 
                                    className='title' 
                                    style={{ textTransform: "upperCase" }}
                                >
                                Nike Air Jordan
                                </h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div 
                                className="wishlist-card-image img-fluid bg-white d-flex justify-content-center align-items-center"
                                style={{ aspectRatio: "1/1", borderRadius: "10px" }}
                            >
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="image-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 
                                    className='title' 
                                    style={{ textTransform: "upperCase" }}
                                >
                                Nike Air Jordan
                                </h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src={ cross }  alt="cross"     className="position-absolute cross img-fluid"
                            />
                            <div 
                                className="wishlist-card-image img-fluid bg-white d-flex justify-content-center align-items-center"
                                style={{ aspectRatio: "1/1", borderRadius: "10px" }}
                            >
                                <img
                                    src={ naj } 
                                    alt="product one"
                                    className="image-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 
                                    className='title' 
                                    style={{ textTransform: "upperCase" }}
                                >
                                Nike Air Jordan
                                </h5>
                                <h6 className="price">$100</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Wishlist