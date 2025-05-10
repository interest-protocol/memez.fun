export interface FilterButtonProps {
  currentFilter: SortItem;
  setFilter: (sortItem: SortItem) => void;
}

export interface FilterButtonItemProps {
  item: SortItem;
  onClick: (sortItem: SortItem) => void;
}

export interface SortItem {
  label: string;
  value: string;
}
