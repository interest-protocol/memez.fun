import { Div, Span } from '@stylin.js/elements';
import { memo } from 'react';

import ToggleButton from '@/components/toggle';

import { COllapseMenuItemProps } from './collapse-menu-item.types';

const CollapseMenuItem = memo<COllapseMenuItemProps>(
  ({ name, title, selected, onSelect, withBorder }) => (
    <Div
      mx="1rem"
      py="0.5rem"
      display="flex"
      onClick={() => onSelect()}
      justifyContent="space-between"
      alignItems="center"
      cursor="pointer"
      color="#fff"
      {...(withBorder && { borderTop: '1px solid #242424' })}
    >
      <Span fontSize="0.875rem">{title}</Span>
      <ToggleButton name={name} defaultValue={selected} />
    </Div>
  )
);

CollapseMenuItem.displayName = CollapseMenuItem.name;

export default CollapseMenuItem;
