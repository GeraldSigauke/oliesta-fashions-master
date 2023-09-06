import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';

import ghb1 from "../images/https___images.stockx.com_images_Gucci-Handbag-Dionysus-Small-GG-Coated-Canvas-Suede-Taupe-Red.jpg";
import bhs from "../images/CH3940_MAIN.jpg";
import gr from "../images/gr.svg";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";
import gr4 from "../images/gr4.svg";
import Container from '../components/Container';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  console.log(grid);
  
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Headwear</li>
                    <li>Tops</li>
                    <li>Bottoms</li>
                    <li>Dresses</li>
                    <li>Outfits</li>
                    <li>Tracksuits</li>
                    <li>Shoes</li>
                    <li>Bags, Belts, etc.</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div className="">
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Gender</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        For Males (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        For Females (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Unisex (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colours</h5>
                  <div className="">
                    <Color />
                  </div>
                  <div className="product-sizes">
                    <div className="">
                      <h5 className="sub-title">Clothing Size</h5>
                      <div className="">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-1"
                          />
                          <label htmlFor="color-1" className="form-check-label">
                            SS (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-1"
                          />
                          <label htmlFor="color-1" className="form-check-label">
                            S (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-2"
                          />
                          <label htmlFor="color-2" className="form-check-label">
                            M (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-3"
                          />
                          <label htmlFor="color-3" className="form-check-label">
                            L (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-4"
                          />
                          <label htmlFor="color-4" className="form-check-label">
                            XL (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-5"
                          />
                          <label htmlFor="color-5" className="form-check-label">
                            2XL (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-6"
                          />
                          <label htmlFor="color-6" className="form-check-label">
                            3XL (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-7"
                          />
                          <label htmlFor="color-7" className="form-check-label">
                            4XL (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-8"
                          />
                          <label htmlFor="color-8" className="form-check-label">
                            5XL (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-9"
                          />
                          <label htmlFor="color-9" className="form-check-label">
                            6XL (2)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h5 className="sub-title">Shoe Size</h5>
                      <div className="">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-1"
                          />
                          <label htmlFor="color-1" className="form-check-label">
                            3 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-1"
                          />
                          <label htmlFor="color-1" className="form-check-label">
                            4 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-2"
                          />
                          <label htmlFor="color-2" className="form-check-label">
                            5 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-3"
                          />
                          <label htmlFor="color-3" className="form-check-label">
                            6 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-4"
                          />
                          <label htmlFor="color-4" className="form-check-label">
                            7 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-5"
                          />
                          <label htmlFor="color-5" className="form-check-label">
                            8 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-6"
                          />
                          <label htmlFor="color-6" className="form-check-label">
                            9 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-7"
                          />
                          <label htmlFor="color-7" className="form-check-label">
                            10 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-8"
                          />
                          <label htmlFor="color-8" className="form-check-label">
                            11 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="color-9"
                          />
                          <label htmlFor="color-9" className="form-check-label">
                            12 (2)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="sub-title">Exceptional Cases (Such As Bags, Belts, etc.)</h5>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id="color-1"
                    />
                    <label htmlFor="color-1" className="form-check-label">
                      One Size Fits All (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="">
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span style={{ "cursor": "pointer" }} className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Gucci
                    </span>
                    <span style={{ "cursor": "pointer" }} className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Dress
                    </span>
                    <span style={{ "cursor": "pointer" }} className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Nike
                    </span>
                    <span style={{ "cursor": "pointer" }} className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Louis Vuitton
                    </span>
                    <span style={{ "cursor": "pointer" }} className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      High Heels
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="">
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img 
                        // style={{ "height": "100px" }} 
                        src={ ghb1 } 
                        alt="random product"
                        className='img-fluid'
                      />
                    </div>
                    <div className="w-50 mb-2">
                      <h5>Gucci Handbag Dionysus. Small. GG Coated Canvas Suede Taupe Red</h5>
                      <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img 
                        // style={{ "width": "212.5px" }} 
                        src={ bhs } 
                        alt="random product"
                        className='img-fluid'
                      />
                    </div>
                    <div className="w-50">
                      <h5>Brown Hiking Shoes For Men</h5>
                      <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ "width": "100px" }} >Sort By:</p>
                    <select
                      defaultValue={"manual"} 
                      className="form-control form-select"
                    >
                      <option 
                        value="manual"
                      >
                        Featured
                      </option>
                      <option 
                        value="best-selling" 
                      >
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-descending">
                        Price, High to Low
                      </option>
                      <option value="created-ascending">
                        Date, Old to New
                      </option>
                      <option value="created-descending">
                        Date, New to Old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">
                    21 Products
                    </p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img 
                        onClick={ () => setGrid(3) }
                        src={ gr4 } 
                        alt="grip" 
                        className="d-block img-fluid" 
                      />
                      <img 
                        onClick={ () => setGrid(4) }
                        src={ gr3 } 
                        alt="grip" 
                        className="d-block img-fluid" 
                      />
                      <img 
                        onClick={ () => setGrid(6) }
                        src={ gr2 } 
                        alt="grip" 
                        className="d-block img-fluid" 
                      />
                      <img
                        onClick={ () => setGrid(12) } 
                        src={ gr } 
                        alt="grip" 
                        className="d-block img-fluid" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={ grid } />
                  <ProductCard grid={ grid } />
                  <ProductCard grid={ grid } />
                  <ProductCard grid={ grid } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
