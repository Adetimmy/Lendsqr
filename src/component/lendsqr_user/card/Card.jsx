import { card } from "../asidebar/dashboard/dashdetails"
import "./card.css"


const Card = () => {

  return (
    <div className='card__container'>
      
      <div className="card__container-user--tag">
        <h1>Users</h1>
      </div>

      <div className="card__container--pad">
        {card.map((item, index) => {
            
            return(
              <div key={item.name + index} className={item.clas}>
                <img src={item.icon} alt="user icon" />
                <p className="usercard__user">{item.name}</p>
                <p className="usercard__active">{item.activeNo}</p>
              </div>
            )})}
      </div>
      
      
    </div>
  )
}

export default Card