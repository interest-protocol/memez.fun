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
        backgroundColor: '#131419',
        overflow: 'hidden',
        height: '39.563rem',
        position: 'relative',
        borderRadius: '1.5rem',
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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <BackgroundSVG
            maxHeight="21.875rem"
            maxWidth="11.688rem"
            width="11.688rem"
            height="25rem"
          />
        </motion.div>
      </AnimatePresence>
      <Div
        height="100%"
        px="4rem"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
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
