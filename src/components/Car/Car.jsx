import { NavLink } from "react-router-dom";

const Car = ({image, price, name, badge, mileage, index}) => {
  return (
    <NavLink to={`/car/${index}`}>
      <div className="cars__card">
        <img className="cars__card--img" src={image} alt="" />
        <div className="cars__card--content">
          <div className="cars__card--price">{price}</div>
          <h4 className="cars__card--name">{name}</h4>
          <div className="cars__card--action">
            <span className="badge" href="#a"> {badge}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="badge-img" d="M1 1H15M15 1V15M15 1L1 15" stroke="#3A3C35" strokeWidth="2"/>
              </svg>
            </span>
            <div className="cars__card--mileage">{mileage}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Car;
