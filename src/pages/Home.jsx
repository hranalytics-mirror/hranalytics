import React from "react";

import NewsletterSection from "../components/NewsletterSection";

import Quiz from "../components/QuizSection";
import Assessment from "../components/AssesmentSection";

import Review from "../components/ReviewSection";
import Hero from "../components/HeroSec";
import BooksCarousel from "../components/BookShowSection";
import About from "@/components/About";

function Home() {
  return (
    <div className="min-h-screen   mx-auto flex flex-col font-sans text-gray-800">
      <Hero />
      <About />

      <BooksCarousel />
      <Quiz />
      <Assessment />
      {/* <Blog /> */}
      <Review />
      <NewsletterSection id="newsletter" />
    </div>
  );
}

export default Home;
