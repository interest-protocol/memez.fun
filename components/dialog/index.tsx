import { Button, Div, H2, P } from '@stylin.js/elements';
import React, { FC } from 'react';

import { DialogProps, IDialogButton } from './dialog.types';
import { isDialogButton } from './dialog.utils';

const Dialog: FC<DialogProps> = ({
  Icon,
  title,
  button,
  message,
  ghostButton,
}) => (
  <Div
    p="1.5rem"
    gap="1.5rem"
    width="30rem"
    display="flex"
    bg="#3C3C3C80"
    maxWidth="100%"
    alignItems="stretch"
    fontFamily="DM Sans"
    borderRadius="1.15rem"
    flexDirection="column"
    justifyContent="center"
    backdropFilter="blur(19px)"
    color="#fff"
  >
    <Div textAlign="center">{Icon}</Div>
    <H2
      fontWeight="700"
      textAlign="center"
      fontSize="1.75rem"
      justifyContent="center"
    >
      {title}
    </H2>
    {message && (
      <P textAlign="center" fontSize="1.125rem" wordBreak="break-word">
        {message}
      </P>
    )}
    <Div gap="1rem" display="flex" alignItems="stretch" flexDirection="column">
      {button &&
        (isDialogButton(button) ? (
          <Button
            all="unset"
            py="1rem"
            px="1.5rem"
            flex="2"
            bg="#F5B722"
            color="#000000"
            cursor="pointer"
            textAlign="center"
            borderRadius="1rem"
            onClick={(button as IDialogButton)?.onClick}
          >
            {button.label}
          </Button>
        ) : (
          button
        ))}
      {ghostButton &&
        (React.isValidElement(ghostButton)
          ? ghostButton
          : !!(ghostButton as IDialogButton)?.label && (
              <Button
                all="unset"
                color="#F5B722"
                cursor="pointer"
                textAlign="center"
                fontSize="0.825rem"
                nHover={{ textDecoration: 'underline' }}
                onClick={(ghostButton as IDialogButton)?.onClick}
              >
                {(ghostButton as IDialogButton)?.label || 'Got it'}
              </Button>
            ))}
    </Div>
  </Div>
);

export default Dialog;
