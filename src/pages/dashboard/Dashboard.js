import { Link } from "react-router-dom";
import "./Dashboard.css"
import LinkList from "../../components/comman/linkslist/Linklist";

const obj= {
    header: "Welcome to the Dashborad",
    navigaiton: [
     
      {
        key: "profile",
        lable: "Profile",
      },
    
      {
        key: "contact_us",
        lable: "Contact",
      },
      {
        key: "help_us",
        lable: "Help",
      },{
        key:"about_us",
        lable:"About_us"
      }
    ],
  };
  
const Dashboard=()=>{
    return(
        <div className="dashboard">
            <h3>{obj.header}</h3>
         
          <LinkList linkarr={obj.navigaiton} containerClass={'btn_container'} linkClass={'link'}/>
        </div>
    )
}
export default Dashboard