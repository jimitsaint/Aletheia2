export default function Kontakt() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
      <p className="text-zinc-300 text-lg mb-6">
        Mejla: <a className="underline" href="mailto:jimi.t.saint@gmail.com">jimi.t.saint@gmail.com</a>
      </p>
      <form className="grid gap-4" action="https://formsubmit.co/jimi.t.saint@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Aletheia – nytt meddelande via hemsidan" />
        <input type="hidden" name="_captcha" value="false" />
        <label className="block">
          <span className="mb-1 block text-sm text-zinc-300">Namn</span>
          <input className="w-full" name="name" required />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-zinc-300">E-post</span>
          <input type="email" className="w-full" name="email" required />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm text-zinc-300">Meddelande</span>
          <textarea rows={5} className="w-full" name="message" required />
        </label>
        <div>
          <button type="submit">Skicka</button>
        </div>
      </form>
    </div>
  );
}
