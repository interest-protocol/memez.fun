import { FC } from 'react';
import Countdown from 'react-countdown';

import { DialogCountdownProps } from './dialog.types';

const DialogCountdown: FC<DialogCountdownProps> = ({ timeout, onComplete }) => (
  <Countdown
    onComplete={onComplete}
    date={Date.now() + timeout}
    renderer={({ seconds }) => seconds}
  />
);

export default DialogCountdown;
