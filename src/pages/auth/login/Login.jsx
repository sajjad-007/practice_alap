import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import LoginGoogle from '../../../component/utilities/loginGoogle/LoginGoogle';
import { useSelector } from 'react-redux';


const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [btnLoad,setBtnLoad] = useState(false)
  const data = useSelector((state) => state.UserDataCon.value)
  // console.log(data);
  
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
      // console.log(values);
      setBtnLoad(true)
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in  
        const user = userCredential.user;
        // console.log(user);
        if (user.emailVerified) {
          toast.success("successfully signed in")
          navigate('/home')
          localStorage.setItem("userDataInfo", JSON.stringify(user));
          resetForm()
          setBtnLoad(false)
          } else {
            toast.info("Verify your email first")
            setBtnLoad(false)
          }
        })
        .catch((error) => {
          console.log(error);
          toast.warning("Invaild user name or password")
          setBtnLoad(false)
        });
          },
    // ...
  });

 
  return (
    <div className="p-[40px] flex justify-center items-center flex-col gap-5">
      <ToastContainer />
      <h2 className='h2_heading'>Login Page</h2>
      {/* sign with google */}
      <LoginGoogle />
     <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col gap-5 items-center justify-center'>
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
      <button load='btnLoad' type='submit' className="btn">
        {btnLoad
          ?
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          :
          "log in"
        }
      </button>
     </form>
     <p>Don't have an account? <Link className='text-[#bf6297]' to='/registration'>Sign up</Link></p>
    </div>
  )
}

export default Login