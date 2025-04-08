export interface HeroCarouselItemProps {
  name: string;
  iconUrl: string;
  isHot?: boolean;
  iconSize?: string;
  marketCap: string;
  volume24h?: string;
  allTimeVolume?: string;
}

export interface HoverFloatItemProps {
  value: string;
  labelKey: 'marketCap' | 'volume24h' | 'allTimeVolume';
}

export interface HeroCarouselItemTokenIconProps {
  iconUrl: string;
  isHot?: boolean;
}
export interface HeroCarouselItemTokenIconProps {
  size?: string;
  iconUrl: string;
  isHot?: boolean;
}

export interface MiniHeroCarouselItemProps
  extends Pick<
    HeroCarouselItemProps,
    'iconUrl' | 'name' | 'isHot' | 'iconSize'
  > {}
