import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import AvatarGroup from '@/components/avatar-group';

import { DetailsTokenBasicsFooterProps } from './details-token-basics.types';

const DetailsTokenBasicsFooter: FC<DetailsTokenBasicsFooterProps> = ({
  usersLikes,
}) => {
  return (
    <Div
      pt="1rem"
      px="1rem"
      height="4rem"
      display="flex"
      maxHeight="4rem"
      alignItems="center"
      justifyContent="space-between"
      borderTop="1px solid #24282D"
      borderBottomLeftRadius="1.5rem"
      borderBottomRightRadius="1.5rem"
    >
      <AvatarGroup
        items={
          usersLikes || [
            {
              id: '',
              name: '',
              avatar: '',
            },
          ]
        }
      />
    </Div>
  );
};

export default DetailsTokenBasicsFooter;
