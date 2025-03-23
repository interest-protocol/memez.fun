import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  dex: yup.string().required('Dex é obrigatório'),
  step: yup.number().required('Step é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
  imageUrl: yup
    .string()
    .url('Deve ser uma URL válida')
    .required('Imagem é obrigatória'),
  description: yup.string().required('Descrição é obrigatória'),
  quoteCoin: yup.string().required('Moeda de cotação é obrigatória'),
  supply: yup
    .string()
    .matches(/^\d+$/, 'Deve ser um número')
    .required('Supply é obrigatório'),
  website: yup
    .string()
    .url('Deve ser uma URL válida')
    .required('Website é obrigatório'),
  twitter: yup
    .string()
    .url('Deve ser uma URL válida')
    .required('Twitter é obrigatório'),
  telegram: yup
    .string()
    .url('Deve ser uma URL válida')
    .required('Telegram é obrigatório'),
  success: yup.boolean().required('Campo obrigatório'),

  raise: yup.object().shape({
    value: yup
      .string()
      .matches(/^\d+$/, 'Deve ser um número')
      .required('Valor é obrigatório'),
    percentage: yup
      .string()
      .matches(/^\d+$/, 'Deve ser um número')
      .required('Percentual é obrigatório'),
  }),

  vesting: yup.object().shape({
    period: yup.string().required('Período é obrigatório'),
    quantity: yup
      .string()
      .matches(/^\d+$/, 'Deve ser um número')
      .required('Quantidade é obrigatória'),
    coinAmount: yup
      .string()
      .matches(/^\d+$/, 'Deve ser um número')
      .required('Montante de moedas é obrigatório'),
  }),
});
