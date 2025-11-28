export default function Services() {
  return (
    <section className="px-6 py-6">
      <h3 className="text-center text-lg">SERVICES</h3>
      <div className="mt-4 grid grid-cols-3 gap-4 items-start">
        <ul className="col-span-2 list-none text-sm leading-7">
          <li>Personal Shoots</li>
          <li>Events</li>
          <li>Portraits</li>
          <li>Brand Photoshoots</li>
          <li>Cosplay</li>
        </ul>

        <div className="col-span-1">
          <div className="relative">
            <img
              src="/images/service-preview.jpg"
              alt="service"
              className="w-full h-36 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 px-3 py-1 text-sm rounded">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-300" />
    </section>
  );
}
