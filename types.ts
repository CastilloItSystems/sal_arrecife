export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  uses: string[];
  image: string;
  tag: string;
}

export interface PortfolioItem {
  img: string;
  title: string;
  desc: string;
  moreInfo: string;
  tags: string[];
}

export interface ComparisonPoint {
  feature: string;
  us: string;
  them: string;
}

export enum ChatState {
  IDLE,
  THINKING,
  RESPONDING,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}