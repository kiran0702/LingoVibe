import React from 'react'
import { ShipWheelIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useMutation } from "@tanstack/react-query";
import { useQueryClient  } from '@tanstack/react-query';
import { signup } from '../lib/api.js';
const SignUpPage = () => {
  const [SignupData, setSignupData] = React.useState({
    fullName: '',
    email: '',
    password: '',
  });

  const queryClient = useQueryClient();

  const { mutate: singupMutation, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
  });

  const handleSignup = (e) => {
    e.preventDefault();
    singupMutation(SignupData);
  }

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="dark">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>

<div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>
<div className='mb-4 flex items-center justify-start gap-2'>
  <ShipWheelIcon className="size-9 text-primary"/>
  <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>LingoVibe</span>
</div>
{/*error message if any*/}
{error && (
  <div className='alert alert-error text-sm mb-5'>
    <span>
      {error.response?.data?.message || error.message || "Signup failed"}
    </span>
  </div>
)}
<div className='w-full '>
  <form onSubmit={handleSignup} className='flex flex-col gap-4'>
    <div className='space-y-4'> 
      <div>
        <h2 className='text-xl font-semibold'>Create an Account</h2>
        <p className='text-sm opacity-70'>Join LingoVibe and start your language learning journey</p>
      </div>
      <div className='space-y-3'>
        {/*fullName*/}
        <div className='form-control w-full'>
          <label className='label'> </label>
            <span className='label-text'>Full Name</span>
            <input type='text' placeholder='Kiran P' className='input input-bordered w-full'
                  value={SignupData.fullName}          
                  onChange={(e)=> setSignupData({...SignupData, fullName : e.target.value})}
                  required/>
        </div>
        {/*email*/}
        <div className='form-control w-full'>
          <label className='label'> </label>
            <span className='label-text'>Email</span>
            <input type='email' placeholder='kiran123@gmail.com' className='input input-bordered w-full'
                  value={SignupData.email}          
                  onChange={(e)=> setSignupData({...SignupData, email : e.target.value})}
                  required/>
        </div>
        {/*password*/}
        <div className='form-control w-full'>
          <label className='label'> </label>
            <span className='label-text'>Password</span>
            <input type='password' placeholder='********' className='input input-bordered w-full'
                  value={SignupData.password}          
                  onChange={(e)=> setSignupData({...SignupData, password : e.target.value})}
                  required/>
            <p className='text-xs opacity-70 mt-1'>
              Password must be at least 8 characters long.
            </p>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-start gap-1'>
            <input type='checkbox' className='checkbox checkbox-primary' required />
            <span className='label-text'>I agree to the <a href='#' className='link link-primary'>Terms of Service</a> and <a href='#' className='link link-primary'>Privacy Policy</a></span>
          </label>
        </div>
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
 type="submit">
        {isPending ? (
          <>
          <span className='loading loading-spinner loading-xs'>Loading...</span>
          </>
        ) : 'Create Account'}
      </button>

      <div className='text-center mt-4'>
        <p className='text-sm'>
          Already have an account? <Link to="/login" className='text-primary hover:underline'>Sign in</Link>
        </p>
      </div>

    </div>
  </form>
</div>
</div>

 <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/signuppageimage.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}



export default SignUpPage