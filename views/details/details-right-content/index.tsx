import { Div } from '@stylin.js/elements';
import { v4 } from 'uuid';

import DetailsCard from '../components/details-card';
import { DATA } from './details-right-content.data';

const DetailsRightContent = () => {
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
      {DATA.map(({ title, Icon, description, isVestingPeriod }) => (
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
