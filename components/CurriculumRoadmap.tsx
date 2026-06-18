import React from 'react';
import { motion } from "motion/react";
import { ShieldCheck, Calculator, Code, Globe, Database, BarChart3, Brain, Network, Cpu, Briefcase } from 'lucide-react';

const STEPS = [
  { title: "국방산업의 이해", icon: ShieldCheck },
  { title: "인공지능 수학", icon: Calculator },
  { title: "파이썬 프로그래밍", icon: Code },
  { title: "웹 프로그래밍", icon: Globe },
  { title: "데이터 베이스", icon: Database },
  { title: "데이터 분석", icon: BarChart3 },
  { title: "Machine Learning", icon: Brain },
  { title: "Deep Learning", icon: Network },
  { title: "AI를 위한 알고리즘", icon: Cpu },
  { title: "산업체 프로젝트", icon: Briefcase }
];

export function CurriculumRoadmap() {
  return (
    <section id="curriculum-roadmap" className="py-24 bg-slate-950 border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            <span className="text-red-500">'K-방산 인공지능 개발'</span>을 위한 <br />
            현업 전문가들이 만든 <br />
            커리큘럼의 정점
          </h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white mt-6 text-sm md:text-lg bg-gradient-to-r from-red-900/40 to-black border border-red-500/30 py-3 px-8 rounded-full font-medium inline-block shadow-lg"
          >
            체계적인 로드맵으로 <br /> 실무형 AI 전문가로 성장하세요
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 bg-zinc-900/50 hover:bg-zinc-900 rounded-3xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-red-500/10"
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="text-white font-bold text-sm md:text-md tracking-tight">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
