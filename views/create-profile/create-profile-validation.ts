import * as yup from 'yup';

export const CreateProfileValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  imageUrl: yup.string().required('Avatar is required'),
  password: yup.string().required('Password is required'),
  description: yup
    .string()
    .min(80, 'Must be at least 80 characters')
    .required('Description is required'),
});
