import React from "react";
import SkeletonCard from "./skeleton/SkeletonCard";
import SkeletonLeftCard from "./skeleton/SkeletonLeftCard";
import SkeletonRightCard from "./skeleton/SkeletonRightCard";

export default function Loader() {
  return (
    <main className='my-10 lg:my-14'>
      <div className='container mx-auto grid grid-cols-12 gap-24'>
        <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
          <SkeletonLeftCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>

        <div className='col-span-12 self-start xl:col-span-4'>
          <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
            <SkeletonRightCard />
          </div>
        </div>
      </div>
    </main>
  );
}
