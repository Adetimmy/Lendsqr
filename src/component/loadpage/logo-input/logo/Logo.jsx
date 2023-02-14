import "./logo.css"
import logo from "../../../asset/Group.jpg"
import pablio from "../../../asset/pablo-sign-in 1.jpg"


const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__head">
        <img src={logo} alt="logo" />
      </div>

      <div className="logo__pablio">
        <img src={pablio} alt="pablio img" />
      </div>
    </div>
  )
}

export default Logo