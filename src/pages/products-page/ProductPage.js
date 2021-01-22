import React from 'react'
import './ProductPage.css'
import Navbar from '../../components/navBar/Navbar'

const ProductPage = () => {
    return (
      <div>
        <Navbar />
        <div className="content">
          <h1 className="text-center mb-4">Search Local Products...</h1>
          <form className="form-inline md justify-content-center my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn-product btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="container mt-5">
            <div className="row">
              <div className="cards col-xs-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card">
                  <a className="img-card" href="product/:id">
                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  </a>
                  <div className="card-content">
                    <h4 className="card-title">
                      <a href="product/:id"> Title</a>
                    </h4>
                    <p className="par">
                      Description maybe 35 or less characters...
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="product/:id" className="btn btn-link btn-block">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card">
                  <a className="img-card" href="product/:id">
                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  </a>
                  <div className="card-content">
                    <h4 className="card-title">
                      <a href="product/:id"> Title</a>
                    </h4>
                    <p className="">
                      Description maybe 35 or less characters...
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="product/:id" className="btn btn-link btn-block">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card">
                  <a className="img-card" href="product/:id">
                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  </a>
                  <div className="card-content">
                    <h4 className="card-title">
                      <a href="product/:id"> Title</a>
                    </h4>
                    <p className="">
                      Description maybe 35 or less characters...
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="product/:idl" className="btn btn-link btn-block">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card">
                  <a className="img-card" href="product/:id">
                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  </a>
                  <div className="card-content">
                    <h4 className="card-title">
                      <a href="product/:id"> Title</a>
                    </h4>
                    <p className="">
                      Description maybe 35 or less characters...
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="product/:idl" className="btn btn-link btn-block">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card">
                  <a className="img-card" href="product/:id">
                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  </a>
                  <div className="card-content">
                    <h4 className="card-title">
                      <a href="product/:id"> Title</a>
                    </h4>
                    <p className="">
                      Description maybe 35 or less characters...
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="product/:idl" className="btn btn-link btn-block">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4">
                <div className="card">
                  <a className="img-card" href="product/:id">
                    <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                  </a>
                  <div className="card-content">
                    <h4 className="card-title">
                      <a href="product/:id"> Title</a>
                    </h4>
                    <p className="">
                      Description maybe 35 or less characters...
                    </p>
                  </div>
                  <div className="card-read-more">
                    <a href="product/:idl" className="btn btn-link btn-block">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default ProductPage;