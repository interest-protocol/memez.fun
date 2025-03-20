import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ActionCardTabsProps } from './acction-card-tabs.types';
import { TABS_DATA } from './action-card-tabs.data';
import ActionCardTabsItem from './action-card-tabs-item';

const ActionTabsCard: FC<ActionCardTabsProps> = ({
  activeTab,
  activeColor,
  setActiveTab,
}) => {
  const handleClick = (type: 'buy' | 'sell' | 'burn') => {
    setActiveTab(type);
  };

  return (
    <Div gap="1rem" display="flex">
      {TABS_DATA.map((el) => (
        <ActionCardTabsItem
          title={el}
          key={v4()}
          activeColor={activeColor}
          isActive={el.toLowerCase() === activeTab}
          onClick={() => handleClick(el as 'buy' | 'sell' | 'burn')}
        />
      ))}
    </Div>
  );
};

export default ActionTabsCard;
