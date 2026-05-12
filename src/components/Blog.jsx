import React from "react";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Why High Engagement Doesn't Always Mean High Performance",
  },
  {
    id: 2,
    image: blog2,
    title: "The Hidden Reason Behind Early Attrition (90 Days Problem)",
  },
  {
    id: 3,
    image: blog3,
    title: "What HR Dashboards Don't Show",
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase text-center flex-1">
          LATEST INSIGHTS& STORIES
        </h2>
        <a
          href="#"
          className="text-primary font-bold text-xs uppercase hover:underline hidden sm:block"
        >
          VIEW ALL ARTICLES <span>→</span>
        </a>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md px-2 py-2"
          >
            {/* Left Image */}
            <div className="w-[45%]">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <h3 className="text-[12px] font-bold  tracking-wide text-[#1B1464]">
                {blog.title}
              </h3>

              <button className="mt-5 flex items-center gap-2 text-[15px] font-semibold text-pink-600 transition group-hover:gap-3">
                Read More
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
