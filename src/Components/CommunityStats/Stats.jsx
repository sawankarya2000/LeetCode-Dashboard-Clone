import React, { useState } from "react"
import Eye from '../../Icons/Eye.svg'
const Stats = (props) => {
    const Stat_Name = props.name;
    const [count, setCount] = useState({
        totalCount : props.count,
        inc : props.increment,
    })

    return (
        <div className=" my-2">
            <div className="flex flex-col gap-1.5">
                
                <div className="flex place-self-start space-x-2.5">
                    <div className=" self-center">
                        <img src = {props.icon} alt="icon" />
                    </div>
                    <div className="flex gap-2 font-light text-base text-slate-600">
                     <div>
                        {Stat_Name}
                     </div>
                     <div className=" font-normal">
                        {count.totalCount}
                     </div>
                    </div>
                </div>
                <div className="flex ml-7 gap-2 text-xs text-slate-400">
                        <div>
                            Last week
                        </div>
                        <div>
                            +{count.inc}
                        </div>
                     </div>
            </div>
        </div>
    )
}

export default Stats