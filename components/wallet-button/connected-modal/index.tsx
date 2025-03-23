import { useCurrentAccount } from '@mysten/dapp-kit';
import { formatAddress } from '@mysten/sui/utils';
import { Button, Div, DivElementProps } from '@stylin.js/elements';
import { AnimatePresence } from 'motion/react';
import { useRouter } from 'next/router';
import { not } from 'ramda';
import { FC, useState } from 'react';

import Profile from '@/components/profile';
import { UserSVG } from '@/components/svg';
import ChevronDown from '@/components/svg/chevron-down';
import { Routes, RoutesEnum } from '@/constants';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

const ConnectedModal: FC = () => {
  const [show, setShow] = useState(false);
  const { push } = useRouter();
  const currentAccount = useCurrentAccount();

  const menuRef = useClickOutsideListenerRef<DivElementProps>(() =>
    setShow(false)
  );
  return currentAccount ? (
    <Div
      ref={menuRef}
      display="flex"
      position="relative"
      alignItems="flex-end"
      flexDirection="column"
    >
      <Button
        all="unset"
        gap="0.5rem"
        bg="#1F1F1F"
        color="#fff"
        display="flex"
        cursor="pointer"
        lineHeight="10px"
        alignItems="center"
        borderRadius="2rem"
        whiteSpace="nowrap"
        px={['1rem', '1.25rem']}
        py={['0.75rem', '0.825rem']}
        onClick={() => setShow(not)}
        border="1px solid #F5B72280"
        fontSize={['0.75rem', '0.75rem', '0.75rem', '1rem']}
      >
        <Div
          display="block"
          transition="all .3s"
          nHover={{
            transform: 'scale(1.15)',
          }}
          onClick={(e) => {
            e.stopPropagation();
            push(Routes[RoutesEnum.Profile]);
          }}
        >
          <UserSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Div>
        {formatAddress(currentAccount!.address)}
        <Div display={['none', 'block']}>
          <ChevronDown maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Div>
      </Button>
      <AnimatePresence>{show && <Profile />}</AnimatePresence>
    </Div>
  ) : (
    <Div>Sign in</Div>
  );
};

export default ConnectedModal;
