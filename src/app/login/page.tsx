"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (staffId === 'STAFF001' && password === 'samvaad123') {
      localStorage.setItem('staffName', 'Rahul Sharma');
      localStorage.setItem('staffBranch', 'Andheri West Branch');
      localStorage.setItem('staffBranchCode', 'MH-042');
      router.push('/dashboard');
    } else {
      setError('Invalid Staff ID or Password');
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/*  Top Navigation (Shell Suppressed for Transactional Page, only Brand remains)  */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20">
        <div className="font-headline font-black text-primary text-2xl tracking-tighter">
            Samvaad
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-on-surface-variant font-label text-xs tracking-widest uppercase">Institutional Access</span>
          <div className="h-4 w-[1px] bg-outline-variant/30"></div>
          <span className="material-symbols-outlined text-primary">lock_person</span>
        </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex items-center justify-center p-6 mt-12">
        <div className="w-full max-w-[480px]">
          {/*  Login Card  */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(25,28,30,0.04)] p-10 md:p-12 border border-outline-variant/10">
            {/*  Header Section  */}
            <div className="mb-10 text-center">
              <h1 className="font-headline font-extrabold text-3xl text-primary tracking-tight mb-2">Secure Login</h1>
              <p className="text-on-surface-variant font-body text-sm">Enter your enterprise credentials to access your vault.</p>
              {error && <p className="text-error text-sm mt-4 font-bold">{error}</p>}
            </div>
            {/*  Form  */}
            <form className="space-y-8" onSubmit={handleLogin}>
              {/*  Staff ID Field  */}
              <div className="space-y-2">
                <label className="block font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider ml-1" htmlFor="staff-id">Staff ID</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">badge</span>
                  </div>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 font-medium" 
                    id="staff-id" name="staff-id" placeholder="E-001245" type="text"
                    value={staffId} onChange={(e) => setStaffId(e.target.value)}
                  />
                </div>
              </div>
              {/*  Password Field  */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="block font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
                  <Link className="text-xs font-semibold text-primary hover:underline underline-offset-4 transition-all" href="/">Forgot Password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-sm">key</span>
                  </div>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 font-medium" 
                    id="password" name="password" placeholder="••••••••••••" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <button className="text-outline hover:text-primary transition-colors" type="button">
                      <span className="material-symbols-outlined text-sm">visibility</span>
                    </button>
                  </div>
                </div>
              </div>
              {/*  Actions  */}
              <div className="pt-4 space-y-6">
                <button className="bg-gradient-to-r from-primary to-primary-container w-full py-4 rounded-xl text-on-primary font-headline font-bold text-sm tracking-wide shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2" type="submit">
                  Authorize Access
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="text-on-surface-variant">New to the enterprise?</span>
                  <Link className="font-bold text-primary hover:underline underline-offset-4" href="/register">Register</Link>
                </div>
              </div>
            </form>
          </div>
          {/*  Trust Badge  */}
          <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">AES-256 Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">security</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </main>
      {/*  Footer  */}
      <footer className="w-full py-8 mt-auto flex flex-col md:flex-row justify-between items-center px-12 border-t border-slate-100 dark:border-slate-800">
        <div className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500">
            © 2024 Samvaad Enterprise Banking. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Privacy Policy</Link>
          <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Terms of Service</Link>
          <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Security</Link>
          <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Contact</Link>
        </div>
      </footer>
      <div className="fixed top-0 right-0 -z-10 w-1/2 h-screen overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-primary-container/10 blur-[120px]"></div>
      </div>
      <div className="fixed bottom-0 left-0 -z-10 w-1/2 h-screen overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-secondary-container/10 blur-[120px]"></div>
      </div>
    </div>
  );
}