import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import services_img_1 from "../../img/section-services/services-img-1.jpg";
import services_img_2 from "../../img/section-services/services-img-2.jpg";
import services_img_3 from "../../img/section-services/services-img-3.jpg";

import { accordionData } from "../../utils/cars-main";
import Accordion from "../../components/Accordion/Accordion";

import { dataMainCars } from "../../utils/cars-main";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Car = () => {
  const {id} = useParams();
  const car = dataMainCars[id];
  console.log(car);
  const imageArray = Object.values(dataMainCars[id].images);

  const carInfo = dataMainCars[id];
  
  console.log(imageArray);
  const settings = {
    customPaging: function (id) {
      return (
        <a href="#!" className="thumbnail-link">
          <img
            className="thumbnail-img"
            src={imageArray[id]}
            alt={`Thumbnail ${id}`}
          />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-car-dots slick-car-thumbs",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  // <img src={dataMainCars[0].image} alt="" />
  return (
    <>
      <section className="section-car page-car">
        <div className="container-md">
          <h1 className="title-top">{carInfo.name}</h1>
        </div>
        <div className="container-lg">
          <div className="car">
            <div className="car__details">
              <div className="car__details--top">
                <div className="car__slider--wrapper">
                  <Slider {...settings} className="slick-car">
                    {imageArray.map((car, index) => (
                      <div className="cars__card" key={index}>
                        <img
                          className="cars__card--img"
                          src={car}
                          alt={`Slide ${index}`}
                        />
                      </div>
                    ))}
                  </Slider>
                  <div className="custom-dots">
                    {imageArray.map((image, index) => (
                      <a
                        key={index}
                        className={`custom-dot ${
                          currentSlide === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        href="#!"
                      >&nbsp;</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-md">
          <div className="car__details--bottom">
            <div className="car__details--info">
              <div className="car__details--info-row">
                <div className="car__details--title">{carInfo.name}</div>
                <div className="badge-container">
                  <a className="badge-transparent" href="#a">
                   {carInfo.price}
                  </a>
                </div>
                <div className="car__details--table">
                  <div className="car__details--table-row">
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">Make</div>
                      <div className="car__details--table-row-value">
                        {carInfo.make}
                      </div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">Model</div>
                      <div className="car__details--table-row-value">
                        {carInfo.model}
                      </div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">
                        Transmission:
                      </div>
                      <div className="car__details--table-row-value">
                        {carInfo.transmission}
                      </div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">VIN:</div>
                      <div className="car__details--table-row-value">
                        {carInfo.vin}
                      </div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">
                        Body Color:
                      </div>
                      <div className="car__details--table-row-value">{carInfo.color}</div>
                    </div>
                  </div>
                  <div className="car__details--table-row">
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">
                        Mileage:
                      </div>
                      <div className="car__details--table-row-value">
                        {carInfo.mileage}
                      </div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">
                        Engine Size:
                      </div>
                      <div className="car__details--table-row-value">{carInfo.engineSize}</div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">Year:</div>
                      <div className="car__details--table-row-value">{carInfo.year}</div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">Type:</div>
                      <div className="car__details--table-row-value">
                        {carInfo.type}
                      </div>
                    </div>
                    <div className="car__details--table-row-item">
                      <div className="car__details--table-row-title">
                        Interior Color:
                      </div>
                      <div className="car__details--table-row-value">{carInfo.interiorColor}</div>
                    </div>
                  </div>
                </div>
                <div className="badge-container hiden-element marginTop">
                  <a className="badge-transparent brown" href="#a">
                    Rent
                  </a>
                </div>
              </div>
              <div className="car__details--info-row">
                <div className="car__details--title">About the car</div>
                <div className="car__details--info-text-wrapper">
                  <div className="car__details--info-text-title">
                    {carInfo.nameFull}
                  </div>
                  <div className="car__details--info-text">
                   {carInfo.description}
                  </div>
                </div>
                <div className="badge-container hiden-element marginTop bottom visible">
                  <a className="badge-transparent brown" href="#a">
                    Rent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-services">
        <div className="container-md">
          <div className="section-services__top">
            <div className="title">Services</div>
            <div className="badge-container hiden-element">
              <a className="badge-transparent" href="#a">
                Submit your application
              </a>
            </div>
          </div>
          <div className="section-services__bottom">
          <ul className="section-services__list">
              <NavLink to="/shipping">
                <li className="section-services__item" style={{ backgroundImage: `url(${services_img_1})`  }}>
                  <p className="section-services__item--text">01 / SHIPPING</p>
                </li>
              </NavLink>
              <NavLink to="/warranty">
                <li className="section-services__item" style={{ backgroundImage: `url(${services_img_2})`  }}>
                  <p className="section-services__item--text">02 / WARRANTY PURCHASE</p>
                </li>
              </NavLink>
              <NavLink to="/financing">
                <li className="section-services__item" style={{ backgroundImage: `url(${services_img_3})`  }}>
                  <p className="section-services__item--text">03 / FINANCING</p>
                </li>
              </NavLink>
            </ul>
            <div className="badge-container hiden-badge visible">
              <a className="badge-transparent" href="#a">
                Submit your application
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-faq">
        <div className="container-md">
          <div className="section-faq__inner">
            <div className="section-faq__left hiden-element">
              <div className="section-faq__title-wrapper">
                <h3 className="title-left">FAQ</h3>
              </div>
              <a className="badge-transparent" href="#a">
                Ask a Question
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="badge-img"
                    d="M1 1H15M15 1V15M15 1L1 15"
                    stroke="#3A3C35"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="section-faq__right">
              <h3 className="title-left section-faq-mob">FAQ</h3>
              <Accordion sections={accordionData} />
              <div className="badge-container hiden-badge visible">
                <a className="badge-transparent" href="#a">
                  Ask a Question
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="badge-img"
                      d="M1 1H15M15 1V15M15 1L1 15"
                      stroke="#3A3C35"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-map">
        <div className="container-md">
          <div className="section-map--wrapper">
            <div className="section-map__top">
              <h3 className="title-left">
                Where
                <br />
                to find us
              </h3>
              <div className="section-map__top--actions">
                <a className="section-map__top--phone" href="tel:+17015811331">
                  +1 (701) 581-1331
                </a>
                <a
                  className="section-map__top--address"
                  href="https://www.google.com/maps/place/Чикаґо,+Іллінойс,+Сполучені+Штати+Америки/@41.8336152,-87.8967695,11z/data=!3m1!4b1!4m6!3m5!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!8m2!3d41.8781136!4d-87.6297982!16zL20vMDFfZDQ?authuser=0&entry=ttu"
                >
                  161 Trumpeter Ave, Soldotna, Alaska
                </a>
                <div className="badge-container">
                  <a className="badge-transparent" href="#!">
                    Submit your application
                  </a>
                </div>
              </div>
            </div>
            <div className="section-map__bottom">
              <div className="section-map__map-wrapper">
                <div style={{ width: "100%" }}>
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=Chicago%20Illinois+(Cars%20Classic%20Autotrader)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="google map"
                    width={"100%"}
                    height={"700"}
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
