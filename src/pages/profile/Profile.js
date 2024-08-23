import { Link } from "react-router-dom";
import DisplayObject from "../../components/comman/objectDisplay/Displayobj"
import "./profile.css"
const ProfileObj = {
  header: "Welcome to my Profile",
  PersonalDetails: {
    name: "Sevaram",
    age: 25,
    gender: "male",
    occupation: "Software Engineer",
  },

  Education: {
    degree: "B.tech",
    collgae: "bhawani",
    year: 2018,
    universcity: "rajasthan",
  },

  contact: {
    email: "sevaram@gmail.com",
    phone: "1234567890",
    address: "123, main street, USA",
  },

  interset: ["reading", "burger", "books"],
//   Interset:{
//     hobbies: ["reading", "swimming", "coding"],
//     favoriteFood: ["pizza", "burger", "fries"],
// },
};



const Profile = () => {
  return (
    <div className="profile">
      <h1>{ProfileObj.header}</h1>
      <div className="Profile_cotainer">
      <DisplayObject title="Personal_Details" objectData={ProfileObj.PersonalDetails}/>
      <DisplayObject title="Education_Details" objectData={ProfileObj.Education}/>
      <DisplayObject title="Contact_Details" objectData={ProfileObj.contact}/>
     
      
      
        <div className="Display_child_interset">
            <h3>
            interset

            </h3>
            <ul>
            {
                ProfileObj.interset.map((ele)=>{
                    return(
                        <div>
                            <li>{ele}</li>
                     
                        </div>
                    )
                }
                
            )
        }
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
