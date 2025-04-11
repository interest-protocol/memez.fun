import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

const NoResults: FC = () => (
  <Div
    display="flex"
    textAlign="center"
    padding="4rem 1rem"
    flexDirection="column"
  >
    <Span color="#fff" fontSize="4rem" fontWeight="bold" mb="0.5rem">
      No Results
    </Span>
  </Div>
);

export default NoResults;
