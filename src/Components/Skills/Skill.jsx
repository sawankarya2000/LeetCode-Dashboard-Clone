import Tag from "../../Utils/Tag"

const Skill = (props) => {
    return (
        <div>
            <div>
                <div className="flex justify-start flex-wrap content-center gap-1">
                    <Tag className="cursor-pointer">{props.text}</Tag> <span className=" self-center text-xs text-slate-500">x{props.count}</span>
                </div>
            </div>
        </div>
    )
}

export default Skill