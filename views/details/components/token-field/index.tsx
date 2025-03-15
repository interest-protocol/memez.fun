import { Div, Input } from '@stylin.js/elements';

const TokenField = () => {
  return (
    <Div
      zIndex="2"
      width="100%"
      p="1.063rem"
      color="white"
      bg="#24282D"
      display="flex"
      height="5.25rem"
      alignItems="center"
      borderRadius="0.75rem"
      justifyContent="space-between"
    >
      <Input all="unset" flex="1" border="1px solid red" />
    </Div>
  );
};

export default TokenField;
