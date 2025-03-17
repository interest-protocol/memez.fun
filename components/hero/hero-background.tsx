import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';

import { Ball1SVG, Ball2SVG } from '../svg';
import HeroVector from '../svg/hero-vector';

const HeroBackground = () => {
  const floatAnimation1 = {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
    },
  };

  const floatAnimation2 = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
    },
  };

  const floatAnimation3 = {
    y: [0, -25, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror' as const,
      ease: 'easeInOut',
    },
  };

  return (
    <Div
      zIndex="1"
      width="100%"
      height="100%"
      overflow="hidden"
      position="absolute"
      background="radial-gradient(circle at center, #24282d 50%, rgba(0, 0, 0, 1) 120%)"
    >
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
        }}
        animate={floatAnimation1}
      >
        <Ball1SVG maxHeight="2.856rem" maxWidth="2.856rem" width="2.856rem" />
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
        }}
        animate={floatAnimation2}
      >
        <Ball2SVG maxHeight="1.379rem" maxWidth="1.379rem" width="1.379rem" />
      </motion.div>
      <Div display={['none', 'none', 'none', 'block', 'block']}>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '12vw',
          }}
          animate={floatAnimation3}
        >
          <Ball2SVG maxHeight="1.379rem" maxWidth="1.379rem" width="1.379rem" />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: '15%',
            right: '22vw',
          }}
          animate={floatAnimation1}
        >
          <Ball2SVG maxHeight="1.379rem" maxWidth="1.379rem" width="1.379rem" />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '15vw',
          }}
          animate={floatAnimation3}
        >
          <Ball1SVG maxHeight="2.856rem" maxWidth="2.856rem" width="2.856rem" />
        </motion.div>
      </Div>
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '40%',
        }}
        animate={floatAnimation2}
      >
        <Ball1SVG maxHeight="2.856rem" maxWidth="2.856rem" width="2.856rem" />
      </motion.div>
      <Div
        display={['none', 'none', 'none', 'block', 'block']}
        height={['100%', '100%', '130%', '120%', '110%']}
        width={['100%', '100%', '130%', '100%', '110%']}
      >
        <HeroVector
          width="inherit"
          maxHeight="250%"
          maxWidth="150%"
          height="inherit"
        />
      </Div>
    </Div>
  );
};

export default HeroBackground;
