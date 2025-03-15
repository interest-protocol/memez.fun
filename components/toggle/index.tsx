import { Div, Input, Label, Span } from '@stylin.js/elements';
import { motion } from 'motion/react';
import { ChangeEventHandler, FC, PropsWithChildren } from 'react';

import { CheckedButtonProps } from './toggle.types';

const Motion = motion(Span);

const ToggleButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  onChange,
  disabled,
  defaultValue: active,
  ...props
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (disabled) return;
    onChange?.(event);
  };

  return (
    <Div display="flex" flexWrap="wrap" alignItems="center" role="switch">
      <Label
        ml="0.375rem"
        display="flex"
        position="relative"
        borderRadius="99rem"
        nActive={
          !disabled && {
            boxShadow: `0 0 0 .25rem ${active ? '#000000' : '#000000'}29`,
          }
        }
      >
        <Input
          display="none"
          type="checkbox"
          checked={active}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <Div
          display="flex"
          width="2.75rem"
          height="1.7rem"
          cursor={disabled ? 'not-allowed' : 'pointer'}
          alignItems="center"
          borderRadius="99rem"
          opacity={disabled ? 0.4 : 1}
          transition="all 300ms ease-in-out"
          bg={!active ? '#303238' : '#F5B722'}
          nHover={{
            backgroundImage: active
              ? 'linear-gradient(to bottom, #00000029, #00000029)'
              : 'linear-gradient(to bottom, #30323852, #00000052)',
          }}
        >
          <Motion
            display="flex"
            width="1.25rem"
            height="1.25rem"
            alignItems="center"
            borderRadius="99rem"
            justifyContent="center"
            opacity={disabled ? 0.7 : 1}
            bg={disabled ? (active ? '#131419' : '#D0D0D0') : '#131419'}
            animate={{ x: active ? '1.3rem' : '0.25rem' }}
          />
        </Div>
      </Label>
    </Div>
  );
};

export default ToggleButton;
