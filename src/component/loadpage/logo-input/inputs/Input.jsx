import { useEffect, useRef, useState } from "react"
import ControlledInput from "./controlinput/ControlledInput"
import "./input.css"
import { Link } from "react-router-dom"
import Index from "../../../lendsqr_user/Index"

const Input = ({handleSubmit, inputPass, inputEmail}) => {

// const[username, setUsername] = useState(" ")
// const[userpassword, setUserPassword] = useState(" ")
// const[error, setError] = useState(" ")
// const[isLoggedIn, setIsLoggedIn] = useState(false)

  const [togglepassword, setTogglePassword] = useState(true)
    // const inputPass = useRef(null)
    // const inputEmail = useRef(null)
  // const [formData, setFormData] = useState({
  //     email:"",
  //     password:""
  // })

  // const handleChange = (event) => {
  //     const {name, value} = event.target
  //     setFormData( prevForm => {
  //         return{
  //             ...prevForm,
  //             [name] : value
  //         }
  //     })
  // }

  const passwordToggle = () => setTogglePassword(!togglepassword)


  // const handleSubmit = (event) => {
  //   const { current } = inputPass
  //   setUsername(inputEmail.current.value)
  //   setUserPassword(current.value)
  //   setIsLoggedIn(true)

  //   localStorage.setItem('username', JSON.stringify(username))
  //   localStorage.setItem('pass', JSON.stringify(userpassword))
  //   event.preventDefault()

  // }
  return (
 
       <form className="logopage__input" onSubmit={handleSubmit}>

          <div className="logopage__input--welcome">
            <h1 className="input__welcome">Welcome!</h1>
            <p className="input__details">Enter details to log in.</p>
          </div>
          <div className="logopage__input--inputs">
            <ControlledInput
              toggle ={togglepassword}
              onclick = {passwordToggle}
              inputEmail={inputEmail}
              inputPass={inputPass}
            />
            <p className="logopage__input--inputs-4gotpassword">forgot password?</p>
          </div>
        <button>log in</button>
      </form>

   
  )
}

export default Input