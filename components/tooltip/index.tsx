import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, useState } from 'react';

import { TooltipProps } from './tooltip.types';

export const TooltipWrapper: FC<PropsWithChildren<TooltipProps>> = ({
  border,
  children,
  borderColor,
  tooltipContent,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Div
      cursor="pointer"
      transition="0.3s"
      position="relative"
      display="inline-block"
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
      nHover={{
        opacity: '0.8',
      }}
    >
      {toggle && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          role="tooltip"
          style={{
            zIndex: 9999,
            border: border,
            bottom: '2rem',
            color: '#fff',
            left: '-0.9rem',
            padding: '0.5rem',
            height: '1.75rem',
            position: 'absolute',
            borderRadius: '0.5rem',
            borderColor: borderColor,
            backgroundColor: '#333',
          }}
          {...props}
        >
          <Div fontSize="0.75rem">{tooltipContent}</Div>
          <Div
            left="50%"
            bg="inherit"
            width=".375rem"
            bottom="-0.2rem"
            height=".375rem"
            borderTop={border}
            position="absolute"
            borderLeft={border}
            borderColor={borderColor}
            transform="translateX(-50%) rotate(45deg)"
          />
        </motion.div>
      )}
      {children}
    </Div>
  );
};

export type { TooltipProps };
