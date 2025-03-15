import { Div } from '@stylin.js/elements';
import { motion } from 'motion/react';
import { FC } from 'react';

import MenuList from './menu-list';
import ProfileInfo from './profile-info';

const Motion = motion.create(Div);

const Profile: FC = () => (
  <Motion
    gap="0.5rem"
    mt="3.5rem"
    bg="#131419"
    display="flex"
    width="20rem"
    overflow="hidden"
    position="absolute"
    exit={{ scaleY: 0 }}
    flexDirection="column"
    style={{ originY: 0 }}
    borderRadius="0.75rem"
    animate={{ scaleY: [0, 1] }}
    onClick={(e) => e.stopPropagation()}
  >
    <ProfileInfo />
    <MenuList />
  </Motion>
);

export default Profile;
