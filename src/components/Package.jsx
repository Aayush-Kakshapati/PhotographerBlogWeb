function Package({ title, description, bullets, highlight }) {
  return (
    <section className="px-6 py-10 text-sm md:text-base">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>

      <ul className="list-disc pl-5 leading-6 space-y-1">
        {bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="text-red-400 mt-3 text-sm md:text-base">→ {highlight}</p>
    </section>
  );
}

export default Package;
