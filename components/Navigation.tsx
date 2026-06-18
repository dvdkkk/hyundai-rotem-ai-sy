
import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const isMobile = window.innerWidth < 768;
      const additionalOffset = (isMobile && targetId === 'consultation') ? 390 : 0;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset + additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: '과정소개 및 비전', href: '#course-title' },
    { name: '교육혜택', href: '#benefits' },
    { name: '커리큘럼', href: '#curriculum-roadmap' },
    { name: '취업지원', href: '#employment-support' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center"
        >
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA2MTJfOTYg/MDAxNzgxMjUwNjIyOTYz.p-mRu8DJcaHjKVIr7vLaP8eiwf-iFxlCcmwVv9uSvAQg._RRIj-q84te6ELA58z9coHMSEmYf9VLthEak30wRfawg.PNG/20260612_164553_(1).png?type=w966" 
            alt="kt cloud TECH UP Logo" 
            referrerPolicy="no-referrer"
            className="h-10 md:h-12 w-auto" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-lg font-medium transition-colors ${
                link.name === '상담신청' 
                  ? 'text-red-600 font-bold' 
                  : 'text-gray-300 hover:text-red-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#consultation" 
            onClick={(e) => {
              handleNavClick(e, '#consultation');
            }}
            className="flex items-center gap-2 bg-red-700 text-white px-5 py-2 rounded-full font-bold text-lg hover:bg-red-600 transition-transform hover:scale-105"
          >
            <PhoneCall size={20} />
            상담신청
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-base font-medium py-2 border-b border-zinc-800 ${
                link.name === '상담신청' 
                  ? 'text-red-600 font-bold' 
                  : 'text-gray-300 hover:text-red-600'
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#consultation" 
            className="bg-red-700 text-white text-center py-3 rounded-md font-bold text-sm"
            onClick={(e) => handleNavClick(e, '#consultation')}
          >
            무료상담 신청하기
          </a>
        </div>
      )}
    </nav>
  );
};
