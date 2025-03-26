import { Div, H1, P } from '@stylin.js/elements';
import { FormProvider, useForm } from 'react-hook-form';

import InputField from '@/components/input-field';
import UploadImage from '@/components/upload-image';

import { IEditProfileForm } from './edit-profile-modal.types';
import EditProfileModalButton from './edit-profile-modal-button';

const EditProfileModal = () => {
  const form = useForm<IEditProfileForm>();
  const { register } = form;

  return (
    <FormProvider {...form}>
      <Div>
        <Div
          p="1.5rem"
          bg="#0A090D"
          display="flex"
          color="#fff"
          overflowY="scroll"
          borderRadius="1rem"
          flexDirection="column"
          border="1px solid #24282D"
          className="users-like-modal"
          onClick={(e) => e.stopPropagation()}
          width={['23rem', '28rem', '28rem', '28rem', '28rem']}
        >
          <H1 mb="1rem" fontSize="2rem" textAlign="center" color="#E4E7EB">
            Edit Profile
          </H1>
          <Div gap="1rem" display="flex" color="#E4E7EB" flexDirection="column">
            <P fontSize="1rem" fontWeight="500" textAlign="center">
              Basic Details
            </P>
            <UploadImage name="imageUrl" />
            <InputField
              placeholder="username"
              {...register('username')}
              tooltipDescription="username"
            />
            <InputField
              isTextArea
              placeholder="Description"
              {...register('description')}
              tooltipDescription="Profile description"
            />
          </Div>
        </Div>
        <EditProfileModalButton />
      </Div>
    </FormProvider>
  );
};

export default EditProfileModal;
