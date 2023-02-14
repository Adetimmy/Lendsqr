
import "./controlinput.css"

const ControlledInput = ( {inputEmail, inputPass, toggle,onclick}) => {
   

  return (
    <div className="control__input">
        <div className="control__input--email">
            <input
             placeholder="Email"
             type="email"
             autoComplete="on"
             name="email"
             ref={inputEmail}
             required
            />
        </div>
        <div className="control__input--password">
            <input
             placeholder="Password"
             type={toggle? "password" : "text"}
             autoComplete="on"
             name="password"
             ref={inputPass}
             required
            />
            <p onClick={onclick}>{toggle? "SHOW" : "HIDE"}</p>
        </div>
        
    </div>
  )
}

export default ControlledInput