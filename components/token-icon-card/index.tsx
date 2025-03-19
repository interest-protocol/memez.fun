import { Div, Img } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

import { DottedArrowSVG, VerifiedSVG } from '@/components/svg';
import { getImageColor } from '@/utils';

import { TokenCardIconProps } from './token-icon-card.types';

const TokenCardIcon: FC<TokenCardIconProps> = ({
  imgSrc,
  isCardHovered,
  showCardDetails,
  isMiniDetailsCard,
}) => {
  const [dominantColor, setDominantColor] = useState<string>('#000000');

  useEffect(() => {
    const fetchImageColor = async () => {
      const color = await getImageColor(imgSrc);
      setDominantColor(color);
    };

    fetchImageColor();
  }, [imgSrc]);

  return (
    <Div p="0.5rem">
      <Div
        px="1rem"
        p="0.7rem"
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        background={dominantColor ?? '#24282D'}
        width={isMiniDetailsCard ? '3.875rem' : 'auto'}
        height={isMiniDetailsCard ? '100%' : '15.524rem'}
        borderRadius={isMiniDetailsCard ? '1rem' : '1.3rem'}
      >
        {showCardDetails && (
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
        )}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isCardHovered ? 1 : 0,
            x: isCardHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          style={{
            top: '0.7rem',
            width: '3rem',
            color: '#fff',
            height: '3rem',
            right: '0.7rem',
            display: 'flex',
            fontFamily: 'NDot',
            fontSize: '1.8rem',
            borderRadius: '2rem',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.2rem 0.5rem',
            backgroundColor: '#0000001A',
          }}
        >
          <Div position="absolute" top="-0.2rem" right="0.8rem">
            <DottedArrowSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
          </Div>
          <Div position="absolute" top="0.4rem" right="1.4rem">
            <DottedArrowSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
          </Div>
        </motion.div>
        <Div
          display="flex"
          width="6.25rem"
          alignItems="center"
          justifyContent="center"
          height={isMiniDetailsCard ? 'auto' : '6.25rem'}
        >
          <Img
            src={imgSrc}
            alt="SuiMan"
            width={isMiniDetailsCard ? '2rem' : '100%'}
          />
        </Div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isCardHovered ? 1 : 0,
            y: isCardHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          style={{
            bottom: 0,
            width: '100%',
            display: 'flex',
            color: '#E4E7EB',
            padding: '0 1rem',
            height: '2.25rem',
            fontSize: '0.8rem',
            position: 'absolute',
            alignItems: 'center',
            background: '#1314191A',
            borderBottomLeftRadius: '1.3rem',
            borderBottomRightRadius: '1.3rem',
          }}
        >
          Created by • username
          <Div
            ml="0.3rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <VerifiedSVG maxHeight="0.7rem" maxWidth="0.7rem" width="0.7rem" />
          </Div>
        </motion.div>
      </Div>
    </Div>
  );
};

export default TokenCardIcon;
