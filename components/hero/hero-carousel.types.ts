export interface HeroCarouselItemProps {
  iconUrl: string;
  marketCap: string;
  volume24h: string;
  allTimeVolume: string;
}

export interface HoverFloatItemProps {
  value: string;
  labelKey: 'marketCap' | 'volume24h' | 'allTimeVolume';
}

export interface HeroCarouselItemTokenIconProps {
  iconUrl: string;
  isHot?: boolean;
}
