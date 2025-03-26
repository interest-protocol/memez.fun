import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import InputField from '../../../components/input-field';
import UploadImage from '../../../components/upload-image';
import DexCard from '../components/dex-card';
import { CreateCoinDexData } from '../create-coin.data';
import { CreateCoinForm } from '../create-coin.types';

const CreateCoinDetailsStep: FC = () => {
  const {
    setValue,
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateCoinForm>();
  const currentDex = useWatch({ control, name: 'dex' });

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
        <P fontSize="1rem" fontWeight="500" textAlign="center">
          Basic Details
        </P>
        <UploadImage name="imageUrl" />
        <InputField
          placeholder="Coin name"
          status={errors.name && 'error'}
          tooltipDescription="Memecoin name"
          supportingText={errors.name?.message}
          {...register('name')}
        />
        <InputField
          isTextArea
          placeholder="Description"
          status={errors.description && 'error'}
          supportingText={errors.description?.message}
          tooltipDescription="Description to this memecoin"
          {...register('description')}
        />
        <Div>
          <P fontSize="1rem" fontWeight="500">
            Dex
          </P>
          <Div
            display="grid"
            gridTemplateColumns={['1fr', '1fr 1fr']}
            mt="1rem"
            gap="1rem"
          >
            {CreateCoinDexData.map((dex) => (
              <DexCard
                key={unikey()}
                dexName={dex.dexName}
                imageUrl={dex.imageUrl}
                onClick={() => {
                  setValue('dex', dex.dexId);
                }}
                isSelected={dex.dexId == currentDex}
              />
            ))}
            {errors.dex && (
              <Div color="#9B2C2C" fontSize="0.75rem">
                {errors.dex?.message}
              </Div>
            )}
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default CreateCoinDetailsStep;
