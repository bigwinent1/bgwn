import React, { useState } from 'react';
import { ArtistCardProps, TabOption } from '../types';
import { X } from 'lucide-react';

interface SidebarProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}



const ArtistCard: React.FC<ArtistCardProps> = ({ name, color, logoText, subText, onClick }) => (
  <div 
    onClick={onClick}
    className={`w-full p-4 mb-2 rounded-md shadow-sm cursor-pointer transition-transform hover:scale-[1.02] ${color} relative overflow-hidden group`}
  >
    <div className="flex justify-between items-center relative z-10">
      <span className="font-bold text-lg text-white drop-shadow-md">{name}</span>
      {logoText && (
        <span className="font-black text-2xl italic text-white/90 border-2 border-white/50 px-2 transform -rotate-2">
          {logoText}
        </span>
      )}
    </div>
    {subText && <div className="text-white/80 text-xs mt-1 relative z-10">{subText}</div>}
    
    {/* Decorative background circle */}
    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-colors"></div>
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (tab: TabOption) => {
    onTabChange(tab);
    setIsOpen(false);
  }; 

  return (
    <>
      {/* Fixed logo toggle (always visible top-left) */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle sidebar"
        className="fixed top-4 left-4 z-60 p-0 rounded-md hover:bg-black transition"
      >
        <img src="/assets/bgwn_jove.png" alt="bgwn jove logo (transparent)" className="w-[6.75rem] h-[6.75rem] object-contain bg-transparent" />
      </button>

      {/* Overlay shown when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}

      {/* Sidebar Container */}
      <div className={`fixed top-0 left-0 h-screen w-80 bg-white border-r border-gray-200 flex flex-col font-sans overflow-y-auto z-50 pt-20 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close button */}
        <div className="absolute top-4 right-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close sidebar" className="p-2 rounded-md hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Logo Area */}
        <div className="p-6 bg-transparent text-white cursor-pointer" onClick={() => handleNavigation(TabOption.HOME)}>
          <img src="/assets/bgwn_jove.png" alt="bgwn jove logo (transparent)" className="w-full h-auto bg-transparent" />
        </div>

      <div className="p-6 space-y-8 flex-grow">
        {/* Condensed sidebar: content-only (navigation moved to global bar) */}

        {/* Music Section (Visual Cards) */}
        <div>
          <h2 className="text-xs font-bold tracking-wider text-gray-900 mb-3 uppercase">
            MUSIC
          </h2>
          <div className="space-y-2">
            <ArtistCard 
                name="Catch22" 
                color="bg-blue-400" 
                subText="The Flower Album"
                onClick={() => handleNavigation(TabOption.CATCH22)}
            />
            <ArtistCard 
                name="ARIZONA" 
                color="bg-red-500" 
                logoText="ARIZONA"
                onClick={() => handleNavigation(TabOption.ARIZONA)}
            />
            <ArtistCard 
              name="ABOUTIME" 
              color="bg-slate-400" 
              logoText="ABOUTTIME"
              onClick={() => handleNavigation(TabOption.ABOUTIME)}
            />
            <ArtistCard 
              name="RWYA" 
              color="bg-green-600" 
              logoText="READY WHEN"
              onClick={() => handleNavigation(TabOption.RWYA)}
            />
            <ArtistCard
              name="JOVE"
              color="bg-indigo-700"
              logoText="JOVE"
              onClick={() => handleNavigation(TabOption.JOVE)}
            />
            <ArtistCard
              name="KATLYST"
              color="bg-purple-600"
              logoText="KATLYST"
              onClick={() => handleNavigation(TabOption.KATLYST)}
            />
            <ArtistCard
              name="DISTORTED"
              color="bg-orange-600"
              logoText="DISTORTED"
              onClick={() => handleNavigation(TabOption.DISTORTED)}
            />
            <ArtistCard
              name="Mr. SQUARE (demos)"
              color="bg-green-600"
              logoText="MR SQUARE"
              onClick={() => handleNavigation(TabOption.MR_SQUARE)}
            />
          </div>
        </div>
      </div>
      
      <div className="p-6 text-xs text-gray-400">
        &copy; 2024 bgwn records.
      </div>
      </div>
    </>
  );
};

export default Sidebar;