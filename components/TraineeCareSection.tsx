import React from 'react';
import { motion } from "motion/react";
import { UserCheck, Target, MessageSquare, ClipboardCheck, Sparkles, MonitorPlay, Headphones, Lock, GraduationCap } from 'lucide-react';

const CARE_ITEMS = [
  { text: "입교 시 사전 평가 진행하여 훈련생 분석", icon: UserCheck },
  { text: "직업·진로설계 : 희망 분야의 전문 진로 상담, 학습수준 및 요구 반영", icon: Target },
  { text: "1:1 취업상담 및 이력서 클리닉", icon: MessageSquare },
  { text: "훈련생 이력 및 경력관리 지원", icon: ClipboardCheck },
  { text: "비전공자 1:1 밀착 학습관리", icon: Sparkles },
  { text: "실습실 지원 : 강의실 개방을 통한 자기주도적 학습 지원", icon: MonitorPlay },
  { text: "고충 및 건의사항 수렴 및 원활한 해결", icon: Headphones },
  { text: "안전 관리 및 개인정보보호 철저", icon: Lock },
  { text: "현대로템 인증 우수 주교강사 확보", icon: GraduationCap },
];

export function TraineeCareSection() {
  return (
    <section className="py-24 bg-black border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            <span className="text-white">현대로템 K-방산<br />
            인공 지능 개발을<br />
            위한 아카데미 훈련생<br />
            집중케어!</span>
          </h2>
          <p className="text-white mt-6 text-sm md:text-base bg-gradient-to-r from-red-900/40 to-zinc-900 border border-red-500/50 py-3 px-6 rounded-xl font-medium inline-block shadow-lg">최고의 교육 환경과 밀착 케어로 성공적인 취업을 지원합니다.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 bg-zinc-900/40 hover:bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex items-center gap-4 shadow-lg hover:shadow-red-500/5"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-zinc-200 font-medium text-sm md:text-base leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Placeholder for related image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
        >
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA2MTVfMTU1/MDAxNzgxNTA0MDg0MTM2.eocX65ErWbSuNjqn7auQkmVilLKlNSGC_2F8rmzQE6og.zMrDHZjm68OYPIY3n8OceuT_qJ1fCIRr2YAhyCirROYg.JPEG/20260615_151312.jpg?type=w966" 
              alt="훈련생 집중케어"
              referrerPolicy="no-referrer"
              className="w-full h-auto opacity-80"
            />
        </motion.div>
      </div>
    </section>
  );
}
