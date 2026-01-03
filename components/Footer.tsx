import React from 'react';

const Footer: React.FC = () => {
  return (
    <div 
      className="w-full mt-8 rounded-lg shadow-2xl p-8 md:p-12 text-white overflow-hidden relative" 
      style={{ background: 'linear-gradient(135deg, #1A5244 0%, #1B5A4A 100%)' }}
    >
       {/* Subtle decorative overlay to mimic the lighting in the design */}
       <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 font-sans tracking-wide items-center">
             {/* Column 1: Bandcamp */}
             <div className="flex flex-col items-center">
                <a href="https://byeblackboy.bandcamp.com/" target="_blank" rel="noreferrer" className="font-bold text-xl md:text-2xl uppercase tracking-wider border-b-[3px] border-yellow-500 pb-1 hover:text-yellow-200 transition-colors inline-block mb-2">
                   Bandcamp
                </a>
             </div>

             {/* Column 2: Soundcloud */}
             <div className="flex flex-col items-center">
                <a href="https://soundcloud.com/invasivemastermind/albums" target="_blank" rel="noreferrer" className="font-bold text-xl md:text-2xl uppercase tracking-wider border-b-[3px] border-yellow-500 pb-1 hover:text-yellow-200 transition-colors inline-block mb-2">
                   Soundcloud
                </a>
             </div>

             {/* Column 3: Twitch */}
             <div className="flex flex-col items-center">
                <a href="https://www.twitch.tv/bigwinent" target="_blank" rel="noreferrer" className="font-bold text-xl md:text-2xl uppercase tracking-wider border-b-[3px] border-yellow-500 pb-1 hover:text-yellow-200 transition-colors inline-block mb-2">
                   Twitch
                </a>
             </div>
          </div>
    </div>
  );
};

export default Footer;