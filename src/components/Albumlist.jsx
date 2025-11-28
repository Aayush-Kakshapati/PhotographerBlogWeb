import { useState, useRef, useEffect } from "react";

export default function Albumlist({
  items, // array of objects to list
  currentIndex, // current selected index
  setIndex, // function to set selected index
  title = "Items", // type of content, e.g., "Albums" or "Films"
}) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, [open, items]);

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-center w-full underline opacity-70 hover:opacity-100"
      >
        {open ? `Hide ${title}` : `Show ${title}`}
      </button>

      {/* Collapsible list */}
      <div
        ref={containerRef}
        style={{
          maxHeight: open ? `${height}px` : "0px",
          transition: "max-height 0.5s ease",
          overflow: "hidden",
        }}
        className="mt-3 border-grey-500 rounded bg-gray-50 shadow-sm"
      >
        <div className="p-3">
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setIndex(i);
                    setOpen(false); // close when chosen
                  }}
                  className={`w-full text-left text-sm p-1 rounded hover:bg-gray-200 transition
                    ${
                      i === currentIndex
                        ? "font-semibold text-black"
                        : "text-gray-600"
                    }
                  `}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
