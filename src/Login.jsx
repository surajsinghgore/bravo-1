import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { profileValidation } from "./utils/validation/FormValidation";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(profileValidation) })

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = () => {
    navigator("/")
  }

  return (
    <div className="w-full  max-w-[440px] px-8 py-14 bg-white rounded-lg box-shadow bg">
      <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className="">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" >Email</label>
          <input type="email" name="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:outline-none" {...register("email")} />
        </fieldset>
        <p>{errors?.email?.message}</p>
        <fieldset className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2" >Password</label>
          <div className="flex justify-center items-center border border-[#ccc] rounded-md bg-white">
            <input type={passwordVisible ? "text" : "password"} name="password" id="password" className="w-full px-3 py-2 rounded-lg outline-none focus:outline-none" {...register("password")} />
            <div className="pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility} > {passwordVisible ? <FiEye /> : <FiEyeOff />} </div>
          </div>
        </fieldset>
        <p>{errors?.password?.message}</p>
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center">
            <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900" > Remember me </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-black hover:text-blue-500" > Forgot your password? </a>
          </div>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
          Log In
        </button>
      </form>
    </div>
  );
}
