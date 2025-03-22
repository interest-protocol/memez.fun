import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import unikey from 'unikey';

import InputField from '../../../components/input-field';
import CreateCoinFormImage from '../../../components/upload-image';
import DexCard from '../components/dex-card';
import SocialCard from '../components/social-card';
import { CreateCoinDexData } from '../create-coin.data';
import { CreateCoinForm } from '../create-coin.types';

const CreateCoinReviewStep: FC = () => {
  const { register, getValues, setValue, control } =
    useFormContext<CreateCoinForm>();
  const website = useWatch({ control, name: 'website' });
  const twitter = useWatch({ control, name: 'twitter' });
  const telegram = useWatch({ control, name: 'telegram' });

  const hasSocialMedia = website && twitter && telegram;

  return (
    <Div
      p="1.5rem"
      width="100%"
      minHeight="10rem"
      bg="#131419"
      border="1px solid #24282D"
      borderRadius="0.75rem"
      color="#E4E7EB"
    >
      <Div gap="1rem" display="flex" color="#E4E7EB" flexDirection="column">
        <P fontSize="0.875rem" fontWeight="500" textAlign="center">
          Avatar
        </P>
        <CreateCoinFormImage isReview />

        <P fontSize="0.875rem" fontWeight="500" color="#E4E7EB">
          Details
        </P>
        <InputField
          tooltipDescription="Memecoin name"
          placeholder="Coin name"
          disabled={true}
          value={getValues('name')}
        />
        <InputField
          tooltipDescription="Supply"
          placeholder="Supply"
          disabled={true}
          value={getValues('supply')}
        />
        <InputField
          tooltipDescription="Quote Coin"
          placeholder="Quote Coin"
          disabled={true}
          value={getValues('quoteCoin')}
        />
        <InputField
          isTextArea
          disabled={true}
          placeholder="Description"
          {...register('description')}
          tooltipDescription="Description to this memecoin"
        />
        <P fontSize="0.875rem" fontWeight="500" color="#E4E7EB">
          Dex
        </P>
        {CreateCoinDexData.filter((dex) => dex.dexId == getValues('dex')).map(
          (dex) => (
            <DexCard
              key={unikey()}
              dexName={dex.dexName}
              imageUrl={dex.imageUrl}
              isReview
            />
          )
        )}
        <P fontSize="0.875rem" fontWeight="500" color="#E4E7EB">
          Raise & Vesting
        </P>
        <InputField
          tooltipDescription="Vesting Period"
          placeholder="Vesting Period"
          disabled={true}
          value={`${getValues('vesting.quantity')} ${getValues('vesting.period')}`}
        />
        <InputField
          disabled={true}
          placeholder="Amount to raise"
          value={getValues('raise.value')}
          tooltipDescription="Amount to raise"
        />
        <InputField
          disabled={true}
          placeholder="% of meme coin"
          tooltipDescription="% of meme coin"
          value={`${getValues('raise.percentage')}%`}
        />
        {hasSocialMedia && (
          <>
            <P fontSize="0.875rem" fontWeight="500" color="#E4E7EB">
              Social
            </P>
            <Div
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr 1fr "
              gap="1rem"
            >
              {website && (
                <SocialCard
                  title="website"
                  onClose={() => {
                    setValue('website', '');
                  }}
                />
              )}
              {twitter && (
                <SocialCard
                  title="twitter"
                  onClose={() => {
                    setValue('twitter', '');
                  }}
                />
              )}
              {telegram && (
                <SocialCard
                  title="telegram"
                  onClose={() => {
                    setValue('telegram', '');
                  }}
                />
              )}
            </Div>
          </>
        )}
      </Div>
    </Div>
  );
};

export default CreateCoinReviewStep;
