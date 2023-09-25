import React, { Component } from "react";
import Slider from "react-slick";
import './Header.scss'
import LeanCard from "./LeanCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="home">
        <Slider {...settings}>
            <div className="wrap wrap1">
                <div className="card_wrapper">
                    <LeanCard/>
                </div>
            </div>
            <div className="wrap wrap2">
                <div className="card_wrapper">
                    <LeanCard/>
                </div>
            </div>
            <div className="wrap wrap3">
                <div className="card_wrapper">
                    <LeanCard/>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}