import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SOCIAL } from '@/constants/socials';
import SocialLink from '@/views/home/components/social';

import { DetailsTokenBasicsSocialsProps } from './details-token-basics.types';

const DetailsTokenBasicsSocials: FC<DetailsTokenBasicsSocialsProps> = ({
  isDisabled,
}) => {
  return (
    <Div gap="0.5rem" display="flex" color="#FBFBFB" justifyContent="center">
      {SOCIAL.map(({ Icon, title, link }) => (
        <SocialLink
          pathname={link}
          title={title}
          Icon={Icon}
          key={v4()}
          isDisabled={isDisabled}
        />
      ))}
    </Div>
  );
};

export default DetailsTokenBasicsSocials;
