import {FaUserFriends, FaUsers, FaRegHandshake, FaHandHoldingUsd, FaUserCheck, FaUserTimes, FaBriefcase, FaPiggyBank, FaCoins, FaUserCog, FaScroll, FaRegChartBar, FaClipboardList} from "react-icons/fa"
import {CiBag1, CiBank} from "react-icons/ci"
import {GiCartwheel, GiShurikenAperture} from "react-icons/gi"
import {IoMdOptions} from "react-icons/io"
import {RxDotsVertical} from "react-icons/rx"
import icon1 from "../../../asset/icon-3.jpg"
import icon2 from "../../../asset/icon-2.jpg"
import icon3 from "../../../asset/icon.jpg"
import icon4 from "../../../asset/icon-1.jpg"
const customer = [
    {
        icon: <FaUserFriends />,
        name : "Users",
        class : "customer__list active"
    },
    {
        icon: <FaUsers />,
        name : "Guarantors",
        class : "customer__list"   
    },
    {
        icon: <CiBag1 />,
        name : "Loans",
        class : "customer__list"   
    },
    {
        icon: <FaRegHandshake />,
        name : "Decision Models",
        class : "customer__list"   
    },
    {
        icon: <FaPiggyBank />,
        name : "Savings",
        class : "customer__list"   
    },
    {
        icon: <FaHandHoldingUsd />,
        name : "Loan Requests" ,
        class : "customer__list"  
    },
    {
        icon: <FaUserCheck />,
        name : "Whitelist",
        class : "customer__list"   
    },
    {
        icon: <FaUserTimes />,
        name : "Karma",
        class : "customer__list"   
    },


]

const business = [
    {
        icon: <FaBriefcase />,
        name : "Organization",
         class : "customer__list"     
    },
    {
        icon: <FaHandHoldingUsd />,
        name : "Loan Products",
         class : "customer__list"     
    },
    {
        icon: <CiBank />,
        name : "Saving Products",
         class : "customer__list"     
    },
    {
        icon: <FaCoins />,
        name : "Fees and Charges",
         class : "customer__list"     
    },
    {
        icon: <FaHandHoldingUsd />,
        name : "Transactions",
         class : "customer__list"     
    },
    {
        icon: <GiShurikenAperture />,
        name : "Services",
         class : "customer__list"     
    },
    {
        icon: <FaUserCog />,
        name : "Service Account",
         class : "customer__list"     
    },
    {
        icon: <FaScroll />,
        name : "Settlement",
         class : "customer__list"     
    },
    {
        icon: <FaRegChartBar />,
        name : "Report",
         class : "customer__list"     
    }
]

const settings = [
    {
        icon: <IoMdOptions />,
        name : "Preferences",
         class : "customer__list"     
    },
    {
        icon: <FaScroll />,
        name : "Fees and Pricing",
         class : "customer__list"     
    },
    {
        icon: <FaClipboardList />,
        name : "Audit Logs",
         class : "customer__list"     
    },
    {
        icon: <GiCartwheel />,
        name : "Systems Messages",
        class : "customer__list"     
    },
    
]

const card = [
    {
        icon: icon1,
        name : "Users",
        activeNo: "2,453",
        clas : "card"
    },
    {
        icon: icon2,
        name : " Active Users",
        activeNo: "2,453",
        clas : "card"
    },
    {
        icon: icon3,
        name : "Users with Loans",
        activeNo: "12,453",
        clas : "card"
    },
    {
        icon: icon4,
        name : "Users with Savings",
        activeNo: "102,453",
        clas : "card"
    }
]
const status = ["Inactive","Pending","Blacklisted","Pending","Active","Active","Blacklisted","Inactive","Inactive"]

const icon = [<RxDotsVertical />, <RxDotsVertical />, <RxDotsVertical />, <RxDotsVertical />, <RxDotsVertical />, <RxDotsVertical />]
const table_head = [
    {
        id: 1,
        name: "organization",
        icon: <RxDotsVertical />
    },
    {
        id: 2,
        name: "username",
        icon: <RxDotsVertical />
    },
    {
        id: 3,
        name: "email",
        icon: <RxDotsVertical />
    },
    {
        id: 4,
        name: "phone number",
        icon: <RxDotsVertical />
    },
    {
        id: 5,
        name: "date joined",
        icon: <RxDotsVertical />
    },
    {
        id: 6,
        name: "status",
        icon: <RxDotsVertical />
    }
    
]
const card1=[
    {
        name:"General Details",
        clas:"active",
        icon: <RxDotsVertical />,

        
    },
    {
        name:"Documents",
        icon: <RxDotsVertical />        
    },
    {
        name:"Bank Details",
        icon: <RxDotsVertical />        
    },
    {
        name:"Loans",
        icon: <RxDotsVertical />        
    },
    {
        name:"Saving",
        icon: <RxDotsVertical />        
    },
    {
        name:"App and System",
        icon: <RxDotsVertical />        
    }

]

const personal =[
    {
    name:"full name",
    item : "Grace Effiom"
},
{
    name:"phone number",
    item : "07060780922"
},
{
    name:"email address",
    item : "grace@gmail.com"
},
{
    name:"bvn",
    item : "07060780922"
},
{
    name:"gender",
    item : "Female"
},
{
    name:"marital status",
    item : "Single"
},
{
    name:"children",
    item : "None"
},
{
    name:"type of residence",
    item : "Parent's Apartment"
},
]

const education = [
    {
        name :"level of education",
        item : "B.Sc"
    },
    {
        name :"employment status",
        item : "Employed"
    },
    {
        name :"sector of employment",
        item : "FinTech"
    },
    {
        name :"duration of employment",
        item : "2 years"
    },
    {
        name :"office mail",
        item : "grace@lendsqr.com"
    },
    {
        name :"monthly income",
        item : "N200,000.00 - N400,000.00"
    },
    {
        name :"loan repayment",
        item : "40,000"
    },
]
 
const social = [
    {
        name :"twitter",
        item : "@grace_effiom"
    },
    {
        name :"facebook",
        item : "Grace Effiom"
    },
    {
        name :"instagram",
        item : "@grace_effiom"
    }
]

const guarantor = [
    {
        name :"full name",
        item : "Debby Ogana"
    },
    {
        name :"phone number",
        item : "07060780922"
    },
    {
        name :"email",
        item : "debby@gmail.com"
    },
    {
        name :"relationship",
        item : "Sister"
    }
    
]

const noname = [
    {
        name :"full name",
        item : "Debby Ogana"
    },
    {
        name :"phone number",
        item : "07060780922"
    },
    {
        name :"email",
        item : "debby@gmail.com"
    },
    {
        name :"relationship",
        item : "Sister"
    }
    
]




export {customer, business, settings, card,status, table_head, card1, personal, education, social, guarantor, noname, icon}
  
