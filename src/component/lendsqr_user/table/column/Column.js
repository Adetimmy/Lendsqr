import { format } from "date-fns"
import {MdFilterList} from "react-icons/md"

export const COLUMNS = [
    
    {
        Header: () => ( <div className="header">organization <MdFilterList /></div>),
        accessor: "orgName",
        Filter: ({column: {filterValue, setFilter}}) => (
            <input
            value={filterValue || ""}
            onChange = { e => {
                setFilter(e.target.value)
            }}
            
            />
        )
    },
    {
        Header: () => ( <div className="header">username <MdFilterList /></div>),
        accessor: "userName",

    },
    {
        Header:() => ( <div className="header">email <MdFilterList /></div>),
        accessor: "email",
    },
    {
        Header:() => ( <div className="header">phone Number <MdFilterList /></div>),
        accessor: "phoneNumber",
    },
    {
        Header:() => ( <div className="header">date joined <MdFilterList /></div>),
        accessor: "createdAt",
        Cell: ({value}) =>{ return format(new Date(value), 'dd/MM/yyyy')},
    },
    {
        Header:() => ( <div className="header">status <MdFilterList /></div>),
        accessor: "status",
        Cell: ({value}) => { return  <button className={value}>{value}</button>},
    },
    {
        Header:"",
        accessor: "icon",
        Cell: ({value}) => { return  <div className="dots">{value}</div>},
    },
]