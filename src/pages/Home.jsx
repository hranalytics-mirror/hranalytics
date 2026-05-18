import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import BookShow from "../components/BookShow";
import Quiz from "../components/Quiz";
import Assessment from "../components/Assessment";
import Blog from "../components/Blog";
import Review from "../components/Review";

function Home() {
  return (
    <div className="min-h-screen   mx-auto flex flex-col font-sans text-gray-800">
      <HeroSection id="hero" />
      <BookShow />
      <Quiz />

      <Assessment />

      {/* <Blog /> */}

      <Review />

      <NewsletterSection id="newsletter" />
    </div>
  );
}

export default Home;
