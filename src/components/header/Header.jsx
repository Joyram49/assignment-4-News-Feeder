import Navbar from "./Navbar";
import HeaderTop from "./headerTop/HeaderTop";

export default function Header() {
  return (
    <nav className='border-b border-black py-6 md:py-8'>
      <HeaderTop />
      <Navbar />
    </nav>
  );
}
