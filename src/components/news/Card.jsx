import decideImageLoad from "../../utils/decideImageLoad";
import decideSpecificClass from "../../utils/decideSpecificClass";
import { timeAgo } from "../../utils/getOrgainezTime";
export default function Card({ article, index, right }) {
  const { title, author, urlToImage, publishedAt, content } = article || {};

  // display thumb only for certain news items conditionally
  const imageLoadDecide = decideImageLoad(right, index, urlToImage, author);

  // decide className only for certain news items conditionally
  const specificClass = decideSpecificClass(right, index);

  // get time when published
  const getTime = timeAgo(publishedAt);

  return (
    <div className={specificClass}>
      {/* <!-- info --> */}
      <div className='col-span-12 lg:col-span-4'>
        <a href='#'>
          <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>{title}</h3>
        </a>
        <p className='text-base text-[#5C5955]'>{content}</p>
        <p className='mt-5 text-base text-[#5C5955]'>{getTime}</p>
      </div>
      {/* <!-- thumb --> */}
      {imageLoadDecide}
    </div>
  );
}
