import React from "react";
import NewsItem from "./NewsItem.jsx";

export default function News(props) {
  return (
    <>
      <div>
        Блок новостей. Мапим список новостей из отдельных компонентов.
        <NewsItem news={props.news} />
      </div>
    </>
  );
}
