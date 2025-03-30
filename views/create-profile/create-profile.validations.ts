import * as yup from 'yup';

export const createProfileValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  imageUrl: yup.string().required('Image is required'),
  description: yup.string().required('Description is required'),
});
