import { useState } from "react";

import op1Img from "../assets/copa.png";
import op2Img from "../assets/camera.png";
import op3Img from "../assets/sugest.png";
import meme1 from "../assets/dog1.png";
import meme2 from "../assets/dog2.png";
import meme3 from "../assets/cat2.png";

const OPTIONS = [
    {
        id: 1,
        label: "01",
        tipo: "Tradicional",
        nome: "Copacabana",
        img: op1Img,
        descricao:
            "Um dos lugares que a gente ainda não foi, dá para comer porção e lanche (parecem bons, mas nunca experimentei pra ter certeza).",
        detalhes: [
            { icon: "📍", text: "Copacabana" },
            { icon: "🕗", text: "20:30 – Só Deus sabe" },
        ],
        whatsapp: encodeURIComponent("Copacabanaaa será"),
        accent: "#e8935a",
        tag: "clássico",
    },
    {
        id: 2,
        label: "02",
        tipo: "Relax",
        nome: "Fotos + Karaoke",
        img: op2Img,
        descricao:
            "Andar pela cidade tirando fotos de pessoas e coisas aleatórias, ou de nozes em lugares bonitos / cantar (karaoke improvisado, na última saída eu não sabia a letra daquelas músicas ;-;)",
        detalhes: [
            { icon: "📍", text: "Qualquer um" },
            { icon: "🕗", text: "20:30 – Só Deus sabe também" }
        ],
        whatsapp: encodeURIComponent("Bora tirar fotus e cantar cantorias"),
        accent: "#c8a84b",
        tag: "criativo",
    },
    {
        id: 3,
        label: "03",
        tipo: "sugestão sua",
        nome: "???",
        img: op3Img,
        descricao:
            "Se você tiver sugestões de coisas que podemos fazer e que você curte, sinta-se à vontade para me falar. Topo tudo!",
        detalhes: [
            { icon: "📍", text: "Relativo" },
            { icon: "🕗", text: "Relativo" }
        ],
        whatsapp: encodeURIComponent("Oia só, minha sugestão é essa aqui: "),
        accent: "#7ec8c8",
        tag: "up to you",
    },
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

  * { box-sizing: border-box; }

  .font-outfit { font-family: 'Outfit', sans-serif; }
  .font-playfair { font-family: 'Playfair Display', serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes floatA {
    0%,100% { transform: translateY(0) rotate(-5deg); }
    50%     { transform: translateY(-14px) rotate(-5deg); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0) rotate(4deg); }
    50%     { transform: translateY(-10px) rotate(4deg); }
  }
  @keyframes floatC {
    0%,100% { transform: translateY(0) rotate(-2deg); }
    50%     { transform: translateY(-18px) rotate(-2deg); }
  }
  @keyframes popBounce {
    0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
    60%  { transform: scale(1.12) rotate(3deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .anim-fade-up-1 { animation: fadeUp 0.55s 0.05s ease-out both; }
  .anim-fade-up-2 { animation: fadeUp 0.55s 0.18s ease-out both; }
  .anim-fade-up-3 { animation: fadeUp 0.55s 0.31s ease-out both; }
  .anim-fade-up-4 { animation: fadeUp 0.55s 0.44s ease-out both; }
  .anim-scale-in  { animation: scaleIn 0.4s cubic-bezier(0.34,1.4,0.64,1) both; }
  .anim-fade-in   { animation: fadeIn 0.3s ease-out both; }

  .float-a { animation: floatA 3.2s ease-in-out infinite; }
  .float-b { animation: floatB 3.8s ease-in-out infinite 0.6s; }
  .float-c { animation: floatC 2.9s ease-in-out infinite 1.1s; }
  .pop-bounce { animation: popBounce 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards; }

  .shimmer-btn {
    background: linear-gradient(90deg, #25D366 0%, #5de08a 50%, #25D366 100%);
    background-size: 200% auto;
    animation: shimmer 2.5s linear infinite;
  }

  .card-hover {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .card-hover:hover {
    transform: translateY(-6px) scale(1.015);
    box-shadow: 0 28px 60px rgba(0,0,0,0.35) !important;
  }

  .tag-pill {
    font-family: 'Outfit', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 99px;
    background: rgba(255,255,255,0.18);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 4px; }
`;

// ── Confirm Page ─────────────────────────────────────────
function ConfirmPage({ option, onBack }: { option: typeof OPTIONS[0]; onBack: () => void }) {
    return (
        <div className="font-outfit min-h-screen flex flex-col items-center justify-center gap-8 px-6"
            style={{ background: "#1a9aad" }}>
            <style>{GLOBAL_STYLES}</style>

            <div className="relative" style={{ width: 260, height: 220 }}>
                <img src={meme1} alt="" className="float-a absolute object-cover rounded-2xl shadow-2xl"
                    style={{
                        width: 110, height: 110, top: 0, left: "50%", transform: "translateX(-50%) rotate(-5deg)",
                        border: "3px solid rgba(255,255,255,0.3)"
                    }} />
                <img src={meme2} alt="" className="float-b absolute object-cover rounded-2xl shadow-2xl"
                    style={{
                        width: 95, height: 95, bottom: 0, left: 0, transform: "rotate(4deg)",
                        border: "3px solid rgba(255,255,255,0.3)"
                    }} />
                <img src={meme3} alt="" className="float-c absolute object-cover rounded-2xl shadow-2xl"
                    style={{
                        width: 95, height: 95, bottom: 0, right: 0, transform: "rotate(-2deg)",
                        border: "3px solid rgba(255,255,255,0.3)"
                    }} />
            </div>

            <div className="pop-bounce text-center">
                <div className="font-playfair italic text-white mb-1" style={{ fontSize: 13, opacity: 0.7 }}>
                    você escolheu
                </div>
                <div className="font-outfit font-bold text-white uppercase tracking-widest px-10 py-3 rounded-2xl"
                    style={{
                        fontSize: 22, background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)"
                    }}>
                    {option.nome}
                </div>
            </div>

            <a href={`https://wa.me/55SEUNUMERO?text=${option.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="shimmer-btn font-outfit font-semibold uppercase tracking-widest text-white px-10 py-4 rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95"
                style={{
                    fontSize: 13, letterSpacing: "0.16em", textDecoration: "none",
                    boxShadow: "0 8px 32px rgba(37,211,102,0.45)"
                }}>
                Confirmar no WhatsApp
            </a>

            <button onClick={onBack}
                className="font-outfit text-white underline transition-opacity hover:opacity-80"
                style={{ fontSize: 13, opacity: 0.45 }}>
                voltar às opções
            </button>
        </div>
    );
}

// ── Expanded Modal ───────────────────────────────────────
function ExpandedCard({ option, onClose, onChoose }: {
    option: typeof OPTIONS[0];
    onClose: () => void;
    onChoose: () => void;
}) {
    return (
        <div className="anim-fade-in fixed inset-0 z-50 flex items-center justify-center sm:items-center"
            style={{ backdropFilter: "blur(16px)", background: "rgba(10,40,50,0.6)" }}
            onClick={onClose}>

            <div className="anim-scale-in font-outfit w-full rounded-t-3xl sm:rounded-3xl overflow-hidden"
                style={{
                    maxWidth: 420, background: "#0e2a32",
                    boxShadow: "0 -8px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
                    maxHeight: "90vh"
                }}
                onClick={(e) => e.stopPropagation()}>

                {/* Image header */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                    <img src={option.img} alt={option.nome} className="w-full h-full object-cover" />
                    <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(14,42,50,0.95) 100%)" }} />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="tag-pill">{option.tag}</span>
                        <button onClick={onClose}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-70"
                            style={{ background: "rgba(0,0,0,0.4)", fontSize: 16 }}>
                            ✕
                        </button>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5">
                        <div className="font-outfit text-xs uppercase tracking-widest mb-1"
                            style={{ color: option.accent, opacity: 0.9 }}>
                            {option.label} — {option.tipo}
                        </div>
                        <h2 className="font-playfair font-bold text-white" style={{ fontSize: 26 }}>
                            {option.nome}
                        </h2>
                    </div>
                </div>

                {/* Body */}
                <div className="p-5 overflow-y-auto" style={{ maxHeight: "calc(90vh - 200px)" }}>
                    <p className="font-outfit text-sm leading-relaxed mb-5"
                        style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                        {option.descricao}
                    </p>

                    <div className="flex flex-col gap-2 mb-6">
                        {option.detalhes.map((d, i) => (
                            <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <span style={{ fontSize: 16 }}>{d.icon}</span>
                                <span className="font-outfit text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{d.text}</span>
                            </div>
                        ))}
                    </div>

                    <button onClick={onChoose}
                        className="w-full font-outfit font-semibold uppercase tracking-widest text-white py-4 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                            fontSize: 13, letterSpacing: "0.16em",
                            background: `linear-gradient(135deg, ${option.accent}, ${option.accent}cc)`,
                            boxShadow: `0 8px 28px ${option.accent}55`
                        }}>
                        Quero esse →
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Date Card ────────────────────────────────────────────
function DateCard({ option, index, onClick }: { option: typeof OPTIONS[0]; index: number; onClick: () => void }) {
    return (
        <div className={`card-hover cursor-pointer rounded-3xl overflow-hidden anim-fade-up-${index + 2}`}
            style={{
                width: "min(360px, 88vw)", background: "#0e2a32",
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.07)"
            }}
            onClick={onClick}>

            <div className="relative overflow-hidden" style={{ height: 200 }}>
                <img src={option.img} alt={option.nome} className="w-full h-full object-cover"
                    style={{ filter: "blur(5px) brightness(0.85)", transform: "scale(1.06)" }} />

                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(14,42,50,0.9) 100%)" }} />

                <div className="absolute top-4 left-5 font-playfair font-bold"
                    style={{ fontSize: 42, color: option.accent, opacity: 0.9, lineHeight: 1 }}>
                    {option.label}
                </div>

                <div className="absolute top-5 right-4">
                    <span className="tag-pill">{option.tag}</span>
                </div>

                <div className="absolute bottom-4 left-5 right-5">
                    <p className="font-outfit text-white font-semibold" style={{ fontSize: 17 }}>{option.nome}</p>
                </div>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
                <span className="font-outfit text-xs uppercase tracking-widest"
                    style={{ color: option.accent, letterSpacing: "0.14em" }}>
                    {option.tipo}
                </span>
                <div className="font-outfit text-xs font-medium px-4 py-2 rounded-xl"
                    style={{
                        background: option.accent + "22", color: option.accent,
                        border: `1px solid ${option.accent}44`
                    }}>
                    Ver detalhes →
                </div>
            </div>
        </div>
    );
}

// ── Main Page ────────────────────────────────────────────
export default function DatePicker() {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [chosen, setChosen] = useState<number | null>(null);

    if (chosen !== null) {
        const opt = OPTIONS.find((o) => o.id === chosen)!;
        return <ConfirmPage option={opt} onBack={() => setChosen(null)} />;
    }

    const expandedOption = expanded !== null ? OPTIONS.find((o) => o.id === expanded) : null;

    return (
        <div className="font-outfit min-h-screen flex flex-col items-center py-10 gap-5 px-4"
            style={{ background: "#1a9aad" }}>
            <style>{GLOBAL_STYLES}</style>

            <div className="anim-fade-up-1 text-center mb-2">
                <p className="font-playfair italic text-white mb-1" style={{ fontSize: 13, opacity: 0.6 }}>
                    escolha sua favorita
                </p>
                <h1 className="font-outfit font-bold text-white uppercase tracking-widest"
                    style={{ fontSize: 15, letterSpacing: "0.2em" }}>
                    Opções de Date
                </h1>
                <div className="mt-3 mx-auto rounded-full"
                    style={{ width: 36, height: 2, background: "rgba(255,255,255,0.3)" }} />
            </div>

            {OPTIONS.map((opt, i) => (
                <DateCard key={opt.id} option={opt} index={i} onClick={() => setExpanded(opt.id)} />
            ))}

            {expandedOption && (
                <ExpandedCard
                    option={expandedOption}
                    onClose={() => setExpanded(null)}
                    onChoose={() => { setExpanded(null); setChosen(expandedOption.id); }}
                />
            )}
        </div>
    );
}