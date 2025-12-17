export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface NavItem {
  label: string;
  path: string;
}