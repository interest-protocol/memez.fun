import { Div, P, Span } from '@stylin.js/elements';

import RangeBar from '@/components/range';

import ActionCard from '../components/action-card';

const DetailsCenterContent = () => {
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
        display="flex"
        transition="0.3s"
        borderRadius="1.5rem"
        flexDirection="column"
        border="1px solid #24282D"
        justifyContent="space-between"
      >
        <Div display="flex" justifyContent="space-between">
          <Span fontSize="1.25rem" color="#FBFBFB">
            Bonding
          </Span>
          <Span fontSize="1.5rem" color="#90939D">
            12/1000 SUI
          </Span>
        </Div>
        <Div borderRadius="0.75rem" p="1rem" width="100%" bg="#24282D">
          <RangeBar />
          <P mt="0.9rem" fontWeight="300" fontSize="0.75rem" color="#FFFFFF">
            Bonding progress • 18.94%
          </P>
        </Div>
      </Div>
      <ActionCard />
    </Div>
  );
};

export default DetailsCenterContent;
