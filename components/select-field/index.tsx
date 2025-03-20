import { Button, Div, Span } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, useId, useState } from 'react';
import unikey from 'unikey';

import { ArrowDownCircleSVG, ArrowDownSVG, CheckedSVG } from '@/components/svg';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import { SelectFieldProps } from './select-fields.types';

const SelectField: FC<SelectFieldProps> = ({
  onSelect,
  menuList,
  isSpecial,
  placeholder,
  currentValue,
  tooltipDescription,
}) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const boxId = useId();

  const closeDropdown = (event: MouseEvent | TouchEvent) => {
    const path = event?.composedPath();

    if (
      path?.some((node: EventTarget) => {
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
    <Div id={boxId} position="relative" width="100%" className="tooltip">
      <Button
        py="1rem"
        px={isSpecial ? '0.25rem' : '1rem'}
        bg={isSpecial ? '#303238' : '#24282D'}
        width="100%"
        border="none"
        display="flex"
        color="#E4E7EB"
        height={isSpecial ? '2rem' : '2.5rem'}
        cursor="pointer"
        alignItems="center"
        borderRadius="0.75rem"
        onClick={handleOnClick}
        justifyContent="center"
      >
        <Div
          gap="0.5rem"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          color={currentValue ? 'inherit' : '#90939D'}
        >
          <Span fontSize="0.75rem" textTransform="capitalize">
            {currentValue ? currentValue : placeholder}
          </Span>
          <Div
            transition="transform 500ms ease-in-out"
            transform={isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          >
            {isSpecial ? (
              <ArrowDownCircleSVG
                maxHeight="auto"
                maxWidth="1.25rem"
                width="1.25rem"
              />
            ) : (
              <ArrowDownSVG
                maxHeight="0.9rem"
                maxWidth="0.9rem"
                width="0.9rem"
              />
            )}
          </Div>
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
              right="0"
              top="3rem"
              zIndex={50}
              bg="#24282D"
              display="flex"
              minWidth="12rem"
              position="absolute"
              flexDirection="column"
              borderRadius="0.75rem"
              border="1px solid #494C54"
            >
              {menuList.map((menu) => (
                <Div
                  px="1rem"
                  py="0.5rem"
                  key={unikey()}
                  fontSize="1rem"
                  display="flex"
                  justifyContent="space-between"
                  cursor="pointer"
                  transition="0.3s"
                  borderRadius="0.75rem"
                  color={
                    currentValue?.toLowerCase() === menu.toLowerCase()
                      ? '#F6C853'
                      : '#E4E7EB'
                  }
                  onClick={() => {
                    onSelect(menu);
                    handleOnClick();
                  }}
                  nHover={{ backgroundColor: '#2f343bce' }}
                >
                  {menu}
                  {currentValue?.toLowerCase() === menu.toLowerCase() && (
                    <Div width="1.5rem" height="1.5rem" color="#F6C853">
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
          </motion.div>
        </div>
      )}
      {tooltipDescription && (
        <Span className={`tooltiptext`}>{tooltipDescription}</Span>
      )}
    </Div>
  );
};

export default SelectField;
