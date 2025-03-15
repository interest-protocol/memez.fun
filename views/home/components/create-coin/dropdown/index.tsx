import { Button, Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import {
  ArrowDownCircleSVG,
  ArrowUpCircleSVG,
  CheckedSVG,
} from '@/components/svg';

import { DropdownProps } from '../create-coin.types';

const Dropdown: FC<DropdownProps> = ({ onSelect, defaultValue, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItem = (value: string) => {
    onSelect?.(value);
    setSelectedItem(value);
    setIsDropdownOpen(false);
  };
  return (
    <Div position="relative" width="100%">
      <Button
        p="0.5rem"
        color="#fff"
        width="100%"
        border="none"
        display="flex"
        outline="none"
        height="2.5rem"
        fontSize="1rem"
        cursor="pointer"
        borderRadius="1rem"
        alignItems="center"
        background="#24282D"
        textTransform="capitalize"
        justifyContent="space-between"
        textAlign={['left', 'left', 'left', 'right']}
        onClick={toggleDropdown}
      >
        {defaultValue}
        <Div
          display="flex"
          height="1.25rem"
          width="1.25rem"
          alignItems="center"
          justifyContent="center"
        >
          {isDropdownOpen ? (
            <ArrowUpCircleSVG maxHeight="100%" maxWidth="100%" width="100%" />
          ) : (
            <ArrowDownCircleSVG maxHeight="100%" maxWidth="100%" width="100%" />
          )}
        </Div>
      </Button>
      {isDropdownOpen && (
        <Div
          my="0.5rem"
          zIndex={999}
          bg="#24282D"
          width="100%"
          overflowY="auto"
          position="absolute"
          borderRadius="1rem"
        >
          {menuItems.map((value: string) => (
            <Div
              p="1rem"
              key={v4()}
              height="3rem"
              width="100%"
              display="flex"
              fontSize="1rem"
              alignItems="flex-start"
              textTransform="capitalize"
              justifyContent="space-between"
              color={selectedItem === value ? '#F6C853' : '#fff'}
              nHover={{
                opacity: 1,
                transition: 'all 0.5s ease-in-out',
              }}
              onClick={() => handleMenuItem(value)}
            >
              {value}
              {selectedItem === value && (
                <Div width="1.5rem" height="1.5rem">
                  <CheckedSVG
                    maxHeight="1.5rem"
                    maxWidth="1.5rem"
                    width="1.5rem"
                  />
                </Div>
              )}
            </Div>
          ))}
        </Div>
      )}
    </Div>
  );
};

export default Dropdown;
