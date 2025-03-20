import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import InputField from '@/components/input-field';
import UploadImage from '@/components/upload-image';

import { SignInForm } from '../sign-in.types';

const CreateProfiileStep: FC = () => {
  const { register } = useFormContext<SignInForm>();

  return (
    <Div
      p="1.5rem"
      width="100%"
      bg="#131419"
      minHeight="10rem"
      borderRadius="0.75rem"
      border="1px solid #24282D"
    >
      <Div gap="1rem" display="flex" color="#E4E7EB" flexDirection="column">
        <P fontSize="1rem" fontWeight="500" textAlign="center">
          Basic Details
        </P>
        <UploadImage />
        <InputField
          tooltipDescription="username"
          placeholder="username"
          {...register('username')}
        />
        <InputField
          tooltipDescription="Profile description"
          placeholder="Description"
          {...register('description')}
          isTextArea
        />
      </Div>
    </Div>
  );
};

export default CreateProfiileStep;
