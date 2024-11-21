import React from 'react'
import Template from '../components/Authentication/Template'

const SignUp = () => {
  return (
    <div className=' bg-regal-blue  w-full h-full  pt-16  pb-8'>
      <Template
         title="Welcome Back"
          // image={signupImg}
          formType="signup"
      />
    </div>
  )
}

export default SignUp