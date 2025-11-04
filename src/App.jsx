import DiktDetalj from "./pages/DiktDetalj.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Musik from "./pages/Musik.jsx";
import Dikter from "./pages/Dikter.jsx";
import Blogg from "./pages/Blogg.jsx";
import Om from "./pages/Om.jsx";
import Lankar from "./pages/Lankar.jsx";
import Kontakt from "./pages/Kontakt.jsx";

function NavLink({ to, children }) {
  return (
    <Link to={to} style={{ color: '#e5e5e5', textDecoration: 'none', marginLeft: '1rem' }}>
      {children}
    </Link>
  );
}

function Home() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: '#000', color: '#e5e5e5' }}>
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 items-center px-4 py-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ fontSize: '2.5rem', lineHeight: 1.1, fontWeight: 900 }}
          >
            Alternativ HipHop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{ marginTop: '1rem', color: '#d4d4d8', maxWidth: '40rem' }}
          >
            Officiell sida för Jimi T Saint
          </motion.p>
          <div className="mt-6" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/musik" style={{ background: '#fff', color: '#000', padding: '0.75rem 1.25rem', borderRadius: '1rem', fontWeight: 600 }}>
              Lyssna nu
            </Link>
            <Link to="/kontakt" style={{ border: '1px solid #27272a', padding: '0.75rem 1.25rem', borderRadius: '1rem', fontWeight: 600, color: '#e5e5e5' }}>
              Boka / Kontakt
            </Link>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="mt-10 md:mt-0">
          <div className="aspect-[4/5] w-full rounded-3xl border border-zinc-800" style={{ overflow: 'hidden' }}>
            <img src="/aletheiagenomsk.png" alt="Omslagsbild" className="h-full w-full object-cover" />
          </div>
          <p className="mt-3 text-sm text-zinc-400">Byt detta fält mot omslag eller pressbild.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-zinc-100"> 
        <Link to="/">
  <img 
    src="/jimitsaintgenomskin.png" 
    alt="Aletheia logotyp" 
    style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      width: '330px',
      height: 'auto',
      opacity: 0.9,
      filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.25))',
      zIndex: 1000,
      cursor: 'pointer', // gör så muspekaren blir klick-symbol
    }}
  />
</Link>
        <header className="sticky top-0 border-b" style={{ backdropFilter: 'blur(6px)', background: 'rgba(0,0,0,0.5)' }}>
          <div className="mx-auto max-w-6xl px-4 py-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/">
              <img src="/aletheiagenomsk.png" alt="Aletheia logo" className="h-12 md:h-20" />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/musik">Musik</NavLink>
              <NavLink to="/dikter">Dikter</NavLink>
              <NavLink to="/blogg">Blogg</NavLink>
              <NavLink to="/om">Om</NavLink>
              <NavLink to="/lankar">Länkar</NavLink>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </nav>
          </div>
        </header>

        <main style={{ paddingTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musik" element={<Musik />} />
            <Route path="/dikter" element={<Dikter />} />
            <Route path="/blogg" element={<Blogg />} />
            <Route path="/om" element={<Om />} />
            <Route path="/lankar" element={<Lankar />} />
            <Route path="/kontakt" element={<Kontakt />} /> 
            <Route path="/dikter/:slug" element={<DiktDetalj />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
