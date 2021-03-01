import React from "react";
import NewsItem from "./NewsItem.jsx";

export default function News(props) {
  return (
    <>
      <div>
        Блок новостей
        <NewsItem news={props.news} />
        <NewsItem news={props.news} />
        <NewsItem news={props.news} />
        <NewsItem news={props.news} />
        <NewsItem news={props.news} />
      </div>
    </>
  );
}
