import { Button, Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, useId, useState } from 'react';

import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import { ArrowDownSVG, FiltersSVG } from '../svg';
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
        bg="#24282D"
        border="none"
        display="flex"
        color="#E4E7EB"
        height="2.75rem"
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        onClick={handleOnClick}
        width={['1.5rem', '1.5rem', '1.5rem', 'auto', 'auto']}
        borderRadius={['2rem', '2rem', '1.5rem', '1.5rem', '1.5rem']}
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
          <FiltersSVG maxHeight="0.9rem" maxWidth="0.9rem" width="0.9rem" />
        </Div>
      </Button>

      {isDropdownOpen && (
        <div ref={dropdownRef}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
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
          </motion.div>
        </div>
      )}
    </Div>
  );
};

export default FilterButton;
