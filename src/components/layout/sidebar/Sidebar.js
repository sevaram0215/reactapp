import { Link } from "react-router-dom";
import "./sidebar.css";
import LinkList from "../../comman/linkslist/Linklist";
const sidebar_data = {
  header: "Goverment of Rajasthan",
  navigaiton: [
    {
      key: "dashboard",
      lable: "Dashbord",
    },
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

function Sidebar() {
  const handleBtnClick = (key, lable) => {
    console.log(key);
    window.location.href=key;
  };
  return (
    <aside className="aside">
      <h2 className="header">{sidebar_data.header}</h2>
      {/* <div className="Aside_btn_container">
        {sidebar_data.navigaiton.map((e) => {
          return (
            <Link to={e.key} className="button">
   {e.lable}
            </Link>
          );
        })}
      </div> */}
      <LinkList linkarr={sidebar_data.navigaiton} containerClass={'Aside_btn_container'} linkClass="button" />

    </aside>
  );
}
export default Sidebar;
