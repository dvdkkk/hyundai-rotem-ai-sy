
import React, { useEffect } from 'react';

export const Footer: React.FC = () => {
  useEffect(() => {
  
  }, []);

  return (
    <footer className="bg-black text-zinc-500 py-6 border-t border-zinc-900 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <img 
                  src="https://postfiles.pstatic.net/MjAyNjA2MTJfOTYg/MDAxNzgxMjUwNjIyOTYz.p-mRu8DJcaHjKVIr7vLaP8eiwf-iFxlCcmwVv9uSvAQg._RRIj-q84te6ELA58z9coHMSEmYf9VLthEak30wRfawg.PNG/20260612_164553_(1).png?type=w966" 
                  alt="현대로템" 
                  className="h-8 mb-4" 
                  referrerPolicy="no-referrer" 
                />
                <div className="mb-4">
                    <p className="leading-relaxed mb-2">
                        본 과정은 현대로템이 주관하는 K-디지털 트레이닝 디지털 선도기업 아카데미입니다.
                    </p>
                    <p className="leading-relaxed mb-2">
                        고용노동부와 한국전파진흥협회가 운영지원하는 프로그램입니다.
                    </p>
                    <p className="leading-relaxed mb-2">
                        고용노동부 / 현대로템 / 한국전파진흥원 / 한국국방기술학회 / 에이콘아카데미(강남)
                    </p>
                </div>
            </div>
            <div className="md:text-right">
            </div>
        </div>

        
      </div>
    </footer>
  );
};
