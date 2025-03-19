import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg';

import { SocialCardProps } from '../../create-coin.types';

const SocialCard: FC<SocialCardProps> = ({ title, onClose }) => (
  <Div
    bg="#24282D"
    display="flex"
    py="0.625rem"
    position="relative"
    transition="all .3s"
    borderRadius="0.75rem"
    justifyContent="center"
    nHover={{
      bg: '#24282dc4',
    }}
  >
    <Span fontSize="0.875rem" textTransform="capitalize">
      {title}
    </Span>
    <Div
      top="0"
      right="0.5rem"
      width="0.75rem"
      color="#494C54"
      height="0.75rem"
      cursor="pointer"
      position="absolute"
      transition="all .3s"
      onClick={() => {
        onClose(title);
      }}
      nHover={{
        color: '#fff',
      }}
    >
      <TimesSVG maxHeight="100%" maxWidth="100%" width="100%" />
    </Div>
  </Div>
);

export default SocialCard;
