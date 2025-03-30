import { yupResolver } from '@hookform/resolvers/yup';
import { Div, H1, P } from '@stylin.js/elements';
import { FormProvider, useForm } from 'react-hook-form';

import InputField from '@/components/input-field';
import UploadImage from '@/components/upload-image';

import { editProfileValidationSchema } from './edit-profile.validations';
import { IEditProfileForm } from './edit-profile-modal.types';
import EditProfileModalButton from './edit-profile-modal-button';

const EditProfileModal = () => {
  const form = useForm<IEditProfileForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(editProfileValidationSchema),
  });
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <FormProvider {...form}>
      <Div maxHeight="90vh" overflowY="auto">
        <Div
          p="1.5rem"
          bg="#131419"
          display="flex"
          color="#fff"
          borderRadius="1rem"
          flexDirection="column"
          border="1px solid #24282D"
          className="users-like-modal"
          onClick={(e) => e.stopPropagation()}
          width={['22rem', '28rem', '28rem', '28rem', '28rem']}
        >
          <H1 mb="1rem" fontSize="2rem" textAlign="center" color="#E4E7EB">
            Edit Profile
          </H1>
          <Div gap="1rem" display="flex" color="#E4E7EB" flexDirection="column">
            <P fontSize="1rem" fontWeight="500" textAlign="center">
              Basic Details
            </P>
            <UploadImage
              name="imageUrl"
              status={errors.imageUrl && 'error'}
              description={errors.imageUrl?.message}
            />
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
              status={errors.description && 'error'}
              tooltipDescription="Profile description"
              supportingText={errors.description?.message}
            />
          </Div>
        </Div>
        <EditProfileModalButton />
      </Div>
    </FormProvider>
  );
};

export default EditProfileModal;
