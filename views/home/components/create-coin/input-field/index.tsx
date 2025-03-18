import { Div, Input, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { InputFieldProps } from '../create-coin.types';

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  onChange,
  tooltipDescription,
}) => {
  return (
    <Div
      width="100%"
      height="2.5rem"
      borderRadius="1rem"
      position="relative"
      className="tooltip"
      display="inline-block"
    >
      <Input
        p="1rem"
        type={type}
        bg="#24282D"
        border="none"
        color="#fff"
        width="100%"
        outline="none"
        height="100%"
        onChange={onChange}
        borderRadius="0.75rem"
        placeholder={placeholder}
        textTransform="capitalize"
      />
      <Span className="tooltiptext">{tooltipDescription}</Span>
    </Div>
  );
};

export default InputField;
