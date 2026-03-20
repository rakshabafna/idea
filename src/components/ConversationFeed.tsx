"use client";
import EmotionIndicator from './EmotionIndicator';
import FraudAlertBanner from './FraudAlertBanner';

type MessageType = {
  role?: string;
  text?: string;
  translationData?: { translation?: string };
  intent?: string;
  time?: string;
  emotion?: string;
  intensity?: string;
  staffTip?: string;
  translation?: string;
};

export default function ConversationFeed({ messages, fraudAlertVisible, onDismissFraud }: { messages: MessageType[], fraudAlertVisible: boolean, onDismissFraud: () => void }) {
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
        <span className="material-symbols-outlined text-6xl mb-4 opacity-50">mic_none</span>
        <p className="text-sm font-medium">Press Record to begin the interaction</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto space-y-6 px-4 py-2 scrollbar-hide">
      {messages.map((msg, index) => {
        if (msg.role === 'customer') {
          return (
            <div key={index} className="space-y-4">
              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-surface-container-lowest p-4 rounded-xl rounded-tl-none shadow-sm border-l-4 border-secondary space-y-2">
                  <p className="text-sm leading-relaxed text-on-surface font-medium">&quot;{msg.text}&quot;</p>
                  {msg.translationData?.translation && (
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs text-slate-500 italic">En: {msg.translationData.translation}</p>
                    </div>
                  )}
                  {msg.intent && (
                    <div className="mt-2 inline-block px-2 py-0.5 bg-surface-container rounded text-[10px] font-bold text-primary tracking-wider uppercase">
                      Intent: {msg.intent}
                    </div>
                  )}
                </div>
                <span className="text-[10px] mt-1 text-slate-400 font-bold uppercase tracking-widest ml-1">Customer • {msg.time}</span>
              </div>
              {msg.emotion && (
                <div>
                  <EmotionIndicator emotion={msg.emotion} intensity={msg.intensity} staffTip={msg.staffTip} />
                </div>
              )}
            </div>
          );
        } else {
          return (
            <div key={index} className="flex flex-col items-end max-w-[85%] ml-auto mt-4">
              <div className="bg-primary text-on-primary p-4 rounded-xl rounded-tr-none shadow-md">
                <p className="text-sm leading-relaxed font-medium">&quot;{msg.text}&quot;</p>
                {msg.translation && (
                  <div className="pt-2 mt-2 border-t border-white/20">
                    <p className="text-xs text-white/80 italic">Hi: {msg.translation}</p>
                  </div>
                )}
              </div>
              <span className="text-[10px] mt-1 text-slate-400 font-bold uppercase tracking-widest mr-1">You • {msg.time}</span>
            </div>
          );
        }
      })}
      
      {fraudAlertVisible && <FraudAlertBanner onDismiss={onDismissFraud} />}
    </div>
  );
}
