import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ChevronRight, Star, Home as HomeIcon, ShieldCheck, CheckCircle, Sparkles, HelpCircle, Receipt } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function BundangInterior() {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "분당 정자동 아이파크 32평 올수리",
      desc: "모던 호텔식 화이트 컨셉 리모델링",
      tags: ["분당인테리어", "정자동", "30평형대"],
      filters: ["bundang", "30py"],
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      badge: "HOT",
      price: "프리미엄 견적"
    },
    {
      id: 2,
      title: "분당 서현동 시범단지 27평 인테리어",
      desc: "따뜻한 우드 포인트 내추럴 스타일",
      tags: ["분당인테리어", "서현동", "20평형대"],
      filters: ["bundang", "20py"],
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
      price: "맞춤 견적"
    },
    {
      id: 3,
      title: "판교 알파리움 43평 리모델링",
      desc: "하이엔드 고급 대리석 마감과 조명 설계",
      tags: ["판교인테리어", "성남인테리어", "40평형대"],
      filters: ["pangyo", "40py"],
      img: "https://mydrim.net/img/%ED%8C%90%EA%B5%90%EC%95%8C%ED%8C%8C%EB%A6%AC%EC%9B%8043%ED%8F%89.png",
      price: "고급형 견적"
    },
    {
      id: 4,
      title: "분당 이매동 31평 모던 리모델링",
      desc: "와이드 타일과 매립 수전 시스템 욕실",
      tags: ["분당인테리어", "이매동", "30평형대"],
      filters: ["bundang", "30py"],
      img: "https://mydrim.net/img/%EB%B6%84%EB%8B%B9%EC%9D%B4%EB%A7%A4%EB%8F%9931%ED%8F%89%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4.png",
      price: "합리적 견적"
    },
    {
      id: 5,
      title: "분당 수내동 파크뷰 45평 하이엔드",
      desc: "프리미엄 원목 마루와 간접 조명 마감",
      tags: ["분당인테리어", "수내동", "40평형대"],
      filters: ["bundang", "40py"],
      img: "https://mydrim.net/img/%EB%B6%84%EB%8B%B9%ED%8C%8C%ED%81%AC%EB%B7%B045%ED%8F%89.png",
      price: "최고급 견적"
    },
    {
      id: 6,
      title: "판교 봇들마을 34평 맞춤 주방",
      desc: "공간 효율을 극대화한 대면형 주방 설계",
      tags: ["판교인테리어", "성남인테리어", "30py"],
      filters: ["pangyo", "30py"],
      img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800",
      price: "평당 견적 문의"
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filters.includes(filter));

  return (
    <div className="pt-20">
      <Helmet>
        <title>분당인테리어잘하는곳 추천 & 리모델링 비교 체크리스트 | MID인테리어</title>
        <meta name="description" content="분당인테리어잘하는곳 추천 업체를 찾으신다면 주목해 주세요! MID인테리어가 제공하는 계약 전 자체 시공팀 확인, 추가 비용 방지, 업계 최장 무상 A/S 구조 및 3D 도면 무료 사전 검토 서비스 팁을 공개합니다." />
        <meta name="keywords" content="분당인테리어잘하는곳, 분당인테리어, 분당인테리어추천, 성남분당인테리어, 판교인테리어, 분당아파트인테리어, 분당인테리어업체, 정자동인테리어, 수내동인테리어, 서현동인테리어, 아파트리모델링견적" />
        <meta property="og:title" content="분당인테리어잘하는곳 추천 & 리모델링 비교 체크리스트 | MID인테리어" />
        <meta property="og:description" content="분당인테리어잘하는곳 추천 업체를 성공적으로 선정하는 3대 체크리스트! 자체 전문 시공팀, 추가금 없는 예산 관리, 사전 3D 도면 검증 꿀팁을 전수해 드립니다." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80" 
            className="w-full h-full object-cover" 
            alt="Hero background"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-medium tracking-widest uppercase"
          >
            분당·판교 하이엔드 인테리어 전문
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight"
          >
            <span className="text-brand-gold">분당인테리어</span> 전문<br />MID인테리어
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            27년 노하우가 담긴 호텔식 리모델링의 정수.<br />
            분당 성남 판교 정자동 아파트 시공 전문 업체입니다.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/portfolio" className="px-8 py-4 bg-brand-gold text-white font-semibold rounded-lg hover:bg-brand-gold/90 transition-all">
              포트폴리오 보기
            </Link>
            <Link to="/booking" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              무료 견적 문의
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "분당 지역 시공 완료", val: "500+" },
            { label: "인테리어 전문 경력", val: "27년" },
            { label: "고객 만족도", val: "4.9★" },
            { label: "철저한 사후 관리", val: "100%" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl font-serif font-bold text-brand-gold mb-1">{stat.val}</div>
              <div className="text-xs text-slate-500 font-light uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">분당인테리어 포트폴리오</h2>
            <p className="text-slate-500 font-light max-w-2xl mx-auto">
              MID인테리어가 시공한 분당 성남 판교 지역 리모델링 사례입니다.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: '전체' },
              { id: '20py', label: '20평형대' },
              { id: '30py', label: '30평형대' },
              { id: '40py', label: '40평형대' },
              { id: 'bundang', label: '분당구' },
              { id: 'pangyo', label: '판교' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2 rounded-full text-xs transition-all border ${
                  filter === btn.id 
                    ? 'bg-brand-gold text-white border-brand-gold shadow-lg shadow-brand-gold/20' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={item.id} 
                className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-brand-gold/10 text-brand-gold font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 truncate">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-light mb-4 line-clamp-2">{item.desc}</p>
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{item.filters[1]} · {item.filters[0] === 'bundang' ? '분당구' : '판교'}</span>
                    <span className="text-sm font-semibold text-brand-gold">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Optimized Guide Section modeled after the highest-converting Naver Cafe content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-xs font-semibold tracking-wider uppercase bg-brand-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              성공하는 리모델링을 위한 핵심 가이드
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
              분당인테리어잘하는곳 선정 시 <span className="text-brand-gold font-sans font-extrabold block sm:inline">반드시 체크해야 할 3원칙</span>
            </h2>
            <p className="text-slate-500 font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              분당, 판교, 성남 지역에서 수많은 분당인테리어 업체가 경쟁하고 있지만, 계약 조건이나 후속 A/S 부실로 인한 피해 사례 또한 지속적으로 늘고 있습니다. <strong className="text-slate-800 font-medium">실패 없이 최고의 분당인테리어 업체를 선별하기 위해 꼭 비교하고 검증해야 할 3대 가이드</strong>를 소개해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1: No Extra Fee */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
                  <Receipt className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">
                  01. 계약 후 부당한 추가 요구 없는 정직한 업체인가?
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  가장 빈번한 인테리어 불만 중 하나는 가계약 단계에서 저렴한 금액(평당 가격)으로 고객을 유인한 뒤, 시공 과정에서 이런저런 추가 자재비나 운임비 핑계로 견적 외 과도한 추가금을 청구하는 것입니다. 
                </p>
                <p className="text-slate-700 font-normal text-sm leading-relaxed">
                  MID인테리어는 불합리한 예산 낭비를 철저히 방지하며, 정밀 시뮬레이션을 기초로 한 <strong className="text-brand-gold">확정 계약가 그대로를 원칙</strong>으로 책임 시공하여 상호 신뢰를 끝까지 유지합니다.
                </p>
              </div>
            </div>

            {/* Principle 2: Direct Professional Team */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">
                  02. 하청 재임 가공 없이 직영 전문 시공팀이 작업하는가?
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  공정 전체를 하청 협력 업체에 턴키 계약으로 고스란히 재넘기기하는 업체들은 현장 상주 주체가 없어 디테일한 수치 마감이 떨어지고 하자 발생률이 크게 올라갑니다.
                </p>
                <p className="text-slate-700 font-normal text-sm leading-relaxed">
                  MID인테리어는 <strong className="text-brand-gold">경력 27년의 대표가 직접 도면을 설계</strong>하고, 수년간 호흡을 맞춰온 최정예 직영 전문 시공팀이 현장을 직접 진두지휘하여 하이엔드 퀄리티의 마감을 실현합니다.
                </p>
              </div>
            </div>

            {/* Principle 3: Longest Term A/S Care */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">
                  03. 완공 후 연락두절 걱정 없는 확실한 최장 A/S를 약속하는가?
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  시공 직후에는 깔끔해 보일 수 있으나 아파트 올수리의 특성상 공사 완료 후 6개월~1년 이내에 미세 결함이 발생할 가능성이 높습니다. 이때 무책임하게 AS를 미루거나 전화를 받지 않는 불안정한 업체는 반드시 피하셔야 합니다.
                </p>
                <p className="text-slate-700 font-normal text-sm leading-relaxed">
                  MID인테리어는 입주 고객님의 온전한 라이프를 케어하기 위해 시공 완료 시 <strong className="text-brand-gold">전담 케어 에이전트 매칭 및 업계 최장 기간 무상 사후 관리</strong> 구조를 구축하고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-brand-gold/5 rounded-3xl p-8 md:p-12 border border-brand-gold/10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3 text-brand-gold font-semibold">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs tracking-wider uppercase">MID인테리어 특별 혜택</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-sans">
                계약 전 가상 설계 3D 시뮬레이션 무료 지원
              </h3>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                분당인테리어를 고민 중이시라면 조급하게 업체를 결정하기 전에 상담과 디테일한 사전 견적을 받아보세요. MID인테리어는 평면도로는 확인이 어려운 가구 배치, 벽지 매칭, 조명 간섭을 실제 공간처럼 한눈에 보실 수 있도록 전 고객 계약 전에 완성 모형 <strong className="text-brand-gold">3D 가상 시뮬레이션을 전액 무상으로 제공</strong>합니다.
              </p>
            </div>
            <div className="shrink-0 flex gap-4 w-full md:w-auto">
              <Link to="/booking" className="w-full md:w-auto text-center px-6 py-4 bg-brand-gold text-white font-semibold rounded-xl text-sm hover:bg-brand-gold/90 shadow-md hover:shadow-xl transition-all">
                신청 및 실적 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-brand-gold">분당인테리어 평당 견적 안내</h2>
            <p className="text-white/50 font-light max-w-2xl mx-auto">
              투명한 오픈 견적으로 믿음을 드립니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { range: "180~240만 원", type: "실속 리모델링", items: ["도배 · 장판 · 조명", "욕실 부분 시공", "기분 주방 교체"] },
              { range: "250~290만 원", type: "표준 올수리", items: ["전체 실크도배·강마루", "욕실 2개 전체 교체", "브랜드 주방 + 중문"] },
              { range: "300~340만 원", type: "프리미엄 호텔식", items: ["고급 마감재 선택", "구조 변경 및 시스템 조명", "드레스룸 라인 설계"] },
              { range: "350만 원+", type: "하이엔드 럭셔리", items: ["천연석 및 수입 자재", "맞춤 제작 가구 풀세트", "전담 디자이너 1:1 설계"] }
            ].map((plan, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl font-serif text-brand-gold mb-2">{plan.range}</div>
                <div className="text-sm font-medium mb-6 text-white/80">{plan.type}</div>
                <ul className="text-xs text-white/40 space-y-2 font-light">
                  {plan.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">분당인테리어, 왜 MID인테리어인가요?</h2>
          <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
            <p>
              “건축공학 전공자 대표가 직접 설계하고 시공하는 MID인테리어는 사용자의 생활 방식이 자연스럽게 녹아들고, 시간이 흐를수록 가치가 증명되는 ‘견고한’ 공간을 만드는 길을 27년 동안 걸어왔습니다.”
            </p>
            <p className="italic underline underline-offset-8 decoration-brand-gold/30">
              "인테리어는 단순히 보기 좋은 그림을 그리는 것이 아닙니다."
            </p>
            <p>
              “우리는 트렌드를 쫓기보다 공간의 본질에 집중합니다. 화려한 마감재 이전에 기초가 튼튼한 공사를, 겉모습 이전에 효율적인 동선과 디테일한 수납 설계를 우선시합니다. 건축적 완성도와 실용성을 함께 고려하는 이러한 철학이 지난 1999년부터 지금까지 수많은 고객들이 MID인테리어를 다시 찾는 이유입니다.”
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/booking" className="inline-block px-10 py-5 bg-brand-gold text-white font-bold rounded-xl shadow-xl shadow-brand-gold/30 hover:-translate-y-1 transition-all">
              무료 방문 상담 신청하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
