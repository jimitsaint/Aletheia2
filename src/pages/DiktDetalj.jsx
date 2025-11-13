import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function DiktDetalj() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    // Hämtar t.ex. /dikter/gorr-och-guld.md
    fetch(`/dikter/${slug}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Kunde inte hitta dikten: ${slug}`);
        }
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Kunde inte ladda dikten.");
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
        <p>Laddar dikt…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
        <p className="text-red-400 mb-4">{error}</p>
        <Link to="/dikter" className="underline">
          ← Tillbaka till dikterna
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
      <Link to="/dikter" className="underline text-sm text-zinc-400">
        ← Tillbaka till dikter
      </Link>

      <article className="prose prose-invert mt-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </section>
  );
}
