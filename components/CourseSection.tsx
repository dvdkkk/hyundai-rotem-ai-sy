
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { 
  Shield, CheckCircle2, Cpu, ArrowRight
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

// Curriculum Data Structure
const CURRICULUM_DATA = [
  { id: "01", title: "국방산업의 이해", desc: "글로벌방산 및 한국의 국방산업의 이해", subjects: ["글로벌 방신시장의 이해", "한국 국방산업의 이해", "국방 연구개발 프로세스 이해", "항공우주 기반 국방산업의 이해"] },
  { id: "02", title: "인공지능 수학", desc: "인공지능 이해", subjects: ["선형대수 학습", "경우의수 학습", "확률과 통계학습", "미적분학 기초 학습", "선형대수와 확률과 통계", "자료구조의 이해"] },
  { id: "03", title: "파이썬프로그래밍", desc: "파이썬 문법 이해하기", subjects: ["파이썬 문법 이해하기", "파이썬으로 파이 게임 만들기", "크롤링 학습", "GitHub과 오픈소스 프로그래밍 활용"] },
  { id: "04", title: "웹프로그래밍", desc: "HTML&CSS", subjects: ["HTML&CSS", "JavaScript 활용 및 심화", "Flask/pytonanywhere", "Django framework"] },
  { id: "05", title: "데이터베이스", desc: "RDBMS와 SQL", subjects: ["RDBMS와 SQL", "SQL와 기본쿼리", "데이터 생성, 조작, 변환, 집계", "NoSQL : MongoDB"] },
  { id: "06", title: "데이터분석", desc: "Numpy 배열과 백터", subjects: ["Numpy 배열과 백터", "Pandas 시리즈와 데이터프레임", "데이터 입출력: CSV", "데이터 처리 : 결측치, 정렬, 병합, 집계", "데이터 시각화: Matplotlib, Seaborm", "데이터 분석: IRIS, BostonHousing"] },
  { id: "07", title: "Machine Learning", desc: "머신러닝 알고리즘 및 활용", subjects: ["회귀분석, 다중회귀 모델, 정규화 모델", "로지스틱 회귀", "AI 분류 개념", "KNN원리 이해(Unsupervised Learning)", "KNN algorithm과 Clustering 차이점", "bayes,s theorem, likelihood, MLE/MAP 원리 이해", "지도학습, 비지도학습 방법론 및 활용", "Clustering/K-means, GMM/PCA- 공분산 행렬", "랜덤 포레스트/부스팅/앙상블 및 배깅"] },
  { id: "08", title: "Deep Learning", desc: "인공신경망 및 딥러닝 모델", subjects: ["인공신경망", "CNN, RNN, CRNN, NNF", "텐서플로우 및 keras 활용", "텍스트를 위한 딥러닝(토큰화, TextVectorization, 단어 시퀀스 모델, 트랜스포머 아키텍처, 시퀀스 투 시퀀스 학습, 텍스트 생성모델)", "이미지 딥러닝(컴퓨터 비전을 위한 딥러닝, Fine-tunning)", "생성모델(딥드림, 뉴럴 스타일 트랜스터, 변이형 오토인코더를 사용한 이미지 생성, 생성적 적대 신경망(GAN))"] },
  { id: "09", title: "AI를 위한 알고리즘", desc: "자료구조 및 알고리즘", subjects: ["O자료구조 : 배열, 튜플, 연결리스트, 해시테이블, 스텍, 큐, 덱, 그래프, 트리, 힙", "알고리즘 : 재귀, 정렬, 다이나믹프로그래밍, 그래프, DFS, BFS, 그리디알고리즘"] },
];

const PROJECTS_DATA = [
  { title: "기본 프로젝트", subjects: ["클라우드 인프라 자동화 및 최적화 구축", "가상화 기반 리소스 관리 시스템 구축", "클라우드 데이터 백업 및 복구 시스템 구현", "자율 주제: 개인 맞춤 클라우드 보안 솔루션 구현"] },
  { title: "심화 프로젝트", subjects: ["하이브리드 클라우드 통합 운영 및 최적화 구축", "클라우드 보안 강화 및 비용 효율화 솔루션 구현", "자동화 기반 클라우드 모니터링 및 예측 유지보수 시스템 구축", "자율 주제: 팀별 클라우드 인프라 혁신 구현"] },
  { title: "실무 통합 프로젝트", subjects: ["글로벌 클라우드 인프라 통합 관리 및 운영 구축", "AI 기반 클라우드 리소스 최적화 및 예측 분석 시스템 구현", "Terraform을 활용한 클라우드 인프라 표준화 및 자동화 구축", "자율 주제: 팀별 클라우드 비용 관리 및 성능 최적화 구현"] },
];

export const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-[#1a0f0f] text-white">
      <div className="container mx-auto px-4">
        <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                단계별 학습 설계로<br />
                <span className="text-red-500">탄탄하게 쌓는 커리큘럼</span>
              </h2>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {CURRICULUM_DATA.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 50}>
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] group h-full">
                  <span className="text-red-500 font-black text-4xl mb-6 block group-hover:scale-110 transition-transform origin-left">{item.id}</span>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3 text-zinc-300 text-sm border-t border-zinc-800 pt-6">
                    {item.subjects.map((sub, i) => <li key={i} className="flex items-start gap-2"><CheckCircle2 size={16} className="text-red-500 mt-0.5 flex-shrink-0" /> {sub}</li>)}
                  </ul>
                </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
            <div className="bg-zinc-900/30 border border-zinc-800 p-10 rounded-3xl backdrop-blur-sm">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">현대로템 <br /> 산업체 프로젝트</h3>
                  <p className="text-white mt-6 mb-6 text-sm md:text-lg bg-gradient-to-r from-red-900/40 to-black border border-red-500/20 py-3 px-8 rounded-full font-medium inline-block shadow-lg">
                    수강생들이 직접만든 최종프로젝트
                  </p>
                  <img 
                    src="https://postfiles.pstatic.net/MjAyNjA2MTVfMTMx/MDAxNzgxNTE1OTEwMDc0.4zn6UwXRH0gsdeBfFJi8YtrKDw5bRzFK1fS1mh2yHgog.9q07sfqs5XMFbqJ523qvlbiNfEI0Uwg-6o_klrnx3ykg.PNG/20260615_142533.png?type=w966"
                    alt="현대로템 관련 이미지 1"
                    referrerPolicy="no-referrer"
                    className="w-full max-w-[250px] mx-auto mb-8 rounded-2xl shadow-xl"
                  />
                  <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[966px] mx-auto mb-8 rounded-2xl shadow-xl"
                  >
                    <source src="https://mblogvideo-phinf.pstatic.net/MjAyNjA2MTVfNDIg/MDAxNzgxNTAxMjYzMTI4.PDipSHQ2Iw78j04mbf2RkPSAYymsgeU8V5s0vcGAwQwg.Ibx9VDqTbwCJ9nJNCLmRM9VEOHsAY4_HOAxqEWOzoAMg.GIF/rotem_ai_m3-1_(1).gif?type=mp4w800" type="video/mp4" />
                  </video>
                  <p className="text-white mt-6 text-sm md:text-lg bg-gradient-to-r from-red-900/40 to-black border border-red-500/20 py-3 px-8 rounded-full font-medium inline-block shadow-lg">
                    [현대로템] 실무자가 선정한 4가지 주제의 [현대로템] 현업 프로젝트!
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                   {[
                     "시뮬레이터를 활용한 전차주변 전장상황 인식 학습 모델 구현 프로젝트",
                     "시뮬레이터를 활용한 전차이동 경로 학습 모델 구현 프로젝트",
                     "시뮬레이터를 활용한 전장 전차 자율주행 학습 모델 구현 프로젝트",
                     "시뮬레이터를 활용한 전차 자율주행 학습 모델 구현 프로젝트"
                   ].map((project, idx) => (
                      <div key={idx} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center flex-shrink-0 font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-zinc-200 text-sm">{project}</p>
                      </div>
                   ))}
                </div>

                <div className="bg-black/40 border border-zinc-800 p-8 rounded-2xl mt-12">
                    <h4 className="text-xl font-bold text-white mb-8 text-center">프로젝트 멘토링</h4>
                    <div className="space-y-6 max-w-3xl mx-auto">
                      <div className="flex items-start gap-4 text-zinc-300 text-sm leading-relaxed">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">01</span>
                          <p>현대로템의 현업기업멘토들이 실제 국방 관련 기술의 프로젝트 주제를 선정함으로써 훈련생들이 프로젝트 진행을 통하여 빅데이터분석 관련 국방기술을 다루는 실무기업에 바로 취업할 수 있는 역량을 양성</p>
                      </div>
                      <div className="flex items-start gap-4 text-zinc-300 text-sm leading-relaxed">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold">02</span>
                          <p>프로젝트 작업 수행, 중간 점검, 최종 결과물 산출 및 포트폴리오 작성</p>
                      </div>
                    </div>
                </div>

                <div className="mt-12 text-center bg-red-900/10 border border-red-500/20 p-6 rounded-2xl">
                    <p className="text-red-300 font-medium">현대로템 멘토와 함께, 기획부터 최종 보완까지! 기업이 원하는 실무 중심 프로젝트를 완벽히 완성하세요.</p>
                </div>
            </div>
        </Reveal>
        
        <div className="flex justify-center pt-16">
            <ApplyButton />
        </div>
      </div>
    </section>
  );
};
