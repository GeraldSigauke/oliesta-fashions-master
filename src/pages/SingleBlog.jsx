import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import fw1 from "../images/pexels-rfstudio-3618732.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title="Dynamic Blog Name" />
        <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                      <div className="single-blog-card">
                        <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4' />Go Back To Blogs</Link>
                        <h3 className="title">Big Girls' Wear</h3>
                        <img src={ fw1 } alt="blog" className='img-fluid w-100 my-4' />
                        <p>
                          You are beautiful woman, and you love beautiful clothing. But everywere you look, they just dont have the right size for you. Do not worry yourself any more. We are here for you. Check out our "Big Girls' Wear" section to see everything you ever wanted. Who says fashion is only for skinny people? Certainly, not us!
                        </p>
                      </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default SingleBlog