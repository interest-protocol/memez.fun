import { ReactNode } from 'react';

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
