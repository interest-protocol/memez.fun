import { Div, Img } from '@stylin.js/elements';
import ColorThief from 'colorthief';
import { FC, useEffect, useState } from 'react';

import { CardIconProps } from './card.types';

const CardIcon: FC<CardIconProps> = ({ imgSrc }) => {
  const [dominantColor, setDominantColor] = useState<string>('#000000');

  const getImageColor = (imgSrc: string) => {
    const img = new Image();
    img.src = imgSrc;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(img);
      setDominantColor(`rgb(${color.join(',')})`);
      console.log('dominantColor', dominantColor);
    };
  };
  useEffect(() => {
    getImageColor(imgSrc);
  }, []);

  return (
    <Div
      p="0.7rem"
      display="flex"
      height="15.524rem"
      position="relative"
      alignItems="center"
      borderRadius="1.3rem"
      justifyContent="center"
      background={dominantColor ?? 'red'}
    >
      <Div
        py="0.2rem"
        px="0.8rem"
        color="#fff"
        top="0.7rem"
        width="4rem"
        left="0.7rem"
        display="flex"
        fontFamily="NDot"
        fontSize="1.8rem"
        borderRadius="2rem"
        alignItems="center"
        position="absolute"
        justifyContent="center"
        backgroundColor="#0000001A"
      >
        02
      </Div>
      <Div width="6.25rem" height="6.25rem">
        <Img src={imgSrc} alt="SuiMan" width="100%" />
      </Div>
    </Div>
  );
};

export default CardIcon;
