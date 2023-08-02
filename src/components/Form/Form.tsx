import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/userSlice';
import './Form.scss';
import { useCreateFormValidation } from './hooks/useCreateFormValidation';
import { userNameSelector } from '../../redux/userSelectors';

export function Form() {
  const dispatch = useDispatch();
  const username = useSelector(userNameSelector);
  const validationSchema = useCreateFormValidation();

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      username,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(updateUser(values.username));
    },
  });

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form-input'
        type='text'
        name='username'
        autoComplete='off'
        placeholder='Enter your username'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.username && errors.username ? <div className='form-error'>{errors.username}</div> : null}
      <button type='submit' className='form-submitBtn'>
        Save
      </button>
    </form>
  );
}

export default Form;
