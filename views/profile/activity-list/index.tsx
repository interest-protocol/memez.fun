import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import { useIsMobile } from '@/hooks/use-is-mobile';

import { ACTIVITY_DATA } from '../profile-activity-card.data';
import ActivityCard from './activity-card';
import {
  ActivityCardProps,
  ActivityListProps,
  DataGroupByData,
} from './activity-card/activity-card.types';

const ActivityList: FC<ActivityListProps> = ({ currentTab }) => {
  const { isMobile } = useIsMobile();

  const groupByDate = (data: ActivityCardProps[]): DataGroupByData => {
    return data.reduce((acc, item) => {
      const date = isMobile ? (item.supportingText ?? '--') : '--';

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(item);
      return acc;
    }, {} as DataGroupByData);
  };

  return (
    <Div display="flex" flexDirection="column" gap="1.375rem">
      {Object.entries(groupByDate(ACTIVITY_DATA[currentTab])).map(
        ([date, activityList]) => {
          return (
            <Div
              display="flex"
              key={unikey()}
              flexDirection="column"
              gap={isMobile ? '1.375rem' : '0.25rem'}
            >
              {date != '--' && (
                <Span color="#fff" fontSize="0.75rem">
                  {date}
                </Span>
              )}
              {activityList.map((activity) => (
                <ActivityCard key={unikey()} {...activity} />
              ))}
            </Div>
          );
        }
      )}
    </Div>
  );
};

export default ActivityList;
