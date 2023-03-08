import React from 'react'

import { FcGoogle } from "react-icons/fc"

const Login = () => {
  return (
    <div classname="relative w-screen h-screen">
      <div classname="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div classname="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div classname="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all">
            <FcGoogle classname ="text-xl" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login