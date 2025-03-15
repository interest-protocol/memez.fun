import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import ToggleButton from '../../toggle';
import { ListProps } from './list.types';

const ListItem: FC<ListProps> = ({
  title,
  Icon,
  color,
  onClick,
  activeToggle,
}) => (
  <Div
    pr="1rem"
    pl="1.375rem"
    py="0.75rem"
    display="flex"
    justifyContent="space-between"
    transition="all .3s"
    cursor="pointer"
    nHover={{
      backgroundColor: '#24282D',
    }}
    onClick={onClick}
  >
    <Div
      display="flex"
      gap="0.75rem"
      color={color || '#fff'}
      alignItems="center"
    >
      {Icon && (
        <Div width="1.5rem" height="1.5rem" display="flex" alignItems="center">
          <Icon maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
      )}
      <Span fontWeight="500" fontSize="0.875rem" lineHeight="1.1rem">
        {title}
      </Span>
    </Div>
    {activeToggle != undefined && (
      <Div>
        <ToggleButton
          name="x"
          disabled={false}
          onChange={onClick}
          defaultValue={!!activeToggle}
        />
      </Div>
    )}
  </Div>
);

export default ListItem;
