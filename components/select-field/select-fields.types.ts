export interface FilterButtonItemProps {
  title: string;
}

export interface SelectFieldProps {
  placeholder: string;
  isSpecial?: boolean;
  currentValue?: string;
  supportingText?: string;
  tooltipDescription?: string;
  status?: 'error' | 'default';
  menuList: ReadonlyArray<string>;
  onSelect: (selected: string) => void;
}
