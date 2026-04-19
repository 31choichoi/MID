import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Bundang Luxury Penthouse',
    category: 'Residential',
    location: 'Bundang-gu, Seongnam',
    description: 'Modern luxury design with premium materials and custom lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Pangyo Hillstate Renovation',
    category: 'Residential',
    location: 'Pangyo-dong, Seongnam',
    description: 'Minimalist redesign focusing on open space and natural textures.',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Teumsae Ramyun Myeongdong',
    category: 'Commercial',
    location: 'Myeong-dong, Seoul',
    description: 'The archetype of MID design philosophy for franchise scaling.',
    imageUrl: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1200',
    isTeumsae: true
  },
  {
    id: '4',
    title: 'Gangnam Office Tower Lobby',
    category: 'Commercial',
    location: 'Gangnam-gu, Seoul',
    description: 'Sophisticated corporate environment with a focus on brand identity.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '5',
    title: 'Old Building Revival - Hannam',
    category: 'Remodeling',
    location: 'Hannam-dong, Seoul',
    description: 'Complete structural and aesthetic overhaul of a 30-year-old building.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '6',
    title: 'Teumsae Ramyun Bundang',
    category: 'Commercial',
    location: 'Seohyeon-dong, Bundang',
    description: 'Maintaining brand consistency while adapting to a wider floor plan.',
    imageUrl: 'https://images.unsplash.com/photo-1569058242252-0ff682cd9320?auto=format&fit=crop&q=80&w=1200',
    isTeumsae: true
  }
];

export const HISTORY = [
  { year: '1999', event: 'MID Interior Design founded in Seoul.' },
  { year: '2005', event: 'First exclusive partnership with Teumsae Ramyun.' },
  { year: '2012', event: 'Expanded focus to Bundang/Pangyo high-end residential market.' },
  { year: '2018', event: 'Awarded Architectural Design of the Year for Hannam project.' },
  { year: '2024', event: 'Celebrating 25 years of excellence and 300+ projects.' }
];

export const REGIONS = ['Seoul', 'Bundang', 'Pangyo', 'Other'];
export const BUDGET_RANGES = ['Under 50M KRW', '50M - 100M KRW', '100M - 200M KRW', 'Above 200M KRW'];
