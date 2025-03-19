import { Div, H1, Span } from '@stylin.js/elements';
import { useRouter } from 'next/router';
import { FC } from 'react';

import DialogCountdown from '@/components/dialog/dialog-countdown';
import { CheckedSVG } from '@/components/svg';

import Illustration from './illustration';

const CreateCoinSuccess: FC = () => {
  const { push } = useRouter();

  const gotoHome = () => push('/');

  return (
    <>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="2rem"
        pb="10rem"
        position="absolute"
        height="90%"
        width="100%"
      >
        <Div
          width="4.25rem"
          height="4.25rem"
          bg="#F6C853"
          borderRadius="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Div height="4rem" width="4rem" color="#09090B">
            <CheckedSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Div>
        </Div>
        <Div color="#E4E7EB">
          <H1 textAlign="center" mb="0.5rem" fontSize="2rem">
            Memecoin created
          </H1>
          <Span fontSize="0.85rem" textAlign="center">
            We will redirect you automatic to the home in{' '}
            <DialogCountdown timeout={5000} onComplete={gotoHome} /> sec
          </Span>
        </Div>
      </Div>
      <Illustration />
    </>
  );
};

export default CreateCoinSuccess;
