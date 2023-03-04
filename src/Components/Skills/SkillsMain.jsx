import React from "react";
import Category from "./Category";
import { categoryContext } from "./CategoryContext";
import Data from "../../Data/Data";

const SkillsMain = () => {
    const data = Data.data.problems.category;
    console.log(data)
    return(
        <categoryContext.Provider value={data}>
          <div>
            <Category />
          </div>
        </categoryContext.Provider>
    )
}

export default SkillsMain