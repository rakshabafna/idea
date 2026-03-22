import { useState } from 'react';
import QuickPhrases from './QuickPhrases';
import ProcessGuidance from './ProcessGuidance';
import DocumentReader from './DocumentReader';

const customerRecall = {
  name: "Ramesh Yadav",
  isReturning: true,
  lastVisit: "March 14, 2025",
  lastVisitReason: "Savings Account Inquiry",
  incomeRange: "Low–Medium",
  preferredLanguage: "Bhojpuri",
  historicalSentiment: "Generally Calm",
  pastIntents: ["Savings Inquiry", "FD Interest Query", "Balance Check"],
  aiSuggestions: [
    "Explain in simple terms",
    "Offer low-interest govt. scheme"
  ],
  consentVerified: true
};

function CustomerRecallPanel({ onSuggestionClick }: { onSuggestionClick: (text: string) => void }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-8 bg-surface-container-low rounded-xl border border-transparent flex flex-col shadow-sm">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between p-6 pb-4 cursor-pointer hover:bg-slate-50/50 transition-colors w-full text-left"
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">fingerprint</span>
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Customer Recall</h2>
          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-green-200">
            AI Recognized
          </span>
        </div>
        <span className="material-symbols-outlined text-slate-400">
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {expanded && (
        <div className="p-6 pt-0 space-y-4">
          <div className="bg-amber-50 text-amber-800 text-xs font-bold px-4 py-2 rounded-lg border border-amber-100/50 flex items-center justify-center shadow-sm">
            Returning Customer — {customerRecall.name}
          </div>

          <div className="space-y-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-base leading-none grayscale opacity-80">🗓️</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Last Visit</p>
                <p className="text-xs font-medium text-slate-700 mt-0.5">{customerRecall.lastVisit} — {customerRecall.lastVisitReason}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-base leading-none grayscale opacity-80">💰</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Income Range</p>
                <p className="text-xs font-medium text-slate-700 mt-0.5">{customerRecall.incomeRange}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base leading-none grayscale opacity-80">🗣️</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Preferred Language</p>
                <p className="text-xs font-medium text-slate-700 mt-0.5">{customerRecall.preferredLanguage}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base leading-none grayscale opacity-80">😊</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Historical Sentiment</p>
                <p className="text-xs font-medium text-slate-700 mt-0.5">{customerRecall.historicalSentiment}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-2 pt-4 border-t border-slate-50">
              <span className="text-base leading-none mt-0.5 grayscale opacity-80">📋</span>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mb-2">Past Intents</p>
                <div className="flex flex-wrap gap-2">
                  {customerRecall.pastIntents.map((intent, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-600 text-[10px] font-bold tracking-tight px-2.5 py-1 rounded-full border border-slate-200">
                      {intent}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100/50 shadow-sm mt-2">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-indigo-500 text-sm leading-none">✨</span>
              <h3 className="text-[10px] font-black text-indigo-700 uppercase tracking-widest">AI Recommends</h3>
            </div>
            <div className="flex flex-col gap-2">
              {customerRecall.aiSuggestions.map((suggestion, idx) => (
                <button 
                  key={idx}
                  onClick={() => onSuggestionClick(suggestion)}
                  className="w-full text-left bg-white hover:bg-indigo-50 hover:border-indigo-200 border border-indigo-100 text-indigo-700 text-xs font-bold py-2.5 px-3 rounded-lg shadow-sm transition-all flex items-center justify-between group active:scale-[0.98]"
                >
                  <span>{suggestion}</span>
                  <span className="material-symbols-outlined text-[16px] opacity-20 group-hover:opacity-100 transition-opacity">add_circle</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 text-center">
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
              Recalled from anonymized branch visit logs · Consent Verified {customerRecall.consentVerified ? '✓' : ''}
            </p>
          </div>
          
        </div>
      )}
    </div>
  );
}

const predictiveAssistant = {
  opportunityDetected: true,
  primaryScheme: {
    name: "PM Mudra Loan Scheme",
    eligibility: "High",
    eligibilityReason: "Low-medium income, no prior loan on record",
    profileMatch: "Micro-enterprise borrower criteria",
    aiExplanation: "Ramesh ji, aapki profile ke anusar, aap PM Mudra Loan Yojana ke liye eligible hain. Yeh scheme ₹50,000 tak ka loan bina guarantee ke deti hai. Kya aap is baare mein aur jaankari chahenge?"
  },
  otherSuggestions: [
    "Jan Dhan Account Upgrade",
    "Atal Pension Yojana"
  ]
};

function PredictiveAssistantPanel({ onOffer, onSuggestionClick }: { onOffer: (text: string) => void, onSuggestionClick: (t: string) => void }) {
  const [expanded, setExpanded] = useState(true);
  const [offerSent, setOfferSent] = useState(false);

  const handleOffer = () => {
    setOfferSent(true);
    onOffer(predictiveAssistant.primaryScheme.aiExplanation);
  };

  if (!predictiveAssistant.opportunityDetected) return null;

  return (
    <div className="mb-8 bg-surface-container-low rounded-xl border border-transparent flex flex-col overflow-hidden shadow-sm mt-8">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between p-6 pb-4 cursor-pointer hover:bg-slate-50/50 transition-colors w-full text-left"
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-purple-600 text-lg">lightbulb</span>
          <h2 className="text-sm font-bold text-purple-700 uppercase tracking-wider">Predictive Assistant</h2>
          <span className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-purple-200">
            Upsell Opportunity
          </span>
        </div>
        <span className="material-symbols-outlined text-slate-400">
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {expanded && (
        <div className="p-6 pt-0 space-y-4">
          <div className="bg-purple-50 text-purple-800 text-xs font-bold px-4 py-2 rounded-lg border border-purple-100/50 flex items-center justify-center shadow-sm">
            🎯 Opportunity Detected — Based on Customer Profile
          </div>

          <div className="bg-indigo-50/50 p-5 rounded-xl border-l-4 border-indigo-400 border-y border-r border-indigo-100 shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-base leading-none">🏦</span>
              <div>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest leading-tight">Scheme Detected</p>
                <p className="text-xs font-bold text-indigo-900 mt-0.5">{predictiveAssistant.primaryScheme.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-base leading-none">✅</span>
              <div>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest leading-tight">Eligibility</p>
                <p className="text-xs font-medium text-indigo-800 mt-0.5">{predictiveAssistant.primaryScheme.eligibility} — {predictiveAssistant.primaryScheme.eligibilityReason}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-base leading-none">📌</span>
              <div>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest leading-tight">Reason</p>
                <p className="text-xs font-medium text-indigo-800 mt-0.5">{predictiveAssistant.primaryScheme.profileMatch}</p>
              </div>
            </div>
          </div>

          <button
            disabled={offerSent}
            onClick={handleOffer}
            className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${offerSent ? 'bg-green-100 text-green-700 border border-green-200 cursor-not-allowed shadow-none' : 'bg-primary text-white hover:opacity-90'}`}
          >
            {offerSent ? '✓ Offer Sent to Customer' : '👉 Offer Mudra Loan Scheme'}
          </button>

          <div className="pt-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Other Opportunities</p>
            <div className="flex flex-wrap gap-2">
              {predictiveAssistant.otherSuggestions.map((suggestion, idx) => (
                <button 
                  key={idx}
                  onClick={() => onSuggestionClick(suggestion)}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold tracking-tight px-3 py-1.5 rounded-full transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 text-center">
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
              Predictions based on profile eligibility · Not financial advice
            </p>
          </div>
          
        </div>
      )}
    </div>
  );
}

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
      {/*  Customer Recall Panel  */}
      <CustomerRecallPanel onSuggestionClick={(text) => setStaffInput(staffInput ? staffInput + ' ' + text : text)} />
      {/*  Predictive Assistant Panel  */}
      <PredictiveAssistantPanel 
        onOffer={(text) => onQuickPhrase({ label: text, text: 'AI Upsell Prediction' })} 
        onSuggestionClick={(text) => setStaffInput(staffInput ? staffInput + ' ' + text : text)} 
      />
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
