import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import AvatarGroup from '@/components/avatar-group';

import { CardFooterProps } from './card.types';
import CardLikes from './card-likes';

const CardFooter: FC<CardFooterProps> = ({ data, total, poolId }) => {
  return (
    <Div
      p="1rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderTop="1px solid #24282D"
      borderBottomLeftRadius="1.5rem"
      borderBottomRightRadius="1.5rem"
    >
      <AvatarGroup items={data} />
      {total > 0 && <CardLikes poolId={poolId} totalLikes={total} />}
    </Div>
  );
};

export default CardFooter;
