import { useParams } from "react-router-dom";
import galleryData from "../data/gallery";

export default function AlbumView() {
  const { id } = useParams();
  const album = galleryData[id];

  return (
    <section className="px-4 py-6 max-w-4xl mx-auto">
      <h2 className="text-center text-xl mb-6">{album.title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {album.images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-48 object-cover rounded cursor-zoom-in"
          />
        ))}
      </div>
    </section>
  );
}
