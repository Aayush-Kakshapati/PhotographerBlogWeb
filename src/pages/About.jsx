import React from "react";

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-14">
      {/* Photo */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/about/profile.jpg" // need to ask for picture
          alt="Portrait"
          className="w-48 h-48 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold tracking-wide mb-2">
          SHUSANG RG
        </h1>
        <p className="text-gray-600 text-sm tracking-wide">
          Photographer / Editor
        </p>
      </div>

      {/* About Text */}
      <div className="text-gray-700 text-base leading-relaxed space-y-6 mb-10">
        <p>
          I’m a passionate photographer based in Nepal currently Tokyo with a
          deep love for capturing real emotions, natural light, and storytelling
          moments. My photography style is inspired by simplicity, authenticity,
          and the beauty found in everyday life.
        </p>

        <p>
          Over the years, I’ve worked with clients from various backgrounds —
          from portraits, lifestyle, and events to creative shoots that involve
          unique artistic direction. Every photo session for me is a
          collaboration where we bring your vision to life.
        </p>

        <p>
          My goal is to provide you with images that feel timeless, warm, and
          meaningful. Whether it’s a personal portrait, a special occasion, or a
          full creative project, I pour my heart into every frame.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center gap-4 mt-10">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 font-medium underline underline-offset-4"
        >
          @shusangrg
        </a>

        <button className="px-6 py-3 bg-black text-white rounded-lg text-sm tracking-wide hover:bg-gray-900 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
