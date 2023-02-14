import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import LoadPage from "./component/loadpage/logo-input/App"
import "./index.css"
import Index from "./component/lendsqr_user/Index"
import { ReactQueryDevtools } from "react-query/devtools"
import { QueryClientProvider, QueryClient } from "react-query"
import { UserDetail } from './component/lendsqr_user/details/Userdetails';
import BasicTable from './component/lendsqr_user/table/BasicTable';


const queryClient = new QueryClient() 

const App = () => {
  document.title = "lendsqr"
  
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
    <Router>
      <div>
        
        <Routes>
        <Route path='/user/details/table' element = {<BasicTable />} />
        <Route path='/user/details' element = {<UserDetail />} />
          <Route path='/user' element = {<Index />} />
          <Route path='/' element = {<LoadPage />} />
        </Routes>
       
      </div>
    </Router>
    
    <ReactQueryDevtools  />
    </QueryClientProvider>
  )
}

export default App