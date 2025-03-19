import { Div, H4 } from '@stylin.js/elements';
import { FC } from 'react';

import { CloseSVG } from '@/components/svg';

import { TagProps } from './tag.types';

const Tag: FC<TagProps> = ({ label, onClose }) => {
  return (
    <Div
      display="flex"
      bg="#24282D"
      pb="0.5rem"
      px="0.3rem"
      width="5.5rem"
      height="2.5rem"
      alignItems="center"
      flexDirection="column"
      borderRadius="0.75rem"
      justifyContent="center"
    >
      <Div
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Div width="0.8rem" height="0.8rem" onClick={onClose}>
          <CloseSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
      </Div>
      <H4
        color="#fff"
        width="100%"
        fontWeight="100"
        textAlign="center"
        fontSize="0.875rem"
        lineHeight="1.375rem"
        textTransform="capitalize"
      >
        {label}
      </H4>
    </Div>
  );
};
export default Tag;
