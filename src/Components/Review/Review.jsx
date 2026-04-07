import React from "react";

const Review = () => {
  return (
    <div className="text-center text-white bg-purple-500">
      <h1 className="text-3xl font-semibold py-10">Trusted by Millions, Built for You</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-15 lg:gap-25 mx-auto pb-10">
        <div>
            <p className="">Total Downloads</p>
            <h1 className="text-4xl font-bold my-4">29.6M</h1>
            <p className="text-slate-400">21% more than last month</p>
        </div>
        <div>
            <p className="">Total Reviews</p>
            <h1 className="text-4xl font-bold my-4">906K</h1>
            <p className="text-slate-400">46% more than last month</p>
        </div>
        <div>
            <p className="">Active Apps</p>
            <h1 className="text-4xl font-bold my-4">132+</h1>
            <p className="text-slate-400">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Review;