import { useCurrentAccount } from '@mysten/dapp-kit';
import { formatAddress } from '@mysten/sui/utils';
import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { CopySVG, VerifiedSVG } from '@/components/svg';
import { UserDetailsProps } from '@/interface';
import { copyToClipboard } from '@/utils';

const UserInfo: FC<UserDetailsProps> = ({
  avatar,
  firstName,
  lastName,
  username,
  emailVerified,
}) => {
  const currentAccount = useCurrentAccount();
  const clipBoardSuccessMessage = 'Address copied to the clipboard';

  return (
    <Div
      display="flex"
      flexDirection="column"
      position="absolute"
      justifyContent="center"
      alignItems="center"
      top="-6rem"
      left="50%"
      right="50%"
    >
      <Div
        p="1.25rem"
        bg="#F6C85326"
        borderRadius="100%"
        backdropFilter="blur(15px)"
        border="1px solid #FFFFFF40"
        display="flex"
      >
        <Img
          width="140px"
          height="140px"
          objectFit="cover"
          borderRadius="100%"
          src={avatar}
        />
      </Div>
      <Div
        mb="0.5rem"
        gap="0.25rem"
        mt="0.75rem"
        display="flex"
        fontWeight="500"
        textAlign="center"
        fontSize="0.75rem"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Span width="8rem" color="#fff" lineHeight="1.375rem">
          {`${firstName === '' && lastName === '' && 'Unknown'} `}
        </Span>
        <Div
          display="flex"
          gap="0.25rem"
          textAlign="center"
          alignItems="center"
        >
          <Span color="#90939D" lineHeight="1.375rem">
            {username}
          </Span>
          {emailVerified && (
            <Div width="0.625rem" height="0.625rem" display="flex">
              <VerifiedSVG maxHeight="100%" maxWidth="100%" width="100%" />
            </Div>
          )}
        </Div>
      </Div>
      <Div mt="0.5rem" display="flex">
        <Div
          bg="#24282D"
          px="0.5rem"
          py="0.25rem"
          display="flex"
          width="8rem"
          color="#E4E7EB"
          gap="0.625rem"
          cursor="pointer"
          fontSize="0.75rem"
          alignItems="center"
          textAlign="center"
          borderRadius="0.75rem"
          justifyContent="center"
          transition="all 300ms ease-in-out"
          nHover={{ transform: 'scale(1.05)', color: '#F5B722' }}
        >
          <Span fontWeight="500">
            {formatAddress(currentAccount?.address || '')}
          </Span>
          <Div
            maxWidth="1rem"
            maxHeight="1rem"
            cursor="pointer"
            onClick={() => copyToClipboard(clipBoardSuccessMessage)}
          >
            <CopySVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default UserInfo;
