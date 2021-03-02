import React from "react";
import Date from "./Date";
import Region from "./Region";
import News from "./News/News";
import Quotes from "./Quotes";
import Widget from "./Widget/Widget";
import Search from "./Search/Search";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

export default function Page(props) {
  return (
    <>
      <Date />
      <Region />
      <News news={props.news} />
      <Widget data={props.data} />
      <Quotes quotes={props.quotes} />
      <Search searchExample={props.searchExample} />
      <Banner>{props.children[0]}</Banner>
      <Services
        weather={props.weather}
        visited={props.visited}
        tvProg={props.tvProg}
        aether={props.aether}
        aetherIcon={props.children[1]}
      />
    </>
  );
}
