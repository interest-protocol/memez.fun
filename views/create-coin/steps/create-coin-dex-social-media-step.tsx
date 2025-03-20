import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import InputField from '../components/input-field';
import SelectField from '../components/select-field';
import { CreateCoinForm } from '../create-coin.types';

const CreateCoinDexSocialMediaStep: FC = () => {
  const { setValue, register, control } = useFormContext<CreateCoinForm>();
  const quoteCoin = useWatch({ control, name: 'quoteCoin' });

  const onSelect = (selected: string) => {
    setValue('quoteCoin', selected);
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
          onSelect={onSelect}
          currentValue={quoteCoin}
          menuList={['Coin 1', 'Coin 2', 'Coin 3', 'Coin 4']}
        />
        <P fontSize="1rem" fontWeight="500">
          Supply
        </P>
        <InputField placeholder="Supply" {...register('supply')} />
        <P fontSize="1rem" fontWeight="500">
          Social
        </P>
        <InputField
          placeholder="Website"
          tooltipDescription="Type your website"
          {...register('website')}
        />
        <InputField
          placeholder="Telegram"
          tooltipDescription="Type your telegram"
          {...register('telegram')}
        />
        <InputField
          placeholder="Twitter"
          tooltipDescription="Type your website"
          {...register('twitter')}
        />
      </Div>
    </Div>
  );
};

export default CreateCoinDexSocialMediaStep;
