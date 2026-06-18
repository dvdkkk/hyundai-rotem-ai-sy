
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { motion } from "motion/react";
import { 
  Gift, Monitor, Book, Trophy, Wallet, Users, Zap, Target
} from 'lucide-react';
import { ApplyButton } from './ApplyButton';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const HanjikgyoBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "훈련장려금 지급",
      desc: "지속적인 학습을 위한 훈련장려금 제공",
      icon: Wallet,
      highlight: "text-emerald-500"
    },
    {
      id: 2,
      title: "교재제공",
      desc: "학습 및 지식 성장을 위해 선정된 전문 서적을 제공합니다.",
      icon: Book,
      highlight: "text-green-500"
    },
    {
      id: 3,
      title: "현업 취업 특강",
      desc: "현업 실무자의 경험을 공유하는 취업 특강 제공",
      icon: Users,
      highlight: "text-blue-500"
    },
    {
      id: 4,
      title: "프로젝트 멘토링",
      desc: "주 1회 8시간, 총 5회 40시간의 밀착 프로젝트 멘토링",
      icon: Target,
      highlight: "text-indigo-500"
    },
    {
      id: 5,
      title: "프로젝트 상품 수여",
      desc: "최우수팀 및 우수팀 대상 상품 수여",
      icon: Trophy,
      highlight: "text-yellow-500"
    },
    {
      id: 6,
      title: "수료증 발급",
      desc: "과정 수료 시 공식 수료증 발급",
      icon: Gift,
      highlight: "text-orange-500"
    },
    {
      id: 7,
      title: "참여기업 취업연계",
      desc: "우수 참여기업과의 취업 연계 프로그램 제공",
      icon: Zap,
      highlight: "text-red-500"
    },
    {
      id: 8,
      title: "온라인 콘텐츠 제공",
      desc: "심화 학습을 위한 풍부한 온라인 학습 콘텐츠",
      icon: Monitor,
      highlight: "text-cyan-500"
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
                <Gift size={14} />
                <span className="text-xs font-bold tracking-wide uppercase">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight break-keep">
              학습을 돕는 지원부터<br />
              <span className="text-red-600">성장을 이끄는 혜택</span>까지
            </h2>
            <motion.p 
                initial={{ opacity: 0, scale: 0.95, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.5 },
                  scale: { delay: 0.5, duration: 0.5 },
                  y: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }
                }}
                className="text-white mt-6 text-sm md:text-base bg-gradient-to-r from-red-900/40 to-zinc-900 border border-red-500/50 py-3 px-6 rounded-xl font-medium inline-block shadow-lg"
            >
                모든 수료생 한국국방기술학회 이사장 명의 <br /> 채용 추천서 제공
            </motion.p>
          </Reveal>
        </div>

        {/* Benefit Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.id} delay={idx * 50} className="h-full">
                  <div className="h-full bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl hover:border-red-600/30 hover:bg-zinc-900/50 transition-all duration-300 group flex flex-col items-start text-left">
                      <div className={`p-4 rounded-2xl bg-zinc-950 border border-zinc-800 mb-6 group-hover:scale-110 transition-transform duration-300 ${benefit.highlight}`}>
                        <Icon size={32} />
                      </div>
                      
                      <h3 className="text-white text-xl font-bold mb-3 leading-tight break-keep group-hover:text-red-500 transition-colors">
                          {benefit.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed break-keep font-medium">
                          {benefit.desc}
                      </p>
                  </div>
              </Reveal>
            );
          })}
        </div>
        <div className="flex justify-center pt-20">
            <ApplyButton />
        </div>
      </div>
    </section>
  );
};
