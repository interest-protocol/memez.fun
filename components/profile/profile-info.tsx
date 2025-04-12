import { useCurrentAccount } from '@mysten/dapp-kit';
import { formatAddress } from '@mysten/sui/utils';
import { Div, Img, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocalStorage } from 'usehooks-ts';

import {
  BASE_URL,
  MEMEZ_FUN_TOKEN_AUTH,
  Routes,
  RoutesEnum,
} from '@/constants';
import { useCoinBalance } from '@/hooks/use-coin-balance';
import { UserDetailsProps } from '@/interface';
import { FixedPointMath } from '@/lib/entities/fixed-point-math';

import { BannerProfileSVG, CopySVG } from '../svg';

const ProfileInfo: FC = () => {
  const { push } = useRouter();
  const currentAccount = useCurrentAccount();
  const [user, setUser] = useState<UserDetailsProps>();
  const [signedPM] = useLocalStorage<{
    signature: string;
    message: string;
  }>(MEMEZ_FUN_TOKEN_AUTH, { signature: '', message: '' });

  const userPrifleData = () => {
    fetch(`${BASE_URL}/users/${currentAccount?.address}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        message: signedPM.message,
        signature: signedPM.signature,
        address: currentAccount?.address ?? '',
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    if (currentAccount) return userPrifleData();
  }, [currentAccount]);

  const { balance } = useCoinBalance('0x2::sui::SUI', currentAccount?.address);

  const copyAddress = () => {
    toast.success('Copied!');
    window.navigator.clipboard.writeText(
      formatAddress(currentAccount?.address || '')
    );
  };

  return (
    <>
      <Div height="4.75rem" bg="#24282D">
        <Div height="100%">
          <BannerProfileSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
      </Div>
      <Div
        mt="-2rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        mb="2.5rem"
      >
        <Div
          width="3.25rem"
          height="3.25rem"
          cursor="pointer"
          borderRadius="100%"
          border="4px solid #131419"
          onClick={() => push(Routes[RoutesEnum.Profile])}
          transition="all .3s"
          nHover={{
            transform: 'scale(1.15)',
          }}
        >
          <Img
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="100%"
            src={user?.avatar}
          />
        </Div>
        <Div
          mb="0.5rem"
          display="flex"
          gap="0.25rem"
          fontWeight="500"
          textAlign="center"
          fontSize="0.75rem"
          flexDirection="column"
        >
          <Span color="#fff" lineHeight="1.375rem">
            {`${user?.firstName === '' && user?.lastName === '' && 'Unknown'} `}
          </Span>
          <Span color="#90939D" lineHeight="1.375rem">
            {user?.username}
          </Span>
        </Div>
        <Div
          display="grid"
          gridTemplateColumns="1fr 1fr"
          mt="0.5rem"
          gap="0.625rem"
        >
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
              onClick={copyAddress}
            >
              <CopySVG maxHeight="100%" maxWidth="100%" width="100$" />
            </Div>
          </Div>
          <Div
            bg="#24282D"
            px="0.5rem"
            py="0.25rem"
            display="flex"
            color="#E4E7EB"
            gap="0.625rem"
            cursor="pointer"
            fontSize="0.75rem"
            alignItems="center"
            borderRadius="0.75rem"
            justifyContent="center"
            transition="all 300ms ease-in-out"
            nHover={{ transform: 'scale(1.05)', color: '#F5B722' }}
          >
            <Span>
              Balance:{' '}
              {balance
                ? Number(FixedPointMath.toNumber(balance).toFixed(2))
                : '--'}
            </Span>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default ProfileInfo;
