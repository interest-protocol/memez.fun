import { Button } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { CreateCoinButtonProps } from './create-coin.types';
import CreateCoinButtonWrapper from './star-wrapper';

const CreateCoinButton: FC<PropsWithChildren<CreateCoinButtonProps>> = ({
  children,
  preffixIcon,
  suffixIcon,
  onClick,
}) => {
  return (
    <Button
      all="unset"
      gap="0.25rem"
      display="flex"
      cursor="pointer"
      onClick={onClick}
      color="#0A090D"
      position="relative"
      className="createCoinButton"
      alignItems="center"
      borderRadius="2rem"
      justifyContent="center"
      transition="all .3s ease-in-out"
      border="1px solid #F5B722"
      py={['0.25rem', '0.25rem', '0.375rem']}
      px={['0.375rem', '0.375rem', '0.5rem']}
      bg="linear-gradient(90deg, #F7D06D 0%, #FC6F34 186.54%)"
      nHover={{
        boxShadow: '5px 5px 5px 0 #FBE9BA',
      }}
    >
      <CreateCoinButtonWrapper />
      {preffixIcon}
      {children}
      {suffixIcon}
    </Button>
  );
};
export default CreateCoinButton;
