import React, { useContext, useState } from "react";
import Skill from "./Skill";
import {categoryContext} from "./CategoryContext"
import AllSkills from "./AllSkills";

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


    const allCategory = category.map(item => {
        const topics = [];  //topics array
        for(const [key,value] of Object.entries(item.count)){
            topics.push({
                topic : key,
                count : value,
            })
        }


        //Group of skills
        return (
            <div className="flex flex-col gap-2 my-4 break-words">
                <ul>
                    <li className="text-sm list list-disc list-inside marker:text-green-700">{item.lang}</li>
                </ul>
                <AllSkills topics = {topics}/>
            </div>
        )
    })

    return(
        <div>
            <div className="my-2">
                {allCategory}
            </div>
        </div>
    )
}

export default Category