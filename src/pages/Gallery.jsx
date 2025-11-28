import { useState, useEffect } from "react";
import galleryData from "../data/gallery.js";
import Albumlist from "../components/Albumlist.jsx";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const section = galleryData[index];

  const [mainLoaded, setMainLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState([]);
  const [viewerImage, setViewerImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    galleryData.forEach((section) => {
      section.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  function prev() {
    setMainLoaded(false);
    setThumbLoaded([]);
    setIndex((i) => (i - 1 + galleryData.length) % galleryData.length);
  }

  function next() {
    setMainLoaded(false);
    setThumbLoaded([]);
    setIndex((i) => (i + 1) % galleryData.length);
  }

  const fade = (loaded) =>
    `opacity-0 transition-opacity duration-500 ${loaded ? "opacity-100" : ""}`;

  return (
    <section className="px-4 py-6">
      {/* PHOTOGRAPHS SECTION CONTAINER */}
      <div className="max-w-3xl mx-auto w-full">
        <h3 className="text-center text-lg tracking-wide">PHOTOGRAPHS</h3>

        <div className="flex items-center justify-between mt-4">
          <button onClick={prev} aria-label="prev">
            &lt;
          </button>
          <div className="flex-1 px-4 text-center text-sm tracking-wider">
            {section.title}
          </div>
          <button onClick={next} aria-label="next">
            &gt;
          </button>
        </div>

        <div className="mt-4 border p-3">
          {/* Main image */}
          <div className="aspect-[8/3] w-full mb-3 overflow-hidden">
            <img
              src={section.images[0]}
              alt="main"
              onLoad={() => setMainLoaded(true)}
              onClick={() => setViewerImage(section.images[0])} // CLICK TO ZOOM
              className={`w-full h-full object-cover cursor-zoom-in ${fade(
                mainLoaded
              )}`}
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {section.images.slice(1, 4).map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded">
                <img
                  src={src}
                  alt={`thumb-${i}`}
                  onLoad={() =>
                    setThumbLoaded((prev) => {
                      const updated = [...prev];
                      updated[i] = true;
                      return updated;
                    })
                  }
                  onClick={() => setViewerImage(src)} // CLICK TO ZOOM
                  className={`w-full h-full object-cover cursor-zoom-in ${fade(
                    thumbLoaded[i]
                  )}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Albumlist
        items={galleryData}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
        title="Albums"
      />
      {/* FILMS SECTION CONTAINER */}
      <div className="max-w-3xl mx-auto my-12 w-full">
        <h3 className="text-center text-lg tracking-wide">FLIMS</h3>

        <div className="flex items-center justify-between">
          <button>&lt;</button>
          <div className="flex-1 px-4 my-4 text-center text-sm tracking-wider">
            ABOUT YOU
          </div>
          <button>&gt;</button>
        </div>

        <div className="border p-3">
          <div className="mt-">
            {/* Main film image */}
            <div className="aspect-[8/3] w-full mb-3 overflow-hidden">
              <img
                src="/images/film-main.jpg"
                alt="film"
                onClick={() => setViewerImage("/images/film-main.jpg")} // CLICK TO ZOOM
                className="w-full h-full object-cover cursor-zoom-in opacity-0 animate-fadeIn"
              />
            </div>

            {/* Film thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/film-1.jpg"
                  alt="f1"
                  onClick={() => setViewerImage("/images/film-1.jpg")} // CLICK TO ZOOM
                  className="w-full h-full object-cover cursor-zoom-in opacity-0 animate-fadeIn"
                />
              </div>

              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/film-2.jpg"
                  alt="f2"
                  onClick={() => setViewerImage("/images/film-2.jpg")} // CLICK TO ZOOM
                  className="w-full h-full object-cover cursor-zoom-in opacity-0 animate-fadeIn"
                />
              </div>

              <div />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-300" />

      {/* FULLSCREEN VIEWER */}
      {viewerImage && (
        <div
          onClick={() => setViewerImage(null)}
          className="
      fixed inset-0 
      backdrop-blur-lg bg-black/60
      flex items-center justify-center
      z-50
      cursor-default
      animate-fadeIn
    "
        >
          <img
            src={viewerImage}
            alt="full-view"
            onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
            className="
        max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl
        opacity-0
        transition-opacity duration-300
        cursor-default
      "
          />
        </div>
      )}
    </section>
  );
}
