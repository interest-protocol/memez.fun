import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface SocialProps {
  title: string;
  Icon: FC<SVGProps>;
  link: string;
}
