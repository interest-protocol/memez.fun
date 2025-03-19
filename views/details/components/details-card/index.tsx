import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { DetailsCardProps } from './details-card.types';

const DetailsCard: FC<DetailsCardProps> = ({
  title,
  Icon,
  description,
  isVestingPeriod,
}) => {
  return (
    <Div
      p="1.2rem"
      width="100%"
      bg="#131419"
      height="13rem"
      display="flex"
      transition="0.3s"
      borderRadius="1.5rem"
      flexDirection="column"
      border="1px solid #24282D"
      justifyContent="space-between"
    >
      <Div display="flex" justifyContent="space-between">
        {Icon && (
          <Div
            width="2rem"
            height="2rem"
            bg="#24282D"
            display="flex"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
          >
            <Icon width="0.8rem" height="0.8rem" />
          </Div>
        )}
        <Span fontSize="1.25rem" color="#FBFBFB">
          {title}
        </Span>
      </Div>
      <Div color="#90939D" display="flex" justifyContent="flex-end">
        <Div display="flex" flexDirection="column" justifyContent="flex-end">
          <Span fontSize="1.5rem">{description}</Span>
          {isVestingPeriod && (
            <Div
              ml="auto"
              mt="0.5rem"
              bg="#303238"
              display="flex"
              color="#F6C853"
              height="1.5rem"
              width="3.438rem"
              fontSize="0.75rem"
              alignItems="center"
              borderRadius="3rem"
              justifyContent="center"
            >
              Days
            </Div>
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default DetailsCard;
