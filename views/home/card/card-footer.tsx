import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import AvatarGroup from '@/components/avatar-group';
import { DATA } from '@/components/avatar-group/avatar-group.data';

import CardLikes from './card-likes';

const CardFooter: FC = () => {
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
      <AvatarGroup items={DATA} />
      <CardLikes />
    </Div>
  );
};

export default CardFooter;
