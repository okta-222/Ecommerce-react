import avatar7 from "../../../../../shared/assets/images/ju14.avif";
import avatar8 from "../../../../../shared/assets/images/ju2.avif";
import FeaturedCard from "../../../../design-system/components/FeaturedCard/featuredCard";
import data from "./data";
import "./Featured.scss";
import React, { useState, useEffect } from "react";

export default function Featured() {
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   let result = await fetch(
  //     "https://fake-e-commerce-api.onrender.com/product"
  //   );
  //   result = await result.json();
  //   setData(result)
  // },[]);
  return (
    <div className="features">
      <div className="container">
        <h2 className="head-title">Featured Products</h2>
        <p className="paragraph-title">
          Street art salvia irony wolf waistcoat actually lemon
        </p>
        <div className="wrapper-features">
          <div className="features-left">
            <div className="picture-features">
              <img src={avatar7} alt="img" />
              <img src={avatar8} alt="img" />
            </div>
            <div className="text-feature-one">
              <p>Lemon juice</p>
              <h3>
                50% Off Lemon
                <br /> Juice
              </h3>
              <span>
                Buy Now <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
            <div className="text-feature-two">
              <p>-20% Off</p>
              <h3>
                Organic Mango
                <br />
                Fresh Juice
              </h3>
              <span>
                Buy Now <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>

          <div className="features-right">
            {data.map((property) => (
              <FeaturedCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
