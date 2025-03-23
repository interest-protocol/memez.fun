import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import InputField from '../../../components/input-field';
import SelectField from '../../../components/select-field';
import { CreateCoinForm } from '../create-coin.types';

const CreateCoinRaiseVestingStep: FC = () => {
  const {
    setValue,
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateCoinForm>();
  const vestingAmount = useWatch({ control, name: 'vesting.coinAmount' });
  const vestingPeriod = useWatch({ control, name: 'vesting.period' });

  const onSelect = (amount: string) => {
    setValue('vesting.coinAmount', amount, { shouldValidate: true });
  };

  const onSelectVestingPeriod = (period: string) => {
    setValue('vesting.period', period, { shouldValidate: true });
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
          {...register('raise.value')}
          tooltipDescription="# Sui to raise"
          status={errors.raise?.value && 'error'}
          supportingText={errors.raise?.value?.message}
        />
        <InputField
          placeholder="% after bonding"
          {...register('raise.percentage')}
          tooltipDescription="% after bonding"
          status={errors.raise?.percentage && 'error'}
          supportingText={errors.raise?.percentage?.message}
        />
        <P fontSize="1rem" fontWeight="500">
          Vesting
        </P>
        <Div>
          <InputField
            placeholder="1"
            tooltipDescription="Period"
            {...register('vesting.quantity')}
            status={errors.vesting?.period && 'error'}
            supportingText={errors.vesting?.period?.message}
            Suffix={
              <SelectField
                isSpecial
                placeholder=""
                currentValue={vestingPeriod}
                onSelect={onSelectVestingPeriod}
                menuList={['Days', 'Week', 'Months']}
              />
            }
          />
          {errors.vesting?.period && (
            <Div color="#9B2C2C" fontSize="0.75rem">
              {errors.vesting?.period?.message}
            </Div>
          )}
        </Div>
        <SelectField
          onSelect={onSelect}
          placeholder="Coin Amount"
          currentValue={vestingAmount}
          tooltipDescription="Coin Amount"
          menuList={['100', '200', '300', '500']}
          status={errors.vesting?.coinAmount && 'error'}
          supportingText={errors.vesting?.coinAmount?.message}
        />
      </Div>
    </Div>
  );
};

export default CreateCoinRaiseVestingStep;
