import { InputProps } from '@stylin.js/elements';
import { ReactNode, TextareaHTMLAttributes } from 'react';

export interface CreateCoinFormProps {
  name: string;
  label: string;
  placeholder: string;
}

export type InputFieldProps = InputProps & {
  Suffix?: ReactNode;
  isTextArea?: boolean;
  supportingText?: string;
  tooltipDescription?: string;
  status?: 'error' | 'default';
};

export type TextAreaElementProps = Omit<
  TextareaHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface RadioFieldProps {
  disabled?: boolean;
}

export interface TokenFieldProps {
  tokenName: string;
  disabled?: boolean;
  TokenIcon?: ReactNode;
  onActivate?: () => void;
}

export interface DropdownProps {
  defaultValue: string | string[];
  menuItems: [] | string[];
  onSelect?: (value: string) => void;
}

export enum CreateCoinStepEnum {
  CoinDetails,
  DexSocialMedia,
  RaiseVesting,
  Review,
}

export interface DexCardProps {
  dexId: string;
  dexName: string;
  imageUrl: string;
  isReview?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export interface CreateCoinHeaderProps {
  title: string;
  description?: string;
  step: CreateCoinStepEnum;
}

export interface CreateCoinForm {
  dex: string;
  step?: number;
  success?: boolean;
  name: string;
  imageUrl: string;
  description: string;
  quoteCoin: string;
  supply: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  raise: {
    value: string;
    percentage: string;
  };
  vesting: {
    period: string;
    quantity: string;
    coinAmount?: string;
  };
}

export interface SocialCardProps {
  title: 'website' | 'twitter' | 'telegram';
  onClose: (socialMedia: 'website' | 'twitter' | 'telegram') => void;
}
