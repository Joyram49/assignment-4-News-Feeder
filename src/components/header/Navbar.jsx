import { useContext } from "react";
import { NewsContext, SearchActiveContext } from "../../context";
import useNewsQuery from "../../hooks/useNewsQuery";

export default function Navbar() {
  const { newsFilter, setNewsFilter } = useContext(NewsContext);
  const { setIsActive } = useContext(SearchActiveContext);
  const { categoryName } = useNewsQuery(newsFilter);

  // handle filter button clicked
  const handleNewsFilter = (value) => {
    setNewsFilter({
      ...newsFilter,
      filter: value,
      searchTerm: "",
    });
    setIsActive(false);
  };

  return (
    <div className='container mx-auto mt-6'>
      <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
        <li onClick={() => handleNewsFilter("general")}>
          <a
            href='#'
            className={`${
              categoryName === ("general" || undefined) ? "text-[#00d991]" : ""
            }`}
          >
            General
          </a>
        </li>
        <li onClick={() => handleNewsFilter("business")}>
          <a
            href='#'
            className={`${categoryName === "business" ? "text-[#00d991]" : ""}`}
          >
            Business
          </a>
        </li>
        <li onClick={() => handleNewsFilter("entertainment")}>
          <a
            href='#'
            className={`${
              categoryName === "entertainment" ? "text-[#00d991]" : ""
            }`}
          >
            Entertainment
          </a>
        </li>
        <li onClick={() => handleNewsFilter("health")}>
          <a
            href='#'
            className={`${categoryName === "health" ? "text-[#00d991]" : ""}`}
          >
            Health
          </a>
        </li>
        <li onClick={() => handleNewsFilter("science")}>
          <a
            href='#'
            className={`${categoryName === "science" ? "text-[#00d991]" : ""}`}
          >
            Science
          </a>
        </li>
        <li onClick={() => handleNewsFilter("sports")}>
          <a
            href='#'
            className={`${categoryName === "sports" ? "text-[#00d991]" : ""}`}
          >
            Sports
          </a>
        </li>
        <li onClick={() => handleNewsFilter("technology")}>
          <a
            href='#'
            className={`${
              categoryName === "technology" ? "text-[#00d991]" : ""
            }`}
          >
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}
