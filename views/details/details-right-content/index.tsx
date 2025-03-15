import { Div, Span } from '@stylin.js/elements';
import { v4 } from 'uuid';

import DetailsCard from '../components/details-card';
import { DATA } from './details-right-content.data';

const DetailsRightContent = () => {
  return (
    <Div display="flex" flexDirection="column" gap="0.5rem" width="28.625rem">
      {DATA.map(({ title, Icon, description }) => (
        <DetailsCard key={v4()}>
          <Div display="flex" justifyContent="space-between">
            <Div
              width="2rem"
              height="2rem"
              bg="#24282D"
              display="flex"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
            >
              <Icon maxHeight="0.8rem" maxWidth="0.8rem" width="0.8rem" />
            </Div>
            <Span fontSize="1.25rem" color="#FBFBFB">
              {title}
            </Span>
          </Div>
          <Div color="#90939D" display="flex" justifyContent="flex-end">
            <Span fontSize="1.5rem">{description}</Span>
          </Div>
        </DetailsCard>
      ))}
    </Div>
  );
};

export default DetailsRightContent;
