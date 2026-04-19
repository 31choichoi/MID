import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '70평대 아파트 인테리어',
    category: 'Residential',
    location: '서울시 강남구',
    description: '최고급 프리미엄 자재와 웅장한 공간 구성을 통해 한강 조망의 가치를 극대화한 하이엔드 주거 공간입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '9',
    title: '50평대 아파트 인테리어',
    category: 'Residential',
    location: '성남시 분당구',
    description: '가족 구성원의 라이프스타일을 반영하여 공용 공간과 개인 공간의 균형을 맞춘 한국형 모던 클래식 인테리어입니다.',
    imageUrl: 'https://cdn.jsdelivr.net/gh/31choichoi/Joy@7220a12411059ccc75b9b62e060e0c5a5295d2f0/public/img/pf_02.jpg'
  },
  {
    id: '10',
    title: '30평대 아파트 인테리어',
    category: 'Residential',
    location: '성남시 판교',
    description: '화이트 톤의 미니멀리즘과 세련된 간접 조명 설계를 통해 공간의 깊이감을 더하고, 30평대 아파트 특유의 아늑함을 극대화한 현장입니다.',
    imageUrl: 'https://cdn.jsdelivr.net/gh/31choichoi/Joy@8a90a0c9d3d57c3e86307b27c3c90013292ee813/public/img/pf_05.png'
  },
  {
    id: '2',
    title: '경기 광주 단독주택 리노베이션',
    category: 'Remodeling',
    location: '경기 광주시',
    description: '개방감 있는 공간 구성과 자연스러운 질감에 집중한 미니멀리즘 디자인 프로젝트입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: '틈새라면 프랜차이즈 전국 시공',
    category: 'Commercial',
    location: '서울시 명동',
    description: '브랜드 아이덴티티를 유지하면서 효율적인 공간 활용을 보여주는 MID의 대표 프랜차이즈 시공 사례입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1200',
    isTeumsae: true
  },
  {
    id: '4',
    title: '강남 오피스 타워 로비',
    category: 'Commercial',
    location: '서울시 강남구',
    description: '기업의 브랜드 정체성을 담아낸 세련되고 전문적인 분위기의 비즈니스 환경을 조성했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    title: '한남동 노후 건물 재생전략',
    category: 'Remodeling',
    location: '서울시 한남동',
    description: '30년 된 건물의 구조를 보강하고 현대적인 감각으로 재해석하여 가치를 극대화한 리모델링 프로젝트입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '7',
    title: '성수동 단층 단독주택 리노베이션',
    category: 'Remodeling',
    location: '서울시 성동구 성수동',
    description: '성수동의 오래된 주거 건물을 현대적인 감각으로 리노베이션했습니다. 기존 건물의 매력을 살리면서도 모던한 감각의 마감재를 더해 유니크한 주거 공간을 구현했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },

  {
    id: '6',
    title: '성수동 오로라 헤어스튜디오',
    category: 'Commercial',
    location: '서울시 성동구 성수동',
    description: '따뜻한 베이지 톤의 벽면과 백라이트 타원형 거울, 그리고 내추럴한 우드 소재가 어우러진 편안하고 감각적인 프리미엄 헤어 살롱입니다.',
    imageUrl: 'https://cdn.jsdelivr.net/gh/31choichoi/Joy@f9edc42f0a0bbc6e66c98defc6d32312a66fc090/public/img/pf_04.png'
  }
];

export const HISTORY = [
  { year: '1999', event: '서울에서 MID 인테리어 디자인 설립' },
  { year: '2004', event: '한샘 인테리어 수내대리점 등록' },
  { year: '2005', event: '틈새라면 전국 프랜차이즈 전담 시공 파트너십 체결' },
  { year: '2012', event: '분당/판교 지역 하이엔드 주거 인테리어 시장 본격 진출' },
  { year: '2018', event: '본사 사무실 서초동에서 분당으로 이전' },
  { year: '2019', event: 'LG인테리어 수내대리점 등록' },
  { year: '2022', event: '인테리어 공사 1,000건 돌파' }
];

export const REGIONS = ['Seoul', 'Bundang', 'Pangyo', 'Other'];
export const BUDGET_RANGES = ['Under 50M KRW', '50M - 100M KRW', '100M - 200M KRW', 'Above 200M KRW'];
