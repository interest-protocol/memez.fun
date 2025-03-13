import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import AvatarGroup from '@/components/avatar-group';

import CardLikes from './card-likes';

const CardFooter: FC = () => {
  return (
    <Div
      p="1rem"
      display="flex"
      justifyContent="space-between"
      borderTop="1px solid #24282D"
      borderBottomLeftRadius="1.5rem"
      borderBottomRightRadius="1.5rem"
    >
      <AvatarGroup />
      <CardLikes />
    </Div>
  );
};

export default CardFooter;
