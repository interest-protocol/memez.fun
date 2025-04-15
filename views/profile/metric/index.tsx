import { useCurrentAccount } from '@mysten/dapp-kit';
import { Div, Span } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import EngagementCounterModal from '@/components/engagement-counter';
import {
  BASE_URL,
  MEMEZ_FUN_TOKEN_AUTH,
  MOCK_FOLLOWING_DATA,
} from '@/constants';
import { useModal } from '@/hooks/use-modal';

import { MetricProps } from './metric.types';

const Metric: FC<MetricProps> = ({
  following,
  followers,
  coinsOwned,
  totalValueCoin,
}) => {
  const { setContent, onClose } = useModal();
  const currentAccount = useCurrentAccount();
  const [followingData, setFollowingData] = useState();
  const [followersData, setFollowersData] = useState();
  const [signedPM] = useLocalStorage<{
    signature: string;
    message: string;
    cookies?: unknown;
  }>(MEMEZ_FUN_TOKEN_AUTH, { signature: '', message: '' });

  const getFollowing = () => {
    fetch(`${BASE_URL}/users/${currentAccount?.address}/following`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        message: signedPM?.message,
        signature: signedPM?.signature,
        address: currentAccount?.address ?? '',
      },
    })
      .then((res) => res.json())
      .then((userFollowing) => setFollowingData(userFollowing.data));
  };

  const getFollowers = () => {
    fetch(`${BASE_URL}/users/${currentAccount?.address}/followers`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        message: signedPM?.message,
        signature: signedPM?.signature,
        address: currentAccount?.address ?? '',
      },
    })
      .then((res) => res.json())
      .then((userFollowers) => setFollowersData(userFollowers.data));
  };

  useEffect(() => {
    if (currentAccount) {
      getFollowing();
      getFollowers();
    }
  }, [currentAccount, followersData, followingData]);

  const handleFollowers = () =>
    setContent(
      <EngagementCounterModal title="Followers" data={MOCK_FOLLOWING_DATA} />,
      { onClose }
    );

  const handleFollowing = () =>
    setContent(
      <EngagementCounterModal title="Following" data={MOCK_FOLLOWING_DATA} />,
      { onClose }
    );

  return (
    <Div
      pb="2rem"
      mt="8.75rem"
      mx="0.688rem"
      display="flex"
      color="#FFFFFF"
      justifyContent="space-between"
      borderBottom="1px solid #24282D"
    >
      <Div
        display="flex"
        cursor="pointer"
        transition="0.3s"
        alignItems="center"
        onClick={handleFollowers}
        flexDirection="column"
        nHover={{
          opacity: '0.8',
        }}
        fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      >
        <Span fontWeight="700" lineHeight="1.75rem">
          {followers}
        </Span>
        <Span
          lineHeight="1.375rem"
          fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        >
          Followers
        </Span>
      </Div>
      <Div
        display="flex"
        onClick={handleFollowing}
        alignItems="center"
        flexDirection="column"
        fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      >
        <Span lineHeight="1.75rem" fontWeight="700">
          {following}
        </Span>
        <Span
          lineHeight="1.375rem"
          fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        >
          Following
        </Span>
      </Div>
      <Div
        display="flex"
        alignItems="center"
        flexDirection="column"
        fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      >
        <Span lineHeight="1.75rem" fontWeight="700">
          {coinsOwned}
        </Span>
        <Span
          lineHeight="1.375rem"
          fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        >
          Coins Owned
        </Span>
      </Div>
      <Div
        display="flex"
        alignItems="center"
        flexDirection="column"
        fontSize={['1rem', '1rem', '1rem', '1.25rem']}
      >
        <Span lineHeight="1.75rem" fontWeight="700">
          {totalValueCoin}
        </Span>
        <Span
          lineHeight="1.375rem"
          fontSize={['0.75rem', '0.75rem', '0.75rem', '0.875rem']}
        >
          Total Value Coin
        </Span>
      </Div>
    </Div>
  );
};

export default Metric;
