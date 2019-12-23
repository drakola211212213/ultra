import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './style.css';


const Profile = () => {

  const [api, profileData] = useState([])
  useEffect(() => {
    axios.get('../data.js').then(res => {profileData(res.data.profile)})
  },[])  

  const apiList = api.map((apiItem) => {
    return (
      <div className="bar" key={apiItem.item}>
      <span className="title">{apiItem.course}</span>
      <span className="perc">{apiItem.precent}</span>
      <div className="parent">
          <span className={apiItem.class}></span>
      </div>
  </div>
    )
  })
    return (
      <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Mohamed Ahmed
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            1/7/1997
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Zagazig
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            4444 5555 6666
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            blackfighter@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.facebook.com/eladhammm</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    {apiList}
                </div>
                
            </div>
        </div>
    );
  
 
}

export default Profile;
