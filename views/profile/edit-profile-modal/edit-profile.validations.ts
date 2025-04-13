import * as yup from 'yup';

export const editProfileValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  imageUrl: yup.string().required('Image is required'),
  description: yup.string().required('Description is required'),
});
