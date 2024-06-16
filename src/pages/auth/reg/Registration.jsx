import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, updateProfile,  } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Puff, ThreeDots } from 'react-loader-spinner';

const emailregx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();
  const [loader ,setLoader] = useState(false)
  const [loading,setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().
        email('Invalid email address')
        .matches(emailregx,'please check your email')
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
      setLoader(true)
      setLoading(true)
      resetForm()
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: values.fullName, 
            photoURL: ""
          }).then(() => {
            console.log("Profile updated!");
            // ...
            toast.success('Email verification sent!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            set(push(ref(db, 'users/' + user.uid)), {
              fullName:  user.displayName,
              email:  user.email,
            });
            setLoader(false)
            setLoading(true)
          })
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeout(() => {
              navigate("/");
            }, 1500);
            setLoader(false)
            setLoading(true)
          });
        })
        .catch((error) => {
          console.log(error);
          toast.warning('Invaild email 0r password')
          setLoader(false)
      });
    },
  });
  return (
    <div className="p-[40px] flex justify-center items-center flex-col gap-5 relative">
      {loader
        &&
      <div className='w-full h-screen bg-black opacity-70 absolute flex items-center justify-center'>
        <Puff
          visible={true}
          height="120"
          width="120"
          color="#fff"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      }
    <ToastContainer />
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
      <div>
      
      <button loding='loading' className="btn" type='submit'>
        {loading 
          ? 
          <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
          :
          "sign up"}
        </button>
      </div>
     </form>
     <p>Don't have an account? <Link className='text-[#bf6297]' to='/'>Sign In</Link></p>
    </div>
  )
}

export default Registration