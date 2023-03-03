import React,{useState} from "react"
import Data from "../../Data/Data"

const ProfileRank = () => {
    const [rank, setRank] = useState(Data.data.rank)

    return (
        <div className=" text-md">
            <span className=" text-slate-600">Rank</span> <span className=" text-slate-600 font-semibold">{rank}</span>
        </div>
    )
}

export default ProfileRank
