import React from "react";
import SearchMenu from "./SearchMenu";
import SearchLogo from "./SearchLogo";
import SearchField from "./SearchField";
import SearchExample from "./SearchExample";

export default function Search() {
  return (
    <div>
      Блок поиска
      <SearchMenu />
      <SearchLogo />
      <SearchField />
      <SearchExample />
    </div>
  );
}
