import React from "react";
import { NavLink } from "react-router-dom";
import services_img_1 from "../../img/section-services/services-img-1.jpg";
import services_img_2 from "../../img/section-services/services-img-2.jpg";
import services_img_3 from "../../img/section-services/services-img-3.jpg";

const Services = () => {
  return (
    <>
      <section className="section-services page-services">
        <div className="container-md">
          <div className="section-services__top">
            <div className="title-top">Services</div>
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
    </>
  )
};

export default Services;