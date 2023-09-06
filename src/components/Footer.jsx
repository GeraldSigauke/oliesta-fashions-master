import React from 'react';
import { Link } from 'react-router-dom';
import { BsYoutube , BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div id="footer-top" className="row align-items-center">
            <div id="footer-top-element1" className="col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={ newsletter } alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up For Our Newsletter</h2>
              </div>
            </div>
            <div id="footer-top-element2" className="col-7">

                <div class="input-group">
                  <input 
                    type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text p-2" id="basic-addon2">
                    Suscribe
                  </span>
                </div>
                
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div id="footer-middle" className="row">
            <div id="footer-middle-element1" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className="footer-link d-flex flex-column">
                <address className='text-white fs-6'>Hazyview, 1242, <br /> Mpumalanga, <br /> South Africa</address>
                <a className="text-white mt-3 d-block mb-1" href="tel:+27 78 479 3775">
                  +27 78 479 3775
                </a>
                <a className="text-white mt-2 d-block mb-2" href="mailto:oliestafashions@gmail.com">
                  oliestafashions@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="#" alt="social media icon"><BsWhatsapp className='text-white fs-4' /> </a>
                  <a href="#" alt="social media icon"><FaTiktok className='text-white fs-4' /> </a>
                  <a href="#" alt="social media icon"><BsYoutube className='text-white fs-4' /> </a>
                  <a href="#" alt="social media icon"><BsFacebook className='text-white fs-4' /> </a>
                  <a href="#" alt="social media icon"><BsInstagram className='text-white fs-4' /> </a>
                </div>
              </div>
            </div>
            <div id="footer-middle-element2" className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='/terms-and-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to='/blogs' className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div id="footer-middle-element3" className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div id="footer-middle-element4" className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Women's Wear</Link>
                <Link className='text-white py-2 mb-1'>Men's Wear</Link>
                <Link className='text-white py-2 mb-1'>Girls' Wear</Link>
                <Link className='text-white py-2 mb-1'>Boys' Wear</Link>
                <Link className='text-white py-2 mb-1'>Big Girls' Wear</Link>
                <Link className='text-white py-2 mb-1'>Big Boys' Wear</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; { new Date().getFullYear()} Powered by OLIESTA SOFTWORKS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer