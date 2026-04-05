import React from "react";
import RightCard from "./RightCard"

const RightContent = (props)=>{
    return (
        <div id="right" className=" h-full w-3/4 p-4 flex flex-nowrap gap-5 overflow-x-auto">
            {props.user.map((elem,idx)=>{
                return <RightCard id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
            })}
        </div>
    )
}

export default RightContent