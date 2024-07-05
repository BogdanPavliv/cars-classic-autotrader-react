import React from "react";
import page_warranty_img from "../../img/page-warranty/warranty-img.jpg";


const Warranty = () => {
  
  return (
    <>
      <section className="section-warranty">
        <div className="container-md">
            <div className="section-warranty__top">
              <div className="title-top">WARRANTY PURCHASE</div>
            </div>
          <div className="section-warranty__bottom">
            <div className="section-warranty__inner">
                <div className="section-warranty__left">
                    <img className="section-warranty__img" src={page_warranty_img} alt="" />
                </div>
                <div className="section-warranty__right">
                    <div className="section-warranty__content">
                        <p className="section-warranty__text">
                          Our comprehensive warranty options provide an added layer of protection, ensuring that you can fully enjoy the beauty of your timeless vehicle without worry.
                        </p>
                        <p className="section-warranty__text">
                          Choose from our range of warranty packages tailored to meet the unique needs of classic car enthusiasts. Our warranties cover essential components, providing you with confidence and assurance in the reliability of your cherished automobile.
                        </p>
                        <p className="section-warranty__text">
                          With ALL CLASSIC MOTORS VELVA’s warranty options, you’re not just investing in protection; you’re investing in the longevity and continued performance of your classic car. Our commitment to your satisfaction extends beyond the showroom, offering a safety net that aligns with the timeless quality of the vehicles in our collection.
                        </p>
                    </div>
                    <div className="badge-container">
                        <a className="badge-transparent" href="#!">I want to put</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Warranty;