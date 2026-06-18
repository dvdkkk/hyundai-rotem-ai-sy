import React from 'react';
import { motion } from 'motion/react';
import { FileText, Users, Handshake, ShieldCheck } from 'lucide-react';

const plans = [
  {
    id: 1,
    title: '이력서 및 자소서 코칭',
    description: '담당 컨설턴트와 1:1 면담을 통해 직무 이력서 컨설팅 및 이력서 첨삭 등 키워드 설정에 따라 개개인 별 맞춤 코칭이 실시됩니다.',
    icon: FileText,
  },
  {
    id: 2,
    title: '선배와의 만남 특강',
    description: '기 졸업자인 실무자 방문 특강을 병행하여 현재 근무환경 및 동향에 대해 파악할 수 있습니다.',
    icon: Users,
  },
  {
    id: 3,
    title: '협약 기업 매칭',
    description: '훈련생 개인별 직군, 직무 탐색 결과 및 준비에 따라 IT 협력업체를 선별하여 맞춤형 기업 매칭이 진행됩니다.',
    icon: Handshake,
  },
  {
    id: 4,
    title: '지속적인 사후 관리',
    description: '수료 후 6개월간 미취업자의 경우 대책을 수립하여 지속적인 취업지원 및 기업 매칭을 통한 채용 합격이 이루어질 수 있도록 관리합니다.',
    icon: ShieldCheck,
  },
];

export function EmploymentProcessSection() {
  return (
    <section id="employment-support" className="py-24 bg-slate-950 border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            취업 연계 <span className="text-red-500">지원 프로세스</span>
          </h2>
          <p className="text-zinc-400 text-lg">체계적인 지원 시스템으로 성공적인 취업을 완성합니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-red-950/30 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <div className="text-red-500 font-bold mb-2 tracking-wider text-sm uppercase">PLAN 0{plan.id}</div>
                <h3 className="text-xl font-bold text-white mb-4">{plan.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{plan.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
