import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import tops from "../images/tops.jpg";
import bottoms from "../images/bottoms.jpg";
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
        <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">OLIESTA FASHIONS</h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label='breadcrumb'
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/cart" className="text-dark total-price">Cart</Link>
                                    </li>
                                    &nbsp; 
                                    <div className="">
                                        <MdOutlineArrowForwardIos />
                                    </div>
                                    &nbsp;
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Information
                                    </li>
                                    &nbsp; 
                                    <div className="">
                                        <MdOutlineArrowForwardIos />
                                    </div>
                                    &nbsp;
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Shipping
                                    </li>
                                    &nbsp; 
                                    <div className="">
                                        <MdOutlineArrowForwardIos />
                                    </div>
                                    &nbsp;
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title total">Contact Information</h4>
                            <p className="user-details total">
                                Tape Worm (tapeworm@gmail.com)
                            </p>
                            <h4 className="mb-3" >Shipping Address</h4>
                            <form 
                                action="" 
                                className='d-flex gap-15 flex-wrap justify-content-between'
                            >                                
                                <div className="w-100">
                                    <select 
                                        name="" 
                                        className="form-control form-select" 
                                        id="" 
                                        disabled="disabled"
                                    >
                                        <option value="" selected disabled>Select Country</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="First Name" className="form-control"></input>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Last Name" className="form-control"></input>
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="House, Apartment, Suite, etc." className="form-control"></input>
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Street" className="form-control"></input>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="City" className="form-control"></input>                                    
                                </div>
                                <div className="flex-grow-1">
                                    <select 
                                        name="" 
                                        className="form-control form-select"
                                        id="" 
                                        disabled="disabled"
                                    >
                                        <option value="" selected disabled>Select Province</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Postal Code" 
                                    ></input>                                    
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to='/cart' className='text-dark'>
                                            <BiArrowBack className='me-2' />
                                            Return to Cart
                                        </Link>
                                        <Link to='/shipping' className='button'>
                                            Continue to Shipping
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                        <div className="d-flex gap-10 mb-2 align-items-center">
                            <div className="w-100 position-relative d-flex">
                                <div className="w-25 d-flex justify-content-start gap-10 bg-white" style={{ aspectRatio: "1/1", borderRadius: "7px" }}>
                                    <div className="bg-white d-flex justify-content-center align-items-center w-25">
                                        <div className="w-25 d-flex justify-content-center align-items-center position-absolute " style={{ aspectRatio: "1/1", objectFit: "contain", top:"1px", left: "1px", borderRadius: "7px" }}>
                                            <img className="img-fluid" src={ bottoms } alt="product" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="">
                                        <span style={{ top:"-10px",left: "22%" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute" >
                                            1
                                        </span>
                                    </div>
                                </div>
                                <div className="position-absolute" style={{ top:"0px", left: "28%" }}>
                                    <h5 className="total-price">Skirt</h5>
                                    <p className="total-price">S / #fjbjkfsh</p>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="total">$100.00</h5>
                            </div>
                        </div>
                        </div>
                        <div className="border-bottom py-4 p-2">                            
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Subtotal</p>
                                <p className="mb-0 total-price">$800.00</p>
                            </div>                           
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Shipping</p>
                                <p className="mb-0 total-price">$200.00</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-5">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">$1000.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout