import Date from "./Date";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className='container mx-auto flex flex-wrap items-center justify-between gap-6'>
      <Date />
      <Logo />
      <SearchBar />
    </div>
  );
}
