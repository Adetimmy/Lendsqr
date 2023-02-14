import Logo from "./logo/Logo"
import Input from "./inputs/Input"
import "./app.css"
import { useRef, useEffect, useState } from "react"
import Loading from "./Loading"
import Index from "../../lendsqr_user/Index"



const LoadPage = () => {

const[username, setUsername] = useState(" ")
const[userpassword, setUserPassword] = useState(" ")
const[error, setError] = useState(" ")
const[isLoggedIn, setIsLoggedIn] = useState(false)

const inputPass = useRef(null)
const inputEmail = useRef(null)

  const handleSubmit = (event) => {
    const { current } = inputPass
    setUsername(inputEmail.current.value)
    setUserPassword(current.value)
    setIsLoggedIn(true)

    localStorage.setItem('username', JSON.stringify(username))
    localStorage.setItem('pass', JSON.stringify(userpassword))
    event.preventDefault()

  }


  useEffect(() => {
  setTimeout( () => {
    setIsLoading(false)
  }, 4000)
})
  
const [isLoading, setIsLoading] = useState(true)

if(isLoading){
  return <Loading /> 
}

if  (isLoggedIn){
  return <Index />
}
  return (

       <div className="logo__main">
          <Logo />
          <Input 
          handleSubmit={handleSubmit} 
          inputPass={inputPass}
          inputEmail={inputEmail}
          />
      </div>
  
      
  )
}

export default LoadPage