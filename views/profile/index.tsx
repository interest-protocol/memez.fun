import { useCurrentAccount } from '@mysten/dapp-kit';
import { Div, Span } from '@stylin.js/elements';
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Layout } from '@/components';
import { BASE_URL, MEMEZ_FUN_TOKEN_AUTH } from '@/constants';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { UserDetailsProps } from '@/interface';

import ActivityList from './activity-list';
import HeaderButtons from './header-buttons';
import Illustration from './illustration';
import Metric from './metric';
import ProfileTabs from './profile-tabs';
import { ProfileTabsEnum } from './profile-tabs/profile-tabs.types';
import UserInfo from './user-info';

const Profile: FC = () => {
  const isMyProfile = true;
  const { isMobile } = useIsMobile();
  const [tabSelect, setTabSelect] = useState(ProfileTabsEnum.History);
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
        message: signedPM?.message,
        signature: signedPM?.signature,
        address: currentAccount?.address ?? '',
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    if (currentAccount) return userPrifleData();
  }, [currentAccount]);

  const onSelect = (tab: ProfileTabsEnum) => {
    setTabSelect(tab);
  };

  return (
    <Layout noFooter={isMobile}>
      <>
        <Div
          mx="auto"
          zIndex={2}
          position="relative"
          mt={['10rem', '10rem', '10rem', '8rem']}
          maxWidth={['100vw', '100vw', '100vw', '45rem']}
        >
          <Div
            width="100%"
            bg="#131419"
            bottom="unset"
            borderRadius="2rem"
            border="1px solid #24282D"
            p={['1rem', '1rem', '1rem', '1.5rem']}
            borderBottomLeftRadius={['0', '0', '0', '2rem']}
            borderBottomRightRadius={['0', '0', '0', '2rem']}
          >
            <UserInfo
              emailVerified={user?.emailVerified ?? false}
              avatar={user?.avatar ?? ''}
              username={user?.username ?? ''}
              firstName={user?.firstName ?? ''}
              lastName={user?.lastName ?? ''}
              bio={user?.bio ?? ''}
            />
            <HeaderButtons isMyProfile={isMyProfile} />
            <Metric
              followers={user?.followers}
              following={user?.following}
              coinsOwned="12"
              totalValueCoin="1.43M"
            />
            <ProfileTabs currentTab={tabSelect} onSelect={onSelect} />
            <ActivityList currentTab={tabSelect} />
            <Div mt="1.375rem" display="flex">
              <Span
                mx="auto"
                color="#fff"
                cursor="pointer"
                fontSize="0.75rem"
                transition="all .2s"
                nHover={{ opacity: 0.7 }}
              >
                Show more
              </Span>
            </Div>
          </Div>
        </Div>
        <Illustration />
      </>
    </Layout>
  );
};

export default Profile;
