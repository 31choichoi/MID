import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '분당 럭셔리 펜트하우스',
    category: 'Residential',
    location: '성남시 분당구',
    description: '최고급 자재와 맞춤형 조명 설계를 통해 현대적이고 고급스러운 디자인을 구현했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: '판교 힐스테이트 리노베이션',
    category: 'Residential',
    location: '성남시 판교동',
    description: '개방감 있는 공간 구성과 자연스러운 질감에 집중한 미니멀리즘 디자인 프로젝트입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: '틈새라면 명동 본점',
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
    id: '8',
    title: '판교 근생빌딩 신축 1층 메인 진입부',
    category: 'Remodeling',
    location: '성남시 판교동',
    description: '신축 근린생활시설의 얼굴인 1층 주출입구를 개방감 있는 통유리와 고급스러운 석재 마감, 세련된 조명 설계를 통해 빌딩의 가치를 높여주는 우아한 공간으로 완성했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '6',
    title: '성수동 오로라 헤어스튜디오',
    category: 'Commercial',
    location: '서울시 성동구 성수동',
    description: '따뜻한 베이지 톤의 벽면과 백라이트 타원형 거울, 그리고 내추럴한 우드 소재가 어우러진 편안하고 감각적인 프리미엄 헤어 살롱입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1200'
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
