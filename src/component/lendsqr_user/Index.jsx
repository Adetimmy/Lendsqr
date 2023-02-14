import { useEffect, useState } from "react"
import Dashboard from "./asidebar/dashboard/Dashboard"
import Card from "./card/Card"
import Header from "./header/Header"
import "./index.css"
import UsersChat from "./usersChat/UsersChat"
import { useFetchUser } from "../hook/useFetch"
import Loading from "../loadpage/logo-input/Loading"


const Index = () => {

  const [page, setPage] = useState({
    pageNo: "10"
  })

  const handlePage = (event) => {
    const {name, value} = event.target
    setPage(prevPage => {
     return{
       ...prevPage,
       [name] : value
     }
   })
 }

const[toggle, setToggle]=useState(false)

const handleToggle = () => {
  setToggle(!toggle)
}
  
const { isLoading } = useFetchUser()

if(isLoading){
  return <Loading />
}

  return (
    <div className="len">
      <div className="len__header">
        <Header handleToggle={handleToggle} toggle={toggle} />
      </div>
      <div className="aside__main">
        <div className="aside__main-dashboard"><Dashboard toggle={toggle} /></div>
        <div className="aside__main-card">
          <Card/>
          <UsersChat page={page}/>
        </div>
      </div>
        
    </div>
  )
}

export default Index