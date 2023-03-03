import React,{useEffect, useState} from "react";
import Data from "../../Data/Data";

const ProfileName = () =>{
    const [profileData, setProfileData] = useState({
        name : Data.data.profileName,
        id : Data.data.profileId
    })
    
    return (
        <div>
            <div className="font-semibold">
                {profileData.name}
            </div>
            <div className=" text-xs text-slate-400">
                {profileData.id}
            </div>
        </div>
    )
}

export default ProfileName