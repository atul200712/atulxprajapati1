const ScrollingBanner = () => {
  const words = [
    "MOTION DESIGN", "CINEMATIC PACING", "COLOR GRADING", 
    "SOUND DESIGN", "STORYTELLING", "HIGH RETENTION EDITS"
  ];

  return (
    <div className="bg-brand py-6 overflow-hidden border-y-4 border-black relative z-20">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-scroll gap-8 min-w-full">
          {[...Array(4)].map((_, i) => (
             <div key={i} className="flex gap-8 items-center">
               {words.map((word, idx) => (
                <span key={idx} className="text-black font-black text-2xl md:text-4xl uppercase italic tracking-tighter">
                  {word} •
                </span>
               ))}
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
