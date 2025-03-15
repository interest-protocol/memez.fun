import { Div } from '@stylin.js/elements';
import { AnimatePresence, motion } from 'motion/react';
import { FC } from 'react';

import ListItem from '..';
import { CollapseMenusProps } from './collapse-menu.types';

const Motion = motion.create(Div);

const CollapseMenuInfo: FC<CollapseMenusProps> = ({
  show,
  Icon,
  title,
  onClick: toggleShow,
  collapseInfo,
}) => (
  <Motion bg={show ? '#24282D' : 'unset'}>
    <ListItem Icon={Icon} title={title} onClick={toggleShow} />
    <AnimatePresence>
      {show && (
        <Motion
          ml="2.6rem"
          style={{ originY: 0 }}
          exit={{ scaleY: 0, height: 0, opacity: 0 }}
          animate={{
            scaleY: [0, 1],
            height: [0, 'auto'],
            opacity: [0, 1, 1],
          }}
        >
          {collapseInfo}
        </Motion>
      )}
    </AnimatePresence>
  </Motion>
);

export default CollapseMenuInfo;
