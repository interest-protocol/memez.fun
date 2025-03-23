import { Div, P, Span } from '@stylin.js/elements';
import { useWatch } from 'react-hook-form';

import RangeBar from '@/components/range';

import ActionCard from '../components/action-card';
import { DetailsForm } from '../details.types';

const DetailsCenterContent = () => {
  const formValues = useWatch<DetailsForm>();

  return (
    <Div
      flex="1"
      gap="1rem"
      display="flex"
      transition="0.3s"
      flexDirection="column"
    >
      <Div
        p="1.2rem"
        width="100%"
        bg="#131419"
        height="13rem"
        transition="0.3s"
        borderRadius="1.5rem"
        flexDirection="column"
        border="1px solid #24282D"
        justifyContent="space-between"
        display={['none', 'none', 'none', 'flex', 'flex']}
      >
        <Div display="flex" justifyContent="space-between">
          <Span fontSize="1.25rem" color="#FBFBFB">
            Bonding
          </Span>
          <Span fontSize="1.5rem" color="#90939D">
            {formValues.bonding}
          </Span>
        </Div>
        <Div borderRadius="0.75rem" p="1rem" width="100%" bg="#24282D">
          <RangeBar value={formValues.range as number} />
          <P mt="0.9rem" fontWeight="300" fontSize="0.75rem" color="#FFFFFF">
            Bonding progress • {formValues.range}%{' '}
          </P>
        </Div>
      </Div>
      <ActionCard />
    </Div>
  );
};

export default DetailsCenterContent;
