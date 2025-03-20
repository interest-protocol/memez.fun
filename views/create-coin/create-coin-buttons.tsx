import { Button, Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { LoaderSVG } from '@/components/svg';
import { useDialog } from '@/hooks/use-dialog';

import { CreateCoinForm, CreateCoinStepEnum } from './create-coin.types';

const CreateCoinButtons: FC = () => {
  const { control, setValue } = useFormContext<CreateCoinForm>();
  const { dialog, handleClose } = useDialog();

  const currentStep = useWatch({ control, name: 'step' });

  const CreateCoin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          handleClose();
          setValue('success', true);
          return;
        }
        reject('Errp');
      }, 1000);
    });
  };

  const handleCreateCoin = async () => {
    await dialog.promise(CreateCoin(), {
      success: () => ({
        title: 'Coin Created',
        button: {
          label: 'See on explorer',
        },
        message:
          'Congratulations! Your coin was successfully created. Now you can power your coin around the community',
        ghostButton: {
          label: 'Continue browsing',
          onClick: handleClose,
        },
      }),
      loading: () => ({
        Icon: <LoaderSVG />,
        title: 'Creating...',
        message:
          'Accept the transaction on the your wallet pop up, we will let you know when it is done.',
      }),
      error: (e) => ({
        title: 'Oops! You could not create!',
        button: { label: 'Try again', onClick: handleCreateCoin },
        message: (
          e.message ||
          'Try to refresh the page, double-check your inputs, or reconnect your wallet.'
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
      {currentStep != CreateCoinStepEnum.CoinDetails && (
        <Button
          all="unset"
          py="0.4rem"
          width="7.5rem"
          display="flex"
          color="#F6C853"
          cursor="pointer"
          transition="all .3s"
          borderRadius="100px"
          justifyContent="center"
          onClick={() => setValue('step', currentStep - 1)}
          border="1px solid #F6C853"
          nHover={{
            transform: 'scale(1.05)',
          }}
        >
          <Span>Back</Span>
        </Button>
      )}
      <Button
        all="unset"
        py="0.4rem"
        bg="#F6C853"
        display="flex"
        width="7.5rem"
        cursor="pointer"
        borderRadius="100px"
        transition="all .3s"
        justifyContent="center"
        border="1px solid #F6C853"
        onClick={async () =>
          currentStep == CreateCoinStepEnum.Review
            ? await handleCreateCoin()
            : setValue('step', currentStep + 1)
        }
        nHover={{
          transform: 'scale(1.05)',
        }}
      >
        <Span>
          {currentStep == CreateCoinStepEnum.Review ? 'Confirm' : 'Next'}
        </Span>
      </Button>
    </Div>
  );
};

export default CreateCoinButtons;
