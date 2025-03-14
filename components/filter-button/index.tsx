import { Button, Div } from '@stylin.js/elements';
import { FC, useId, useState } from 'react';

import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import { ArrowDownSVG, SearchSVG } from '../svg';
import FilterButtonItem from './filter-button-item';

const FilterButton: FC = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const boxId = useId();

  const closeDropdown = (event: MouseEvent | TouchEvent) => {
    const path = event.composedPath();

    if (
      path.some((node: EventTarget) => {
        const element = node as HTMLElement;
        return element?.id === boxId;
      })
    ) {
      return;
    }

    setIsDropDownOpen(false);
  };

  const handleOnClick = () => {
    setIsDropDownOpen(!isDropdownOpen);
  };

  const dropdownRef = useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  return (
    <Div id={boxId} position="relative">
      <Button
        mb="0.5rem"
        px="1.4rem"
        border="none"
        bg="#24282D"
        cursor="pointer"
        color="#E4E7EB"
        onClick={handleOnClick}
        width={['1.5rem', '1.5rem', 'auto', 'auto', 'auto']}
        borderRadius={['50%', '50%', '1.5rem', '1.5rem', '1.5rem']}
        height={['1.5rem', '1.5rem', '2.75rem', '2.75rem', '2.75rem']}
      >
        <Div
          gap="1rem"
          alignItems="center"
          justifyContent="center"
          display={['none', 'none', 'none', 'flex', 'flex']}
        >
          Relevance
          <ArrowDownSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
        </Div>
        <Div display={['flex', 'flex', 'flex', 'none', 'none']}>
          <SearchSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
        </Div>
      </Button>
      {isDropdownOpen && (
        <div ref={dropdownRef}>
          <Div
            zIndex="5"
            bg="#24282D"
            width="12rem"
            display="flex"
            color="#E4E7EB"
            borderRadius="1rem"
            position="absolute"
            flexDirection="column"
          >
            <FilterButtonItem title="item" />
            <FilterButtonItem title="item" />
            <FilterButtonItem title="item" />
            <FilterButtonItem title="item" />
            <FilterButtonItem title="item" />
          </Div>
        </div>
      )}
    </Div>
  );
};

export default FilterButton;
