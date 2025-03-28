import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export type SocialLinkProps = {
  title: string;
  pathname: string;
  Icon: FC<SVGProps>;
  isDisabled?: boolean;
};
