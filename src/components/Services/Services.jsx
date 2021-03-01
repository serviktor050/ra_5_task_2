import React from "react";
import ServiceWeather from "./ServiceWeather";
import ServiceTravel from "./ServiceTravel";
import ServiceVisited from "./ServiceVisited";
import ServiceTvProgram from "./ServiceTvProgram";
import ServiceAether from "./ServiceAether";

export default function Services(props) {
  return (
    <div>
      Блок с услугами
      <ServiceWeather />
      <ServiceTravel />
      <ServiceVisited visited={props.visited} />
      <ServiceTvProgram tvProg={props.tvProg} />
      <ServiceAether aether={props.aether} />
    </div>
  );
}
