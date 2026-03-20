import React from 'react';

export default function AnalyticsPanel() {
  return (
    <div className="w-full h-full p-8 overflow-y-auto bg-surface">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-headline font-bold text-primary mb-2">Translation & Interaction Analytics</h1>
        <p className="text-sm text-slate-500 mb-8">Performance metrics for Samvaad voice models across the branch network today.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-black text-[#1E3A5F]">1,402</span>
            <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Sessions Handled</span>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-black text-green-600">84ms</span>
            <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Avg Transl. Latency</span>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-black text-[#0f9e75]">98.2%</span>
            <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Intent Accuracy</span>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-black text-orange-500">22%</span>
            <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Frustration Detected</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-700 mb-6 uppercase tracking-wider">Top Languages Translated</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1"><span>Hindi</span><span>45%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1"><span>Marathi</span><span>28%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-[#0f9e75] h-2 rounded-full" style={{width: '28%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1"><span>Gujarati</span><span>15%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{width: '15%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1"><span>Bengali</span><span>8%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: '8%'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1"><span>Others</span><span>4%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-slate-300 h-2 rounded-full" style={{width: '4%'}}></div></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold text-slate-700 mb-6 uppercase tracking-wider">Customer Sentiment Trend</h3>
            <div className="h-48 flex items-end gap-2 pr-2">
              <div className="w-full bg-green-100 rounded-t-md h-[80%] relative"><span className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-400">9AM</span></div>
              <div className="w-full bg-green-200 rounded-t-md h-[90%] relative"><span className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-400">10AM</span></div>
              <div className="w-full bg-orange-300 rounded-t-md h-[60%] relative"><span className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-400">11AM</span></div>
              <div className="w-full bg-red-400 rounded-t-md h-[40%] relative"><span className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-400">12PM</span></div>
              <div className="w-full bg-amber-200 rounded-t-md h-[70%] relative"><span className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-400">1PM</span></div>
              <div className="w-full bg-green-300 rounded-t-md h-[85%] relative"><span className="absolute -top-6 w-full text-center text-[10px] font-bold text-slate-400">2PM</span></div>
            </div>
            <div className="flex justify-center gap-4 mt-6 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full"></div> Calm</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-amber-400 rounded-full"></div> Anxious</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-400 rounded-full"></div> Angry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
