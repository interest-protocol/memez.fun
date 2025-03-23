import {
  BarChartSVG,
  CalendarSVG,
  DollarSignSVG,
  DonutChartSVG,
} from '@/components/svg';

export const DATA = [
  {
    title: 'Market Cap',
    Icon: DollarSignSVG,
    description: '$50,000',
  },
  {
    title: 'Volume',
    Icon: BarChartSVG,
    description: '6,893.98',
  },
  {
    title: 'Team Allocation',
    Icon: CalendarSVG,
    description: '15%',
  },
  {
    title: 'Vesting Period',
    Icon: DonutChartSVG,
    description: '64',
    isVestingPeriod: true,
  },
];
