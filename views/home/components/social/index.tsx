import { Div } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { SocialLinkProps } from './social.types';

const SocialLink: FC<SocialLinkProps> = ({
  pathname,
  title,
  Icon,
  isDisabled,
}) => {
  return (
    <Link
      href={pathname}
      target="_blank"
      rel="noreferrer"
      title={`Follow us on ${title}`}
    >
      <Div
        p=".5rem"
        display="flex"
        width="2.5rem"
        height="2.5rem"
        border="1px solid"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        color={isDisabled ? '#90939D66' : '#fff'}
        borderColor={isDisabled ? '#90939D66' : '#494C54'}
      >
        <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
      </Div>
    </Link>
  );
};

export default SocialLink;
