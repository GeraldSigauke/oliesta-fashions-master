import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

import redNike from "../images/2e.jpg";
import sb6 from "../images/sb6.png";
import ghb1 from "../images/My project (1)c.png";
import ats1 from "../images/ats1.png";
import bd1 from "../images/bd1.png";
import headwear1 from "../images/headwear1.jpg";
import tops from "../images/tops.jpg";
import bottoms from "../images/bottoms.jpg";
import dress from "../images/th (10).jpg";
import outfits from "../images/outfits.jpg";
import tracksuit from "../images/tracksuit.jpg";
import shoes from "../images/shoes.jpg";
import handbags1 from "../images/handbags1.jpeg";
import puma from "../images/puma.jpg";
import adidas from "../images/58144-logo-brand-clothing-adidas-swoosh-free-download-png-hd.png";
import nike from "../images/nike.jpg";
import fila from "../images/fila.jpg";
import champion from "../images/champion.png";
import polo from "../images/polo.jpg";
import th1 from "../images/th1.jpg";
import ck from "../images/ck.jpg";
import hb from "../images/hb.jpg";
import levis from "../images/21115.webp";
import lacoste from "../images/Famous-Clothing-Company-Logos.jpg";
import chanel from "../images/chanel.png";
import gucci from "../images/main-qimg-4ed1840553524164a405835f82485be2.webp";
import lv from "../images/lv.png";
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
  
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div id="banner" className="row">
            <div id="banner1" className=" col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="main-banner position-relative py-2">
                <img 
                src={ redNike } 
                alt="main banner" 
                className='img-fluid rounded-3' 
                />
                <div className="main-banner-content position-absolute">
                  <h4>EXOTIC</h4>
                  <h5 id="main-banner-product-name">Nike <br /> Sneakers</h5>
                  <p>$125.00</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div id="banner1" className=" col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="d-flex flex-wrap gap-0 justify-content-between align-items-center">
            <div className="small-banner position-relative py-2">
            <img
              style={{ "background": "#D2E2F4" }} 
            src={ sb6 } 
            alt="main banner" 
            className='img-fluid rounded-3' 
            />
            <div className="small-banner-content position-absolute">
            <h4>EXOTIC</h4>
            <h5 id="small-banner-product-name">Nike <br /> Airforce 1</h5>
            <p>$125.00</p>
            </div>
            </div>
            <div className="small-banner position-relative py-2">
            <img
              style={{ "background": "#FFECD4" }} 
            src={ ghb1 } 
            alt="main banner" 
            className='img-fluid rounded-3' 
            />
            <div className="small-banner-content position-absolute">
            <h4>EXOTIC</h4>
            <h5 id="small-banner-product-name">Gucci <br />Hand Bag 1</h5>
            <p>$300.00</p>
            </div>
            </div>
            <div className="small-banner position-relative py-2">
            <img
              style={{ "background": "#D8EDDD" }} 
            src={ ats1 } 
            alt="main banner" 
            className='img-fluid rounded-3' 
            />
            <div className="small-banner-content position-absolute">
            <h4>EXOTIC</h4>
            <h5 id="small-banner-product-name">Adidas <br />Track Suit 1</h5>
            <p>$100.00</p>
            </div>
            </div>
            <div className="small-banner position-relative py-2">
            <img
              style={{ "background": "#FCD5D6" }} 
            src={ bd1 } 
            alt="main banner" 
            className='img-fluid rounded-3' 
            />
            <div className="small-banner-content position-absolute">
            <h4>LOCAL</h4>
            <h5 id="small-banner-product-name">Blue <br />Dress</h5>
            <p>$125.00</p>
            </div>
            </div>
            </div>
            </div>
          </div>        
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div id="services" className="services d-flex align-items-center justify-content-between row">

                  {
                    services?.map((i, j) => {
                      return (
                        <div id="service" className="d-flex align-items-center gap-15 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5" key={j}>
                          <img src={ i.image } alt="services" />
                          <div className="">
                            <h6>{ i.title }</h6>
                            <p className="mb-0">{ i.tagline }</p>
                          </div>
                        </div>                      
                      )
                    })
                  }

                </div>
            </div>
          </div>
        </div>        
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div id="categories" className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Headwear</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="headwear" src={ headwear1 } alt="headwear" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Tops</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="tops" src={ tops } alt="tops" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Bottoms</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="bottoms" src={ bottoms } alt="bottoms" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Dresses</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="dresses" src={ dress } alt="dress" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Outfits</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="outfits" src={ outfits } alt="outfits" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Tracksuits</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="tracksuits" src={ tracksuit } alt="tracksuits" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Shoes</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="shoes" src={ shoes } alt="shoes" />
                </div>
                <div id="category" className="d-flex align-items-center">
                  <div className="">
                    <h6>Bags, Belts, etc.</h6>
                    <p>10 Items</p>
                  </div>
                  <img id="handbags" src={ handbags1 } alt="bag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div id="multiple-products" className="row d-flex justify-content-between">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard id="single-product" />
            <ProductCard id="single-product" />
            <ProductCard id="single-product" />
            <ProductCard id="single-product" />
          </div>
        </div>        
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <div className="famous-content position-absolute">
                  <h5>Premium Product</h5>
                  <h6>Gucci Hand bag</h6>
                  <p>$1800.00</p>
                </div>
                <img src="images/320206.022_1.jpg" className="img-fluid" alt="famous product" />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <div className="famous-content position-absolute">
                  <h5>Premium Product</h5>
                  <h6>Gucci Hand bag</h6>
                  <p>$1800.00</p>
                </div>
                <img src="images/333643.010_1.jpg" className="img-fluid" alt="famous product" />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <div className="famous-content position-absolute">
                  <h5>Premium Product</h5>
                  <h6>Gucci Hand bag</h6>
                  <p>$1800.00</p>
                </div>
                <img src="images/19967878_44789703_1000.webp" className="img-fluid" alt="famous product" />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <div className="famous-content position-absolute">
                  <h5>Premium Product</h5>
                  <h6>Gucci Hand bag</h6>
                  <p>$1800.00</p>
                </div>
                <img src="images/19836717_44533960_1000.webp" className="img-fluid" alt="famous product" />
              </div>
            </div>
          </div>
        </div>        
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
          <div className="row d-flex justify-content-between">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>        
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className="mx-4 w-25">
                    <img id="puma"  src={ puma } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="adidas" src={ adidas } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="nike" src={ nike } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="fila" src={ fila } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="champion" src={ champion } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="polo" src={ polo } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="th" src={ th1 } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="ck" src={ ck } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="hb" src={ hb } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="levis" src={ levis } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="lacoste" src={ lacoste } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="chanel" src={ chanel } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="gucci" src={ gucci } alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img id="lv" src={ lv } alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>        
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
          </div>

        </div>        
      </Container>
    </>
  )

}

export default Home