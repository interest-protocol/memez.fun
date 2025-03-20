import { Div, H1, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { CreateCoinHeaderData } from './create-coin.data';
import { CreateCoinForm } from './create-coin.types';

const CreateCoinHeader: FC = () => {
  const { control } = useFormContext<CreateCoinForm>();

  const currentStep = useWatch({ control, name: 'step' });

  return (
    <>
      <Div
        mb={['1.25rem', '1.25rem', '1.25rem', '5rem']}
        mt="2.625rem"
        display="flex"
        justifyContent="center"
      >
        {CreateCoinHeaderData.map((_, index) => (
          <Div
            key={index}
            width="2.75rem"
            height="0.25rem"
            marginRight="0.5rem"
            borderRadius="100px"
            nLastChild={{ marginRight: 0 }}
            bg={currentStep == index ? '#F6C853' : '#303238'}
            borderColor={currentStep - 1 !== index ? '#F6C853' : 'transparent'}
          />
        ))}
      </Div>
      <Div mb="2.5rem">
        <H1
          mb="0.5rem"
          fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          color="#E4E7EB"
          fontWeight="500"
          textAlign="center"
          textTransform="capitalize"
        >
          {CreateCoinHeaderData[currentStep].title}
        </H1>
        {CreateCoinHeaderData[currentStep].description && (
          <P
            fontSize="1rem"
            color="#90939D"
            textAlign="center"
            lineHeight="1.5rem"
          >
            {CreateCoinHeaderData[currentStep].description}
          </P>
        )}
      </Div>
    </>
  );
};

export default CreateCoinHeader;
