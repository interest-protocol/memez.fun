export interface FilterButtonItemProps {
  title: string;
}

export interface SelectFieldProps {
  placeholder: string;
  isSpecial?: boolean;
  currentValue?: string;
  tooltipDescription?: string;
  menuList: ReadonlyArray<string>;
  onSelect: (selected: string) => void;
}
