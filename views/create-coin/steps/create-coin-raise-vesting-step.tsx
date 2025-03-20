import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import InputField from '../../../components/input-field';
import SelectField from '../../../components/select-field';
import { CreateCoinForm } from '../create-coin.types';

const CreateCoinRaiseVestingStep: FC = () => {
  const { setValue, register, control } = useFormContext<CreateCoinForm>();
  const vestingAmount = useWatch({ control, name: 'vesting.coinAmount' });
  const vestingPeriod = useWatch({ control, name: 'vesting.period' });

  const onSelect = (amount: string) => {
    setValue('vesting.coinAmount', amount);
  };

  const onSelectVestingPeriod = (period: string) => {
    setValue('vesting.period', period);
  };

  return (
    <Div
      p="1.5rem"
      width="100%"
      minHeight="10rem"
      bg="#131419"
      border="1px solid #24282D"
      borderRadius="0.75rem"
    >
      <Div gap="1rem" display="flex" color="#E4E7EB" flexDirection="column">
        <P fontSize="1rem" fontWeight="500">
          Raise
        </P>

        <InputField
          placeholder="# Sui to raise"
          tooltipDescription="# Sui to raise"
          {...register('raise.value')}
        />
        <InputField
          placeholder="% after bonding"
          tooltipDescription="% after bonding"
          {...register('raise.percentage')}
        />
        <P fontSize="1rem" fontWeight="500">
          Vesting
        </P>
        <InputField
          placeholder="1"
          tooltipDescription="Period"
          {...register('vesting.quantity')}
          Suffix={
            <SelectField
              isSpecial
              placeholder=""
              onSelect={onSelectVestingPeriod}
              currentValue={vestingPeriod}
              menuList={['Days', 'Week', 'Months']}
            />
          }
        />
        <SelectField
          placeholder="Coin Amount"
          tooltipDescription="Coin Amount"
          onSelect={onSelect}
          currentValue={vestingAmount}
          menuList={['100', '200', '300', '500']}
        />
      </Div>
    </Div>
  );
};

export default CreateCoinRaiseVestingStep;
