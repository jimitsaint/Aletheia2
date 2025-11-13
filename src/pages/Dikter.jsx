import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dikter() {
  const [dikter, setDikter] = useState([]);

  useEffect(() => {
    fetch("/dikter/index.json")
      .then((res) => res.json())
      .then(setDikter)
      .catch((err) => console.error("Kunde inte ladda dikter:", err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-zinc-100">
      <h1 className="text-3xl font-bold mb-8">Dikter</h1>
      <div className="grid gap-6">
        {dikter.map((dikt) => (
          <Link
            key={dikt.slug}
            to={`/dikter/${dikt.slug}`}
            className="block border border-zinc-700 rounded-lg overflow-hidden hover:bg-zinc-900 transition"
          >
            {dikt.image && (
              <img
                src={dikt.image}
                alt={dikt.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{dikt.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
