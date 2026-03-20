export default function QuickPhrases({ onSelect }: { onSelect: (phrase: { label: string, text: string }) => void }) {
  const phrases = [
    { label: "Please wait", text: "Kripya pratiksha karein" },
    { label: "Show your ID proof", text: "Apna ID proof dikhayein" },
    { label: "Your request is processed", text: "Aapki request process ho gayi hai" },
    { label: "Please visit the counter", text: "Kripya counter par aayein" },
    { label: "Thank you for visiting", text: "Aane ka shukriya" },
    { label: "I need to verify details", text: "Mujhe details verify karni hai" },
    { label: "Please fill this form", text: "Kripya yeh form bharein" },
    { label: "Your account is active", text: "Aapka account active hai" }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Quick Phrases</h3>
      <div className="flex flex-wrap gap-2">
        {phrases.map((p, i) => (
          <span 
            key={i} 
            onClick={() => onSelect(p)}
            className="px-3 py-1.5 bg-surface-container text-primary text-[11px] font-bold rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors"
          >
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}
