import { useContext } from "react";
import { NewsContext, SearchActiveContext } from "../../../context";

export default function SearchBar() {
  const { isActive, setIsActive } = useContext(SearchActiveContext);
  const { newsFilter, setNewsFilter } = useContext(NewsContext);

  // debounce function
  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  // Debounced search function
  const doSearch = (value) => {
    setNewsFilter({ ...newsFilter, filter: null, searchTerm: value });
  };
  const handleChange = debounceHandler(doSearch, 500);

  return (
    <div className='flex items-center space-x-3 lg:space-x-8 relative w-56  drop-shadow-sm'>
      <div
        className={`absolute w-full transition-all  ease-in-out  duration-300 origin-right ${
          isActive
            ? "transform scale-x-1 visible"
            : "transform scale-x-0 invisible"
        }`}
      >
        <input
          type='search'
          className=' rounded-md  outline-none pl-2 pr-6 py-1 w-full bg-[#bdc5c7] ring-1 ring-slate-800/30 text-slate-700 text-base font-medium'
          placeholder='Search News'
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.8'
        stroke='currentColor'
        className={`w-10 h-10 absolute right-0 z-10 block text-slate-500/90 cursor-pointer  text-gray-800 transition-all  ease-in-out  duration-300 ${
          isActive
            ? "transform translate-x-1 scale-[80%] bg-gray-200 rounded-r ring-1 ring-slate-200 "
            : "transform scale-1 bg-inherit"
        }`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>
    </div>
  );
}
