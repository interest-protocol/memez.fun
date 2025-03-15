import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const DetailsCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Div
      p="1.2rem"
      width="100%"
      height="13rem"
      bg="#131419"
      display="flex"
      transition="0.3s"
      borderRadius="1.5rem"
      flexDirection="column"
      border="1px solid #24282D"
      justifyContent="space-between"
    >
      {children}
    </Div>
  );
};

export default DetailsCard;
