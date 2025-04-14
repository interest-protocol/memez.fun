import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import SocialLink from '@/views/home/components/social';

import { DetailsTokenBasicsSocialsProps } from './details-token-basics.types';

const DetailsTokenBasicsSocials: FC<DetailsTokenBasicsSocialsProps> = ({
  socials,
  isDisabled,
}) => {
  if (!socials || socials.length === 0) return null;

  return (
    <Div gap="0.5rem" display="flex" color="#FBFBFB" justifyContent="center">
      {socials.map(({ Icon, title, link }) => (
        <SocialLink
          key={v4()}
          Icon={Icon}
          title={title}
          pathname={link}
          isDisabled={isDisabled}
        />
      ))}
    </Div>
  );
};

export default DetailsTokenBasicsSocials;
