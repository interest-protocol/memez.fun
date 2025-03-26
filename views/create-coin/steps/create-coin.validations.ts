import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  dex: yup.string().required('Dex is required'),
  step: yup.number().required('Step is required'),
  name: yup.string().required('Name is required'),
  imageUrl: yup
    .string()
    .url('Must be a valid URL')
    .required('Image is required'),
  description: yup.string().required('Description is required'),
  quoteCoin: yup.string().required('Quote coin is required'),
  supply: yup
    .string()
    .matches(/^\d+$/, 'Must be a number')
    .required('Supply is required'),
  website: yup
    .string()
    .url('Must be a valid URL')
    .required('Website is required'),
  twitter: yup
    .string()
    .url('Must be a valid URL')
    .required('Twitter is required'),
  telegram: yup
    .string()
    .url('Must be a valid URL')
    .required('Telegram is required'),
  success: yup.boolean().required('This field is required'),

  raise: yup.object().shape({
    value: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Value is required'),
    percentage: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Percentage is required'),
  }),

  vesting: yup.object().shape({
    period: yup.string().required('Period is required'),
    quantity: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Quantity is required'),
    coinAmount: yup
      .string()
      .matches(/^\d+$/, 'Must be a number')
      .required('Coin amount is required'),
  }),
});
