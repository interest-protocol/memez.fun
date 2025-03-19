import { Div, Input, InputElementProps, Span } from '@stylin.js/elements';
import stylin from '@stylin.js/react';
import { forwardRef, RefAttributes } from 'react';

import { InputFieldProps, TextAreaElementProps } from '../../create-coin.types';

const TextareaElement = stylin<TextAreaElementProps & RefAttributes<unknown>>(
  'textarea'
)();

const InputField = forwardRef<InputElementProps, InputFieldProps>(
  ({ Suffix, tooltipDescription, isTextArea, ...props }, ref) => (
    <Div
      width="100%"
      height={!isTextArea ? '2.5rem' : 'unset'}
      position="relative"
      className="tooltip"
      display="flex"
      gap="0.5rem"
      bg="#24282D"
      borderRadius="0.75rem"
      px={!isTextArea ? '1rem' : 'unset'}
      pr={Suffix ? '0.25rem' : '1rem'}
    >
      {!isTextArea ? (
        <>
          <Input
            width="100%"
            border="none"
            height="100%"
            outline="none"
            bg="transparent"
            color="#E4E7EB"
            fontSize="0.75rem"
            caretColor="#F6C853"
            textTransform="capitalize"
            nPlaceholder={{
              color: '#90939D',
            }}
            {...props}
            ref={ref}
          />
          <Div display="flex" alignItems="center">
            {Suffix}
          </Div>
        </>
      ) : (
        <TextareaElement
          p="1rem"
          rows={5}
          width="100%"
          minHeight="5rem"
          resize="vertical"
          bg="#24282D"
          border="none"
          height="100%"
          outline="none"
          color="#E4E7EB"
          fontSize="0.75rem"
          caretColor="#F6C853"
          borderRadius="0.75rem"
          textTransform="capitalize"
          nPlaceholder={{
            color: '#90939D',
          }}
          {...props}
          ref={ref}
        />
      )}
      {tooltipDescription && (
        <Span className={`tooltiptext ${isTextArea && 'textArea'}`}>
          {tooltipDescription}
        </Span>
      )}
    </Div>
  )
);

InputField.displayName = 'InputField';

export default InputField;
