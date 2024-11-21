import React from 'react';
import Template from '../components/Authentication/Template'

const Login = () => {
  return (
    <div className=' bg-regal-blue  w-full h-full  pt-4  pb-8'>
    <Template
       title="Welcome Back !"
        desc1="Login to AEROMAT CREATIVE LABS"
        // image={signupImg}
        formType="login"
    />
  </div>
  )
}

export default Login