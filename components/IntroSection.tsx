
import React, { useEffect, useRef, useState } from 'react';
import { Users, Zap, Target, BrainCircuit } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { ImageCarousel } from './ImageCarousel';

export const IntroSection: React.FC = () => {
  const { content } = useContent();
  const { intro } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionBase = "transition-all duration-500 ease-out transform";
  
  const getStyle = (delay: string) => ({
    className: `${transitionBase} ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-black relative border-b border-zinc-900 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <h2 className={`text-xl md:text-3xl lg:text-5xl font-black text-white leading-[1.5] md:leading-[1.3] mb-10 tracking-tight break-keep ${getStyle("delay-100").className}`}>
            {intro.title1}<br />
            <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-red-700 rounded-lg transform translate-y-1"></span>
                <span className="relative text-white">{intro.highlight}</span>
            </span>{intro.title2}
          </h2>

          {/* Description */}
          <img
            src="https://postfiles.pstatic.net/MjAyNjA2MTJfMjUx/MDAxNzgxMjUzNDI3NjM2.qvZcyhGBXQmhSVqvz6ng6ggajsjqlZcS1wvGodal8RIg.eomvGr0K3M2SuSNiQYFG2ZMBoaohkg-1pPs8hNrcpIUg.JPEG/20260612_173456.jpg?type=w966"
            alt="알림 이미지"
            referrerPolicy="no-referrer"
            className="w-full max-w-2xl mx-auto mb-6 rounded-lg"
          />

          <div className={`mb-16 ${getStyle("delay-200").className}`}>
            <div className="flex items-center gap-4 bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700/50 text-white font-medium text-base md:text-lg py-4 px-6 rounded-xl shadow-lg max-w-2xl mx-auto break-keep">
              <BrainCircuit className="w-8 h-8 text-red-500 shrink-0" />
              <span>첨단 기술의 발전으로 인한 AI 중요도가 높아짐</span>
            </div>
          </div>


          {/* Image Carousel */}
          {intro.images && intro.images.length > 0 && (
            <div className={`mb-16 ${getStyle("delay-300").className}`}>
              <ImageCarousel images={intro.images} />
            </div>
          )}

          {/* Recommended For Section */}
          <div className={`mt-16 text-left ${getStyle("delay-400").className}`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">이런분들에게 추천해요!</h3>
            <div className="grid gap-4 max-w-2xl mx-auto">
              {[
                "비전공자지만 AI분야 기획, 영업, 마케팅 분야 등 관심있는 분!",
                "IT관련 학과 전공했으나 실무능력 향상하고 싶은 분!",
                "AI프로젝트 경험을 통해 다양한 산업의 AI관련 직무 취업을 준비하시는 분!",
                "현대로템 등 대기업 또는 방산기업 등의 실무 직장 생활이나 직무가 궁금하신 분!",
                "실제 직무수행 또는 취업 시 도움이 되는 인공지능 기술을 내 커리어에 추가하고 싶은 분!"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 hover:border-red-500/50 transition-colors">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-xs">✓</span>
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
