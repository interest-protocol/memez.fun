import * as yup from 'yup';

export const createCoinValidationSchema = yup.object({
  dex: yup.string().required('Dex is required'),
  name: yup.string().required('Name is required'),
  imageUrl: yup.string().required('Image is required'),
  description: yup.string().required('Description is required'),
  quoteCoin: yup.string().required('Quote coin is required'),
  supply: yup
    .string()
    .matches(/^\d+$/, 'Must be a number')
    .required('Supply is required'),
  website: yup.string().url('Must be a valid URL'),
  twitter: yup.string().url('Must be a valid URL'),
  telegram: yup.string().url('Must be a valid URL'),

  raise: yup.object({
    value: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Value is required'),
    percentage: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Percentage is required'),
  }),

  vesting: yup.object({
    period: yup.string().required('Period is required'),
    quantity: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Quantity is required'),
    coinAmount: yup.string().matches(/^\d+$/, 'Must be a number'),
  }),
});
