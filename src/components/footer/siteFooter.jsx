import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'

const SiteFooter = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: '#ACC3BE' }}
      >
        <div className="px-5 mx-2 py-3">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Plant Haus
                </h6>
                <p>
                  Your friendly plant store. Bringing the beauty of nature into
                  your home with a curated collection of houseplants. Discover a
                  greener, healthier lifestyle with Plant Haus.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Quick Links
                </h6>
                <p>
                  <Link className="text-white" to="/shop">
                    Shop
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/about">
                    About
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/auth">
                    Sign In
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="/checkout">
                    Checkout
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3 "></i> Brooklyn, NY 11233, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> hekatek@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 917 333 6666
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 917 777 1826
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 ">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-2 rounded-circle"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                {/* <!-- Twitter --> */}
                <a
                  className="btn btn-primary btn-floating m-2 rounded-circle"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                {/* <!-- Google --> */}
                <a
                  className="btn btn-primary btn-floating m-2 rounded-circle"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                {/* <!-- Instagram --> */}
                <a
                  className="btn btn-primary btn-floating m-2 rounded-circle"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                {/* <!-- Linkedin --> */}
                <a
                  className="btn btn-primary btn-floating m-2 rounded-circle"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                {/* <!-- Github --> */}
                <a
                  className="btn btn-primary btn-floating m-2 rounded-circle"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2024 Copyright
          {/* <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a> */}
        </div>
      </footer>
    </div>
    // </div>
  )
}

export default SiteFooter
