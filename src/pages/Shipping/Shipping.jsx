import React from "react";
import page_shipping_img from "../../img/page-shipping/shipping-img.jpg";


const Shipping = () => {
  
  return (
    <>
      <section className="section-shipping">
        <div className="container-md">
            <div className="section-shipping__top">
              <div className="title-top">SHIPPING</div>
            </div>
          <div className="section-shipping__bottom">
            <div className="section-shipping__inner">
                <div className="section-shipping__left">
                    <img className="section-shipping__img" src={page_shipping_img} alt="" />
                </div>
                <div className="section-shipping__right">
                    <div className="section-shipping__content">
                        <p className="section-shipping__text">
                          We partner with trusted shipping professionals experienced in handling classic automobiles. From meticulous loading to secure transit, we prioritize the safety of your vehicle throughout its journey to your doorstep. Our global shipping network allows us to cater to enthusiasts worldwide, bringing the allure of classic cars to every corner of the globe.
                        </p>
                        <p className="section-shipping__text">
                          Rest easy knowing that your classic car is in the hands of experts who share your passion for preserving automotive history. Whether it’s a local delivery or an international shipment, ALL CLASSIC MOTORS VELVA is committed to ensuring that your timeless vehicle arrives with the same elegance and care it had in our showroom.
                        </p>
                        <p className="section-shipping__text">
                          Experience worry-free shipping with ALL CLASSIC MOTORS VELVA and let us bring the joy of classic cars directly to you. Your journey with your classic car starts from the moment it leaves our hands to the moment it arrives at yours.
                        </p>
                    </div>
                    <div className="badge-container">
                        <a className="badge-transparent" href="#!">Deliver the car</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;