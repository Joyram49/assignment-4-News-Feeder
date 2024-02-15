import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonRightCard() {
  return (
    <div className='col-span-12 mb-6 md:col-span-8 animate-pulse'>
      {/* <!-- info --> */}
      <div className='col-span-12 lg:col-span-4'>
        <SkeletonElement type='title' />
        <SkeletonElement type='title' />
        <SkeletonElement type='title-half' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='half-text' />
        <SkeletonElement type='pill' />
      </div>
      {/* <!-- thumb --> */}
      <div className='col-span-12 lg:col-span-8 '>
        <SkeletonElement type='banner' />
        <div className='flex gap-1 items-center'>
          <SkeletonElement type='s-round' />
          <SkeletonElement type='s-round' />
          <SkeletonElement type='s-round' />
          <SkeletonElement type='line' />
        </div>
      </div>
    </div>
  );
}
