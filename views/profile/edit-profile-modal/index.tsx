import { yupResolver } from '@hookform/resolvers/yup';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { Div, H1, P } from '@stylin.js/elements';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocalStorage } from 'usehooks-ts';

import InputField from '@/components/input-field';
import UploadImage from '@/components/upload-image';
import { BASE_URL, MEMEZ_FUN_TOKEN_AUTH } from '@/constants';
import { UserDetailsProps } from '@/interface';

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
    setValue,
    formState: { errors },
  } = form;
  const currentAccount = useCurrentAccount();
  const [user, setUser] = useState<UserDetailsProps>();
  const [signedPM] = useLocalStorage<{
    signature: string;
    message: string;
  }>(MEMEZ_FUN_TOKEN_AUTH, { signature: '', message: '' });
  localStorage.setItem('imageURL', user?.avatar ?? '');

  const userPrifleData = () => {
    fetch(`${BASE_URL}/users/${currentAccount?.address}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        message: signedPM?.message,
        signature: signedPM?.signature,
        address: currentAccount?.address ?? '',
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  const updateFields = () => {
    setValue('avatar', user?.avatar ?? '');
    setValue('name', user?.firstName ?? '');
    setValue('username', user?.username ?? '');
    setValue('bio', user?.bio ?? '');
  };

  useEffect(() => {
    if (currentAccount) return userPrifleData();
  }, [currentAccount]);

  useEffect(() => {
    updateFields();
  }, [user]);
  return (
    <FormProvider {...form}>
      <Div maxHeight="90vh" overflow="hidden">
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
              name="avatar"
              status={errors.avatar && 'error'}
              description={errors.avatar?.message}
            />
            <InputField
              placeholder="name"
              {...register('name')}
              tooltipDescription="name"
              status={errors.username && 'error'}
              supportingText={errors.username?.message}
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
              {...register('bio')}
              status={errors.bio && 'error'}
              tooltipDescription="Profile description"
              supportingText={errors.bio?.message}
            />
          </Div>
        </Div>
        <EditProfileModalButton />
      </Div>
    </FormProvider>
  );
};

export default EditProfileModal;
