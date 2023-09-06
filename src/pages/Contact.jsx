import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
    <Meta title={'Contact Us'} />
    <BreadCrumb title="Contact Us" />
    <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3614.7388244242375!2d31.1280647!3d-25.042936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec29c54d6519f81%3A0x256a2d357910d276!2sHazyview%2C%201242!5e0!3m2!1sen!2sza!4v1680519330698!5m2!1sen!2sza" 
              width="600" 
              height="450" 
              className="border-0 w-100" allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div className="">
                <h3 className="contact-title mb-4">Contact</h3>
                <form 
                  action="" 
                  classsName="d-flex flex-column gap-15" 
                >
                  <div className="">
                    <input type="text" placeholder="Name" className="form-control"
                    style={{ "margin-bottom": "15px" }} 
                    />
                  </div>
                  <div className="">
                    <input type="email" placeholder="Email" className="form-control"
                    style={{ "margin-bottom": "15px" }}
                    />
                  </div>
                  <div className="">
                    <input type="tel" placeholder="Mobile Number" className="form-control"
                    style={{ "margin-bottom": "15px" }}
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
                  <div className="">
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div className="">
                  <ul className='ps-0'>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className='mb-0'>
                        Hazyview, 1242,
                        Mpumalanga,
                        South Africa
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+27 345 3775">
                        +27 78 479 3775
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:oliestafashions@gmail.com">
                        oliestafashions@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsInfoCircle className="fs-5" />
                        <p className='mb-0'>Sunday - Saturday 8 AM - 9 PM</p>
                    </li>
                  </ul>
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

export default Contact