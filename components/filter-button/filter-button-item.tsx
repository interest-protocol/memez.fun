import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { FilterButtonItemProps } from './filter-button.types';

const FilterButtonItem: FC<FilterButtonItemProps> = ({ title }) => {
  return (
    <Div
      p="0.5rem"
      px="1.4rem"
      py="0.7rem"
      cursor="pointer"
      transition="0.3s"
      borderRadius="0.8rem"
      nHover={{ backgroundColor: '#2f343bce' }}
    >
      {title}
    </Div>
  );
};

export default FilterButtonItem;
