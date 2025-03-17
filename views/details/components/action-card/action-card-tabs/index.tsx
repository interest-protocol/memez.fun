import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { ActionCardTabsProps } from './acction-card-tabs.types';
import { TABS_DATA } from './action-card-tabs.data';
import ActionCardTabsItem from './action-card-tabs-item';

const ActionTabsCard: FC<ActionCardTabsProps> = ({ activeColor }) => {
  const [activeTab, setActiveTab] = useState('buy');

  const handleClick = (type: string) => {
    setActiveTab(type);
  };

  return (
    <Div gap="1rem" display="flex">
      {TABS_DATA.map((el) => (
        <ActionCardTabsItem
          title={el}
          key={v4()}
          activeColor={activeColor}
          isActive={el === activeTab}
          onClick={() => handleClick(el)}
        />
      ))}
    </Div>
  );
};

export default ActionTabsCard;
