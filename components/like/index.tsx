import { Div, P } from '@stylin.js/elements';
import { FC } from 'react';

import { FilledHeartSVG, HeartSVG } from '@/components/svg';

import { LikeProps } from './like.types';

const Like: FC<LikeProps> = ({ isLiked, onClick, invertOrder }) => {
  return (
    <Div
      gap="0.4rem"
      display="flex"
      color="#F6C853"
      alignItems="center"
      flexDirection={invertOrder ? 'row-reverse' : 'row'}
    >
      <P fontSize="0.8rem">000k</P>
      <Div
        width="2rem"
        bg="#303238"
        height="2rem"
        display="flex"
        cursor="pointer"
        onClick={onClick}
        transition="0.3s"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        nHover={{
          backgroundColor: '#131419',
        }}
      >
        {!isLiked ? (
          <HeartSVG maxHeight="1.2rem" maxWidth="1.2rem" width="1.2rem" />
        ) : (
          <FilledHeartSVG maxHeight="1.2rem" maxWidth="1.2rem" width="1.2rem" />
        )}
      </Div>
    </Div>
  );
};

export default Like;
