const Problems = (props) => {
    return (
        <div >
            <span className=" text-xs font-semibold">{props.num}</span> <span className="text-xs text-slate-400">{props.num == 1 ? "problem" : "problems"}</span>
        </div>
    )
}

export default Problems