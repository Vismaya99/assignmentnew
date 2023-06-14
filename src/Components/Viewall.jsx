import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
import './Footer.css';



const Viewall = () => {
  var [photos, setphotos] = useState([]);

  useEffect(
    () => {
      fetchallposts()
    }

  )
  const fetchallposts = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(
        (response) => {
          setphotos(response.data)
        }
      )
      .catch()
  }

  return (

    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-4">
            {photos.map(
              (x, y) => {
                return <div className="col col 12-col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxxl-3">
                  <div class="card" >
                    <img src={x.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{x.title}</h5>
                      <p class="card-text">{x.price}</p>
                      <p class="card-text">{x.description}</p>

                      {/* <p class="card-text">{x.rating}</p> */}

                    </div>
                  </div>
                </div>
              }
            )

            }
            <div className="container">

              r                 
                  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
                
              
              
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default Viewall