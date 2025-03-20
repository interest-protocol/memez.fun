import { Div, Input, P } from '@stylin.js/elements';
import { FC } from 'react';

import { SuiLogoSVG } from '@/components/svg';

import { TokenFieldProps } from './token-field.types';

const TokenField: FC<TokenFieldProps> = ({ type, percentage }) => {
  return (
    <Div gap="1rem" width="100%" display="flex" flexDirection="column">
      <Div
        gap="0.5rem"
        zIndex="2"
        width="100%"
        p="1.063rem"
        color="white"
        bg="#24282D"
        display="flex"
        height="5.25rem"
        alignItems="center"
        borderRadius="0.75rem"
        justifyContent="space-between"
      >
        <Input
          placeholder="Pay"
          all="unset"
          flex="1"
          fontSize="1rem"
          color="#E4E7EB"
          nPlaceholder={{ color: '#90939D' }}
        />
        <Div
          display="flex"
          width="1.66rem"
          height="1.66rem"
          alignItems="center"
          justifyContent="center"
        >
          <Div width="100%" maxWidth="1.5rem" maxHeight="1.5rem">
            <SuiLogoSVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
          </Div>
        </Div>
      </Div>
      <Div
        width="100%"
        display="flex"
        color="#90939D"
        fontSize="0.875rem"
        justifyContent={type === 'percentage' ? 'space-between' : 'flex-start'}
      >
        {type === 'percentage' && <P>Percentage</P>}
        {type === 'slippage' && <P>Max slippage: {percentage}%</P>}
        {type === 'percentage' && <P>{percentage}%</P>}
      </Div>
    </Div>
  );
};

export default TokenField;
