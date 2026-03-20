import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
<div className="flex justify-between items-center px-8 h-16 w-full max-w-[1920px] mx-auto">
<div className="flex items-center gap-8">
<span className="text-2xl font-black text-[#1E3A5F] tracking-tighter">Samvaad</span>
<div className="hidden md:flex gap-6">
<Link className="text-[#1E3A5F] border-b-2 border-[#1E3A5F] pb-1 font-manrope font-bold tracking-tight text-sm" href="/dashboard">Dashboard</Link>
<Link className="text-slate-500 font-medium font-manrope tracking-tight text-sm hover:text-[#0f9e75] transition-colors duration-200" href="/dashboard">Treasury</Link>
<Link className="text-slate-500 font-medium font-manrope tracking-tight text-sm hover:text-[#0f9e75] transition-colors duration-200" href="/dashboard">Analytics</Link>
<Link className="text-slate-500 font-medium font-manrope tracking-tight text-sm hover:text-[#0f9e75] transition-colors duration-200" href="/dashboard">Compliance</Link>
</div>
</div>
<div className="flex items-center gap-4">
<Link href="/dashboard" className="p-2 text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</Link>
<Link href="/dashboard" className="p-2 text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</Link>
<Link href="/dashboard" className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-high ml-2 block">
<img alt="User Profile Avatar" data-alt="Professional male avatar profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjJu9ZSn4DhV85V07_NUyN69nWdii8bfBtawDQOo7EJ8hvsUzSmhbRT6M0bjsg3j6_Mki1NstFvB0SxGMhI01-8cye2NVvA31EPSs5ju9kcRmPRCvL2Qyg1bl8Zrlw5NNtoctQXXK3wfWwiDfdSzFq9UlgPIf6PKWXp8n9mbi0m8ETRZFuDzXERNO6WAG3nsPaCVPEMSzPZgMplyK9u_g9ye7Wh35pBz3MtFxLzw-7Uc9pSu3BUbuKDt3mXBJn57W4ND3UsW256q-Q"/>
</Link>
</div>
</div>
</nav>
<main className="pt-16">
{/*  Hero Section  */}
<section className="relative overflow-hidden bg-surface py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-semibold mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
                    Now Live in 1.5 Lakh Branches
                </div>
<h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-primary mb-6 leading-[1.1]">
                    Har Bhasha, <br className="hidden md:block"/>Har Shaakha
                </h1>
<p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12">
                    Empowering bank branches with Gen-AI powered <span className="text-primary font-semibold">real-time translation</span> and context-aware voice assistance across India.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<Link href="/login" className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 text-center">
                        Login to Terminal
                    </Link>
<Link href="/register" className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all active:scale-95 text-center">
                        Register Branch
                    </Link>
</div>
</div>
{/*  Abstract Visual  */}
<div className="mt-20 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
<div className="aspect-video bg-slate-900 flex items-center justify-center relative">
<img alt="Samvaad Terminal Interface" className="w-full h-full object-cover opacity-60" data-alt="High-tech data analytics and voice waves interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASx85CMKKawEoBVeFxEGXRHlZ2oBJZ8UnMYWO8g8ig94jsYqtx7CpeaVkSnNRDowv2mKXJBRboEQ5gHq7VFki5YnaFJYKZocaRSLzVR0s58-2nn0Defau7wrBpjTwf53_kAxKHSToksZAx3vb-Ouipvg5qyL7qqaQabCabuunJUgpU__RGOLrjZPHtjp3CCqKB7CreDtDWTpFQaq0GPy-qlokmxoveLw2_hugou-yK_wtc2ore5CInX1uM2U50SC2Kq00wFjO-YX82"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<span className="material-symbols-outlined text-4xl" data-icon="play_arrow" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
</div>
</div>
</section>
{/*  Feature Bento Grid  */}
<section className="py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center md:text-left">
<h2 className="text-3xl font-bold text-primary mb-4">Precision Engineering for Banking</h2>
<p className="text-slate-500 font-medium">Enterprise-grade AI built for Indian financial ecosystems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Feature Card 1  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-transparent transition-all hover:translate-y-[-4px]">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined" data-icon="record_voice_over">record_voice_over</span>
</div>
<h3 className="text-xl font-bold mb-3">Real-time Voice Translation</h3>
<p className="text-slate-500 text-sm leading-relaxed">Instant translation between 22 regional languages and English with sub-100ms latency.</p>
</div>
{/*  Feature Card 2  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-transparent transition-all hover:translate-y-[-4px]">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<h3 className="text-xl font-bold mb-3">Banking-Context AI</h3>
<p className="text-slate-500 text-sm leading-relaxed">Trained on millions of hours of banking terminology to ensure accuracy in financial intent.</p>
</div>
{/*  Feature Card 3  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-transparent transition-all hover:translate-y-[-4px]">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined" data-icon="sentiment_satisfied">sentiment_satisfied</span>
</div>
<h3 className="text-xl font-bold mb-3">Emotion Detection</h3>
<p className="text-slate-500 text-sm leading-relaxed">Alert staff when customer sentiment turns frustrated or confused during interaction.</p>
</div>
{/*  Feature Card 4  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-transparent transition-all hover:translate-y-[-4px]">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined" data-icon="gpp_maybe">gpp_maybe</span>
</div>
<h3 className="text-xl font-bold mb-3">Fraud Signal Flagging</h3>
<p className="text-slate-500 text-sm leading-relaxed">Real-time analysis to detect coercion or social engineering cues in voice patterns.</p>
</div>
{/*  Feature Card 5  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-transparent transition-all hover:translate-y-[-4px]">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined" data-icon="docs">docs</span>
</div>
<h3 className="text-xl font-bold mb-3">Document Reader</h3>
<p className="text-slate-500 text-sm leading-relaxed">Sync verbal interactions with scanned documents for a unified transaction record.</p>
</div>
{/*  Feature Card 6  */}
<div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-transparent transition-all hover:translate-y-[-4px]">
<div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined" data-icon="summarize">summarize</span>
</div>
<h3 className="text-xl font-bold mb-3">Bilingual Summary</h3>
<p className="text-slate-500 text-sm leading-relaxed">Generates a concise post-meeting summary in both regional and official languages.</p>
</div>
</div>
</div>
</section>
{/*  How It Works  */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-24">
<span className="text-secondary font-bold tracking-widest uppercase text-xs">Seamless Integration</span>
<h2 className="text-4xl font-bold text-primary mt-4">Three Steps to Assistance</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
{/*  Step 1  */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-slate-50 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl text-primary" data-icon="mic">mic</span>
</div>
<div className="absolute top-12 left-[30%] hidden md:block w-[15%] h-[1px] bg-slate-200"></div>
<h4 className="text-xl font-bold mb-4">Record</h4>
<p className="text-slate-500">Enable the ambient desk-mic at the counter. Samvaad listens and identifies the customer's dialect instantly.</p>
</div>
{/*  Step 2  */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl text-white" data-icon="translate">translate</span>
</div>
<div className="absolute top-12 left-[63%] hidden md:block w-[15%] h-[1px] bg-slate-200"></div>
<h4 className="text-xl font-bold mb-4">Translate</h4>
<p className="text-slate-500">Real-time translation appears on the bank officer's terminal, suggesting specific banking terms in context.</p>
</div>
{/*  Step 3  */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-slate-50 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl text-secondary" data-icon="verified_user">verified_user</span>
</div>
<h4 className="text-xl font-bold mb-4">Assist</h4>
<p className="text-slate-500">Complete the transaction with certainty. The customer receives an SMS summary in their own language.</p>
</div>
</div>
</div>
</section>
{/*  Final CTA  */}
<section className="py-24 bg-surface-container-highest">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="bg-white p-12 md:p-20 rounded-3xl shadow-xl relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-4xl font-bold text-primary mb-6">Ready to upgrade your branch?</h2>
<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">Join thousands of regional bank branches already communicating without barriers.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<Link href="/register" className="px-10 py-4 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity">Request a Demo</Link>
<Link href="/contact" className="px-10 py-4 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors">Contact Sales</Link>
</div>
</div>
{/*  Decorative background elements  */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
<div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-[1920px] mx-auto gap-8">
<div className="flex flex-col gap-2 items-center md:items-start">
<span className="text-xl font-black text-[#1E3A5F] tracking-tighter">Samvaad</span>
<p className="font-inter text-xs tracking-wide text-slate-400 dark:text-slate-500">© 2024 Samvaad Enterprise Banking. All rights reserved.</p>
</div>
<div className="flex gap-8">
<Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all duration-200" href="/">Privacy Policy</Link>
<Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all duration-200" href="/">Terms of Service</Link>
<Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all duration-200" href="/">Security</Link>
<Link className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-[#0f9e75] underline underline-offset-4 transition-all duration-200" href="/">Contact</Link>
</div>
</div>
</footer>

    </div>
  );
}