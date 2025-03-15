import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import AvatarGroup from '@/components/avatar-group';

const DetailsTokenBasicsFooter: FC = () => {
  return (
    <Div
      pt="1rem"
      px="1rem"
      height="4rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderTop="1px solid #24282D"
      borderBottomLeftRadius="1.5rem"
      borderBottomRightRadius="1.5rem"
    >
      <AvatarGroup />
    </Div>
  );
};

export default DetailsTokenBasicsFooter;
