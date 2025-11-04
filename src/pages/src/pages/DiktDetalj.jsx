import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function DiktDetalj() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/dikter/${slug}.md`)
      .then(res => res.text())
      .then(setContent)
      .catch(err => console.error("Kunde inte ladda dikten:", err));
  }, [slug]);

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
      <Link to="/dikter" className="text-zinc-400 hover:underline">← Tillbaka till dikter</Link>
      <article
        className="prose prose-invert mt-6"
        dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
      />
    </section>
  );
}
