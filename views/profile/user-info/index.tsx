import { Div, Img, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { CopySVG, VerifiedSVG } from '@/components/svg';
import { copyToClipboard } from '@/utils';

const UserInfo: FC = () => {
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
          src="/user-default-memez-fun.png"
        />
      </Div>
      <Div
        mb="0.5rem"
        gap="0.25rem"
        fontWeight="500"
        display="flex"
        textAlign="center"
        fontSize="0.75rem"
        mt="0.75rem"
        flexDirection="column"
      >
        <Span color="#fff" lineHeight="1.375rem">
          Name
        </Span>
        <Div display="flex" alignItems="center" gap="0.25rem">
          <Span color="#90939D" lineHeight="1.375rem">
            Username
          </Span>
          <Div width="0.625rem" height="0.625rem" display="flex">
            <VerifiedSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Div>
        </Div>
      </Div>
      <Div mt="0.5rem" display="flex">
        <Div
          bg="#24282D"
          px="0.5rem"
          py="0.25rem"
          display="flex"
          color="#E4E7EB"
          gap="0.625rem"
          fontSize="0.75rem"
          alignItems="center"
          borderRadius="0.75rem"
          textAlign="center"
          transition="all 300ms ease-in-out"
          nHover={{ transform: 'scale(1.05)', color: '#F5B722' }}
        >
          <Span fontWeight="500">0x2::sui::SUI</Span>
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
