import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
// import linkedin from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-sm text-gray-600">
      <div className="flex items-center justify-center gap-4 mb-4">
        <a
          href="https://www.instagram.com/shusangrg/"
          aria-label="instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="ig" className="w-[20px]" />
        </a>
        <a
          href="https://www.tiktok.com/@shusangrg"
          aria-label="tiktok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktok} alt="tt" className="w-[20px]" />
        </a>
        {/* <a href="#" aria-label="linkedin">
          <img src={linkedin} alt="lin" className="w-[20px]" />
        </a> */}
      </div>
      <div>© 2025 ShusanGrg Photography</div>
    </footer>
  );
}
