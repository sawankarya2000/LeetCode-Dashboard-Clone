import EditButton from "../../Utils/editButton"
import ProfileImage from "./ProfileImage"
import ProfileName from "./ProfileName"
import ProfileRank from "./ProfileRank"
import Divider from "../../Utils/Divider"

const ProfileData = () => {
    return(
        <div className=" space-y-4 w-full">
         <div className=" flex flex-row flex-wrap space-x-4  ">
            <div className="profile-left">
                 <ProfileImage />
            </div>
            <div className="profile-right space-y-2">
                 <ProfileName />
                <ProfileRank />
            </div>   
         </div>
         <div >
                <EditButton>Edit Profile</EditButton>
        </div>
        <Divider></Divider>
        </div>
    )
}

export default ProfileData