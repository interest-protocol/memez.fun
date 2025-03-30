import * as yup from 'yup';

export const CreateProfileValidationSchema = yup.object({
  username: yup.string().required('Username is required'),
  imageUrl: yup.string().required('Avatar is required'),
  password: yup.string().required('Passsword is required'),
  description: yup
    .string()
    .min(80, 'Must be at least 80 characters')
    .required('Description is required'),
});
