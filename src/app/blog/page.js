import React from 'react'
import Link from 'next/link';
import { FaRegClock,FaArrowRightLong  } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";

import { blogs } from '../data/blog';

const page = () => {
  return (
   <>
     {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mt-10 ">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 ">
            Discover Blogs That
            <span className="leading-18 text-4xl md:text-5xl block bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
              Captivate & Inform
            </span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
              <article className="group rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-90`} />
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover mix-blend-overlay" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center">
                      <CiCalendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    {/* <span className="text-sm font-medium">{blog.author}</span> */}
                    <span className="flex items-center text-teal-600 font-semibold">
                      Read More
                      <FaArrowRightLong className="w-5 h-5 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
   </>
  )
}

export default page