import React from 'react';
import { Lock } from 'lucide-react';
import { TabOption } from '../types';

interface TopBarProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const TopBar: React.FC<TopBarProps> = ({ activeTab, onTabChange }) => {
  const musicTabs = [
    TabOption.CATCH22,
    TabOption.ARIZONA,
    TabOption.ABOUTIME,
    TabOption.GOLDN_MNKY,
    TabOption.JOVE,
    TabOption.KATLYST,
    TabOption.DISTORTED,
    TabOption.MR_SQUARE,
    TabOption.POSER,
    TabOption.TIX,
  ];

  const showInternalTabs = musicTabs.includes(activeTab) || activeTab === TabOption.MUSIC;

  return (
    <div className="w-full max-w-6xl mx-auto mb-6 bg-black/95 border border-white/5 rounded-md shadow-md text-gray-200 text-sm p-3 z-20 relative">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Lock className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 font-mono text-xs md:text-sm">bgwn.net</span>
        </div>

        <nav className="flex-1 flex items-center justify-center gap-3 flex-wrap">
          {[
            TabOption.HOME,
            TabOption.MUSIC,
            TabOption.BLOG,
            TabOption.ABOUT,
            TabOption.ARTIST,
            TabOption.SHOWS,
            TabOption.VISUALS,
            TabOption.SUPPORT_ARTISTS,
            TabOption.SUPPORT_BUSINESSES,
          ].map((tab) => {
            const isActive = activeTab === tab || (tab === TabOption.MUSIC && musicTabs.includes(activeTab));
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-3 py-1 rounded-sm text-sm font-semibold tracking-wide transition-colors duration-150 ${isActive ? 'bg-white text-black shadow-sm border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab}
              </button>
            );
          })}
        </nav>

        <img src="/assets/bgwn_png3_logo.png" alt="bgwn logo" className="w-16 h-auto hidden md:block" />
      </div>

      {showInternalTabs && (
        <div className="mt-2 flex gap-2 items-center justify-center flex-wrap">
          {musicTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-150 ${activeTab === tab ? 'bg-blue-600 text-white shadow' : 'bg-white/5 text-gray-200 hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopBar;