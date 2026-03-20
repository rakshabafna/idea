export default function DocumentReader() {
  return (
    <div className="mb-8 bg-surface p-4 rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center">
      <span className="material-symbols-outlined text-slate-400 mb-2">add_a_photo</span>
      <p className="text-[11px] font-bold text-primary uppercase mb-1">Upload ID or Evidence</p>
      <p className="text-[10px] text-slate-500">Drag file or click to snap photo</p>
      <div className="mt-4 w-full h-24 bg-surface-container-highest rounded-lg flex items-center justify-center overflow-hidden">
        <img alt="Document Preview" data-alt="Placeholder for uploaded document preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3d1B0vN-N2i2siTEYK0Y41nGtC4a8z9ExjK_haOz0Sa_OOC4n2Zui8b3ZwnUsnYqbw_3db9dcLdqt4X5aIYvDWYYxIve8bP-zizjCoIZ0P2kfXGKiBR8H0uevpJY77fVfZZo7eotvYPTKCFb1Kd7a-XfsuCns9vu-N0VnaDHtTPiH3QWY69JwobeE3H-egtL06OwXyEheDgWkAFAOHHGXbhn_JKi_t0Dvfz0Oi9F3s18BwVoKfd7ca25ObhswdBM0LwG33PKbTvkO" />
      </div>
    </div>
  );
}
