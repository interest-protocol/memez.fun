import * as yup from 'yup';

export const CreateProfileValidationSchema = yup.object({
  username: yup.string().required('Username is required'),
  description: yup
    .string()
    .min(80, 'Must be at least 80 characters')
    .required('Description is required'),
});
