import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { color } from 'framer-motion';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { RadioCircleSVG } from '@/components/svg';

import { RadioFieldProps } from '../create-coin.types';

export const RadioField: FC<RadioFieldProps> = ({ disabled }) => {
  const [selected, setSelected] = useState(false);

  const Motion = motion.create(Div);

  const variants = {
    hover: {
      boxShadow: `${disabled ? 'disabled' : `${color}14`} 0px 0px 0px 0.625rem`,
    },
    withoutHover: { boxShadow: 'unset' },
  };

  const handleChange = () => {
    if (disabled) return;
    setSelected(not);
  };

  return (
    <Div
      display="flex"
      width="1rem"
      height="1rem"
      flexWrap="wrap"
      onClick={handleChange}
      aria-label="radioWrapper"
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <Motion
        display="flex"
        role="radio"
        whileHover="hover"
        borderRadius="50%"
        alignItems="center"
        variants={variants}
        initial="withoutHover"
        justifyContent="center"
        transition={{ duration: 0.5 }}
        opacity={disabled ? '0.32' : '1'}
        color={disabled ? '#24282D' : '#F6C853'}
      >
        <RadioCircleSVG
          width="100%"
          maxWidth="100%"
          maxHeight="100%"
          isChecked={selected}
        />
      </Motion>
    </Div>
  );
};

export default RadioField;
