import { FC, ReactNode } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface CreateCoinFormProps {
  label: string;
  placeholder: string;
  name: string;
}

export interface InputFieldProps {
  type: string;
  placeholder: string;
  tooltipDescription?: string;
  onChange: () => void;
}

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

export interface TagProps {
  label: string;
  onClose: () => void;
}

export type SocialLinkProps = {
  pathname: string;
  title: string;
  Icon: FC<SVGProps>;
  isDisabled?: boolean;
};

export interface LikeComponentProps {
  disabled?: boolean;
}
