import Package from "../components/Package";

export default function Pricing() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans max-w-3xl mx-auto">
      {/* Hero Title */}
      <section className="px-6 pt-10 pb-6 text-center">
        <h1 className="text-2xl md:text-4xl tracking-wide font-light">
          LET’S CAPTURE OUR
          <br />
          DREAMS
        </h1>
      </section>

      {/* Intro Text Block */}
      <section className="px-6 mb-10 text-center text-sm md:text-base leading-relaxed">
        <p>Because your story deserves more than a countdown.</p>
        <p className="text-red-400 italic mt-1">
          “Time should not be a restriction to capturing your dreams.”
        </p>

        <p className="mt-4">
          I believe in creating an environment where you feel seen,
          <span className="text-red-400"> valued</span>, and unhurried. Every
          shoot is personal—no rigid time slots, no rush. Just{" "}
          <span className="text-red-400">you, your story</span>, and the space
          to
          <span className="text-red-400">
            {" "}
            create something beautiful, together.
          </span>
        </p>

        <p className="mt-4">
          Whether it’s a <span className="font-semibold">portrait session</span>
          , a<span className="font-semibold"> cosplay transformation</span>, or
          a brand story—each experience is tailored with care and intention.
        </p>
      </section>

      {/* Pricing Header */}
      <h2 className="px-6 text-xl md:text-2xl tracking-wide font-semibold mb-4">
        PRICING & PACKAGES
      </h2>

      {/* Package Component */}
      <div className="divide-y divide-gray-200">
        <Package
          title="Essence"
          description="A simple yet meaningful shoot that captures your spirit."
          bullets={[
            "Pre-shoot creative consultation",
            "1 location, 1 outfit",
            "10–15 fully edited high-res photos",
            "Online gallery delivery",
            "Creative direction and posing guidance",
          ]}
          highlight="Ideal for portraits or personal branding"
        />
      </div>

      {/* Additional Info */}
      <section className="px-6 py-10 text-sm md:text-base leading-relaxed">
        <h3 className="font-semibold mb-2">Additional Charges:</h3>
        <p>
          For sessions requiring long-distance travel outside Tokyo or nearby
          regions, a small travel fee may apply. This will always be discussed
          and agreed upon in advance.
        </p>

        <h3 className="font-semibold mt-6 mb-2">Reels & Video Edits:</h3>
        <p>
          If you’d like a short highlight reel or vertical video (for Reels,
          TikTok, etc.), this can be added to any package.
        </p>

        <h3 className="font-semibold mt-6 mb-2">Custom Requests:</h3>
        <p>
          Need props, a stylist, or a specific location? Let’s talk! I’m here to
          help create exactly what you envision. Add-ons are billed separately.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-16 text-center text-sm md:text-base leading-relaxed">
        <p className="italic">“Not seeing what fits?”</p>
        <p className="mt-2">
          I also offer custom packages for events, collaborations, and
          conceptual shoots. Let’s chat about what you have in mind.
        </p>

        <p className="text-red-400 font-medium mt-3">
          “Let’s Create Something You’ll Love.”
        </p>

        <p className="mt-6">Contact me through my socials below. ↓</p>
      </section>
    </div>
  );
}
