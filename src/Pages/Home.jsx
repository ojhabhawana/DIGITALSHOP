import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { slider } from '../Data.jsx';
import Productsbycat from '../Component/Productsbycat.jsx';
slider



function Home() {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  let [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch categories
    fetch(`https://dummyjson.com/products/categories`)
      .then((a) => a.json())
      .then((b) => setCategories(b));
    fetch(`https://dummyjson.com/products`)
      .then((a) => a.json())
      .then((b) => setProduct(b.products));
  }, []);

  useEffect(() => {

    fetch(`https://your-api-endpoint/brands`)
      .then((a) => a.json())
      .then((b) => setBrands(b));
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 shadow">
              <ul className="list-group list-group-flush">
                {categories.slice(0, 8).map((a) => (
                  <li className="list-group-item" key={a}>
                    <Link to={`/cat/${a.name}`} className="link-dark text-decoration-none">
                      <i className="bi bi-caret-right"></i> {a.name}
                    </Link>
                  </li>
                ))}
                <li className="list-group-item text-center">View more</li>
              </ul>
            </div>
            <div className="col-lg-9 ">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73b2da870e.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73c04e3b87.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73c2050c0f.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className="brand py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">Brands</h4>
            </div>
            <div className="col-lg-6 text-lg-end">
              View all
            </div>
          </div>
          <div className="row py-3">
            <Swiper
              slidesPerView={9}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {slider.map((a) => (
                <SwiperSlide key={a}>
                  <img src={a} className='w-100' alt="" />
                </SwiperSlide>
              ))}
 </Swiper>

          </div>
        </div>
      </section>

      <section className='shadow p-3 container'>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className='fw-bold pb-5'>Featured Products</h3>
          </div>
          <div className="col-lg-12">
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}

              className="mySwiper"
            >
              {product.map((a) => (
                <SwiperSlide key={a}>
                  <div className="border shadow text-center pb-3 pbox">
                    <img src={a.thumbnail} className='w-100' alt="" />
                    <div className='content'>
                      <p className='fw-bold pt-2'>{a.title}</p>
                      <h5 className='text-primary fw-bold '>रु{a.price}</h5>
                      <Link className='btn btn-primary btn-sm' to={`/details/${a.id}`}>Quick View</Link>

                    </div>
                  </div>
                </SwiperSlide>
              ))}



            </Swiper>


          </div>
        </div>
      </section>
      <section className='py-4'>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 text-center">
              <div className="menu text-white p-4">
                <h2 className='py-5'>Recommended product</h2>
                <div className="bg-white">
                  <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/product/thumbnail/2023-06-25-6497d092ba484.png" alt="" />
                  <h4 className='text-primary p-4'>2 Mtr USB 3.0 A Male to A Male Cable (UG...
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div class="row">
                <div class="col-lg-6">
                  <h4 class="fw-bold">Latest products</h4>
                </div>
                <div class="col-lg-6 text-lg-end">View all</div>
              </div>
              <div className="row g-4">
{product.slice(0, 9).map((a) => (
                  <div className='col-lg-4' key={a}>
                    <div className="border shadow text-center pb-3 pbox">
                      <img src={a.thumbnail} className='w-100' alt="" />
                      <div className='content'>
                        <p className='fw-bold pt-2'>{a.title}</p>
                        <h5 className='text-primary fw-bold '>रु{a.price}</h5>
                        <Link className='btn btn-primary btn-sm' to={`/details/${a.id}`}>Quick View</Link>

                      </div>
                    </div>
                  </div>

                ))}
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-3'>
        <div className="container">
          <div className="row">
            <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73b5319750.png" alt="" />
          </div>
        </div>

      </section>
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73bd17fa1f.png" alt="" />
            </div>
            <div className="col-lg-6">
              <img className='w-100' src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73bea795ce.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Productsbycat title="womens-dresses"/>
      <Productsbycat title="furniture"/>
      <Productsbycat title="groceries"/>
      <Productsbycat title="home-decoration"/>
      <Productsbycat title="laptops"/>


      








            

    </>
  );
}

export default Home;