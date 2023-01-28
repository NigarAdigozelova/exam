import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required(),
  text: yup.string().required(),
  image: yup.string().url().required(),
  
});
