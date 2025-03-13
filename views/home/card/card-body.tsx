import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';

const CardBody: FC = () => {
  return (
    <Div className="card-body">
      <Div color="white">
        <Span>Ocean Token</Span>
      </Div>
    </Div>
  );
};

export default CardBody;
