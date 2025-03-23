import { Div, Input, InputElementProps, Span } from '@stylin.js/elements';
import stylin from '@stylin.js/react';
import { forwardRef, RefAttributes } from 'react';

import {
  InputFieldProps,
  TextAreaElementProps,
} from '../../views/create-coin/create-coin.types';

const TextareaElement = stylin<TextAreaElementProps & RefAttributes<unknown>>(
  'textarea'
)();

const InputField = forwardRef<InputElementProps, InputFieldProps>(
  (
    {
      status,
      Suffix,
      isTextArea,
      supportingText,
      tooltipDescription,
      ...props
    },
    ref
  ) => (
    <Div>
      <Div
        width="100%"
        gap="0.5rem"
        display="flex"
        bg="#24282D"
        position="relative"
        className="tooltip"
        alignItems="center"
        borderRadius="0.75rem"
        justifyContent="space-between"
        pr={Suffix ? '0.25rem' : '1rem'}
        px={!isTextArea ? '1rem' : 'unset'}
        height={!isTextArea ? '2.5rem' : 'unset'}
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
            <Div mr="-0.5rem" display="flex" alignItems="center">
              {Suffix}
            </Div>
          </>
        ) : (
          <TextareaElement
            p="1rem"
            rows={5}
            width="100%"
            border="none"
            height="100%"
            outline="none"
            bg="#24282D"
            minHeight="5rem"
            resize="vertical"
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
      {supportingText && (
        <Div
          mt="0.5rem"
          fontSize="0.75rem"
          color={status === 'error' ? '#9B2C2C' : ''}
        >
          {supportingText}
        </Div>
      )}
    </Div>
  )
);

InputField.displayName = 'InputField';

export default InputField;
