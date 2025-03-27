export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  border?: string;
  borderColor?: string;
  tooltipContent?: string;
  tooltipPosition?: TooltipPosition;
}
