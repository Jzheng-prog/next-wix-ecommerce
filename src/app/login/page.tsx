'use client'

import { useWixClient } from "@/hooks/useWixClient"
import { LoginState } from "@wix/sdk"
import { useState } from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

enum MODE {
  LOGIN='LOGIN',
  REGISTER = "REGISTER",
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERFICATION ='EMAIL_VERFICATION'
}
function Login() {

  const router = useRouter()
  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn();
  console.log({isLoggedIn})

  if(isLoggedIn){
    router.push('/')
  }
  const [mode, setMode] = useState(MODE.LOGIN)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailCode, setEmailCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  
  const formTitle =
    mode === MODE.LOGIN
    ? 'Login In'
    : mode === MODE.REGISTER
    ? 'Register'
    : mode === MODE.RESET_PASSWORD
    ? 'Reset Password'
    : 'Verify Your Email'

  const buttonTitle =
    mode === MODE.LOGIN
    ? 'Login'
    : mode === MODE.REGISTER
    ? 'Register'
    : mode === MODE.RESET_PASSWORD
    ? 'Reset'
    : 'Verify'

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    setIsLoading(true)
    setError('')


    try {
      let response;

      switch (mode){
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email,
            password
          })
          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email,
            password,
            profile:{nickname:username}
          })
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          )
          setMessage('Password reset e-mail sent. Check your e-mail!')
          break;
        case MODE.EMAIL_VERFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode:emailCode
          })
          break;
        default:
          break;
      }
      console.log({response})

      console.log(response?.loginState)


      switch(response?.loginState){
        case LoginState.SUCCESS:
          setMessage('Successful! You are being redirected!')
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken!)

          console.log(tokens)

          Cookies.set('refreshToken', JSON.stringify(tokens.refreshToken),{
            expires:2
          })
          wixClient.auth.setTokens(tokens)

          router.push('/')
          break;
        case LoginState.FAILURE:
          if(response.errorCode === 'invalidEmail' || response.errorCode === 'invalidPassword' ){
            setError('Invalid credentials!')
          }else if(response.errorCode ==='emailAlreadyExists'){
            setError('Email Already Exist!')
          }else if(response.errorCode ==='resetPassword'){
            setError('Reset your password')
          }else{
            setError('Something went wrong!')
          }
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERFICATION)
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage('Your account is pending approval!')
        default:
          break;
      }
    } catch (error) {
      console.log(error)
      setError('Something went wrong.')
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl: relative h-[calc(100vh-80px)] flex items-center justify-center">
      <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode===MODE.REGISTER ?(
          <div className="flex flex-col gap-2">
            <label htmlFor="">Username</label>
            <input type="text" name="username" placeholder="john" className="ring-2 ring-gray-300 rounded-md p-4" onChange={(e)=>setUsername(e.target.value)}/>
          </div>
        ): null}
        {mode !== MODE.EMAIL_VERFICATION ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">E-Mail</label>
            <input type="text" name="username" placeholder="john@gmail.com" className="ring-2 ring-gray-300 rounded-md p-4" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
        ):(
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">Verification</label>
            <input type="text" name="emailCode" placeholder="code" className="ring-2 ring-gray-300 rounded-md p-4" onChange={(e)=>setEmailCode(e.target.value)}/>
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">Password</label>
            <input type="password" name="password" placeholder="Enter your password" className="ring-2 ring-gray-300 rounded-md p-4" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
        ):(
          null
        )}
        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot Password</div>
        )}
        <button className="bg-red-400 text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading? 'Loading...':buttonTitle}
        </button>

        {error &&(
          <div className="text-red-600">{error}</div>
        )}
        {mode ===MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.REGISTER)}>Don't have an account?</div>
        )}
        {mode ===MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Have an account?</div>
        )}
        {mode ===MODE.RESET_PASSWORD && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Go back to Login.</div>
        )}
        {message && (
          <div className="text-green-600">{message}</div>
        )}
      </form>
    </div>
  )
}

export default Login
