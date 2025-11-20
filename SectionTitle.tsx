import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
       <div className="flex items-center justify-center gap-2 mb-3 opacity-70">
         <span className="h-px w-8 bg-primary/50"></span>
         <span className="text-primary text-xs font-mono tracking-widest uppercase">System_Section</span>
         <span className="h-px w-8 bg-primary/50"></span>
       </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
        <span className="text-primary opacity-50 mr-2">&gt;</span>
        {title}<span className="animate-pulse text-primary">_</span>
      </h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto font-light text-sm md:text-base font-sans">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
