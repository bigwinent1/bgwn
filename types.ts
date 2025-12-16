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
  RWYA = 'RWYA',
  GOLDN_MNKY = 'Goldn Mnky',
  POSER = 'POSER',
  INSTRUMENTALS = 'Instrumentals',
  SUPPORT_ARTISTS = 'Support - Artists',
  SUPPORT_BUSINESSES = 'Support - Businesses'
}