import React from 'react';
import { Lock } from 'lucide-react';
import { TabOption } from '../types';

interface TopBarProps {
  activeTab: TabOption;
}

const TopBar: React.FC<TopBarProps> = ({ activeTab }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 bg-black rounded-sm shadow-lg text-gray-300 text-sm font-mono p-3 flex items-center space-x-2 z-20 relative">
      <Lock className="w-3 h-3 text-gray-500" />
      <span className="text-gray-500">bgwn.net</span>
      <span className="text-gray-600">/</span>
      <span className="text-gray-300 hover:text-white cursor-pointer">music</span>
      <span className="text-gray-600">/</span>
      {/* Avoid showing 'music / music' redundancy */}
      <span className="text-white font-bold">{activeTab === TabOption.MUSIC ? '' : activeTab.toLowerCase()}</span>
      <span className="text-gray-600">/</span>
    </div>
  );
};

export default TopBar;