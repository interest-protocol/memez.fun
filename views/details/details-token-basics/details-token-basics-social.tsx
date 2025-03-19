import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { SOCIAL } from '@/constants/socials';

import { DetailsTokenBasicsSocialsProps } from './details-token-basics.types';

const DetailsTokenBasicsSocials: FC<DetailsTokenBasicsSocialsProps> = ({
  isDisabled,
}) => {
  return (
    <Div gap="0.5rem" display="flex" color="#FBFBFB" justifyContent="center">
      {SOCIAL.map(({ Icon, title }) => (
        <Link href="" key={title}>
          <Div
            mr="0.5rem"
            color="#FFF"
            width="2.5rem"
            display="flex"
            height="2.5rem"
            transition="0.3s"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            border="1px solid #494C54"
            opacity={isDisabled ? '0.6' : '1'}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            nHover={isDisabled ? {} : { background: '#202b37' }}
          >
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          </Div>
        </Link>
      ))}
    </Div>
  );
};

export default DetailsTokenBasicsSocials;
