import React from 'react';
import { motion } from "motion/react";
import { Brain, Database, Code, Server } from 'lucide-react';

const CAREERS = [
  { title: "AI 엔지니어", icon: Brain, description: "인공지능 모델 설계 및 구현", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" },
  { title: "데이터 사이언티스트", icon: Database, description: "데이터 분석을 통한 비즈니스 인사이트 도출", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" },
  { title: "AI 개발자", icon: Code, description: "AI 어플리케이션 개발 및 고도화", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400" },
  { title: "빅데이터 시스템 개발자", icon: Server, description: "대규모 데이터 처리 시스템 구축", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400" },
];

export function CareerSection() {
  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16 leading-tight"
        >
          수료 후에 이런 직업을 <br /> 가질 수 있어요!
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAREERS.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img src={career.image} alt={career.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
                  <career.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{career.title}</h3>
                <p className="text-zinc-400 text-sm">{career.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
