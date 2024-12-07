import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-[200px] mx-auto max-w-5xl">
    <motion.h1
      className="font-black text-white mb-2 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Blog Search Web
    </motion.h1>
    <motion.p
      className="sm:text-[18px] text-md md:text-md text-secondary text-justify tracking-wider"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      Blog website is a dynamic and interactive platform designed to share
      knowledge, insights, and experiences across a wide range of topics.
      Built with a modern tech stack, the site offers a seamless browsing
      experience, featuring responsive design, intuitive navigation, and
      visually appealing layouts.
    </motion.p>
  </section>
  );
};

export default Hero;
