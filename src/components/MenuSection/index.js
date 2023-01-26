import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "../Header";
import MenuItem from "../MenuItem";
import ItemsList from "../data";
import "./index.css";

const ItemsMenu = () => {
  {
    /*
  const [isLoading, setIsLoading] = useState(true);
  const [MenuList, setMenuList] = useState([]);

  const getMenuList = async () => {
    const response = await fetch("http://localhost:3008/menu");
    const data = await response.json();

    setMenuList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMenuList();
  }, []);
*/
  }

  return (
    <>
      <Navbar />

      <div className=" explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="menu-section-heading">Explore Menu</h1>
            </div>
            {isLoading ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="grey"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              ItemsList.map((eachItem) => (
                <MenuItem key={eachItem.id} Item={eachItem} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsMenu;
