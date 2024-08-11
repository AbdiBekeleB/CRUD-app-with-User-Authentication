import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-5 " style={{ height: '200px', display: 'flex', alignItems: 'center' }}>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>About CRUD App</h5>
            <p>
              CRUD App is a powerful application that allows you to create, read, update, and delete data with ease.
              Designed with simplicity and efficiency in mind, it provides a seamless user experience.
            </p>
          </div>
          <div className="col-md-6 ps-5 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to={"/"} className="text-light">Home</Link></li>
              <li><Link to={"/listing"} className="text-light">ListingItem</Link></li>

            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <small>&copy; 2024 CRUD App. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;