import "./card1.css"
import avatar from "../../../../asset/avatar.jpg"
import starfill from "../../../../asset/fillstar.jpg"
import star from "../../../../asset/star1.jpg"
import { card1 } from "../../../asidebar/dashboard/dashdetails"



export const Card1 = () => {
return(
    
    
    <div className="card1__container">
        <div className="card1__container-contact">
            <div className="card1__container-contact--icon">
                <img src={avatar} alt="contact icon"/>
                <div className="contact__name">
                    <h2>Grace Effiom</h2>
                    <p>LSQFf587G90</p>
                </div>
            </div>

            <div className="card1__container-rate">
                <p>User's Tier</p>
                <div className="rate">
                    <img src={starfill} alt="rate star" />
                    <img src={star} alt="rate star" />
                    <img src={star} alt="rate star" />
                </div>
            </div>
            <div className="contact__name">
                    <h2 className="strike">N200,000.00</h2>
                    <p>9912345678/Providus Bank</p>
            </div>
        </div>


        <div className="contact__section">
            {card1.map(item =>
            
            <div  key={item.name}>
                <p className={ `contact__section ${item.clas}`}>{item.name}</p>
                <span className={`contact__section-icon ${item.clas}`}>{item.icon}</span>
            </div>
                
            )}
        </div>
        
    </div>
    
)
}
