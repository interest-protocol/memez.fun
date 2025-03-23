import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { PencilSVG, XSVG } from '@/components/svg';

import { HeaderButtonsProps } from './header-button.types';

const HeaderButtons: FC<HeaderButtonsProps> = ({ isMyProfile }) => {
  return (
    <Div
      display="flex"
      gap="0.75rem"
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'flex-start',
      ]}
    >
      {isMyProfile ? (
        <Button
          all="unset"
          py={['0.5rem', '0.5rem', '0.5rem', '0.6rem']}
          px={['0.5rem', '0.5rem', '0.5rem', '0.875rem']}
          display="flex"
          width={['unset', 'unset', 'unset', '7.5rem']}
          color="#F6C853"
          cursor="pointer"
          transition="all .3s"
          borderRadius="100px"
          justifyContent="center"
          zIndex={9999999}
          border="1px solid #F6C853"
          nHover={{
            transform: 'scale(1.05)',
          }}
        >
          <Div
            width="1.2rem"
            height="1.2rem"
            color="#F6C853"
            mr={['unset', 'unset', 'unset', '0.5rem']}
          >
            <PencilSVG width="100%" maxHeight="100%" maxWidth="100%" />
          </Div>
          <Span fontSize="0.875rem" display={['none', 'none', 'none', 'block']}>
            Edit profile
          </Span>
        </Button>
      ) : (
        <>
          <Button
            all="unset"
            py="0.6rem"
            px="0.875rem"
            display="flex"
            color="#F6C853"
            cursor="pointer"
            transition="all .3s"
            borderRadius="100px"
            justifyContent="center"
            zIndex={9999999}
            border="1px solid #F6C853"
            nHover={{
              transform: 'scale(1.05)',
            }}
          >
            <Span fontSize="0.875rem">Follow</Span>
          </Button>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            <Button
              all="unset"
              p="0.5rem"
              display="flex"
              color="#F6C853"
              cursor="pointer"
              transition="all .3s"
              borderRadius="100px"
              justifyContent="center"
              zIndex={9999999}
              border="1px solid #F6C853"
              nHover={{
                transform: 'scale(1.05)',
              }}
            >
              <Div width="1.2rem" height="1.2rem" color="#fff">
                <XSVG width="100%" maxHeight="100%" maxWidth="100%" />
              </Div>
            </Button>
          </a>
        </>
      )}
    </Div>
  );
};

export default HeaderButtons;
