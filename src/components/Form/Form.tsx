import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, setIsEditing } from '../../redux/userSlice';
import { object, string } from 'yup';
import { RootState } from '../../redux/store';
import FormProps from './types';

export function Form() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.user);

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      username: username,
    },
    validationSchema: object({
      username: string().required('Required'),
    }),
    onSubmit: values => {
      dispatch(updateUser(values.username));
      dispatch(setIsEditing(false));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
      {touched.username && errors.username ? <div>{errors.username}</div> : null}
      <button type='submit'>Save</button>
    </form>
  );
}

export default Form;
