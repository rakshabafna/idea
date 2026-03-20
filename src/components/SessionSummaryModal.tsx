"use client";

export default function SessionSummaryModal({ onNewSession, onDismiss }: { onNewSession: () => void, onDismiss?: () => void }) {
  
  const handleDownload = () => {
    const summaryText = `Session ID: #SV-2024-8812
Date: October 24, 2024
Duration: 18m 42s

English Summary:
Issues Raised: FD premature closure request
Resolution: FD closure form submitted, amount to be credited in 2 hours
Next Steps: Customer to collect receipt from counter
Documents Required: Aadhaar card, FD certificate

Hindi Summary:
Uchit kiye gaye mudde: FD band karne ka nivedan
Samadhan: FD band karne ka form jama kiya, 2 ghante mein paisa milega
Agle kadam: Counter se rasid lein
Zaroori dastavez: Aadhaar card, FD praman patra
`;
    const blob = new Blob([summaryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'samvaad-summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" onClick={onDismiss}>
      <div className="w-full max-w-5xl bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(25,28,30,0.04)] overflow-hidden my-auto relative" onClick={(e) => e.stopPropagation()}>
        {onDismiss && (
          <button onClick={onDismiss} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-error transition-colors bg-white/80 backdrop-blur rounded-full shadow-sm border border-slate-100 active:scale-95 z-50">
            <span className="material-symbols-outlined text-xl block">close</span>
          </button>
        )}
        {/*  Modal Header  */}
        <div className="px-10 py-8 bg-white flex flex-col md:flex-row md:items-end justify-between border-b-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase font-label">Official Record</span>
              <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
              <span className="text-on-surface-variant text-xs font-label">Session ID: #SV-2024-8812</span>
            </div>
            <h1 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Session Summary</h1>
            <p className="text-on-surface-variant mt-1 text-sm">Meeting conducted on October 24, 2024 • Duration: 18m 42s</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-3">
            <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-3 bg-surface-container-low text-primary font-manrope font-bold text-sm rounded-xl hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-lg">download</span>
              Download PDF
            </button>
            <button onClick={onNewSession} className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-manrope font-bold text-sm rounded-xl hover:opacity-90 transition-all shadow-md">
              <span className="material-symbols-outlined text-lg">add</span>
              New Session
            </button>
          </div>
        </div>
        {/*  Modal Content (Two Columns)  */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/*  English Column  */}
          <div className="p-10 bg-surface-container-lowest">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center">
                <span className="text-primary font-bold text-xs">EN</span>
              </div>
              <h2 className="text-xl font-headline font-bold text-primary">English Summary</h2>
            </div>
            <div className="space-y-8">
              {/*  Issues Raised  */}
              <section>
                <label className="block font-label text-[10px] font-bold text-primary-container uppercase tracking-widest mb-3">Issues Raised</label>
                <div className="bg-surface-container-low rounded-xl p-5">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-on-surface leading-relaxed">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5">check_circle</span>
                      FD premature closure request
                    </li>
                  </ul>
                </div>
              </section>
              {/*  Resolution  */}
              <section>
                <label className="block font-label text-[10px] font-bold text-primary-container uppercase tracking-widest mb-3">Resolution</label>
                <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-secondary">
                  <p className="text-sm text-on-surface leading-relaxed">
                    FD closure form submitted, amount to be credited in 2 hours
                  </p>
                </div>
              </section>
              {/*  Next Steps  */}
              <section>
                <label className="block font-label text-[10px] font-bold text-primary-container uppercase tracking-widest mb-3">Next Steps</label>
                <div className="bg-surface-container-low rounded-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-primary">Customer to collect receipt from counter</p>
                      <p className="text-xs text-on-surface-variant">Documents Required: Aadhaar card, FD certificate</p>
                    </div>
                    <span className="material-symbols-outlined text-on-primary-container">event</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/*  Customer Language (Hindi) Column  */}
          <div className="p-10 bg-slate-50 border-l border-transparent">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center">
                <span className="text-secondary font-bold text-xs">हि</span>
              </div>
              <h2 className="text-xl font-headline font-bold text-primary">ग्राहक भाषा (हिंदी)</h2>
            </div>
            <div className="space-y-8">
              {/*  Issues Raised  */}
              <section>
                <label className="block font-label text-[10px] font-bold text-primary-container uppercase tracking-widest mb-3">उठाए गए मुद्दे (Issues)</label>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-on-surface leading-relaxed">
                      <span className="material-symbols-outlined text-secondary text-sm mt-0.5">check_circle</span>
                      FD band karne ka nivedan
                    </li>
                  </ul>
                </div>
              </section>
              {/*  Resolution  */}
              <section>
                <label className="block font-label text-[10px] font-bold text-primary-container uppercase tracking-widest mb-3">समाधान (Resolution)</label>
                <div className="bg-white rounded-xl p-5 border-l-4 border-secondary shadow-sm">
                  <p className="text-sm text-on-surface leading-relaxed">
                    FD band karne ka form jama kiya, 2 ghante mein paisa milega
                  </p>
                </div>
              </section>
              {/*  Next Steps  */}
              <section>
                <label className="block font-label text-[10px] font-bold text-primary-container uppercase tracking-widest mb-3">अगले कदम (Next Steps)</label>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-primary">Counter se rasid lein</p>
                      <p className="text-xs text-on-surface-variant">Zaroori dastavez: Aadhaar card, FD praman patra</p>
                    </div>
                    <span className="material-symbols-outlined text-on-primary-container">event</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/*  Modal Footer  */}
        <div className="px-10 py-6 bg-surface-container-low flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-outline text-sm">verified_user</span>
            <span className="text-[10px] font-label font-medium text-on-surface-variant uppercase tracking-widest">Digitally Signed & Certified by Samvaad Enterprise Banking</span>
          </div>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200">
              <img alt="Agent 1" className="w-full h-full rounded-full" data-alt="Small avatar icon of banking representative" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2tVQ0aHSn8ryrgjwQ9Nl9mWXDMfcVKC8C8BEtB3gp0IJ18Smy5VbFR9LqgQu37EUyJaep_RfyKzoyTvURoFgU0_SW_HSrrcigfzyUvmwrbQbl2GFQObaatHuP0aCEivr-8n1z1ZVlWuhS_fygFd-LyAb3LVEFqIQR0rBP9gLX_v4S12Hg6GNNvjEXAeJ8qZdLo9IsHIN4iHBXOBMBtjUSBVEtBPebkgd6M-h-QtcqRuVpth9iRD3kusTM6shPremDlIXA7vV1Qb-c" />
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200">
              <img alt="Agent 2" className="w-full h-full rounded-full" data-alt="Small avatar icon of system supervisor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6dnqP4b9LPMSrvaly9dgyh3Jn_R764BSDxiwwlLihzuJAGqcONt6OXJlKfNp9RR_bNYs5kf19KW0V9n54BOMJTcz1vWyoekgmmfQtkshmjnrfWuzGIiZOWyMtskXjfaqlZPyG5cWOMTnGggk0pCVtaqLiD-6O0wkE_vTRkGmQ85znhPc3ziDNs7yUmTA61FtqUCeJ3lns_IIs3_hBda8xAdakF5jzH-Hx2zTTCJpgApqNEE3D8ZpE6gMYbHWKihbF5s-Vlep8bxJ" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
