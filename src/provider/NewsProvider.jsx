import React, { useState } from "react";
import { NewsContext, SearchActiveContext } from "../context";

export default function NewsProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [newsFilter, setNewsFilter] = useState({
    filter: null,
    searchTerm: "",
  });
  return (
    <NewsContext.Provider value={{ newsFilter, setNewsFilter }}>
      <SearchActiveContext.Provider value={{ isActive, setIsActive }}>
        {children}
      </SearchActiveContext.Provider>
    </NewsContext.Provider>
  );
}
