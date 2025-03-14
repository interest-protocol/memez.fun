import { ReactNode } from 'react';

export interface CreateCoinButtonProps {
  suffixIcon?: ReactNode;
  preffixIcon?: ReactNode;
  onClick: () => void;
}
