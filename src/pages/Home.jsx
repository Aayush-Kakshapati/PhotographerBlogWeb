import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Gallery from "../pages/Gallery";
import Services from "../components/Services";

export function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans mx-auto">
      {" "}
      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Services />
      </main>
    </div>
  );
}

export default Home;
