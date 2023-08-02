import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import { object, string } from 'yup';
import { RootState } from '../../redux/store';

export function Form() {
  const dispatch = useDispatch();

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      username: useSelector((state: RootState) => state.user.username),
    },
    validationSchema: object({
      username: string().required('Required'),
    }),
    onSubmit: values => {
      dispatch(updateUser(values.username));
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
