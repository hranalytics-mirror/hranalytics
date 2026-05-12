import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "A must- read for every HR professional who wants to move beyond dashboards.",
      author: "- HR Manager"
    },
    {
      id: 2,
      text: "The real- world stories and analytics perspective are eye- opening !",
      author: "- People Analytics Lead"
    },
    {
      id: 3,
      text: "Finally, a book that connects data with real human behavior.",
      author: "CHRO"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Quote Marks */}
      <div className="absolute top-10 left-10 text-9xl text-pink-50 font-serif opacity-50 select-none">"</div>
      <div className="absolute bottom-10 right-10 text-9xl text-pink-50 font-serif opacity-50 select-none">"</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide uppercase mb-12">VOICES THAT INSPIRE</h2>

        <div className="flex items-center justify-between relative max-w-5xl mx-auto">
          <button className="bg-white border border-gray-100 shadow-sm rounded-full p-2 text-gray-400 hover:text-primary transition z-10 flex-shrink-0">
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col items-center text-center">
                <div className="flex text-yellow-400 mb-4 gap-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 italic max-w-xs">
                  {review.text}
                </p>
                <p className="text-xs font-bold text-gray-800 mt-auto uppercase tracking-wide">
                  {review.author}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-pink-50 border border-pink-100 shadow-sm rounded-full p-2 text-pink-500 hover:text-secondary transition z-10 flex-shrink-0">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
