"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    staffId: '',
    branchName: '',
    branchCode: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, staffId, branchName, branchCode, password, confirmPassword } = formData;
    if (!fullName || !staffId || !branchName || !branchCode || !password || !confirmPassword) {
      setError('Please fill all fields');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Registration successful');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-24">
        {/*  Main Registration Container  */}
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_12px_32px_rgba(25,28,30,0.04)]">
          {/*  Left Side: Visual/Branding  */}
          <div className="hidden md:flex md:w-5/12 bg-primary-container p-12 flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <div className="text-white text-3xl font-black tracking-tighter mb-2">Samvaad</div>
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
            </div>
            <div className="z-10">
              <h2 className="text-white text-4xl font-extrabold tracking-tight leading-tight mb-6">
                  Secure Access for Our Dedicated Team.
              </h2>
              <p className="text-on-primary-container font-body text-lg leading-relaxed">
                  Join the enterprise ecosystem. Register your credentials to manage global treasury and compliance operations.
              </p>
            </div>
            {/*  Abstract Architectural Pattern  */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -right-20 -top-20 w-96 h-96 border-[40px] border-white rounded-full"></div>
              <div className="absolute -left-10 bottom-20 w-48 h-48 border-[20px] border-white/50 rotate-45"></div>
            </div>
          </div>
          {/*  Right Side: Form  */}
          <div className="w-full md:w-7/12 p-8 md:p-16">
            <div className="mb-10">
              <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">Enterprise Portal</span>
              <h1 className="text-primary text-3xl font-black tracking-tight">Staff Registration</h1>
              <p className="text-on-surface-variant mt-2 text-sm">Please provide your professional identification details.</p>
              {error && <p className="text-error mt-4 text-sm font-bold">{error}</p>}
              {success && <p className="text-secondary mt-4 text-sm font-bold">{success}</p>}
            </div>
            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium" placeholder="e.g. Alexander Pierce" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Staff ID</label>
                  <input name="staffId" value={formData.staffId} onChange={handleChange} className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium" placeholder="SV-99042" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Branch Name</label>
                  <input name="branchName" value={formData.branchName} onChange={handleChange} className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium" placeholder="Main HQ - Mumbai" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Branch Code</label>
                  <input name="branchCode" value={formData.branchCode} onChange={handleChange} className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium" placeholder="BCH-001" type="text"/>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Preferred Language</label>
                  <div className="relative">
                    <select className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 w-full px-4 py-3 rounded-lg text-sm font-medium appearance-none cursor-pointer">
                      <option>English (US)</option>
                      <option>Hindi</option>
                      <option>Marathi</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Password</label>
                  <input name="password" value={formData.password} onChange={handleChange} className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium" placeholder="••••••••" type="password"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-on-surface font-semibold text-xs uppercase tracking-wider ml-1">Confirm Password</label>
                  <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary transition-all duration-300 px-4 py-3 rounded-lg text-sm font-medium" placeholder="••••••••" type="password"/>
                </div>
              </div>
              <div className="flex items-start gap-3 py-2">
                <input className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="terms" type="checkbox"/>
                <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                  I acknowledge that I am registering as an authorized staff member of Samvaad Enterprise and agree to the <span className="text-primary font-bold cursor-pointer hover:underline">Internal Security Protocols</span>.
                </label>
              </div>
              <div className="pt-4">
                <button className="w-full bg-primary-container text-white font-bold py-4 rounded-xl text-sm tracking-widest uppercase shadow-lg shadow-primary-container/20 hover:bg-primary transition-all active:scale-[0.98]" type="submit">
                  Complete Registration
                </button>
              </div>
            </form>
            <div className="mt-12 pt-8 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-on-surface-variant font-medium">Already have a staff account?</p>
              <Link className="text-primary font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors" href="/login">Sign In to Dashboard</Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-8 mt-auto bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-[1920px] mx-auto">
          <p className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500">
            © 2024 Samvaad Enterprise Banking. All rights reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Privacy Policy</Link>
            <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Terms of Service</Link>
            <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Security</Link>
            <Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all" href="/">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}