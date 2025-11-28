import heroImg from "../assets/Glimpse_of_the_green_1.webp";

export function Hero() {
  return (
    <section className="relative w-full h-[68vh] md:h-[75vh] overflow-hidden">
      <img
        src={heroImg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute left-6 bottom-14 text-white pr-6">
        <h2 className="text-3xl md:text-4xl font-light leading-tight">
          Capturing the
          <br />
          <span className="font-semibold">Feeling,</span>
          <br />
          Not Just the Scene
        </h2>
      </div>

      <div className="absolute bottom-4 left-0 w-full flex justify-center">
        {/* small white bar to hint scroll */}
        <div className="w-12 h-1 bg-white opacity-70 rounded" />
      </div>
    </section>
  );
}
export default Hero;
