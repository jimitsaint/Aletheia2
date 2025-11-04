import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function DiktDetalj() {
  const { slug } = useParams();
  const [meta, setMeta] = useState(null);
  const [content, setContent] = useState("Laddar…");

  useEffect(() => {
    // Hämta metadata för denna dikt
    fetch("/dikter/index.json")
      .then((r) => r.json())
      .then((list) => {
        const item = Array.isArray(list) ? list.find((d) => d.slug === slug) : null;
        setMeta(item || null);
      })
      .catch(() => setMeta(null));

    // Hämta själva texten
    fetch(`/dikter/${slug}.md`)
      .then((r) => (r.ok ? r.text() : "Dikttext saknas."))
      .then(setContent)
      .catch(() => setContent("Dikttext saknas."));
  }, [slug]);

  if (meta === null) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
        <p>Hittade inte dikten.</p>
        <p className="mt-4">
          <Link to="/dikter" className="underline">← Tillbaka till Dikter</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
      <p>
        <Link to="/dikter" className="text-zinc-400 hover:underline">← Tillbaka till Dikter</Link>
      </p>

      {meta?.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className="w-full rounded-xl mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{meta?.title}</h1>

      <pre className="whitespace-pre-wrap text-zinc-200 text-base leading-relaxed">
        {content}
      </pre>
    </section>
  );
}

