import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ActionCardTabsProps } from './acction-card-tabs.types';
import { TABS_DATA } from './action-card-tabs.data';
import ActionCardTabsItem from './action-card-tabs-item';

const ActionTabsCard: FC<ActionCardTabsProps> = ({ activeColor }) => {
  return (
    <Div gap="1rem" display="flex">
      {TABS_DATA.map((el) => (
        <ActionCardTabsItem activeColor={activeColor} title={el} key={v4()} />
      ))}
    </Div>
  );
};

export default ActionTabsCard;
