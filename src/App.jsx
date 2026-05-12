import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import QuizBanner from "./components/QuizBanner";
import AssessmentSection from "./components/AssessmentSection";
import BlogSection from "./components/BlogSection";
import Testimonials from "./components/Testimonials";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import BookShow from "./components/BookShow";
import Quiz from "./components/Quiz";
import Assessment from "./components/Assessment";
import Blog from "./components/Blog";
import Review from "./components/Review";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen   mx-auto flex flex-col font-sans text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* <HeroSection /> */}
        <BookShow />
        <Quiz />
        {/* <QuizBanner /> */}
        <Assessment />
        {/* <AssessmentSection /> */}
        <Blog />

        {/* <BlogSection /> */}
        <Review />
        {/* <Testimonials /> */}
      </main>
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
