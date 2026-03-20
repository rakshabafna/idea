export default function FraudAlertBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="bg-error-container text-on-error-container p-4 rounded-xl flex items-center gap-4 border-l-4 border-error">
      <span className="material-symbols-outlined text-error">report</span>
      <div className="flex-1">
        <p className="text-sm font-black tracking-tight uppercase">High Risk Transaction Detected</p>
        <p className="text-xs font-medium">Possible social engineering detected: "mere bete ne kaha urgently transfer karo"</p>
      </div>
      <button onClick={onDismiss} className="bg-error text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-tighter">Dismiss</button>
    </div>
  );
}
