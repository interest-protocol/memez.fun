import { Div } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import {
  CircleCompletedSVG,
  CircleHalfSVG,
  CircleQuarterSVG,
  GreenActionCardBackgroundSVG,
} from '@/components/svg';

import TokenField from '../token-field';
import { ACTIVE_COLORS, BACKGROUND_SVGS, BUTTONS } from './action.data';
import ActionTabsCard from './action-card-tabs';

const ActionCard = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'burn'>('buy');

  const handleactiveTabSelction = (type: 'buy' | 'sell' | 'burn') => {
    setActiveTab(String(type).toLowerCase() as 'buy' | 'sell' | 'burn');
  };

  const BackgroundSVG =
    BACKGROUND_SVGS[activeTab] || GreenActionCardBackgroundSVG;

  const CardButton = BUTTONS[activeTab];

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        height: '39.563rem',
        position: 'relative',
        borderRadius: '1.5rem',
        backgroundColor: '#131419',
        border: '1px solid #24282D',
      }}
      animate={{
        background: `linear-gradient(180deg, #131419 80%, ${ACTIVE_COLORS[activeTab]} 200%)`,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          exit={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            top: 0,
            left: 0,
            zIndex: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <Div
            maxHeight="25rem"
            maxWidth="11.688rem"
            height={['12rem', '23rem', '23rem', '12rem', '23rem']}
            width={['6rem', '11.688rem', '11.688rem', '5.688rem', '11.688rem']}
          >
            <BackgroundSVG
              width="100%"
              height="100%"
              maxWidth="100%"
              maxHeight="100%"
            />
          </Div>
        </motion.div>
      </AnimatePresence>
      <Div
        px="4rem"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Div
          py="3rem"
          zIndex="2"
          display="flex"
          position="relative"
          justifyContent="center"
        >
          <ActionTabsCard
            activeTab={activeTab}
            activeColor={ACTIVE_COLORS[activeTab]}
            setActiveTab={handleactiveTabSelction}
          />
        </Div>
        <Div
          zIndex="2"
          display="flex"
          position="relative"
          flexDirection="column"
        >
          <Div
            py="1rem"
            zIndex="2"
            gap="0.5rem"
            display="flex"
            position="relative"
            justifyContent="flex-end"
          >
            <Div cursor="pointer">
              <CircleQuarterSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
            </Div>
            <Div cursor="pointer">
              <CircleHalfSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
            </Div>
            <Div cursor="pointer">
              <CircleCompletedSVG
                width="0.875rem"
                maxWidth="0.875rem"
                maxHeight="0.875rem"
              />
            </Div>
          </Div>
          <Div
            gap="3rem"
            display="flex"
            position="relative"
            flexDirection="column"
          >
            <TokenField type="slippage" />
            <TokenField type="slippage" />
          </Div>
        </Div>
        <Div py="3rem" display="flex" justifyContent="center" width="100%">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <CardButton onClick={() => {}} />
            </motion.div>
          </AnimatePresence>
        </Div>
      </Div>
    </motion.div>
  );
};

export default ActionCard;
