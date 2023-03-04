import Tag from "../../Utils/Tag"
import Problems from "./Problems"
import Data from "../../Data/Data"
import { useState } from "react"

const Language = () => {
    //Access problems data
    const problems = Data.data.problems.language

    //Store all problems over value 1 in an array
    const problemArray = []
    for(const [key,value] of Object.entries(problems)){
        if(value > 0){
            problemArray.push({
                lang : key,
                count : value,
            })
        }
    }
    const [problemTags , setProblemTags] = useState(problemArray)

    //Map over all problems
    const allProblems = problemTags.map((item) => {
        return (
          <div className="flex justify-between my-2">
            <Tag>{item.lang}</Tag>
            <Problems num={item.count} />
          </div> 
        )
    })
    return (
        <div>
            <div>
                <div>
                    <p className=" font-semibold">Languages</p>
                </div>
                <div className="all-tags my-4">
                    {allProblems}
                </div>
            </div>
        </div>
    )
}

export default Language