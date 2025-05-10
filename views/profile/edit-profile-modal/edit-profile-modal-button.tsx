import { Button, Div, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import DialogCountdown from '@/components/dialog/dialog-countdown';
import { LoaderSVG } from '@/components/svg';
import { Routes, RoutesEnum } from '@/constants';
import { useDialog } from '@/hooks/use-dialog';
import { CreateProfileFormProps } from '@/interface';

const EditProfileModalButton: FC = () => {
  const { trigger } = useFormContext<CreateProfileFormProps>();

  const { dialog, handleClose } = useDialog();
  const { push } = useRouter();
  const handleCreateProfile = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          handleClose();
          resolve('success');
          return;
        }
        reject('Error');
      }, 1000);
    });
  };

  const handleEditProfiel = async () => {
    const isValid = await trigger();

    if (!isValid) return;

    await dialog.promise(handleCreateProfile(), {
      success: () => ({
        title: 'Profile Edited',
        message: 'Profile successfully edited',
        button: (
          <Button
            all="unset"
            py="1rem"
            px="1.5rem"
            flex="2"
            bg="#F5B722"
            color="#000000"
            cursor="pointer"
            textAlign="center"
            borderRadius="1rem"
          >
            You will&apos;be redirect to profile page
            <DialogCountdown
              timeout={5000}
              onComplete={() => {
                handleClose();
                push(Routes[RoutesEnum.Profile]);
              }}
            />{' '}
            sec
          </Button>
        ),
        ghostButton: (
          <Button
            all="unset"
            color="#F5B722"
            cursor="pointer"
            textAlign="center"
            fontSize="0.825rem"
            onClick={() => {
              handleClose();
              push(Routes[RoutesEnum.Home]);
            }}
            nHover={{ textDecoration: 'underline' }}
          >
            Go to home page
          </Button>
        ),
      }),
      loading: () => ({
        Icon: <LoaderSVG />,
        title: 'Editing...',
        message: 'Editing an account...',
      }),
      error: (e) => ({
        title: 'Oops! You can not edit this profile!',
        button: { label: 'Try again', onClick: handleClose },
        message: (
          e.message || 'Make sure you fill every field correctly and try again.'
        ).replace('Invariant failed: ', ''),
        ghostButton: {
          label: 'Do not want to try again!',
          onClick: handleClose,
        },
      }),
    });
  };

  return (
    <Div mt="2.5rem" display="flex" gap="0.5rem" justifyContent="center">
      <Button
        all="unset"
        py="0.4rem"
        bg="#F6C853"
        display="flex"
        width="7.5rem"
        cursor="pointer"
        color="#0A090D"
        borderRadius="100px"
        transition="all .3s"
        justifyContent="center"
        border="1px solid #F6C853"
        onClick={async () => await handleEditProfiel()}
        nHover={{
          transform: 'scale(1.05)',
        }}
      >
        <Span>Save</Span>
      </Button>
    </Div>
  );
};

export default EditProfileModalButton;
