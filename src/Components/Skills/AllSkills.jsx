import { useState } from "react"
import Skill from "./Skill"

const AllSkills = ({topics}) => {

    const [showMore, setShowMore] = useState(false)

    const skills = topics.map(topic => {
        //Skills in a group
        return(
            <Skill text={topic.topic} count = {topic.count} />
        )
    })

    const [skillOne,skillTwo, ...restSkills] = skills

    return(
        <div className="advanced-tags flex flex-wrap gap-3">
            {skillOne}
            {skillTwo}
            {showMore ? restSkills : null}
            <button className="w-full text-xs text-slate-500" onClick={() => setShowMore(lastState => !lastState)}>{showMore ? "Show Less" : "Show More" } </button>
        </div>
    )
}

export default AllSkills