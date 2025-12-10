import Link from 'next/link';
import { FaRegClock  } from "react-icons/fa6";
import { CiCalendar  } from "react-icons/ci";
import { TfiAngleLeft } from "react-icons/tfi";
import { blogs } from '../../data/blog';

export default async function BlogPost({ params }) {
 
  const { slug } = await params;
  
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Get other blogs (excluding current blog) - show latest 3
  const featuredBlogs = blogs
    .filter(b => b.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
     
      <div className="relative h-96 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-80`} />
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-black px-4">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              {blog.category}
            </span>
             <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{blog.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span className="flex items-center text-white">
                <CiCalendar className="w-5 h-5 mr-2 text-green-500" />
                {blog.date}
              </span>
              <span className="flex items-center text-white">
                <FaRegClock className="w-5 h-5 mr-2 text-green-500" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} className="blog-content" />
          
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              <TfiAngleLeft  className="w-5 h-5 mr-1" />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* Featured Blogs Section */}
      {featuredBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">More Posts You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((featuredBlog) => (
              <Link 
                key={featuredBlog.slug} 
                href={`/blog/${featuredBlog.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${featuredBlog.gradient} opacity-60`} />
                    <img 
                      src={featuredBlog.image} 
                      alt={featuredBlog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {featuredBlog.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {featuredBlog.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                      {featuredBlog.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-slate-500 space-x-4">
                      <span className="flex items-center">
                        <CiCalendar className="w-3 h-3 mr-1" />
                        {featuredBlog.date}
                      </span>
                      <span className="flex items-center">
                        <FaRegClock className="w-3 h-3 mr-1" />
                        {featuredBlog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}