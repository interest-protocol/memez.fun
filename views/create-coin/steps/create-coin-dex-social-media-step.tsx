import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import InputField from '../../../components/input-field';
import SelectField from '../../../components/select-field';
import { CreateCoinForm } from '../create-coin.types';

const CreateCoinDexSocialMediaStep: FC = () => {
  const {
    setValue,
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateCoinForm>();
  const quoteCoin = useWatch({ control, name: 'quoteCoin' });

  const onQuoteCoinSelect = (selected: string) => {
    setValue('quoteCoin', selected, { shouldValidate: true });
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
          Quote Coin
        </P>
        <SelectField
          placeholder="Coin"
          onSelect={onQuoteCoinSelect}
          currentValue={quoteCoin}
          status={errors.quoteCoin && 'error'}
          supportingText={errors.quoteCoin?.message}
          menuList={['Coin 1', 'Coin 2', 'Coin 3', 'Coin 4']}
        />
        <P fontSize="1rem" fontWeight="500">
          Supply
        </P>
        <InputField
          placeholder="Supply"
          {...register('supply')}
          status={errors.supply && 'error'}
          supportingText={errors.supply?.message}
        />
        <P fontSize="1rem" fontWeight="500">
          Social
        </P>
        <InputField
          placeholder="Website"
          {...register('website')}
          status={errors.website && 'error'}
          tooltipDescription="Type your website"
          supportingText={errors.website?.message}
        />
        <InputField
          placeholder="Telegram"
          status={errors.telegram && 'error'}
          tooltipDescription="Type your telegram"
          supportingText={errors.telegram?.message}
          {...register('telegram')}
        />
        <InputField
          placeholder="Twitter"
          status={errors.twitter && 'error'}
          tooltipDescription="Type your website"
          supportingText={errors.twitter?.message}
          {...register('twitter')}
        />
      </Div>
    </Div>
  );
};

export default CreateCoinDexSocialMediaStep;
