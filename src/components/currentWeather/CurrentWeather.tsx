import React from "react";
import { Container } from "../../style/style";
import { TopContainer, Weathercontainer } from "./weatherStyle";

const CurrentWeather = () => {
  return (
    <Weathercontainer>
      <TopContainer>
        <div>
          <p className="city">city</p>
          <p className="desc">sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </TopContainer>
    </Weathercontainer>
  );
};

export default CurrentWeather;
