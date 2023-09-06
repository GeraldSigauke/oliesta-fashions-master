import React from 'react';
import { Link } from 'react-router-dom';

import rodnae from "../images/pexels-rodnae-productions-7239889.jpg";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img 
            src={ rodnae }
            className='img-fluid w-100' 
            alt="blog" 
          />
        </div>
        <div className="blog-content">
          <p className='date'>2 February, 2023</p>
          <h5 className="title">Big Girls' Wear</h5>
          <p className="desc">
          As a rule, plus sized beauties are rare jewels with a refined taste.
          
          {/* You are beautiful woman, and you love beautiful clothing. But everywere you look, they just dont have the right size for you. Do not worry yourself any more. We are here for you. Check out our "Big Girls' Wear" section to see everything you ever wanted. Who says fashion is only for skinny people? Certainly, not us! */}
          </p>
          <Link to="/blog/:id" className="button">Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard