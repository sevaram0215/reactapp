import { Route, Routes } from "react-router-dom";
import Dashboard from "../../../pages/dashboard/Dashboard";
import AboutUs from "../../../pages/about_us/AboutUs";
import ContactUs from "../../../pages/contact_us/ContactUs";
import Profile from "../../../pages/profile/Profile";
import HelpUs from "../../../pages/help_us/Help";

function MainContant(){
    return(
        <main className="main">
            <Routes>
             <Route path="/"element={<Dashboard/>}/>
             <Route path="/dashboard"element={<Dashboard/>}/>
             <Route path="/about_us"element={<AboutUs/>}/>
             <Route path="/contact_us"element={<ContactUs/>}/>
             <Route path="/profile"element={<Profile/>}/>
             <Route path="/help_us"element={<HelpUs/>}/>


            </Routes>
            </main>
    )
}
export default MainContant