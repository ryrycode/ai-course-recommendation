"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import AssessmentCategories from "../components/AssessmentCategories";
import Footer from "@/components/Footer";

export default function Home() {
  return (  
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AssessmentCategories />
      <Footer />
    </>
  );
}