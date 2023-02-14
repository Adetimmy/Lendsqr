import "./filter.css"
const Filter = ({classy}) => {


  return (
    <div className="form" style={{right:`${classy}px`}}>
        <label htmlFor="org"> Organization
            <select id="org">
                <option defaultValue="select" >Select</option>
            </select>
        </label>

        <label htmlFor="username"> Username
            <input id="username"
            type="text"
            placeholder="User"
            />
        </label>

        <label htmlFor="email"> Email
            <input id="email"
            type="email"
            placeholder="Email"
            />
        </label>

        <label htmlFor="date" className="date"> Date
            <input id="date"
            type="date"
            
            />
        </label>
        <label htmlFor="tel"> Phone Number
            <input id="tel"
            type="tel"
            placeholder="Phone Number"
            />
        </label>

        <label htmlFor="status"> Status
            <select id="status">
                <option defaultValue="select" >Select</option>
            </select>
        </label>

        <div className="form__btn">

                <button className="form__btn-reset">Reset</button>
                <button className="form__btn-filter">Filter</button>
        </div>
    </div>
  )
}

export default Filter