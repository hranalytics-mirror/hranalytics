import React from 'react';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Why High Engagement Doesn't Always Mean High Performance",
      image: "bg-blue-100", // placeholder color
      imageIcon: "👥🧩",
      link: "#"
    },
    {
      id: 2,
      title: "The Hidden Reason Behind Early Attrition ( 90 Days Problem )",
      image: "bg-red-100", // placeholder color
      imageIcon: "🚪🚶",
      link: "#"
    },
    {
      id: 3,
      title: "What HR Dashboards Don't Show",
      image: "bg-gray-800", // placeholder color
      imageIcon: "📊📉",
      link: "#"
    }
  ];

  return (
    <section className="pt-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase text-center flex-1">LATEST INSIGHTS& STORIES</h2>
          <a href="#" className="text-primary font-bold text-xs uppercase hover:underline hidden sm:block">VIEW ALL ARTICLES</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${article.image} flex items-center justify-center text-6xl relative overflow-hidden`}>
                {article.imageIcon}
                {/* Overlay gradient for aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-gray-800 text-lg leading-snug mb-6">
                  {article.title}
                </h3>
                <a href={article.link} className="text-secondary font-semibold text-sm hover:text-pink-800 transition flex items-center gap-1 w-max">
                  Read More <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <a href="#" className="text-primary font-bold text-xs uppercase hover:underline">VIEW ALL ARTICLES</a>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
