export default function TreasuryPanel() {
  return (
    <div className="w-full h-full p-8 overflow-y-auto bg-surface">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-headline font-bold text-primary mb-2">Branch Treasury & Liquidity</h1>
        <p className="text-sm text-slate-500 mb-8">Real-time overview of Andheri West Branch financials.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+4.2%</span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">Total Cash Reserves</h3>
            <p className="text-3xl font-black text-primary">₹1.24 Cr</p>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                <span className="material-symbols-outlined">savings</span>
              </div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">Fixed Deposit Inflows (Today)</h3>
            <p className="text-3xl font-black text-primary">₹45.5 L</p>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-100 text-orange-700 rounded-lg">
                <span className="material-symbols-outlined">currency_exchange</span>
              </div>
              <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">-2.1%</span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">Daily Remittances</h3>
            <p className="text-3xl font-black text-primary">₹12.3 L</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-bold text-primary mb-4">Recent High-Value Transactions</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Transaction ID</th>
                <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Type</th>
                <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 text-primary font-medium">#TRX-9921</td>
                <td className="py-4">Rajesh Kumar</td>
                <td className="py-4">FD Premature Closure</td>
                <td className="py-4 font-bold text-error">-₹15,00,000</td>
                <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Completed</span></td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 text-primary font-medium">#TRX-9922</td>
                <td className="py-4">Meena Devi</td>
                <td className="py-4">New Fixed Deposit</td>
                <td className="py-4 font-bold text-green-600">+₹5,00,000</td>
                <td className="py-4"><span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">Processing</span></td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 text-primary font-medium">#TRX-9923</td>
                <td className="py-4">Sanjay Gupta</td>
                <td className="py-4">Gold Loan Disbursal</td>
                <td className="py-4 font-bold text-error">-₹8,50,000</td>
                <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
