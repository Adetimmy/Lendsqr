import Dashboard from "../asidebar/dashboard/Dashboard"
import Header from "../header/Header"
import { User } from "./user/User"
import Loading from "../../loadpage/logo-input/Loading"
import { useFetchUser } from "../../hook/useFetch"

export  const UserDetail = () => {

  const { isLoading } = useFetchUser()

if(isLoading){
  return <Loading />
}

    return (
   
        <div className="len">
        <div className="len__header">
          <Header />
        </div>
        <div className="aside__main">
          <div className="aside__main-dashboard"><Dashboard/></div>
          <div className="aside__main-card">
           <User/>
          </div>
        </div>
          
      </div>
    )
}


