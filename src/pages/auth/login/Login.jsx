import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().
        email('Invalid email address')
        .required('Kindly enter your email'),
      password: Yup.string()
        .required('Kindly enter your password'),
    }),
    onSubmit: (values,{resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      resetForm()
      console.log(values);
    },
  });
  return (
    <div className="p-[40px] flex justify-center items-center flex-col gap-5">
      <h2 className='h2_heading'>Login Page</h2>
     <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col gap-5'>
        <div>
            <input 
              className="input" 
              type="text" 
              placeholder='Enter your email' 
              id='email'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error_text'>{formik.errors.email}</div>
              ) : null
            }
        </div>
        <div>
          <input 
            className="input" 
            type="password" 
            placeholder='Enter your password ' 
            id='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
         <div className='error_text'>{formik.errors.password}</div>
       ) : null}
        </div>
      </div>
      <button className="btn">log in</button>
     </form>
     <p>Don't have an account? <Link className='text-[#bf6297]' to='/registration'>Sign up</Link></p>
    </div>
  )
}

export default Login