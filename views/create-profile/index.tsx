import { Div, H1, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import InputField from '@/components/input-field';
import Layout from '@/components/layout';
import UploadImage from '@/components/upload-image';

import { CreateProfileFormProps } from './create-profile.types';
import CreateProfileButton from './create-profile-button';

const CreateProfile: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateProfileFormProps>();

  return (
    <Layout>
      <Div
        mx="auto"
        minHeight="70vh"
        maxWidth={['90vw', '90vw', '90vw', '33rem']}
      >
        <Div my={['1.25rem', '1.25rem', '1.25rem', '5rem']}>
          <H1
            my="0.5rem"
            color="#E4E7EB"
            fontWeight="500"
            textAlign="center"
            textTransform="capitalize"
            fontSize={['1.5rem', '1.5rem', '1.5rem', '2rem']}
          >
            Create profile
          </H1>
        </Div>
        <Div>
          <Div
            p="1.5rem"
            width="100%"
            bg="#131419"
            minHeight="10rem"
            borderRadius="0.75rem"
            border="1px solid #24282D"
          >
            <Div
              gap="1rem"
              display="flex"
              color="#E4E7EB"
              flexDirection="column"
            >
              <P fontSize="1rem" fontWeight="500" textAlign="center">
                Basic Details
              </P>
              <UploadImage name="imageUrl" />
              <InputField
                placeholder="username"
                {...register('username')}
                tooltipDescription="username"
                status={errors.username && 'error'}
                supportingText={errors.username?.message}
              />
              <InputField
                isTextArea
                placeholder="Description"
                {...register('description')}
                tooltipDescription="Profile description"
                status={errors.description && 'error'}
                supportingText={errors.description?.message}
              />
            </Div>
          </Div>
          <CreateProfileButton />
        </Div>
      </Div>
    </Layout>
  );
};

export default CreateProfile;
