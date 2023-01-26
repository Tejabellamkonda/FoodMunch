import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const MenuItem = (props) => {
  const { Item } = props;

  return (
    <div className="col-12  col-md-6 col-lg-3">
      {/*<Link to={Item.name} className="NavLink"> */}
      <div className="shadow menu-item-card p-3 mb-3">
        <img
          src={Item.imageUrl}
          className="menu-item-image w-100"
          alt={Item.name}
        />
        <h1 className="menu-card-title">{Item.name}</h1>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default MenuItem;
