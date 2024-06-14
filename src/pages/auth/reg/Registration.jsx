import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Registration = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().
        email('Invalid email address')
        .required('Kindly enter your email'),
      fullName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Kindly enter your name'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(4,'minimum 4 characters ')
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
    <h2 className='h2_heading'>Sign up Page</h2>
     <form onSubmit={formik.handleSubmit} >
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
            type="text" 
            placeholder='Enter your full Name' 
            id='fullName'
            name='fullName'
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
              <div className='error_text'>{formik.errors.fullName}</div>
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
      <button className="btn" type='submit'>Sign up</button>
     </form>
     <p>Don't have an account? <Link className='text-[#bf6297]' to='/'>Sign up</Link></p>
    </div>
  )
}

export default Registration