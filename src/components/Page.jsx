import React from "react";
import News from "./News/News";
import Quotes from "./Quotes";
import Date from "./Date";
import Widget from "./Widget/Widget";
import Search from "./Search/Search";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

export default function Page(props) {
  return (
    <>
      <Date />
      <News news={props.news} />
      <Widget />
      <Quotes quotes={props.quotes} />
      <Search />
      <Banner />
      <Services
        visited={props.visited}
        tvProg={props.tvProg}
        aether={props.aether}
      />
    </>
  );
}
