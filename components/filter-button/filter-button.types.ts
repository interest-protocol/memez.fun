export interface FilterButtonProps {
  currentFilter: string;
  setFilter: (value: string) => void;
}

export interface FilterButtonItemProps {
  title: string;
  onClick: (value: string) => void;
}
