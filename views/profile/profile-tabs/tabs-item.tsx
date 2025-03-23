import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ProfileTabsItemProps } from './profile-tabs.types';

const ProfileTabsItem: FC<ProfileTabsItemProps> = ({
  title,
  onSelect,
  isSelected,
}) => {
  return (
    <Div
      p="0.625rem"
      color="#fff"
      onClick={onSelect}
      transition="all .2s"
      borderBottom={isSelected ? '1px solid' : 'unset'}
      borderColor={isSelected ? '#F8D375' : 'none'}
      nHover={{
        color: '#ffffffb8',
      }}
    >
      <Span fontSize="1rem" fontWeight="700" lineHeight="1.5rem">
        {title}
      </Span>
    </Div>
  );
};

export default ProfileTabsItem;
