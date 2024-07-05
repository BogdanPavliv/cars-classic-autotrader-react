import React from "react";
import {dataOurCars} from "../../utils/cars-main";

const Cars = () => {
  return (
    <>
      <section className="section-cars">
        <div className="container-md">
            <h1 className="title-top">Our cars</h1>
        </div>
        <div className="container-lg">
            <div className="cars--wrapper">
                <div className="cars">
                    {dataOurCars.map((card, i) => (
                        <div className="cars__card" key={i}>
                            <img className="cars__card--img" src={card.image} alt="" />
                            <div className="cars__card--content">
                                <div className="cars__card--price">{card.price}</div>
                                <h4 className="cars__card--name">{card.name}</h4>
                                <div className="cars__card--action">
                                    <a className="badge" href="#a">
                                        Rent
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path className="badge-img" d="M1 1H15M15 1V15M15 1L1 15" stroke="#3A3C35" strokeWidth="2" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    <div className="cars__card--mileage">
                                    {card.mileage}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
      </section>
    </>
  )
};

export default Cars;