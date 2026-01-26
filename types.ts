export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface ArtistCardProps {
  name: string;
  image?: string;
  color: string;
  textColor?: string;
  logoText?: string;
  subText?: string;
  onClick?: () => void;
}

export interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export enum TabOption {
  HOME = 'Home',
  ABOUT = 'About Us',
  BLOG = 'Blog',
  MUSIC = 'Music',
  ARTIST = 'Artist',
  SHOWS = 'Shows',
  VISUALS = 'Visuals',
  CATCH22 = 'Catch22',
  ARIZONA = 'Arizona',
  ABOUTIME = 'ABOUTIME',
  GOLDN_MNKY = 'Goldn Mnky',
  JOVE = 'JOVE',
  KATLYST = 'Katlyst',
  DISTORTED = 'DISTORTED',
  MR_SQUARE = 'Mr. SQUARE (demos)',
  POSER = 'POSER',
  QUIET = 'QUIET',
  SIXTY9 = 'Sixty9',
  KALIDESKOPE = 'KALIDESKOPE',
  RWYA = 'RWYA',
  TIX = 'TIX',
  INSTRUMENTALS = 'Instrumentals',
  SUPPORT = 'Support'
}