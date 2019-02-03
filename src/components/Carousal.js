import React from "react";
import Flickity from "react-flickity-component";
import "../assets/flickity.css";

// import "./styles.css";

const flickityOptions = {
  pageDots: false,
  wrapAround: true,
  groupCells: true //better than setting a number?
};
export default function Carousel() {
  return (
    <Flickity options={flickityOptions}>
        <div>   
            <img src="https://placeimg.com/300/400/animals" />
            <h2>meh</h2>
            <h3>blah</h3>
        </div>
      
      
      <img src="https://placeimg.com/300/400/nature" />
      <img src="https://placeimg.com/300/400/architecture" />
      <img src="https://placeimg.com/300/400/tech" />
      <img src="https://placeimg.com/300/400/nature" />
      <img src="https://placeimg.com/300/400/any" />
    </Flickity>
  );
}

