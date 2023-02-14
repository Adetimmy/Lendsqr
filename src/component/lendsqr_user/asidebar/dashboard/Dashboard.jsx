import "./dashboard.css"
import {FaBriefcase, FaHome} from "react-icons/fa"
import {RiArrowDropDownLine} from "react-icons/ri"
import {MdLogout} from "react-icons/md"
import { customer, business, settings } from "./dashdetails"


const Dashboard = ({toggle}) => {
  console.log(toggle)
  return (

    <div className={toggle? "dashbord__container open" : "dashbord__container" }>
      <ul className="dash__container--listA">
        <a href="/" className="active" >
          <li >
            <FaBriefcase className="dashboard__list--icon" /> 
            <p>Switch Organization</p>
            <RiArrowDropDownLine fontSize={25} />
          </li>
        </a>
        <a href="/"  >
          <li>
            <FaHome className="dashboard__list--icon" /> 
            <p>Dashboard</p>
          </li>
        </a>
      </ul>

      <div className="dash__container--listB">
        <p style={{paddingInline:"2rem"}}>CUSTOMERS</p>
        <ul>
          {customer.map((item, index) => {
            return <a href="/" key={item+index} className={item.class}>
              <li ><span className="dashboard__list--icon">{item.icon}</span>{item.name}</li>
            </a>
          })}
        </ul>
      </div>

      <div className="dash__container--listC">
        <p style={{paddingInline:"2rem"}}>BUSINESSES</p>
        <ul>
          {business.map((item, index) => {
            return <a href="/" key={item+index} className={item.class}>
              <li ><span className="dashboard__list--icon">{item.icon}</span>{item.name}</li>
            </a>
          })}
        </ul>
      </div>

      <div className="dash__container--listD">
        <p style={{paddingInline:"2rem"}}>SETTINGS</p>
        <ul>
          {settings.map((item, index) => {
            return <a href="/" key={item+index} className={item.class}>
              <li ><span className="dashboard__list--icon">{item.icon}</span>{item.name}</li>
            </a>
          })}
        </ul>
      </div>
      
      <div className="dash__container--listC">
        <ul>
          <a href="/" className="customer__list">
            <li><span className="dashboard__list--icon"><MdLogout /></span>Logout</li>
          </a>
        </ul>
        <p className="dash__container--list-version">v1.2.0</p>
      </div>

    </div>
    
  )
}

export default Dashboard