import "./card2.css"
import { personal, education, social, guarantor, noname } from "../../../asidebar/dashboard/dashdetails"


const Card2 = () => {
  
    return (
    <div className="card2__container">
        <div className="card2__container--personal">
            <h2>Personal Information</h2>
            
            <div className="card2__container--personal-details">
            {
                personal.map(item => <div className="card2__container--personal-detail" key={item.name}> <p>{item.name}</p><p>{item.item}</p> </div>)
            }
            </div>
            
        </div>

        <div className="card2__container--personal">
            <h2>Education and Employment</h2>
            
            <div className="card2__container--personal-details">
            {
                education.map(item => <div className="card2__container--personal-detail" key={item.name}> <p>{item.name}</p><p>{item.item}</p> </div>)
            }
            </div>
            
        </div>

        <div className="card2__container--personal">
            <h2>Socials</h2>
            
            <div className="card2__container--personal-details">
            {
                social.map(item => <div className="card2__container--personal-detail" key={item.name}> <p>{item.name}</p><p>{item.item}</p> </div>)
            }
            </div>
            
        </div>

        <div className="card2__container--personal">
            <h2>Guarantor</h2>
            
            <div className="card2__container--personal-details">
            {
                guarantor.map(item => <div className="card2__container--personal-detail" key={item.name}> <p>{item.name}</p><p>{item.item}</p> </div>)
            }
            </div>
            
        </div>

        <div className="card2__container--personal">
            <h2/>
            
            <div className="card2__container--personal-details">
            {
                noname.map(item => <div className="card2__container--personal-detail" key={item.name}> <p>{item.name}</p><p>{item.item}</p> </div>)
            }
            </div>
            
        </div>
    </div>
  )
}

export default Card2