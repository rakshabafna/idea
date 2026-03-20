export default function CompliancePanel() {
  return (
    <div className="w-full h-full p-8 overflow-y-auto bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-headline font-bold text-primary mb-2">Fraud & Compliance Audits</h1>
            <p className="text-sm text-slate-500">Real-time alerts and regulatory compliance logs flagged by Gen-AI.</p>
          </div>
          <button className="px-4 py-2 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span> Export Audit Log
          </button>
        </div>

        <div className="bg-error-container/30 border border-error/20 p-6 rounded-2xl mb-8 flex items-start gap-4">
          <div className="p-3 bg-error text-white rounded-full mt-1">
            <span className="material-symbols-outlined">gpp_maybe</span>
          </div>
          <div>
            <h3 className="text-error font-bold text-lg mb-1">Critical Alerts: 2 Flagged Sessions Today</h3>
            <p className="text-sm text-error/80 font-medium mb-3">Samvaad AI detected potential coercion/social engineering markers in the audio patterns of 2 active branch sessions.</p>
            <button className="text-xs font-bold text-white bg-error px-4 py-2 rounded-lg hover:opacity-90">Review Urgent Cases</button>
          </div>
        </div>

        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Recent Audit Logs</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Session #SV-8842: Possible Coercion Flagged</p>
                <p className="text-xs text-slate-500 mt-1">Customer utterance matched known &quot;urgent transfer&quot; social engineering archetype.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400">10:45 AM</span>
              <button className="px-3 py-1.5 text-xs font-bold text-primary bg-primary-container rounded hover:opacity-80">View Transcript</button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                <span className="material-symbols-outlined">policy</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">KYC Document Mismatch - Session #SV-8819</p>
                <p className="text-xs text-slate-500 mt-1">Name on Aadhaar card extracted via OCR did not match verbal confirmation.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400">09:12 AM</span>
              <button className="px-3 py-1.5 text-xs font-bold text-primary bg-primary-container rounded hover:opacity-80">Review Docs</button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
             <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Audit Cleared - Session #SV-8790</p>
                <p className="text-xs text-slate-500 mt-1">Routine compliance check. All protocols followed for high-value withdrawal.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400">Yesterday</span>
              <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-primary">Details</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
