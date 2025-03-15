import { Div } from '@stylin.js/elements';
import { FC, useState } from 'react';

import { CetusSVG } from '@/components/svg';
import { DROPDOWN_DATA } from '@/constants';

import Dropdown from './dropdown';
import InputField from './input-field';
import TokenField from './token-field';

const CreateCoinForm: FC = () => {
  const [period, setPeriod] = useState<string | string[]>('Days');
  const handleFilter = (item: string) => {
    const newItem = DROPDOWN_DATA.filter((label) => label === item);
    setPeriod(newItem);
  };
  return (
    <Div
      gap="0.5rem"
      display="flex"
      width="33.75rem"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <InputField
        type="text"
        placeholder="Coin name"
        tooltipDescription="Coin name"
        onChange={async () => console.log('clicked')}
      />
      <TokenField
        tokenName="Cetus"
        TokenIcon={
          <CetusSVG maxWidth="100%" maxHeight="100%" width="100%rem" />
        }
      />
      <Dropdown
        menuItems={DROPDOWN_DATA.map((item) => item)}
        defaultValue={period}
        onSelect={(period) => handleFilter(period)}
      />
    </Div>
  );
};

export default CreateCoinForm;
