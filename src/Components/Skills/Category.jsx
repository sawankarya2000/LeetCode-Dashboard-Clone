import React, { useContext, useState } from "react";
import Skill from "./Skill";
import {categoryContext} from "./CategoryContext"

const Category = () => {
    const data = useContext(categoryContext)
    
    const findCategory = () => {
        const categories = [];
        for(const [key,value] of Object.entries(data)){
                categories.push({
                    lang : key,
                    count : value,
            })
        }
        return categories
    }

    const [category,setCategory] = useState(findCategory())

    console.log(category)
    return(
        <div>
            <div>
                <ul>Advanced</ul>
                <div className="advanced-tags">
                    <Skill text='Dynamic Programming' count={8} />
                </div>
            </div>
        </div>
    )
}

export default Category