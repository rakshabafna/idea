"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ConversationFeed from '@/components/ConversationFeed';
import StaffReplyPanel from '@/components/StaffReplyPanel';
import SessionSummaryModal from '@/components/SessionSummaryModal';
import TreasuryPanel from '@/components/TreasuryPanel';
import AnalyticsPanel from '@/components/AnalyticsPanel';
import CompliancePanel from '@/components/CompliancePanel';

// Hardcoded data
const customerMessages = [
  {
    role: 'customer',
    text: "Mujhe apna FD tod ke paisa chahiye",
    time: "10:30 AM",
    emotion: "anxious",
    intensity: "high",
    staffTip: "Acknowledge her urgency before explaining the process",
    alert: true,
    translationData: {
      original: "Mujhe apna FD tod ke paisa chahiye",
      translation: "I want to break my Fixed Deposit and get the money",
      suggested: "Please wait, I will process your FD closure request"
    }
  },
  {
    role: 'customer',
    text: "Kitna time lagega?",
    time: "10:32 AM",
    emotion: "frustrated",
    intensity: "medium",
    staffTip: "Give a clear timeline to reassure the customer",
    alert: false,
    translationData: {
      original: "Kitna time lagega?",
      translation: "How long will it take?",
      suggested: "It will take around 2 hours for the amount to be credited."
    }
  }
];

export default function DashboardPage() {
  const router = useRouter();
  
  const [staffName, setStaffName] = useState('Staff');
  const [branchName, setBranchName] = useState('Main Branch');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>([]);
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'processing'>('idle');
  const [messageIndex, setMessageIndex] = useState(0);
  const [fraudAlertVisible, setFraudAlertVisible] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'treasury' | 'analytics' | 'compliance'>('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [staffInput, setStaffInput] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [translationData, setTranslationData] = useState<any>(null);

  useEffect(() => {
    const name = localStorage.getItem('staffName');
    const branch = localStorage.getItem('staffBranch');
    if (!name) {
      router.push('/login');
    } else {
      setStaffName(name);
      if (branch) setBranchName(branch);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  const handleRecordClick = () => {
    if (recordingState === 'idle') {
      setRecordingState('recording');
    } else if (recordingState === 'recording') {
      setRecordingState('processing');
      setTimeout(() => {
        if (messageIndex < customerMessages.length) {
          const newMsg = customerMessages[messageIndex];
          setMessages(prev => [...prev, newMsg]);
          setTranslationData(newMsg.translationData);
          
          if (messageIndex === 1) {
            setFraudAlertVisible(true);
          }
          setMessageIndex(prev => prev + 1);
        }
        setRecordingState('idle');
      }, 2000);
    }
  };

  const handleSendReply = () => {
    if (!staffInput.trim()) return;
    const newMsg = {
      role: 'staff',
      text: staffInput,
      translation: translationData?.original ? "Kripya pratiksha karein, main verify kar raha hoon." : undefined,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
    setStaffInput('');
  };

  const handleQuickPhrase = (phraseObj: { label: string, text: string }) => {
    const newMsg = {
      role: 'staff',
      text: phraseObj.label,
      translation: phraseObj.text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/*  Top Navigation Anchor  */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 md:py-0 md:h-16 w-full max-w-[1920px] mx-auto gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 w-full md:w-auto">
            <div className="flex justify-between items-center w-full md:w-auto">
              <span className="text-2xl font-black text-[#1E3A5F] dark:text-white tracking-tighter font-headline">Samvaad</span>
            </div>
            <div className="flex gap-4 md:gap-6 items-center overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
              <button onClick={() => setActiveTab('dashboard')} className={`whitespace-nowrap font-manrope font-bold tracking-tight text-sm ${activeTab === 'dashboard' ? 'text-[#1E3A5F] dark:text-white border-b-2 border-[#1E3A5F] dark:border-[#0f9e75] pb-1' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-[#0f9e75] transition-colors duration-200'}`}>Dashboard</button>
              <button onClick={() => setActiveTab('treasury')} className={`whitespace-nowrap font-manrope font-bold tracking-tight text-sm ${activeTab === 'treasury' ? 'text-[#1E3A5F] dark:text-white border-b-2 border-[#1E3A5F] dark:border-[#0f9e75] pb-1' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-[#0f9e75] transition-colors duration-200'}`}>Treasury</button>
              <button onClick={() => setActiveTab('analytics')} className={`whitespace-nowrap font-manrope font-bold tracking-tight text-sm ${activeTab === 'analytics' ? 'text-[#1E3A5F] dark:text-white border-b-2 border-[#1E3A5F] dark:border-[#0f9e75] pb-1' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-[#0f9e75] transition-colors duration-200'}`}>Analytics</button>
              <button onClick={() => setActiveTab('compliance')} className={`whitespace-nowrap font-manrope font-bold tracking-tight text-sm ${activeTab === 'compliance' ? 'text-[#1E3A5F] dark:text-white border-b-2 border-[#1E3A5F] dark:border-[#0f9e75] pb-1' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-[#0f9e75] transition-colors duration-200'}`}>Compliance</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-sm font-bold text-slate-700 leading-none">{staffName}</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-tight">{branchName}</span>
            </div>
            
            <div className="relative">
              <button onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); setShowSettings(false); }} className="p-2 text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Notifications</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-error-container/20 rounded-lg border border-error/10">
                      <p className="text-sm font-bold text-error">Fraud Detected - #SV-8842</p>
                      <p className="text-xs text-error/80 mt-1">Review flagged coercion attempt.</p>
                    </div>
                    <div className="p-3 bg-surface-container rounded-lg">
                      <p className="text-sm font-bold text-primary">System Update</p>
                      <p className="text-xs text-slate-500 mt-1">Marathi language model v2.1 deployed.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); setShowSettings(false); }} className="h-8 w-8 rounded-full overflow-hidden bg-surface-container cursor-pointer ring-2 ring-transparent hover:ring-primary/20 transition-all">
                <img alt="User Profile Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjq7xnpzEl1yvlD3RnT0ORXc1O4ymMoxvWmTPHp4ZvWR1XlPN8zi7YLGFZZ-TkG_BzcsPxYiG6EAt3GRCitj0VDQPnbetT9GmW3kJY1pr4LMWNJ_OChHkibuxKXoV-cJK8mGIJMM7zKc8vEDGJytUtmXrPPzCtQ7GOX6-IHDjukRJek2Fuh0TjuU0MjL2gmj1xaylWopXS9z8qUsnMR_ma4KllH_E2Lrdpg4g9JPWY78Ed3uhAqRuJi0FVT6yXod14Ic85qJbbNGyl"/>
              </div>
              {showProfile && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-surface-container mb-3 border-2 border-slate-100">
                    <img alt="User Profile Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjq7xnpzEl1yvlD3RnT0ORXc1O4ymMoxvWmTPHp4ZvWR1XlPN8zi7YLGFZZ-TkG_BzcsPxYiG6EAt3GRCitj0VDQPnbetT9GmW3kJY1pr4LMWNJ_OChHkibuxKXoV-cJK8mGIJMM7zKc8vEDGJytUtmXrPPzCtQ7GOX6-IHDjukRJek2Fuh0TjuU0MjL2gmj1xaylWopXS9z8qUsnMR_ma4KllH_E2Lrdpg4g9JPWY78Ed3uhAqRuJi0FVT6yXod14Ic85qJbbNGyl"/>
                  </div>
                  <p className="font-bold text-primary text-base">{staffName}</p>
                  <p className="text-xs text-slate-500 mb-1">{branchName}</p>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-green-100 text-green-700 rounded-full mb-4">Active Session</span>
                  <button onClick={handleLogout} className="w-full py-2.5 bg-error/10 text-error rounded-lg text-sm font-bold hover:bg-error hover:text-white transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">logout</span> Log Out
                  </button>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button onClick={() => { setShowSettings(!showSettings); setShowNotifications(false); setShowProfile(false); }} className="p-2 text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
              {showSettings && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Quick Settings</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Dark Mode</span>
                      <div className="w-8 h-4 bg-slate-200 rounded-full relative"><div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div></div>
                    </div>
                    <div className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Auto-Translate</span>
                      <div className="w-8 h-4 bg-primary rounded-full relative"><div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div></div>
                    </div>
                    <div className="pt-2 mt-2 border-t border-slate-100 flex justify-between items-center cursor-pointer group">
                      <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Terminal Lock</span>
                      <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-primary">lock_outline</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex flex-col md:flex-row h-screen pt-28 md:pt-16 overflow-y-auto md:overflow-hidden">
        {activeTab === 'dashboard' ? (
          <>
            {/*  Left Panel (60%)  */}
            <section className="w-full md:w-3/5 bg-surface-container-low flex flex-col p-4 md:p-6 overflow-hidden lg:overflow-hidden min-h-[60vh] md:min-h-0">
          {/*  Header & Language  */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-xl text-white">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <h1 className="font-headline font-extrabold text-xl tracking-tight text-primary">Active Session: ID-8842</h1>
                <p className="text-xs text-on-surface-variant font-medium">Customer: ARJUN MEHTA • PRIORITY GOLD</p>
              </div>
            </div>
            <div className="flex bg-surface-container p-1 rounded-full">
              <button className="px-4 py-1 text-xs font-bold rounded-full bg-primary text-white shadow-sm">ENGLISH</button>
              <button className="px-4 py-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">HINDI</button>
              <button className="px-4 py-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">MARATHI</button>
            </div>
          </div>
          {/*  Chat Feed  */}
          <ConversationFeed 
            messages={messages} 
            fraudAlertVisible={fraudAlertVisible} 
            onDismissFraud={() => setFraudAlertVisible(false)} 
          />
          {/*  Core Action: Recording  */}
          <div className="mt-6 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <button 
                onClick={handleRecordClick}
                className={`relative h-20 w-20 rounded-full flex items-center justify-center border-4 shadow-xl active:scale-95 transition-all ${
                  recordingState === 'recording' ? 'bg-black border-red-500 animate-pulse' :
                  recordingState === 'processing' ? 'bg-gray-200 border-gray-400 opacity-80' :
                  'bg-white border-secondary'
                }`}
              >
                {recordingState === 'processing' ? (
                  <span className="material-symbols-outlined text-gray-500 text-3xl animate-spin">sync</span>
                ) : (
                  <span className={`material-symbols-outlined text-4xl ${recordingState === 'recording' ? 'text-red-500 animate-pulse' : 'text-secondary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {recordingState === 'recording' ? 'mic_none' : 'mic'}
                  </span>
                )}
              </button>
              {recordingState === 'recording' && (
                <div className="absolute -top-2 -right-2 bg-error h-4 w-4 rounded-full animate-pulse border-2 border-white"></div>
              )}
            </div>
            <p className="mt-3 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
              {recordingState === 'idle' ? 'Start Recording' : recordingState === 'recording' ? 'Recording Live...' : 'Processing audio...'}
            </p>
          </div>
        </section>
        {/*  Right Panel (40%)  */}
        <StaffReplyPanel 
          staffInput={staffInput}
          setStaffInput={setStaffInput}
          onSend={handleSendReply}
          onEndSession={() => setShowSummary(true)}
          translationData={translationData}
          onQuickPhrase={handleQuickPhrase}
        />
        </>
        ) : activeTab === 'treasury' ? (
          <TreasuryPanel />
        ) : activeTab === 'analytics' ? (
          <AnalyticsPanel />
        ) : activeTab === 'compliance' ? (
          <CompliancePanel />
        ) : null}
      </main>
      
      {showSummary && (
        <SessionSummaryModal 
          onNewSession={() => {
            setMessages([]);
            setMessageIndex(0);
            setShowSummary(false);
            setFraudAlertVisible(false);
            setTranslationData(null);
          }} 
          onDismiss={() => setShowSummary(false)}
        />
      )}

      {/*  Footer Identity  */}
      <footer className="fixed bottom-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 z-50">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 h-12 w-full">
          <p className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500">© 2024 Samvaad Enterprise Banking. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4" href="#">Privacy Policy</a>
            <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4" href="#">Security</a>
            <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}