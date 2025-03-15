import { Div, H1 } from '@stylin.js/elements';
import { not } from 'ramda';
import { FC, PropsWithRef, useState } from 'react';

import { RadioCircleSVG } from '@/components/svg';

import { TokenFieldProps } from '../create-coin.types';

export const TokenField: FC<PropsWithRef<TokenFieldProps>> = ({
  disabled,
  TokenIcon,
  tokenName,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleOnClick = () => {
    setSelected(not);
  };
  return (
    <Div
      py=".5rem"
      px=".5rem"
      width="100%"
      bg="#24282D"
      display="flex"
      height="2.5rem"
      borderRadius="1rem"
      minWidth="14.875rem"
      alignItems="center"
      justifyContent="center"
      onClick={handleOnClick}
      opacity={disabled ? 0.32 : 1}
      aria-label="tokenFieldHolder"
      cursor={disabled ? 'not-allowed' : 'default'}
      border={selected ? '1px solid #494C54' : 'none'}
    >
      <Div
        gap=".5rem"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        transition="all 300ms ease-in-out"
      >
        <Div
          gap=".5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div width="2rem" height="2rem" borderRadius="1rem">
            {TokenIcon}
          </Div>
          <H1 color="#E4E7EB" fontSize="12pt" fontWeight="100">
            {tokenName}
          </H1>
        </Div>
        <Div width="1.5rem" height="1.5rem">
          <RadioCircleSVG
            maxHeight="100%"
            maxWidth="100%"
            width="100%"
            isChecked={selected}
          />
        </Div>
      </Div>
    </Div>
  );
};
export default TokenField;
