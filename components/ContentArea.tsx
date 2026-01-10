import React, { useState } from 'react';
import { TabOption } from '../types';
import { Share2, Play, Music, Disc, Calendar, MapPin, Users, Video, Headphones, ArrowRight } from 'lucide-react';
import Footer from './Footer';

interface ContentAreaProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const ContentArea: React.FC<ContentAreaProps> = ({ activeTab, onTabChange }) => {

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
  ];
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 2000);
  };


  const renderContent = () => {
    switch (activeTab) {
      case TabOption.HOME:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 p-8 md:p-12 text-black">
            <div className="bg-black/40 p-10 md:p-14 rounded-xl backdrop-blur-md border border-white/10 w-full max-w-3xl flex flex-col items-center shadow-2xl">

              {/* Logo Image */}
              <div
                onClick={handleLogoClick}
                className={`p-4 md:p-6 mb-8 shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.01]`}
              >
                <img
                  src={isLogoAnimating ? '/assets/bgwn-S_logo.png' : '/assets/home_bgwn_logo.png'}
                  alt="bgwn records logo"
                  className={`w-full max-w-md mx-auto object-contain ${isLogoAnimating ? 'animate-logo-spin' : ''}`}
                />
                <style>{`
                    @keyframes logoSpinZoom {
                      0% { transform: scale(1) rotate(0deg); }
                      50% { transform: scale(1.3) rotate(180deg); }
                      100% { transform: scale(1) rotate(360deg); }
                    }
                    .animate-logo-spin {
                      animation: logoSpinZoom 2s ease-in-out forwards;
                    }
                  `}</style>
              </div>

              <div id="bgwn_4_sayings" className="text-2xl text-black font-bold max-w-lg mx-auto leading-relaxed">
                <span className="line">BE GREAT WITH NOTHING</span>
                <span className="line">BE GREAT WITH NIHLISIM</span>
                <span className="line">BORN GOD WOMEN NOW</span>
                <span className="line">BORN GREAT WITH NOTHING</span>

                <style>{`
                    #bgwn_4_sayings .line { display:block; color: #000; }
                    @keyframes bgwn-blink {
                      0%, 20% { color: #000; text-shadow: none; }
                      45% { color: #fff; text-shadow: 0 0 8px #fff; }
                      55% { color: #fff; text-shadow: 0 0 12px #fff; }
                      70%, 100% { color: #000; text-shadow: none; }
                    }
                    #bgwn_4_sayings .line { animation: bgwn-blink 4s linear infinite; }
                    #bgwn_4_sayings .line:nth-child(1) { animation-delay: 0s; }
                    #bgwn_4_sayings .line:nth-child(2) { animation-delay: 1s; }
                    #bgwn_4_sayings .line:nth-child(3) { animation-delay: 2s; }
                    #bgwn_4_sayings .line:nth-child(4) { animation-delay: 3s; }
                  `}</style>
              </div>
            </div>
          </div>
        );

      case TabOption.ABOUT:
        return (
          <div className="p-8 md:p-12 text-black h-full overflow-y-auto">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold tracking-tight border-b border-white/20 pb-4">About Us</h2>
              <div className="prose prose-invert prose-lg">
                <p className="text-xl leading-relaxed">
                  bgwn is a philosophy. be great with nothing.
                </p>
                <p className="text-black">
                  bgwn. est 2016. invasive mastermind says be.great.with.nothing
                </p>
              </div>
            </div>
          </div>
        );

      case TabOption.BLOG:
        return (
          <div className="p-8 md:p-12 text-black h-full overflow-y-auto">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold tracking-tight border-b border-white/20 pb-4">Welcome to `bgwn`</h2>
              <div className="text-sm text-gray-400">February 16, 2024 — bgwn records</div>

              <div className="prose prose-invert prose-lg">
                <p>
                  Hello — welcome to bgwn. We started this label as a holistic coalition of artists, visual creators, and web makers who wanted a space
                  to share work without the friction of over-polished industry structures. This blog will be our place to document releases, thoughts on
                  production, and notes about the community we're building.
                </p>

                <h3>Our Philosophy</h3>
                <p>
                  We believe in supporting creative risk, centering community, and keeping the means of distribution accessible. Expect album notes,
                  DIY production tips, and behind-the-scenes captures from our visual team.
                </p>

                <h3>What's Next</h3>
                <p>
                  In the coming weeks we'll publish release plans for <strong>CATCH22</strong> and a short visual series from ARIZONA. If you're an artist
                  or a small business who wants to collaborate, reach out via the Support pages in the sidebar.
                </p>

                <p className="text-black">— bgwn</p>
              </div>
            </div>
          </div>
        );

      case TabOption.MUSIC:
        return (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-4xl font-bold text-black mb-8 border-b border-white/10 pb-4 flex items-center">
              <Headphones className="mr-4 w-8 h-8" /> Music Catalog
            </h2>

            {/* Music Albums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
              {/* CATCH22 Album Card */}
              <div
                onClick={() => onTabChange(TabOption.CATCH22)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 p-0 transition-transform duration-500 group-hover:scale-[1.02] rounded-md overflow-hidden">
                  <img src="/assets/catch22_cover_art.jpg" alt="CATCH22 cover art" className="w-full h-full object-cover" />
                  {/* parental advisory removed as requested */}
                  <div className="absolute bottom-8 right-8 text-white font-bold tracking-[0.3em] text-sm opacity-90">
                    CATCH22
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">CATCH22</h3>
                <p className="text-gray-600 text-sm">2024</p>
              </div>

              {/* ARIZONA Album Card */}
              <div
                onClick={() => onTabChange(TabOption.ARIZONA)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/ARIZONA.jpg" alt="ARIZONA cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors">ARIZONA</h3>
                <p className="text-gray-600 text-sm">2024</p>
              </div>

              {/* ABOUTIME Album Card */}
              <div
                onClick={() => onTabChange(TabOption.ABOUTIME)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/aboutime.jpg" alt="ABOUTIME cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-slate-600 transition-colors">ABOUTIME</h3>
                <p className="text-gray-600 text-sm">Lo-Fi Sessions • 2024</p>
              </div>

              {/* Goldn Mnky Album Card */}
              <div
                onClick={() => onTabChange(TabOption.GOLDN_MNKY)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/golden_monkey.jpg" alt="Goldn Mnky cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-[#7b6f58] transition-colors">Goldn Mnky</h3>
                <p className="text-gray-600 text-sm">Demos • 2024</p>
              </div>

              {/* POSER Album Card */}
              <div
                onClick={() => onTabChange(TabOption.POSER)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/poser.jpg" alt="POSER cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors">POSER</h3>
                <p className="text-gray-600 text-sm">Demos • 2024</p>
              </div>

              {/* JOVE Album Card */}
              <div onClick={() => onTabChange(TabOption.JOVE)} 
              className="cursor-default group transition-transform duration-300 hover:scale-105">
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/jove.jpg" alt="JOVE cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-indigo-700 transition-colors">JOVE</h3>
                <p className="text-gray-600 text-sm">2025</p>
              </div>

              {/* KATLYST Album Card */}
              <div
                onClick={() => onTabChange(TabOption.KATLYST)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/KATLYST-cover-2024.png" alt="KATLYST cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-purple-600 transition-colors">KATLYST</h3>
                <p className="text-gray-600 text-sm">2024</p>
              </div>

              {/* DISTORTED Album Card */}
              <div
                onClick={() => onTabChange(TabOption.DISTORTED)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/DISTORTED.jpg" alt="DISTORTED cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors">DISTORTED</h3>
                <p className="text-gray-600 text-sm">2024</p>
              </div>

              {/* MR_SQUARE Album Card */}
              <div
                onClick={() => onTabChange(TabOption.MR_SQUARE)}
                className="cursor-pointer group transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full aspect-square shadow-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-md">
                  <img src="/assets/mrsquare.jpg" alt="Mr. SQUARE (demos) cover art" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-green-600 transition-colors">Mr. SQUARE (demos)</h3>
                <p className="text-gray-600 text-sm">2024</p>
              </div>
            </div>
          </div>
        );

      case TabOption.ARTIST:
        return (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-3xl font-bold text-black mb-8 border-b border-white/10 pb-4">Our Roster</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={() => onTabChange(TabOption.CATCH22)} className="bg-black group hover:bg-blue-900/60 transition-colors rounded-xl p-6 cursor-pointer border">
                <div className="aspect-square mb-4 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-[1.02] transition-transform overflow-hidden">
                  <img src="/assets/profile.jpg" alt="Invasive Mastermind" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Invasive Mastermind</h3>
                <p className="text-blue-200 text-sm">Neo Soul / Hip-Hop</p>
              </div>
            </div>
          </div>
        );

      case TabOption.SUPPORT_ARTISTS:
        return (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-3xl font-bold text-black mb-6 border-b border-white/10 pb-4">Support These Artists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{
                name: 'Catch22',
                desc: 'Experimental Hip-Hop',
                donate: '#'
              }, {
                name: 'ARIZONA',
                desc: 'Alternative Rock / Indie',
                donate: '#'
              }, {
                name: 'ABOUTIME',
                desc: 'Lo-Fi Beats',
                donate: '#'
              }].map((artist) => (
                <div key={artist.name} className="bg-black/40 p-6 rounded-lg border border-white/5 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                      <div className="text-sm text-gray-400">{artist.desc}</div>
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-black font-bold">{artist.name.split('')[0]}</div>
                  </div>
                  <p className="text-sm text-white mb-4">You can support this artist by buying merch, streaming, or donating directly.</p>
                  <div className="mt-auto flex gap-2">
                    <a href={artist.donate} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-black rounded-md text-sm font-bold">Donate</a>
                    <button onClick={() => onTabChange(TabOption.ARTIST)} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-black rounded-md text-sm">View Artist</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case TabOption.SUPPORT_BUSINESSES:
        return (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-3xl font-bold text-black mb-6 border-b border-white/10 pb-4">Support These Businesses</h2>
            <div className="space-y-4">
              {[{
                name: 'Cornerstone Coffee + Co',
                city: 'Albany, GA',
                href: '#'
              }, {
                name: 'The Network Coffee Shop',
                city: 'Valdosta, GA',
                href: '#'
              }, {
                name: 'Maté Factor',
                city: 'Savannah, GA',
                href: '#'
              }].map((biz) => (
                <div key={biz.name} className="bg-black/40 p-6 rounded-lg border border-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-black">{biz.name}</h3>
                    <div className="text-sm text-gray-400">{biz.city}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={biz.href} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white text-black rounded font-bold text-sm">Visit</a>
                    <button className="px-3 py-2 bg-white/10 text-black rounded text-sm">Support</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case TabOption.SHOWS:
        return (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
              <Calendar className="mr-3" /> Upcoming Shows
            </h2>
            <div className="space-y-4">
              {[
                {
                  "date": "2024-12-15",
                  "venue": "Cornerstone Coffee + Co",
                  "city": "Albany, GA",
                  "university": "Albany State"
                },
                {
                  "date": "2024-12-16",
                  "venue": "The Network Coffee Shop",
                  "city": "Valdosta, GA",
                  "university": "Valdosta State"
                },
                {
                  "date": "2024-12-17",
                  "venue": "Maté Factor",
                  "city": "Savannah, GA",
                  "university": "Savannah"
                },
                {
                  "date": "2024-12-18",
                  "venue": "Three Tree Coffee Roasters",
                  "city": "Statesboro, GA",
                  "university": "Georgia Southern"
                },
                {
                  "date": "2024-12-19",
                  "venue": "Blackbird Coffee",
                  "city": "Milledgeville, GA",
                  "university": "Georgia College & State University"
                },
                {
                  "date": "2024-12-20",
                  "venue": "Everythang Nola",
                  "city": "Atlanta, GA",
                  "university": "Atlanta Technical College"
                },
                {
                  "date": "2024-12-21",
                  "venue": "404 Coffee",
                  "city": "Atlanta, GA",
                  "university": "Clark Atlanta University"
                },
                {
                  "date": "2024-12-22",
                  "venue": "Cafe Lucia",
                  "city": "Atlanta, GA",
                  "university": "Georgia State University"
                },
                {
                  "date": "2024-12-23",
                  "venue": "The Depot by Kaldi’s Coffee",
                  "city": "Atlanta, GA",
                  "university": "Emory University"
                },
                {
                  "date": "2024-12-24",
                  "venue": "Opo Coffee",
                  "city": "Decatur, GA",
                  "university": "Agnes Scott College"
                },
                {
                  "date": "2024-12-25",
                  "venue": "Hendershots",
                  "city": "Athens, GA",
                  "university": "University of Georgia"
                },
                {
                  "date": "2024-12-26",
                  "venue": "7 Brew Coffee",
                  "city": "Binghamton, NY",
                  "university": "SUNY Binghamton"
                },
                {
                  "date": "2024-12-27",
                  "venue": "Matto Espresso",
                  "city": "New York, NY",
                  "university": "NYU"
                },
                {
                  "date": "2024-12-28",
                  "venue": "Cafe Landwer – Audubon Circle",
                  "city": "Boston, MA",
                  "university": "Boston University"
                },
                {
                  "date": "2024-12-29",
                  "venue": "Cafe Luna",
                  "city": "Cambridge, MA",
                  "university": "MIT"
                },
                {
                  "date": "2024-12-30",
                  "venue": "Yego Coffee",
                  "city": "Medford, MA",
                  "university": "Tufts University"
                },
                {
                  "date": "2024-12-31",
                  "venue": "Poppy’s Coffee & Kitchen",
                  "city": "New Haven, CT",
                  "university": "Yale University"
                },
                {
                  "date": "2025-01-01",
                  "venue": "Dawn to Dusk Cafe",
                  "city": "Glassboro, NJ",
                  "university": "Rowan University"
                },
                {
                  "date": "2025-01-02",
                  "venue": "Stella's",
                  "city": "Philadelphia, PA",
                  "university": "Temple University"
                },
                {
                  "date": "2025-01-03",
                  "venue": "Redhawk Coffee Roasters",
                  "city": "Pittsburgh, PA",
                  "university": "Carnegie Mellon University"
                }
              ]
                .map((show, i) => (
                  <div key={i} className="bg-black/40 hover:bg-black/60 p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between border border-white/5 transition-colors group">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-white text-black font-bold p-3 rounded text-center min-w-[70px] mr-6">
                        <div className="text-sm tracking-widest">{show.date.split(' ')[0]}</div>
                        <div className="text-2xl leading-none">{show.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{show.venue}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="w-3 h-3 mr-1" /> {show.city}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end w-full md:w-auto">
                      <span className="text-sm font-bold text-black mr-6 bg-white/10 px-3 py-1 rounded-full">{show.university}</span>
                      <button className="bg-white text-black text-sm font-bold px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                        TICKETS
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );

      case TabOption.VISUALS:
        return (
          <div className="p-8 h-full overflow-y-auto">
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
              <Video className="mr-3" /> Visual Archives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Visual life */}
              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-3 border border-gray-800">
                  <img src="./assets/life_thumbnail.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-black text-[10px] px-2 py-0.5 rounded">
                    02:04
                  </div>
                </div>
                <h3 className="text-black font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                  Visual Experiment No. 1
                </h3>
                <p className="text-black text-sm">Directed by bgwn visual team</p>
              </div>

              {/* Visual tumbling_down */}
              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-3 border border-gray-800">
                  <img src="./assets/tumbling_down_thumbnail.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-black text-[10px] px-2 py-0.5 rounded">
                    02:42
                  </div>
                </div>
                <h3 className="text-black font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                  Visual Experiment No. 2
                </h3>
                <p className="text-black text-sm">Directed by bgwn visual team</p>
              </div>

              {/* Visual cerebral_choir */}
              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-3 border border-gray-800">
                  <img src="./assets/cerebral_choir_thumbnail.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-black text-[10px] px-2 py-0.5 rounded">
                    03:42
                  </div>
                </div>
                <h3 className="text-black font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                  Visual Experiment No. 3
                </h3>
                <p className="text-black text-sm">Directed by bgwn visual team</p>
              </div>

              {/* Visual arrapin */}
              <div className="group cursor-pointer">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-3 border border-gray-800">
                  <img src="./assets/arrapin_thumbnail.jpg" alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-black text-[10px] px-2 py-0.5 rounded">
                    02:04
                  </div>
                </div>
                <h3 className="text-black font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                  Arrappin
                </h3>
                <p className="text-black text-sm">Directed by bgwn visual team</p>
              </div>
            </div>
          </div>
        );

      case TabOption.CATCH22:
        return (
          <>
            <div className="flex-grow flex flex-col items-center justify-center p-8">
              {/* Album Art - use actual cover image */}
              <div className="relative w-full max-w-md aspect-square shadow-2xl flex items-center justify-center mb-12 p-0 group cursor-pointer transition-transform duration-500 hover:scale-[1.01] rounded-md overflow-hidden">
                <img src="/assets/catch22_cover_art.jpg" alt="CATCH22 cover art" className="w-full h-full object-cover" />
                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="border border-white/50 px-1 py-0.5 inline-block mb-1 bg-black/30">
                    <span className="text-[10px] text-white font-bold tracking-tighter block leading-none">PARENTAL</span>
                    <span className="text-[14px] text-white font-black tracking-tighter block leading-none">ADVISORY</span>
                    <span className="text-[8px] text-white font-bold tracking-tighter block leading-none">EXPLICIT CONTENT</span>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 text-white font-bold tracking-[0.3em] text-sm opacity-90">
                  CATCH22
                </div>
              </div>
            </div>

            {/* Merch - Catch22 Hoodies */}
            <div className="flex justify-center mb-6">
              <a href="/shop" target="_blank" rel="noreferrer" className="block w-full">
                <img src="/assets/catch_hoodies.png" alt="CATCH22 hoodies" className="w-full object-contain rounded-md" />
              </a>
            </div>

            {/* Video Player Footer - Catch22 */}
            {/* SoundCloud Embed for CATCH22 */}
            <div className="p-8">
              <iframe
                title="SoundCloud - CATCH22 (album)"
                width="100%"
                height={450}
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1869689285&color=%23a0bce8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                className="w-full rounded-lg overflow-hidden"
              />

              <div style={{ fontSize: 10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                <a href="https://soundcloud.com/invasivemastermind" title="invasivemastermind" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>invasivemastermind</a>
                {' '}·{' '}
                <a href="https://soundcloud.com/invasivemastermind/sets/catch22" title="CATCH22" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>CATCH22</a>
              </div>
            </div>
          </>
        );

      case TabOption.POSER:
        return (
          <>
            <div className="flex-grow p-8">
              <h2 className="text-4xl font-bold text-black mb-6 align-left">POSER</h2>

              <div className="items-start md:items-stretch gap-8">
                <div className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/poser.jpg" alt="POSER cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-6">
                    <iframe
                      title="SoundCloud - POSER (demos)"
                      width="100%"
                      height={450}
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2018349954&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      className="w-full rounded-lg overflow-hidden"
                    />

                    <div style={{ fontSize: 10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                      <a href="https://soundcloud.com/invasivemastermind" title="invasivemastermind" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>invasivemastermind</a>
                      {' '}·{' '}
                      <a href="https://soundcloud.com/invasivemastermind/sets/poser" title="POSER (demos)" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>POSER (demos)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="">
                <img src="/assets/poserCover_2.jpg" alt="POSER cover 2" className="w-full object-cover rounded-md shadow-md" />
                <img src="/assets/poser_lyrics_cover.jpg" alt="POSER lyrics cover" className="w-full object-cover rounded-md shadow-md" />
                <img src="/assets/poser_tracklist_cover.jpg" alt="POSER tracklist cover" className="w-full object-cover rounded-md shadow-md" />
              </div>
            </div>
          </>
        );

      case TabOption.DISTORTED:
        return (
          <>
            <div className="flex-grow p-8">
              <h2 className="text-4xl font-bold text-black mb-6 align-left">DISTORTED</h2>

              <div className="items-start md:items-stretch gap-8">
                <div className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/DISTORTED.jpg" alt="DISTORTED cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-6">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/videoseries?si=vyB_aRubHk4loz98&amp;list=PLrQYSJJvV-zxK34X_qHmgEvZt8mzoeZES"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.MR_SQUARE:
        return (
          <>
            <div className="flex-grow p-8">
              <h2 className="text-4xl font-bold text-black mb-6 align-left">Mr. SQUARE (demos)</h2>

              <div className="items-start md:items-stretch gap-8">
                <div className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/mrsquare.jpg" alt="Mr. SQUARE (demos) cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-6">
                    <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1972117716&color=%23f2f2f2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/invasivemastermind" title="invasivemastermind" target="_blank" style="color: #cccccc; text-decoration: none;">invasivemastermind</a> · <a href="https://soundcloud.com/invasivemastermind/sets/mr-square" title="Mr. Square (demos)" target="_blank" style="color: #cccccc; text-decoration: none;">Mr. Square (demos)</a></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.JOVE:
        return (
          <>
            <div className="flex-grow p-8">
              <h2 className="text-4xl font-bold text-black mb-6 align-left">JOVE</h2>

              <div className="items-start md:items-stretch gap-8">
                <div className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/jove.jpg" alt="JOVE cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-6">
                    <iframe
                      title="SoundCloud - JOVE"
                      width="100%"
                      height={450}
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1975482181&color=%23f2f2f2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      className="w-full rounded-lg overflow-hidden"
                    />

                    <div style={{ fontSize: 10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                      <a href="https://soundcloud.com/invasivemastermind" title="invasivemastermind" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>invasivemastermind</a>
                      {' '}·{' '}
                      <a href="https://soundcloud.com/invasivemastermind/sets/jove" title="JOVE" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>JOVE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.KATLYST:
        return (
          <>
            <div className="flex-grow p-8">
              <h2 className="text-4xl font-bold text-black mb-6 align-left">KATLYST</h2>

              <div className="items-start md:items-stretch gap-8">
                <div className="w-full items-center justify-center">
                  <div className="relative w-full aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/KATLYST-cover-2024.png" alt="KATLYST cover art" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative w-full aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/KATLYST-back-2024.png" alt="KATLYST cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="mb-6">
                    <iframe
                      title="SoundCloud - KATLYST"
                      width="100%"
                      height={450}
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1869516593&color=%23f2f2f2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      className="w-full rounded-lg overflow-hidden"
                    />

                    <div style={{ fontSize: 10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                      <a href="https://soundcloud.com/invasivemastermind" title="invasivemastermind" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>invasivemastermind</a>
                      {' '}·{' '}
                      <a href="https://soundcloud.com/invasivemastermind/sets/katlyst" title="KATLYST" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>KATLYST</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.GOLDN_MNKY:
        return (
          <>
            <div className="flex-grow p-8">
              <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/golden_monkey.jpg" alt="Goldn Mnky cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-4xl font-bold text-black mb-6">Goldn Mnky</h2>

                  <div className="mb-6">
                    <iframe
                      title="SoundCloud - Golden Monkey [demos]"
                      width="100%"
                      height={450}
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2049286695&color=%239e7874&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                      className="w-full rounded-lg overflow-hidden"
                    />

                    <div style={{ fontSize: 10, color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
                      <a href="https://soundcloud.com/invasivemastermind" title="invasivemastermind" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>invasivemastermind</a>
                      {' '}·{' '}
                      <a href="https://soundcloud.com/invasivemastermind/sets/golden-monkey-demos" title="Golden Monkey [demos]" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Golden Monkey [demos]</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.ABOUTIME:
        return (
          <>
            <div className="flex-grow p-8">
                  <h2 className="text-4xl font-bold text-black mb-6">ABOUTIME</h2>

              <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square shadow-2xl overflow-hidden rounded-lg">
                    <img src="/assets/aboutime.jpg" alt="ABOUTIME cover art" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-6">
                    <iframe
                      title="Aboutime Bandcamp"
                      style={{ border: 0, width: '100%', height: 470 }}
                      src="https://bandcamp.com/EmbeddedPlayer/album=3920192006/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                      seamless
                      className="w-full rounded-lg overflow-hidden"
                    >
                      <a href="https://byeblackboy.bandcamp.com/album/abouttime-instrumentals">AboutTime [instrumentals] by byeblackboy</a>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.ARIZONA:
        return (
          <>
            <div className="flex-grow flex flex-col items-center justify-center p-8">
              {/* Album Art - ARIZONA.jpg */}
              <div className="relative w-full max-w-md aspect-square shadow-2xl flex items-center justify-center mb-12 group cursor-pointer transition-transform duration-500 hover:scale-[1.01] overflow-hidden rounded-lg">
                <img src="/assets/ARIZONA.jpg" alt="ARIZONA cover art" className="w-full h-full object-cover" />
              </div>

              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Z4MKUmQBmdg?si=QhGLNcFdWpU_JF1V"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-lg"
                  ></iframe>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/zW-GKvrV24o?si=-hxNj7Vxdurklhim"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-lg"
                  ></iframe>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/DzobFRsrfPQ?si=A8EcW4DWKUgizsHd"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-lg"
                  ></iframe>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OK6x30Oi-Mk?si=8HfxUNoSUT2JfbLV"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-lg"
                  ></iframe>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wUFlEPu1dJU?si=BeQ3SmtdhdAdOXcT"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-lg"
                  ></iframe>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/t24oF7ch8s0?si=xNq_imjiVHq-s_-y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </>
        );

      case TabOption.INSTRUMENTALS:

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full p-8 md:p-12 overflow-y-auto no-scrollbar">

      {/* Hanging Merchandise (hidden) */}
      <div className="hidden" />

      <div className="max-w-6xl mx-auto relative z-0 min-h-full flex flex-col">
        {/* Main Card */}
        <div className="bg-[#999478]/80 backdrop-blur-sm rounded-lg shadow-xl border border-[#8a856a] overflow-hidden min-h-[800px] flex flex-col transition-all duration-300">



          {/* Content Body */}
          {renderContent()}

        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ContentArea;