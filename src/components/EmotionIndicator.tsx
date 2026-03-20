export default function EmotionIndicator({ emotion, intensity, staffTip }: { emotion?: string, intensity?: string, staffTip?: string }) {
  const getColors = (e?: string) => {
    switch(e) {
      case 'calm': return 'text-green-600 border-green-200';
      case 'anxious': return 'text-amber-500 border-amber-200';
      case 'frustrated': return 'text-orange-500 border-orange-200';
      case 'angry': return 'text-red-600 border-red-200';
      default: return 'text-secondary border-secondary-container';
    }
  };

  const getIcon = (e?: string) => {
    switch(e) {
      case 'calm': return 'sentiment_satisfied';
      case 'anxious': return 'sentiment_dissatisfied';
      case 'frustrated': return 'mood_bad';
      case 'angry': return 'sentiment_extremely_dissatisfied';
      default: return 'sentiment_neutral';
    }
  };

  const getIntensityBars = (i?: string) => {
    const level = i === 'low' ? 1 : i === 'medium' ? 2 : i === 'high' ? 3 : 1;
    return (
      <div className="flex gap-1 ml-2">
        {[1, 2, 3].map(n => (
          <div key={n} className={`w-1.5 h-3 rounded-full ${n <= level ? (
            emotion === 'anxious' ? 'bg-amber-500' :
            emotion === 'frustrated' ? 'bg-orange-500' :
            emotion === 'angry' ? 'bg-red-600' :
            emotion === 'calm' ? 'bg-green-600' :
            'bg-secondary'
          ) : 'bg-slate-200'}`}></div>
        ))}
      </div>
    );
  };

  const colors = getColors(emotion);
  const icon = getIcon(emotion);

  return (
    <div className={`mx-auto w-full max-w-md bg-white border rounded-xl p-3 flex items-center gap-4 ${colors.split(' ')[1]}`}>
      <div className="flex flex-col items-center">
        <span className={`material-symbols-outlined ${colors.split(' ')[0]}`} style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
        <span className={`text-[9px] font-black uppercase ${colors.split(' ')[0]}`}>{emotion || 'Neutral'}</span>
      </div>
      {getIntensityBars(intensity)}
      <div className="h-8 w-px bg-slate-200 mx-1"></div>
      <div className="flex-1">
        <p className="text-xs font-bold text-slate-700 italic">&quot;Staff Tip: {staffTip || 'Stay calm and assist.'}&quot;</p>
      </div>
    </div>
  );
}
