import React, { useState } from 'react';
import { NavSection, ArtistCardProps, TabOption } from '../types';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const sections: NavSection[] = [
  {
    title: '22OUR',
    links: [
      { label: 'Support These Artists', href: '#' },
      { label: 'Support These Businesses', href: '#' },
    ],
  },
  {
    title: 'BLOG',
    links: [
      { label: 'Welcome to `bgwn` - 2.16.24', href: '#' },
      { label: 'Introduction - 2.20.24', href: '#' },
    ],
  },
  {
    title: 'WEB',
    links: [
      { label: 'The Holistic Coalition', href: '#' },
    ],
  },
];

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
  
  const sitePages = [
    { label: 'Home', tab: TabOption.HOME },
    { label: 'Music', tab: TabOption.MUSIC },
    { label: 'About Us', tab: TabOption.ABOUT },
    { label: 'Artist', tab: TabOption.ARTIST },
    { label: 'Shows', tab: TabOption.SHOWS },
    { label: 'Visuals', tab: TabOption.VISUALS },
  ];

  const handleNavigation = (tab: TabOption) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle - Always visible */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black text-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-800 rounded-md transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="text-sm font-bold">Menu</span>
      </div>

      {/* Sidebar Container */}
      <div className={`fixed lg:static top-0 left-0 h-screen w-80 bg-white border-r border-gray-200 flex flex-col font-sans overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 z-40 pt-20 lg:pt-0`}>
      {/* Logo Area */}
      <div className="p-6 bg-black text-white cursor-pointer" onClick={() => handleNavigation(TabOption.HOME)}>
        <img src="/assets/bgwn_records_logo.png" alt="bgwn records logo" className="w-full h-auto" />
      </div>

      {/* Navigation Links */}
      <div className="p-6 space-y-8 flex-grow">
        {/* User requested pages integrated into the design structure */}
        <div className="mb-6">
            <h2 className="text-xs font-bold tracking-wider text-gray-900 mb-3 uppercase">Site Pages</h2>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
                {sitePages.map((page) => (
                  <li key={page.label}>
                    <button
                      onClick={() => handleNavigation(page.tab)}
                      className={`text-left w-full px-3 py-2 rounded-md transition-all text-sm font-medium ${
                        activeTab === page.tab
                        ? 'bg-black text-white font-bold'
                        : 'text-gray-700 hover:text-black hover:underline'
                      }`}
                    >
                      {page.label}
                    </button>
                  </li>
                ))}
            </ul>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xs font-bold tracking-wider text-gray-900 mb-3 uppercase">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  {link.label === 'ABOUTIME' ? (
                    <button
                      onClick={() => handleNavigation(TabOption.ABOUTIME)}
                      className={`block text-left w-full px-3 py-2 rounded-md transition-all ${
                        activeTab === TabOption.ABOUTIME ? 'bg-black text-white font-bold' : 'text-sm text-gray-700 hover:text-black'
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : link.label === 'POSER' ? (
                    <button
                      onClick={() => handleNavigation(TabOption.POSER)}
                      className={`block text-left w-full px-3 py-2 rounded-md transition-all ${
                        activeTab === TabOption.POSER ? 'bg-black text-white font-bold' : 'text-sm text-gray-700 hover:text-black'
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : link.label.includes('Support') ? (
                    link.label.includes('Artists') ? (
                      <button
                        onClick={() => handleNavigation(TabOption.SUPPORT_ARTISTS)}
                        className={`block text-left w-full px-3 py-2 rounded-md transition-all ${
                          activeTab === TabOption.SUPPORT_ARTISTS
                            ? 'bg-black text-white font-bold'
                            : 'text-sm text-gray-700 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleNavigation(TabOption.SUPPORT_BUSINESSES)}
                        className={`block text-left w-full px-3 py-2 rounded-md transition-all ${
                          activeTab === TabOption.SUPPORT_BUSINESSES
                            ? 'bg-black text-white font-bold'
                            : 'text-sm text-gray-700 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </button>
                    )
                  ) : section.title === 'BLOG' ? (
                    <button
                      onClick={() => handleNavigation(TabOption.BLOG)}
                      className={`block text-left w-full px-3 py-2 rounded-md transition-all ${
                        activeTab === TabOption.BLOG ? 'bg-black text-white font-bold' : 'text-sm text-gray-700 hover:text-black'
                      }`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className="text-sm text-gray-700 hover:text-black transition-colors block leading-tight">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

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