import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ActionCardTabsItemProps } from './acction-card-tabs.types';

const ActionCardTabsItem: FC<ActionCardTabsItemProps> = ({
  title,
  isActive,
  activeColor,
}) => {
  return (
    <Div
      display="flex"
      height="2.75rem"
      width="3.063rem"
      cursor="pointer"
      transition="0.3s"
      textAlign="center"
      alignItems="center"
      boxSizing="border-box"
      justifyContent="center"
      borderBottom={
        isActive ? `1px solid ${activeColor}` : '1px solid transparent'
      }
      nHover={{ borderBottom: `1px solid ${activeColor}` }}
    >
      <Span color="#fff">{title}</Span>
    </Div>
  );
};

export default ActionCardTabsItem;
