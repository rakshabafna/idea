import QuickPhrases from './QuickPhrases';
import ProcessGuidance from './ProcessGuidance';
import DocumentReader from './DocumentReader';

export default function StaffReplyPanel({
  staffInput,
  setStaffInput,
  onSend,
  onEndSession,
  translationData,
  onQuickPhrase
}: {
  staffInput: string;
  setStaffInput: (val: string) => void;
  onSend: () => void;
  onEndSession: () => void;
  translationData: Record<string, string> | null;
  onQuickPhrase: (phrase: { label: string, text: string }) => void;
}) {
  return (
    <aside className="w-full md:w-2/5 bg-surface-container-lowest flex flex-col p-4 md:p-8 overflow-y-visible md:overflow-y-auto border-t md:border-t-0 md:border-l border-surface-container mt-4 md:mt-0">
      {/*  Translation & Suggested Response Card  */}
      <div className="mb-8 bg-surface-container-low rounded-xl p-6 border border-transparent">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-lg">translate</span>
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider">AI Translation Engine</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg text-xs italic text-slate-500 border border-slate-100">
            &quot;{translationData?.original || "Waiting for input..."}&quot;
          </div>
          <div className="bg-white p-3 rounded-lg text-xs font-medium text-slate-800 border border-slate-200">
            Translates to: &quot;{translationData?.translation || "..."}&quot;
          </div>
          <div className="bg-secondary-container/30 p-4 rounded-xl border border-secondary/20">
            <p className="text-[10px] font-black text-secondary uppercase mb-2 tracking-widest">Suggested Response</p>
            <p className="text-sm font-medium text-primary mb-3">&quot;{translationData?.suggested || "Acknowledge the customer."}&quot;</p>
            <button 
              onClick={() => setStaffInput(translationData?.suggested || '')}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary hover:underline underline-offset-4"
            >
              USE THIS RESPONSE <span className="material-symbols-outlined text-xs">send</span>
            </button>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
             <p className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest">Your Reply</p>
             <textarea 
               value={staffInput} 
               onChange={(e) => setStaffInput(e.target.value)}
               className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary resize-none" 
               rows={3}
               placeholder="Type your response here..."
             ></textarea>
             <button 
               onClick={onSend}
               className="mt-2 text-[10px] font-bold uppercase tracking-tighter px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-sm flex items-center gap-1"
             >
               <span className="material-symbols-outlined text-sm">record_voice_over</span> Send & Speak
             </button>
          </div>

        </div>
      </div>
      {/*  Quick Phrases  */}
      <QuickPhrases onSelect={onQuickPhrase} />
      {/*  Process Guidance Checklist  */}
      <ProcessGuidance />
      {/*  Photograph Document Section  */}
      <DocumentReader />
      {/*  Footer Actions  */}
      <div className="mt-auto pt-6 flex flex-col gap-3">
        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">lock</span>
          SECURE ACCOUNT
        </button>
        <button onClick={onEndSession} className="w-full bg-surface-container-highest text-on-surface-variant py-3 rounded-xl font-bold text-sm hover:bg-error-container hover:text-error transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">call_end</span>
          End Session & Generate Summary
        </button>
      </div>
    </aside>
  );
}
