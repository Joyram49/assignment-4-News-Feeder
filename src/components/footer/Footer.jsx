import FooterTop from "./FooterTop";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className='bg-neutral-800 pb-8 pt-20  sm:pt-24 text-white'>
      <div className='container mx-auto'>
        <div className='xl:grid xl:grid-cols-12 xl:gap-8'>
          <FooterTop />
          <Subscribe />
        </div>
      </div>
      <div className='container mt-6 lg:mt-12'>
        <p className='text-center '>
          Copyright &copy;2023 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}
