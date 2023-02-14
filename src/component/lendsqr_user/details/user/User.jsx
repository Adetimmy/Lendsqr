import "./user.css"
import arrow from "../../../asset/arrow.jpg"
import { Card1 } from "./card1/Card1"
import Card2 from "./card2/Card2"

export function User() {

    return(
        <div className="user__container">
            <section className="user__container-nav">
                <div className="user__container-arrow">
                    <img src={arrow} alt="back arrow"/>
                    <p>Back to Users</p>
                </div>

                <div className="user__container-detail" >
                    <h2>User Details</h2>
                    <div className="user__container-btn">
                        <button>Blacklist user</button>
                        <button>Activate user</button>
                    </div>
                </div>
                <Card1 />
                <Card2 />
            </section>
        </div>
    )
}