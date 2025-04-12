import * as yup from 'yup';

export const editProfileValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  avatar: yup.string().required('Image is required'),
  bio: yup.string().required('Description is required'),
});
