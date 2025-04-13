import { Div } from '@stylin.js/elements';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  BarChartSVG,
  CalendarSVG,
  DollarSignSVG,
  DonutChartSVG,
} from '@/components/svg';
import { formatNumber } from '@/utils';

import DetailsCard from '../components/details-card';
import { DetailsForm } from '../details.types';

const DetailsRightContent = () => {
  const formValues = useWatch<DetailsForm>();

  const { quoteBalance } = formValues;

  const content = [
    {
      title: 'Market Cap',
      Icon: DollarSignSVG,
      description: `$${formatNumber(quoteBalance as string)}`,
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

  return (
    <Div
      gap="0.5rem"
      display="grid"
      flexDirection="column"
      gridTemplateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
      ]}
    >
      {content.map(({ title, Icon, description, isVestingPeriod }) => (
        <DetailsCard
          key={v4()}
          Icon={Icon}
          title={title}
          description={description}
          isVestingPeriod={isVestingPeriod}
        />
      ))}
    </Div>
  );
};

export default DetailsRightContent;
