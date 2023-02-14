import { memo } from "react"
import logo from "../../asset/Group.jpg"
import {BiSearch} from "react-icons/bi"
import {MdArrowDropDown, MdOutlineNotifications} from "react-icons/md"
import "./header.css"
import Dashboard from "../asidebar/dashboard/Dashboard"
import { useFetchUser } from "../../hook/useFetch"

const Header = ({ handleToggle, toggle}) => {

const { isLoading, isError, data, error } = useFetchUser()

if(isLoading){
    return <h3>Loading</h3>
}
if(isError){
    return <h3>{error.message}</h3>
}


  const rand = Math.floor(Math.random() * 100)   
   
  return (
    <div className="header__container">
       
      <div className="header__container--logo">
        <img src={logo} alt="logo" />
        <div className="header__container--inputs">
          <input 
            type="text"
            placeholder="Search for anything"
          />

          <div className="header__container--search-btn">
            <BiSearch  color="#fff" fontSize={14}/>
          </div>

        </div>
        
        <div className="header__container--user">
          <p className="header__container--user-docs">Docs</p>
          <MdOutlineNotifications fontSize={30} className="header__container--user-bell"/>
          <div className="header__container--user-image">
          {
             <img src={data?.data[rand].profile.avatar} alt="user_img" /> 
            }
          </div>

          <div className="header__container--user-dropdown">
            {
             <p>{data?.data[rand].profile.firstName}</p>  
            }
            <MdArrowDropDown />
          </div>
          
          
        </div>
        <div className={ toggle? "toggle__menu open" : "toggle__menu"} onClick={handleToggle}>
        {toggle? <Dashboard className="reuse"/> : ""}  

        </div>
      </div>

    </div>
  )
}

export default memo(Header)