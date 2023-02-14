import React, { useEffect, useState } from 'react';
import { useMemo } from "react"
import {GrFormPrevious, GrFormNext} from "react-icons/gr"
import { useTable, usePagination } from "react-table"
// import { useFetchUser } from "../../hook/useFetch"
// import Loading from "../../loadpage/logo-input/Loading"
import { COLUMNS } from "../table/column/Column"
// import DATA from "./DATA.json"
import { status, icon } from '../asidebar/dashboard/dashdetails';
import "../table/table.css"
import axios from 'axios';
// import Filter from '../asidebar/dashboard/FilterFom/Filter';
import "./users_chat.css"
import { memo } from "react"
import Filter from '../asidebar/dashboard/FilterFom/Filter';


const UsersChat = () => {

const [toggleFilter, setToggleFilter] =   useState(false)  
const [position, setPosition] = useState(0)

useEffect( () => {
  const header = document.querySelectorAll(".header")
  header.forEach(head => {
    head.addEventListener("click", () => {
      const rec = head.getBoundingClientRect()
      const cli = head.clientWidth
      console.log(cli)
      setPosition(rec.left.toFixed() - cli)
    } )
    
  },[position])
})

function handleFilter(event) {
   setToggleFilter(prev => !prev)
   
    }
 

 const [data, setData] = useState([]);
const [showForm, setShowForm] = useState(false);
console.log(showForm)
useEffect( () => {
  const fetchData = async () => {
    const result = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    const mergedData = result.data.map((item, index) => ({
      ...item,
      status:status[index % status.length], 
      icon: icon[index % icon.length]
   
    }))
    setData(mergedData)
  }
  fetchData()
}, [])
  const columns = useMemo( () => COLUMNS, []);
  // const fetched = useMemo( () => data, []);
//   const pageSize = 10;
//   const totalPages = Math.ceil(data.length / pageSize);
 
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions, 
    gotoPage,
    setPageSize,
    state,
    prepareRow
  } = useTable({
    columns,
    data,
    // initialState: {
    //   pageIndex: currentPage - 1,
    // },
    // manualPagination:true,
    // pageCount: totalPages,
  }, usePagination)

const { pageIndex, pageSize } = state

    return (
<>

    <div className="user__chat--container">
        <table {...getTableProps()}>
          <thead>
          {
              headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}> 
                      {
                         headerGroup.headers.map((column) => (
                              <th {...column.getHeaderProps()} onClick={() => setShowForm(!showForm)}>{column.render("Header")}</th>
                         )) 
                      }
                      
                  </tr>

              ))
          }

          </thead>
          {showForm && <Filter classy={position}/>}
          <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                  prepareRow(row)
                  return(
                      <tr {...row.getRowProps()}>
                          {row.cells.map((cell, i) => {
                           
                              return (<td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                              
                                    )
                        //    {showForm && (<Filter />)}
                          })}
                             
                      </tr> 
                  )
              })
              }
              
          </tbody>
      </table>
    </div>
    <div className="pagination">
      <div>

        <span>showing <select style={{border:"1px solid var(--secondary-color)", padding:"6px 3px", borderRadius:"4px"}} Value={pageSize}
          onChange={
            (e) =>  setPageSize(Number(e.target.value)) }
          >
            {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pageSize) => <option key={pageSize} value={pageSize}>{pageSize}</option>)}
            </select> Out of 100</span>
      </div>
        
        <div>
        <button className="pagination-btn"  onClick={() => previousPage()} disabled={!canPreviousPage}>
            <GrFormPrevious/>
        </button>
        {/* {Array.from({length: totalPages}, (_, i) => i + 1).map(pageIndex => (

          <button 
            key={pageIndex} 
            onClick={() => setCurrentPage(pageIndex)}
            disabled={currentPage === pageIndex}
          >
            {pageIndex}
          </button>
        ))} */}

        {pageOptions.map(item => <button key={item}>{item}</button>)}
        <button className="pagination-btn" onClick={() => nextPage()} disabled={!canNextPage}>
            <GrFormNext />
        </button>
        </div>
        
      </div> 
    </>
  )
}

export default memo(UsersChat)