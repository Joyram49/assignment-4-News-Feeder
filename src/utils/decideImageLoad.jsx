import React from "react";

export default function decideImageLoad(right, index, urlToImage, author) {
  let imageLoadDecide = null;
  if (right && index === 0) {
    imageLoadDecide = (
      <div className='col-span-12 lg:col-span-8'>
        <img className='w-full' src={urlToImage} alt='thumb' />
        <p className='mt-5 text-base text-[#5C5955]'>{author}</p>
      </div>
    );
  }
  if (!right && (index === 0 || index === 1)) {
    imageLoadDecide = (
      <div className='col-span-12 lg:col-span-8'>
        <img className='w-full' src={urlToImage} alt='thumb' />
        <p className='mt-5 text-base text-[#5C5955]'>{author}</p>
      </div>
    );
  }
  return imageLoadDecide;
}
