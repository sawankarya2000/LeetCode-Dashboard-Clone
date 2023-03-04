import React from "react";
import Stats from "./Stats";
import Eye from "../../Icons/Eye.svg"
import TickBox from "../../Icons/TickBox.svg"
import Comment from "../../Icons/Comment.svg"
import Star from "../../Icons/Favourite.svg"
import Divider from "../../Utils/Divider";
import Tag from "../../Utils/Tag";

const CommunityStats = () => {
    return (
        <div className="community-stats">
        <p className="font-semibold">Community Stats</p>
        <Stats  
        name = "Views" 
        count = {4}
        increment = {4}
        icon = {Eye}
        />
        <Stats  
        name = "Solution" 
        count = {1}
        increment = {1}
        icon = {TickBox}
        />
        <Stats  
        name = "Discuss" 
        count = {0}
        increment = {0}
        icon = {Comment}
        />
        <Stats  
        name = "Reputation" 
        count = {0}
        increment = {0}
        icon = {Star}
        />
        
        </div>
    )
}

export default CommunityStats