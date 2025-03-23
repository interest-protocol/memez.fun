import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { ProfileTabsEnum, ProfileTabsProps } from './profile-tabs.types';
import ProfileTabsItem from './tabs-item';

const ProfileTabs: FC<ProfileTabsProps> = ({ currentTab, onSelect }) => {
  return (
    <Div
      mt="2rem"
      mb="2.5rem"
      gap="0.75rem"
      display={['-webkit-box', '-webkit-box', '-webkit-box', 'flex']}
      cursor="pointer"
      justifyContent="center"
      overflow="auto"
    >
      <ProfileTabsItem
        title="Transaction History"
        onSelect={() => {
          onSelect(ProfileTabsEnum.History);
        }}
        isSelected={currentTab == ProfileTabsEnum.History}
      />
      <ProfileTabsItem
        title="Coins Owned"
        onSelect={() => {
          onSelect(ProfileTabsEnum.CoinOwned);
        }}
        isSelected={currentTab == ProfileTabsEnum.CoinOwned}
      />
      <ProfileTabsItem
        title="Coins Created"
        onSelect={() => {
          onSelect(ProfileTabsEnum.CoinCreated);
        }}
        isSelected={currentTab == ProfileTabsEnum.CoinCreated}
      />
    </Div>
  );
};

export default ProfileTabs;
