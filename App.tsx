import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import { TabOption } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.HOME);

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bgwn_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sidebar - Fixed width, sticky functionality handling internal scroll */}
      <aside className="flex-shrink-0 z-30 shadow-2xl hidden md:block">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </aside>

      {/* Main Content - Flex grow to fill remaining space */}
      <main className="flex-grow flex flex-col relative h-full">

        {/* Top Bar Area */}
        <div className="w-full pt-8 px-8 md:px-12 z-20">
             <TopBar activeTab={activeTab} />
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-grow overflow-hidden z-10">
             <ContentArea activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </main>
    </div>
  );
}

export default App;